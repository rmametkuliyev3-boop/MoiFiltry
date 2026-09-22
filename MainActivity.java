package kz.moifiltry.app;

import android.app.Activity;
import android.app.AlertDialog;
import android.os.Bundle;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.content.Intent;
import android.net.Uri;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;

public class MainActivity extends Activity {
    private WebView webView;
    private String pendingBackup;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        webView = new WebView(this);
        webView.setWebViewClient(new WebViewClient());
        webView.getSettings().setJavaScriptEnabled(true);
        webView.getSettings().setDomStorageEnabled(true);
        webView.addJavascriptInterface(new AndroidBridge(), "Android");

        webView.loadUrl("file:///android_asset/index.html");
        setContentView(webView);
    }

    private class AndroidBridge {
        @JavascriptInterface
        public void backup(String json) {
            pendingBackup = json;
            Intent intent = new Intent(Intent.ACTION_CREATE_DOCUMENT);
            intent.setType("application/json");
            intent.putExtra(Intent.EXTRA_TITLE, "MoiFiltry_backup.json");
            startActivityForResult(intent, 100);
        }

        @JavascriptInterface
        public void restore() {
            Intent intent = new Intent(Intent.ACTION_OPEN_DOCUMENT);
            intent.setType("application/json");
            intent.addCategory(Intent.CATEGORY_OPENABLE);
            startActivityForResult(intent, 101);
        }

        @JavascriptInterface
        public void call(String phone) {
            String digits = phone.replaceAll("[^0-9]", "");
            if (!digits.isEmpty()) {
                Intent intent = new Intent(Intent.ACTION_DIAL, Uri.parse("tel:" + digits));
                startActivity(intent);
            }
        }

        @JavascriptInterface
        public void whatsapp(String phone) {
            String digits = phone.replaceAll("[^0-9]", "");
            if (!digits.isEmpty()) {
                startActivity(new Intent(Intent.ACTION_VIEW,
                        Uri.parse("https://wa.me/" + digits)));
            }
        }

        @JavascriptInterface
        public void openMapChooser(String address) {
            final String safe = address == null ? "" : address.trim();
            if (safe.isEmpty()) return;
            final String[] names = {"2ГИС", "Яндекс Карты"};
            new AlertDialog.Builder(MainActivity.this)
                    .setTitle("Открыть адрес в")
                    .setItems(names, (dialog, which) -> openMap(which == 0 ? "2gis" : "yandex", safe))
                    .setNegativeButton("Отмена", null)
                    .show();
        }

        private void openMap(String provider, String address) {
            try {
                String encoded = Uri.encode(address);
                String url;
                String packageName;
                if ("2gis".equals(provider)) {
                    url = "https://2gis.kz/almaty/search/" + encoded;
                    packageName = "ru.dublgis.dgismobile";
                } else {
                    url = "https://yandex.kz/maps/?text=" + encoded;
                    packageName = "ru.yandex.yandexmaps";
                }
                Intent appIntent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
                appIntent.setPackage(packageName);
                try {
                    startActivity(appIntent);
                } catch (Exception notInstalled) {
                    startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse(url)));
                }
            } catch (Exception e) {
                // Leave the user in the client card if neither app nor browser can open.
            }
        }
    }

    @Override
    public void onBackPressed() {
        if (webView != null) {
            webView.evaluateJavascript("typeof handleAndroidBack==='function' ? handleAndroidBack() : 'exit'", value -> {
                if ("\"exit\"".equals(value)) finish();
            });
        } else {
            super.onBackPressed();
        }
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (resultCode != RESULT_OK || data == null || data.getData() == null) return;

        try {
            if (requestCode == 100) {
                OutputStream out = getContentResolver().openOutputStream(data.getData());
                if (out != null) {
                    out.write(pendingBackup.getBytes("UTF-8"));
                    out.close();
                }
                webView.evaluateJavascript(
                        "alert('Резервная копия сохранена');", null);
            } else if (requestCode == 101) {
                InputStream in = getContentResolver().openInputStream(data.getData());
                BufferedReader reader = new BufferedReader(new InputStreamReader(in, "UTF-8"));
                StringBuilder json = new StringBuilder();
                String line;
                while ((line = reader.readLine()) != null) json.append(line);
                reader.close();

                String safeJson = org.json.JSONObject.quote(json.toString());
                webView.evaluateJavascript("restoreBackup(" + safeJson + ")", null);
            }
        } catch (Exception e) {
            webView.evaluateJavascript(
                    "alert('Не удалось выполнить операцию с резервной копией');", null);
        }
    }
}
