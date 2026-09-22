<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>Мои Фильтры</title>
<style>
*{box-sizing:border-box}body{padding-bottom:82px;margin:0;font-family:Arial,sans-serif;background:#f3f6fa;color:#182230}
header{background:#1565c0;color:#fff;padding:12px 16px;position:sticky;top:0;z-index:10;box-shadow:0 2px 8px #0002}
h1{font-size:18px;margin:0}.topbar{display:flex;align-items:center;gap:8px}.todayTop{font-size:15px;font-weight:700;flex:1;text-align:left}.searchBtn,.menuBtn{width:40px;height:40px;padding:0;margin:0;border-radius:10px;background:#fff;color:#1565c0;line-height:1}.searchBtn{font-size:20px}.menuBtn{font-size:19px}.nav{display:none;position:absolute;right:12px;top:58px;background:#fff;border-radius:12px;padding:7px;box-shadow:0 5px 20px #0003;min-width:205px}.nav.open{display:block}.nav button{display:block;width:100%;text-align:left;background:#fff;color:#1565c0;border:0;border-radius:9px;padding:11px 12px;font-weight:700;white-space:nowrap;margin:0}
main{max-width:760px;margin:auto;padding:12px 12px 100px}.card{background:#fff;border-radius:15px;padding:14px;margin:10px 0;box-shadow:0 2px 10px #0000000d}.row{display:flex;justify-content:space-between;align-items:center;gap:8px}.muted{font-size:13px;color:#697586}.stat{font-size:26px;font-weight:800;color:#1565c0}.client{cursor:pointer}.client b{font-size:17px}.pill{display:inline-block;background:#e7f0ff;color:#1655a0;border-radius:20px;padding:4px 8px;margin:3px 2px;font-size:12px}
button{border:0;border-radius:10px;padding:11px 13px;background:#1565c0;color:#fff;font-weight:700;margin:3px}.secondary{background:#e8eef7;color:#164d8d}.danger{background:#c62828}.small{padding:8px 10px;font-size:13px}
input,select,textarea{width:100%;padding:11px;margin:5px 0 11px;border:1px solid #ccd5df;border-radius:9px;background:#fff;font-size:15px}label{font-size:13px;font-weight:700;color:#536171}.grid{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.fab{position:fixed;right:20px;bottom:22px;width:44px;height:44px;border-radius:50%;font-size:24px;line-height:1;background:#1565c0;color:#fff;box-shadow:0 5px 18px #0004;z-index:20;margin:0}.circleRow{display:flex;justify-content:center;align-items:center;gap:16px;margin:0}.homeCounters{position:fixed;left:50%;bottom:18px;transform:translateX(-50%);z-index:19;display:block}.taskCircle{width:48px;height:48px;min-width:48px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#1565c0;color:#fff;box-shadow:0 2px 8px #0003;cursor:pointer}.taskCircle b{font-size:22px;color:#fff}.taskCircle.overdue{background:#c62828}.taskCircle.overdue b{color:#fff}.dateButton{width:100%;text-align:center;background:#fff;color:#1565c0;border:1px solid #dbe4ee;border-radius:12px;padding:12px;font-weight:800;margin:0 0 10px}.sectionTitle{font-size:18px;font-weight:800;margin:4px 0 10px}.phoneRow{display:flex;gap:7px;align-items:center}.phoneRow input{flex:1}.phoneInputWrap{display:flex;align-items:center;gap:7px;flex:1;width:100%;border:1px solid #ccd5df;border-radius:9px;background:#fff;padding-left:11px}.phoneInputWrap span{font-size:15px;font-weight:700;color:#536171;white-space:nowrap}.phoneInputWrap input{border:0;margin:0;padding:11px 11px 11px 0;outline:none;min-width:0}.contactBlock{border:1px solid #dbe4ee;border-radius:12px;background:#fff;padding:10px 10px 9px;margin:5px 0 10px}.contactBlock .contactName{margin:0 0 7px}.contactName input{margin:0}.contactPhoneRow{display:flex;align-items:center;gap:7px}.contactPhoneRow .phoneInputWrap{min-width:0}.contactActions{display:flex;gap:7px;align-items:center}.contactIcon{width:36px;height:36px;min-width:36px;border-radius:50%;padding:0;margin:0;display:flex;align-items:center;justify-content:center;box-shadow:0 3px 10px #0003;cursor:pointer}.contactIcon.callIcon{background:#1976d2}.contactIcon.waIcon{background:#16b864}.contactIcon svg{width:19px;height:19px;display:block}.contactIcon:active{transform:scale(.96)}.plusMini{width:36px;height:36px;border-radius:50%;padding:0;font-size:25px;margin:0}.extraPhone{display:flex;gap:7px;align-items:center;margin-top:8px}.extraPhone input{flex:1}.removeMini{background:#e8eef7;color:#b42318;width:36px;height:36px;border-radius:50%;padding:0;margin:0}
.calendarCard{background:#fff;border-radius:18px;padding:16px;margin:10px 0;box-shadow:0 2px 10px #0000000d}.calendarCard .sectionTitle{margin:0}.calhead{margin:4px 0 12px}.calhead button{width:38px;height:38px;padding:0;margin:0;border-radius:50%;background:#f1f5f9;color:#1565c0;font-size:24px;line-height:1}.week,.calendar{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:6px}.week div{font-size:11px;text-align:center;color:#687385;font-weight:700;padding-bottom:2px}.calendar{row-gap:8px}.day{width:100%;max-width:44px;aspect-ratio:1/1;height:auto;justify-self:center;border:1px solid #dbe4ee;border-radius:50%;padding:0;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-direction:column;background:#fff;color:#182230;line-height:1.05}.day.has{background:#eaf7ef;border-color:#83c99a}.day.today{outline:2px solid #1565c0;outline-offset:1px}.day .dayNum{font-weight:700}.day .count{font-weight:800;color:#16843a;font-size:10px;margin-top:2px}.list div{padding:8px 0;border-bottom:1px solid #eef1f5}.historyDate{display:flex;flex-direction:column;align-items:flex-start;width:100%;text-align:left;background:#fff;color:#182230;border:1px solid #dbe4ee;border-radius:10px;padding:10px 12px;margin:5px 0}.historyDate span:first-child{font-size:16px;font-weight:800}.historyNext{font-size:12px;color:#697586;margin-top:3px}.serviceDateGrid>div{display:flex;flex-direction:column}.serviceDateGrid label{min-height:30px;display:flex;align-items:flex-end;line-height:15px}.editServiceRow{position:relative}.editServiceRow .removeEditRow{width:34px;height:34px;padding:0;margin:0 0 11px;background:#e8eef7;color:#b42318;border-radius:50%;align-self:end}.empty{padding:18px;text-align:center;color:#697586}.search{margin-bottom:4px}

.mainHub{min-height:calc(100vh - 24px);display:flex;flex-direction:column;align-items:center;justify-content:flex-start;padding:34px 18px 40px;background:linear-gradient(180deg,#f7faff 0%,#eef4fb 100%);border-radius:22px}.hubTitle{font-size:28px;font-weight:800;margin:10px 0 6px;color:#182230}.hubSub{font-size:14px;color:#697586;margin-bottom:28px;text-align:center}.hubGrid{width:100%;max-width:520px;display:grid;grid-template-columns:1fr 1fr;gap:16px}.hubTile{border:0;border-radius:24px;background:#fff;color:#182230;padding:22px 12px 20px;margin:0;box-shadow:0 5px 20px #00000012;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:180px;cursor:pointer}.hubTile:active{transform:scale(.98)}.hubIcon{width:72px;height:72px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:14px;box-shadow:0 4px 12px #0002}.hubIcon svg{width:38px;height:38px}.hubTile.filter .hubIcon{background:#e8f1ff}.hubTile.income .hubIcon{background:#e8f8ef}.hubName{font-size:18px;font-weight:800}.hubHint{font-size:12px;color:#697586;margin-top:5px;text-align:center}
.financePage{padding-bottom:30px}.financeHeader{position:sticky;top:0;z-index:9;background:#fff;border-bottom:1px solid #dfe5eb;box-shadow:0 1px 4px #0001;padding:5px 6px}.financeHeaderRow{display:grid;grid-template-columns:40px 1fr 40px;align-items:center;gap:4px;min-height:36px}.financeHeaderTitle{text-align:center;font-size:15px;font-weight:800;color:#182230}.financeMenuBtn,.financeDateBtn{width:36px;height:36px;padding:0;margin:0;border-radius:9px;background:#f3f6fa;color:#1565c0;font-size:20px}.financeDateBtn{font-size:17px}.financeMenu{display:none;position:absolute;left:6px;top:43px;background:#fff;border:1px solid #dfe5eb;border-radius:12px;padding:5px;box-shadow:0 5px 20px #0003;min-width:205px}.financeMenu.open{display:block}.financeMenu button{display:block;width:100%;text-align:left;background:#fff;color:#1565c0;border:0;border-radius:8px;padding:10px 11px;font-weight:700;margin:0}.financeSummary{background:#fff;padding:5px 6px 7px;border-bottom:1px solid #e7ebf0}.financeTop{display:grid;grid-template-columns:repeat(3,1fr);align-items:center;text-align:center}.financeStat{font-size:11px;color:#7b8794}.financeStat b{display:block;font-size:15px;color:#182230;margin-top:1px}.financeStat.balance b{color:#1565c0}.financeStat{font-size:12px;color:#7b8794}.financeStat b{display:block;font-size:17px;color:#182230;margin-top:2px}.financeStat.balance b{color:#1565c0}.financeSection{padding:7px 0 0}.financeSectionTitle{font-size:13px;color:#697586;text-align:left;margin:0 8px 3px;font-weight:800}.financeRow{display:flex;gap:6px;overflow-x:auto;overflow-y:hidden;padding:0 6px 10px;border-bottom:1px solid #dfe5eb;align-items:start;scrollbar-width:none;touch-action:pan-x}.financeRow::-webkit-scrollbar{display:none}.financeRow .coinWrap{flex:0 0 78px}.financeRow .coin{width:64px;height:64px}.financeSection.expenseSection{background:#edf8ef}.financeSection.expenseSection .financeRow{background:#edf8ef}.financeRow:last-child{border-bottom:0}.coinWrap{min-width:0;text-align:center;position:relative}.coinLabel{height:30px;display:flex;align-items:flex-end;justify-content:center;padding:0 1px;font-size:12px;color:#56616f;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.coin{width:68px;height:68px;max-width:68px;margin:3px auto 3px;border-radius:50%;display:flex;align-items:center;justify-content:center;border:0;box-shadow:0 2px 7px #0002;color:#fff;position:relative;touch-action:none;user-select:none;cursor:pointer;padding:0}.coin:active{transform:scale(.97)}.coin svg{width:35px;height:35px}.coinAmount{font-size:11px;min-height:16px;color:#667382;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.coinPlan{font-size:10px;color:#9aa4af;min-height:12px;white-space:nowrap}.incomeCoin{background:#20a9d6}.accountCoin{background:#f5c400}.expenseCoin{background:#69b7a4}.expenseCoin.orange{background:#f08a24}.addCoin{background:#fff;color:#9aa4af;border:1px solid #d7dde4;box-shadow:none}.addCoin .plus{font-size:40px;font-weight:300;line-height:1;color:#a3acb6}.financeActionBar{display:flex;gap:6px;justify-content:center;padding:7px 6px 2px}.financeAction{flex:1;max-width:130px;background:#fff;color:#1565c0;border:1px solid #dbe3ec;border-radius:11px;padding:9px 8px;font-size:12px}.financeAction:active{background:#eef5ff}.financeHint{font-size:11px;color:#8b96a3;text-align:center;padding:4px 16px 8px}.financeNav{display:flex;gap:8px;padding:8px 4px}.financeNav button{flex:1;font-size:12px;padding:9px 6px}.financeModalBack{position:fixed;inset:0;background:#0006;z-index:80;display:flex;align-items:flex-end;justify-content:center}.financeModal{width:100%;max-width:560px;background:#fff;border-radius:18px 18px 0 0;padding:18px 16px 22px;box-shadow:0 -6px 24px #0003}.financeModal h3{margin:0 0 12px;font-size:19px}.financeModal .modalButtons{display:flex;gap:7px}.financeModal .modalButtons button{flex:1}.financeList{padding:0 4px}.financeListRow{display:flex;justify-content:space-between;gap:10px;align-items:center;padding:11px 0;border-bottom:1px solid #eef1f5}.financeListRow:last-child{border-bottom:0}.financeListRow .name{font-weight:700}.financeListRow .meta{font-size:11px;color:#7b8794;margin-top:2px}.financeListRow .sum{font-weight:800;white-space:nowrap}.financeIncome{color:#138a58}.financeExpense{color:#c84b36}.financeTransfer{color:#856404}.dragTarget{outline:3px dashed #1565c0;outline-offset:2px}.financeToast{position:fixed;left:50%;bottom:94px;transform:translateX(-50%);background:#182230;color:#fff;padding:9px 13px;border-radius:10px;font-size:12px;z-index:100;box-shadow:0 4px 14px #0004}.financeFilterDate{display:flex;align-items:center;justify-content:center;gap:7px;padding:6px 8px;background:#f7f9fb;border-bottom:1px solid #e7ebf0}.financeFilterDate button{margin:0;padding:7px 10px;font-size:12px}.financeAnalytics{padding:8px}.financeAnalyticsCard{background:#fff;border:1px solid #e1e7ee;border-radius:12px;padding:11px;margin-bottom:8px}.financeAnalyticsTitle{font-weight:800;font-size:14px;margin-bottom:7px}.financeAnalyticsRow{display:flex;justify-content:space-between;gap:8px;padding:7px 0;border-bottom:1px solid #eef1f5;font-size:12px}.financeAnalyticsRow:last-child{border-bottom:0}.financeCalendarGrid{display:grid;grid-template-columns:repeat(7,1fr);gap:4px}.financeCalendarGrid button{margin:0;padding:7px 2px;background:#fff;color:#182230;border:1px solid #e0e6ec;font-size:11px}.financeCalendarGrid button.active{background:#1565c0;color:#fff}.financeCalendarGrid .hasData{font-weight:800}.financeDetailDate{font-size:12px;color:#697586;margin:4px 0 10px}.financeDetail{background:#fff;border-radius:15px;padding:14px;margin:10px 0;box-shadow:0 2px 10px #0000000d}.financeDetailHead{display:flex;justify-content:space-between;align-items:center;gap:8px}.financeDetailTitle{font-size:19px;font-weight:800}.financeDetailAmount{font-size:27px;font-weight:900;color:#1565c0;margin:7px 0 12px}.financeEmpty{padding:14px 4px;text-align:center;color:#7b8794;font-size:13px}
@media(max-width:420px){.financeRow{gap:2px}.coin{width:64px;height:64px}.coinLabel{font-size:11px}.coinAmount{font-size:10px}.financeStat b{font-size:16px}}

</style>
</head>
<body>
<header><div class="topbar"><button class="todayTop" id="topDate" onclick="openTopCalendar()" style="background:transparent;color:#fff;padding:0;margin:0;border:0;font-weight:700"></button><button class="searchBtn" onclick="toggleHomeSearch()" aria-label="Поиск клиента">🔍</button><button class="menuBtn" onclick="toggleMenu()" aria-label="Меню">☰</button></div><div class="nav" id="menu"><button onclick="clients();closeMenu()">👥 Клиентская база</button><button onclick="backup();closeMenu()">💾 Сохранить данные</button></div></header>
<main id="app"></main>
<div id="homeCounters" class="homeCounters"><div class="circleRow"><button id="todayCounter" class="taskCircle" onclick="showDate(todayISO(),true)" aria-label="Заявки на сегодня">0</button><button id="overdueCounter" class="taskCircle overdue" onclick="showOverdue()" aria-label="Просроченные заявки">0</button></div></div>
<button class="fab" aria-label="Новый клиент" onclick="newClient()">+</button>
<script>
const KEY='moifiltry5';
let db=JSON.parse(localStorage.getItem(KEY)||'null');
if(!db) db={clients:[],nextClientNumber:1};
if(!Array.isArray(db.clients)) db.clients=[];
// 5.1: remove legacy fields that are no longer used in the interface.
db.clients.forEach(c=>{delete c.mineralizer;delete c.postfilter;delete c.pp100;c.extraPhones=(Array.isArray(c.extraPhones)?c.extraPhones:[]).map(p=>typeof p==='string'?{name:'',phone:p}:{name:String(p?.name||''),phone:String(p?.phone||'')}).filter(p=>p.phone||p.name);});
if(!Number.isInteger(db.nextClientNumber)||db.nextClientNumber<1) db.nextClientNumber=(db.clients.reduce((m,c)=>Math.max(m,Number(c.number)||0),0)+1);
let month=new Date();month.setDate(1);
let homeSearchOpen=false;
const esc=s=>String(s??'').replace(/[&<>"']/g,x=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[x]));
const save=()=>localStorage.setItem(KEY,JSON.stringify(db));
const models=['Ecosoft с насосом','Ecosoft без насоса','FitAqua с насосом','FitAqua без насоса','Другое'];
const cartridges=['PP5','GAC','CTO','PP1','Пост-фильтр','Минерализатор','RO-мембрана'];
const brands=['Вастерлайн','Ecosoft','FitAqua'];
function hideHomeCounters(){}
function toggleMenu(){document.getElementById('menu').classList.toggle('open')}
function closeMenu(){document.getElementById('menu').classList.remove('open')}
function todayISO(){const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`}
function ruDate(ds){if(!ds)return '—';const [y,m,d]=ds.split('-');return `${d}.${m}.${y}`}
function initTopDate(){document.getElementById('topDate').textContent='📅 '+ruDate(todayISO());}
function openTopCalendar(){calendar();}
function isDue(c){const t=todayISO();return !!(c.replace&&c.replace<=t&&!(c.completedDates||[]).includes(c.replace))}
function isOverdue(c){const t=todayISO();return !!(c.replace&&c.replace<t&&!(c.completedDates||[]).includes(c.replace))}
function addMonthsISO(ds,months){if(!ds)return '';const d=new Date(ds+'T12:00:00');if(Number.isNaN(d.getTime()))return '';const day=d.getDate();d.setMonth(d.getMonth()+Number(months||0));if(d.getDate()!==day)d.setDate(0);return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`}
function lastService(c){return Array.isArray(c?.serviceHistory)&&c.serviceHistory.length?c.serviceHistory.slice().sort((a,b)=>String(a.date||'').localeCompare(String(b.date||'')))[c.serviceHistory.length-1]:null}
function replacementBaseDate(c){return lastService(c)?.date||c?.lastReplacementDate||c?.install||''}
function updateHomeCounters(){
 const box=document.getElementById('homeCounters');
 if(!box)return;
 const t=todayISO();
 const todayCount=db.clients.filter(c=>c.replace===t&&!(c.completedDates||[]).includes(c.replace)).length;
 const overdueCount=db.clients.filter(isOverdue).length;
 document.getElementById('todayCounter').textContent=todayCount;
 document.getElementById('overdueCounter').textContent=overdueCount;
}
function toggleHomeSearch(){
 if(!app.innerHTML.includes('id="homeSearch"')){filterHome();homeSearchOpen=true;filterHome();}
 else {homeSearchOpen=!homeSearchOpen;filterHome();}
}

function clients(){
 setScreen('clients'); setShell('filters');
 const q=(document.getElementById('search')?.value||'').toLowerCase();
 const arr=db.clients.filter(c=>[c.name,c.phone,c.address,c.addressExtra,c.model,String(c.number),(c.extraPhones||[]).map(p=>typeof p==='string'?p:(p.name+' '+p.phone)).join(' ')].join(' ').toLowerCase().includes(q));
 app.innerHTML=`<div class="card"><div class="row"><div><div class="sectionTitle">Клиентская база</div><div class="stat">${db.clients.length}</div><div class="muted">Всего клиентов</div></div><div><button type="button" class="secondary" onclick="home()">Назад</button><button onclick="newClient()">+ Новый клиент</button></div></div></div>
 <div class="card"><input id="search" class="search" placeholder="Поиск клиента: имя, телефон, адрес или №" value="${esc(q)}" oninput="clients()"></div>`+
 (arr.length?arr.map(c=>`<div class="card client" onclick="editClientByNumber(${c.number})"><div class="row"><b>№${c.number} — ${esc(c.name)||'Без имени'}</b><span class="muted">${esc(formatPhoneDisplay(c.phone))}</span></div><div>${c.model?`<span class=pill>${esc(c.model)}</span>`:''}${(c.cartridges||[]).map(x=>`<span class=pill>${esc(x)}</span>`).join('')}</div><div class="muted">🏠 ${esc(c.address)||'Адрес не указан'}${c.addressExtra?` · ${esc(c.addressExtra)}`:''}</div><div class="muted">Установка: ${c.install||'—'} · Дата замены: ${replacementBaseDate(c)?ruDate(replacementBaseDate(c)):'—'} · Следующая замена: ${c.replace?ruDate(c.replace):'—'}</div></div>`).join(''):`<div class="card empty">Ничего не найдено.</div>`);
}
function filterHome(){
 setScreen('filterHome'); setShell('filters');
 const today=todayISO();
 const todayTasks=db.clients.filter(c=>c.replace===today&&!(c.completedDates||[]).includes(c.replace));
 const overdue=db.clients.filter(isOverdue);
 app.innerHTML=`${homeSearchOpen?`<div class="card"><input id="homeSearch" class="search" placeholder="Поиск клиента" oninput="homeSearch()" autofocus></div><div id="homeResults"></div>`:''}${todayTasks.length?`<div class="card"><div class="sectionTitle">Заявки на сегодня</div>${todayTasks.map(c=>`<div class="list"><div onclick="editClientByNumber(${c.number})"><b>№${c.number} — ${esc(c.name)}</b><div class="muted">Плановая замена: ${ruDate(c.replace)}${c.install?` · Установка: ${ruDate(c.install)}`:''}</div></div></div>`).join('')}</div>`:''}`;
 const counters=document.getElementById('homeCounters');
 if(counters)counters.classList.add('open');
 updateHomeCounters();
}
function homeSearch(){const q=(document.getElementById('homeSearch')?.value||'').toLowerCase();const box=document.getElementById('homeResults');if(!box)return;if(!q){box.innerHTML='';return;}const arr=db.clients.filter(c=>[c.name,c.phone,c.address,c.addressExtra,c.model,String(c.number),(c.extraPhones||[]).map(p=>typeof p==='string'?p:(p.name+' '+p.phone)).join(' ')].join(' ').toLowerCase().includes(q));box.innerHTML=arr.length?`<div class="card">${arr.map(c=>`<div class="list" onclick="editClientByNumber(${c.number})"><b>№${c.number} — ${esc(c.name)||'Без имени'}</b><div class="muted">${esc(formatPhoneDisplay(c.phone))} · ${esc(c.address)||'Адрес не указан'}${c.addressExtra?` · ${esc(c.addressExtra)}`:''}</div></div>`).join('')}</div>`:'<div class="card empty">Клиент не найден.</div>'}
function showOverdue(){
 setScreen('overdue');const arr=db.clients.filter(isOverdue);app.innerHTML=`<div class="card"><div class="row"><div class="sectionTitle">Просроченные</div><button type="button" class="secondary" onclick="home()">Назад</button></div>${arr.length?arr.map(c=>`<div class="list"><div class="row"><div onclick="editClientByNumber(${c.number})"><b>№${c.number} — ${esc(c.name)}</b><div class="muted">Плановая замена: ${ruDate(c.replace)}${replacementBaseDate(c)?` · Дата замены: ${ruDate(replacementBaseDate(c))}`:''}</div></div><button class="small" onclick="completeTask(${c.number},'${c.replace}')">Выполнено</button></div></div>`).join(''):'<div class="empty">Просроченных заявок нет.</div>'}</div>`}
function completeCurrentTask(i){const c=db.clients[i];if(!c||!c.replace)return;completeTask(c.number,c.replace)}
function completeTask(n,plannedDate){
 const i=getIndexByNumber(n);if(i<0)return;
 const c=db.clients[i];
 const actual=prompt('Дата фактической замены:',todayISO());
 if(!actual)return;
 const nextDefault=addMonthsISO(actual,6);
 const next=prompt('Дата следующей замены:',nextDefault)||'';
 if(!Array.isArray(c.completedDates))c.completedDates=[];
 if(!c.completedDates.includes(plannedDate))c.completedDates.push(plannedDate);
 if(!Array.isArray(c.serviceHistory))c.serviceHistory=[];
 const known={};
 c.serviceHistory.forEach(h=>(h.items||[]).forEach(x=>{if(x.part&&x.brand)known[x.part]=x.brand;}));
 const items=(c.cartridges||[]).map(part=>({part,brand:known[part]||'Не указан'}));
 c.serviceHistory.push({date:actual,nextDate:next,items,comment:'',completed:true,plannedDate:plannedDate||''});
 c.lastReplacementDate=actual;
 c.replace=next;
 save();filterHome();
}

function getIndexByNumber(n){return db.clients.findIndex(c=>Number(c.number)===Number(n))}
function editClientByNumber(n){editClient(getIndexByNumber(n))}
function phoneDigits(value){
 let d=String(value||'').replace(/\D/g,'');
 if(d.startsWith('00')) d=d.slice(2);
 if(d.startsWith('7') && d.length===11) d='8'+d.slice(1);
 if(d.startsWith('8')) return d.slice(0,11);
 return d.slice(0,11);
}
function phoneLocal(value){return phoneDigits(value)}
function formatPhoneField(el){
 const d=phoneDigits(el.value);
 let out=d;
 if(d.length>1) out=d.slice(0,1)+' '+d.slice(1);
 if(d.length>4) out=d.slice(0,1)+' '+d.slice(1,4)+' '+d.slice(4);
 if(d.length>7) out=d.slice(0,1)+' '+d.slice(1,4)+' '+d.slice(4,7)+' '+d.slice(7);
 if(d.length>9) out=d.slice(0,1)+' '+d.slice(1,4)+' '+d.slice(4,7)+' '+d.slice(7,9)+' '+d.slice(9,11);
 el.value=out;
}
function formatPhoneDisplay(value){
 const d=phoneDigits(value);
 if(!d) return '';
 let out=d;
 if(d.length>1) out=d.slice(0,1)+' '+d.slice(1);
 if(d.length>4) out=d.slice(0,1)+' '+d.slice(1,4)+' '+d.slice(4);
 if(d.length>7) out=d.slice(0,1)+' '+d.slice(1,4)+' '+d.slice(4,7)+' '+d.slice(7);
 if(d.length>9) out=d.slice(0,1)+' '+d.slice(1,4)+' '+d.slice(4,7)+' '+d.slice(7,9)+' '+d.slice(9,11);
 return out;
}
function phoneIcon(type){
 if(type==='wa') return '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#fff" d="M20.5 3.5A11.4 11.4 0 0 0 12.4 0C6.1 0 1 5.1 1 11.4c0 2 .5 4 1.5 5.7L.9 23l6-1.6a11.3 11.3 0 0 0 5.5 1.4h.1C18.8 22.8 24 17.7 24 11.4c0-3-1.2-5.8-3.5-7.9Zm-8.1 17.3h-.1c-1.7 0-3.4-.5-4.8-1.3l-.3-.2-3.5.9.9-3.4-.2-.3a9.4 9.4 0 1 1 8 4.3Zm5.2-7.1c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-1.5-.7-2.5-1.3-3.5-2.9-.3-.5.3-.4.8-1.4.1-.2.1-.4 0-.6-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.7s1.2 3.1 1.4 3.3c.2.2 2.3 3.5 5.6 4.9 2.1.9 2.1.6 2.5.6.4 0 1.7-.7 2-1.3.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.6-.3Z"/></svg>';
 return '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#fff" d="M6.6 2.2 8.9 2c.5 0 .9.3 1.1.7l1.3 3.1c.2.4.1.9-.2 1.2L9.7 7.8c.8 1.7 2.1 3.1 3.8 3.9l.8-1.4c.3-.4.7-.5 1.2-.3l3.1 1.3c.4.2.7.6.7 1.1l-.2 2.3c-.1.8-.8 1.5-1.6 1.6-.6.1-1.2.1-1.8 0-5.9-.9-10.5-5.5-11.4-11.4-.1-.6-.1-1.2 0-1.8.1-.8.8-1.5 1.6-1.6Z"/></svg>';
}
function contactActions(phone, index, extra){
 const p=phoneDigits(phone||'');
 if(p.length!==11) return '';
 const callFn=extra ? `callExtraContact(${index})` : `callPhoneValue('${p}')`;
 const waFn=extra ? `waExtraContact(${index})` : `waPhoneValue('${p}')`;
 return `<div class="contactActions"><button type="button" class="contactIcon callIcon" onclick="${callFn}" aria-label="Позвонить">${phoneIcon('call')}</button><button type="button" class="contactIcon waIcon" onclick="${waFn}" aria-label="WhatsApp">${phoneIcon('wa')}</button></div>`;
}
function form(i){
 setScreen('client'); setShell('filters');
 const c=i<0?{number:db.nextClientNumber,name:'',phone:'',extraPhones:[],address:'',addressExtra:'',model:'Ecosoft с насосом',cartridges:[],install:'',lastReplacementDate:'',replace:'',notes:'',serviceHistory:[]}:db.clients[i];
 if(!Array.isArray(c.serviceHistory))c.serviceHistory=[];
 const addressBlock=c.address?`<div class="addressRow"><button type="button" class="addressLink" onclick="chooseMap(${i})">🏠 ${esc(c.address)}</button><button type="button" class="secondary small addressEdit" onclick="editAddressField(${i})">Изменить</button></div>`:`<input id="address" value="" placeholder="Адрес клиента">`;
 const extraContacts=(c.extraPhones||[]).map((p,idx)=>{const obj=typeof p==='string'?{name:'',phone:p}:(p||{});return extraPhoneHtml(obj.phone||'',idx,obj.name||'');}).join('');
 app.innerHTML=`<div class="card"><div class="row"><div><div class="sectionTitle">${i<0?'Новый клиент':'Карточка клиента'}</div><div class="muted">№${c.number}</div></div><button type="button" class="secondary" onclick="clients()">Назад</button></div>
 <label>Основной контакт</label><div class="contactBlock"><div class="contactName"><input id="name" value="${esc(c.name)}" placeholder="Имя и фамилия"></div><div class="contactPhoneRow"><div class="phoneInputWrap"><input id="phone" inputmode="numeric" maxlength="15" value="${esc(phoneLocal(c.phone))}" placeholder="8 705 560 75 87" oninput="formatPhoneField(this)"></div>${contactActions(c.phone,i,false)}<button type="button" class="plusMini" onclick="addExtraPhone()" aria-label="Добавить контакт">+</button></div></div>
 <div id="extraPhones">${extraContacts}</div>
 <label>Адрес</label>${addressBlock}<input id="addressExtra" value="${esc(c.addressExtra||'')}" placeholder="Подъезд, код, этаж, домофон и т. п.">
 <label>Фильтр / модель</label><select id="model">${models.map(x=>`<option ${x===c.model?'selected':''}>${x}</option>`).join('')}</select>
 <label>Картриджи</label><div>${cartridges.map(x=>`<label style="display:block;font-weight:400"><input class="car" type="checkbox" value="${x}" ${(c.cartridges||[]).includes(x)?'checked':''} style="width:auto;margin-right:7px">${x}</label>`).join('')}</div>
 <div><label>Дата установки</label><input id="install" type="date" value="${c.install||''}"></div>
 <div class="card" style="margin:12px 0;padding:12px;background:#f7f9fc"><div class="sectionTitle">История обслуживания</div><button type="button" class="historyMenu" onclick="serviceHistoryList(${i})"><span>История обслуживания</span><span class="arrow">›</span></button><div style="margin-top:10px"><label>Новая замена (только после фактической замены)</label><div class="grid serviceDateGrid"><div><label>Дата замены</label><input id="serviceDate" type="date" value="${replacementBaseDate(c)||''}" readonly></div><div><label>Следующая замена</label><input id="serviceNextDate" type="date" value="${c.replace||''}"></div></div><div id="serviceRows"></div><label>Комментарий к замене</label><textarea id="serviceComment" rows="3" placeholder="Что сделали, замечания"></textarea><button class="secondary small" onclick="addServiceRow()">+ Добавить картридж</button><button class="small" onclick="addServiceRecord(${i})">Записать замену</button></div></div>
 <label>Примечание</label><textarea id="notes" rows="4" placeholder="Дополнительная информация">${esc(c.notes)}</textarea>
 <button type="button" onclick="saveClient(${i})">Сохранить клиента</button>${i>=0?`${isDue(c)?`<button type="button" onclick="completeCurrentTask(${i})" class="secondary">Выполнено</button>`:''}<button type="button" onclick="deleteClient(${i})" class="danger">Удалить</button>`:''}</div>`;
 addServiceRow();
}

function editAddressField(i){
 const c=db.clients[i];
 if(!c)return;
 const box=document.querySelector('.addressRow');
 if(!box)return;
 box.outerHTML=`<input id="address" value="${esc(c.address||'')}" placeholder="Адрес клиента">`;
 document.getElementById('address')?.focus();
}
function chooseMap(i){
 const c=db.clients[i];
 if(!c||!c.address)return;
 const clean=String(c.address).trim();
 const choice=prompt('Открыть адрес в:\n1 — 2ГИС\n2 — Яндекс Картах','1');
 if(window.Android&&Android.openMapChooser)Android.openMapChooser(clean);
}
function serviceHistoryList(i){
 setScreen('history');
 const c=db.clients[i];
 if(!c)return;
 const items=Array.isArray(c.serviceHistory)?c.serviceHistory:[];
 app.innerHTML=`<div class="card"><div class="row"><div><div class="sectionTitle">История обслуживания</div><div class="muted">${esc(c.name)||'Без имени'} · №${c.number}${c.install?` · Установка: ${ruDate(c.install)}`:''}</div></div><button type="button" class="secondary" onclick="returnToClientCard(${i})">Назад</button></div>${items.length?items.slice().reverse().map((h,hi)=>{const realIndex=items.length-1-hi;return `<button type="button" class="historyItem" onclick="showServiceHistory(${i},${realIndex})"><span><b>${ruDate(h.date)}</b>${h.nextDate?`<div class="historyNext">Следующая замена: ${ruDate(h.nextDate)}</div>`:''}</span><span class="arrow">›</span></button>`}).join(''):'<div class="empty">История обслуживания пока пуста.</div>'}</div>`;
}

function extraPhoneHtml(p,i,name=''){
 const n=esc(name||'');
 const value=esc(phoneLocal(p));
 return `<div class="contactBlock extraContact"><div class="contactName"><input class="extraContactName" value="${n}" placeholder="Имя контакта"></div><div class="contactPhoneRow"><div class="phoneInputWrap"><input class="extraPhoneInput" inputmode="numeric" maxlength="15" value="${value}" placeholder="8 705 560 75 87" oninput="formatPhoneField(this)"></div>${contactActions(p,i,true)}<button type="button" class="removeMini" onclick="this.parentElement.parentElement.remove()" aria-label="Удалить контакт">−</button></div></div>`;
}
function addExtraPhone(){document.getElementById('extraPhones').insertAdjacentHTML('beforeend',extraPhoneHtml('',Date.now(),''))}
function newClient(){form(-1)}function editClient(i){if(i>=0)form(i)}
function saveClient(i){
 const get = id => document.getElementById(id);
 const extra=[...document.querySelectorAll('.extraContact')].map(box=>({name:(box.querySelector('.extraContactName')?.value||'').trim(),phone:phoneDigits(box.querySelector('.extraPhoneInput')?.value||'')})).filter(x=>x.phone.length===11 || x.name);
 const cs=[...document.querySelectorAll('.car:checked')].map(x=>x.value);
 const history=i<0?[]:(Array.isArray(db.clients[i].serviceHistory)?db.clients[i].serviceHistory:[]);
 const install=get('install').value;
 const baseDate=history.length?history.slice().sort((a,b)=>String(a.date||'').localeCompare(String(b.date||''))).at(-1)?.date:(db.clients[i]?.lastReplacementDate||install);
 const client={number:i<0 ? db.nextClientNumber : db.clients[i].number,name:get('name').value.trim(),phone:(phoneDigits(get('phone').value).length===11 ? phoneDigits(get('phone').value) : ''),extraPhones:extra,address:(get('address')?.value||db.clients[i]?.address||'').trim(),addressExtra:(get('addressExtra')?.value||db.clients[i]?.addressExtra||'').trim(),model:get('model').value,cartridges:cs,install,lastReplacementDate:baseDate||'',replace:(get('serviceNextDate')?.value||db.clients[i]?.replace||''),notes:get('notes').value.trim(),serviceHistory:history,completedDates: i<0 ? [] : (Array.isArray(db.clients[i].completedDates)?db.clients[i].completedDates:[])};
 if(!client.name && !client.phone){alert('Введите имя клиента или номер телефона.');return;}
 if(i<0){db.clients.push(client);db.nextClientNumber++;}else{db.clients[i]=client;}
 try{localStorage.setItem(KEY,JSON.stringify(db));clients();}catch(e){alert('Не удалось сохранить клиента: '+e.message);}
}

function addServiceRow(){document.getElementById('serviceRows').insertAdjacentHTML('beforeend',`<div class="grid serviceRow"><div><label>Картридж</label><select class="servicePart">${cartridges.map(x=>`<option>${x}</option>`).join('')}</select></div><div><label>Производитель</label><select class="serviceBrand">${brands.map(x=>`<option>${x}</option>`).join('')}</select></div></div>`)}
function addServiceRecord(i){
 if(i<0){alert('Сначала сохраните клиента.');return;}
 const rows=[...document.querySelectorAll('.serviceRow')];
 if(!rows.length){alert('Добавьте хотя бы один картридж.');return;}
 const date=document.getElementById('serviceDate').value||todayISO();
 const nextDate=document.getElementById('serviceNextDate').value||'';
 const comment=(document.getElementById('serviceComment').value||'').trim();
 const items=rows.map(r=>({part:r.querySelector('.servicePart').value,brand:r.querySelector('.serviceBrand').value}));
 if(!Array.isArray(db.clients[i].serviceHistory))db.clients[i].serviceHistory=[];
 db.clients[i].serviceHistory.push({date,nextDate,items,comment,completed:true});
 db.clients[i].lastReplacementDate=date;
 if(nextDate)db.clients[i].replace=nextDate;
 save();
 form(i);
}
function returnToClient(i){
 event?.preventDefault?.();
 event?.stopPropagation?.();
 form(i);
 return false;
}
function addEditServiceRow(part='',brand=''){
 const box=document.getElementById('editServiceRows');
 if(!box)return;
 box.insertAdjacentHTML('beforeend',`<div class="grid editServiceRow"><div><label>Картридж</label><select class="editServicePart">${cartridges.map(v=>`<option ${v===part?'selected':''}>${v}</option>`).join('')}</select></div><div><label>Производитель</label><select class="editServiceBrand">${brands.map(v=>`<option ${v===brand?'selected':''}>${v}</option>`).join('')}</select></div><button type="button" class="removeEditRow" onclick="this.parentElement.remove()">−</button></div>`);
}
function returnToHistoryList(i){
 const idx=Number(i);
 if(Number.isInteger(idx) && idx>=0 && idx<db.clients.length){
  serviceHistoryList(idx);
 }
 return false;
}
function returnToClientCard(i){
 const idx=Number(i);
 if(Number.isInteger(idx) && idx>=0 && idx<db.clients.length){
  form(idx);
 }
 return false;
}
function showServiceHistory(i,hIndex){
 setScreen('serviceDetail');
 const c=db.clients[i];
 if(!c||!Array.isArray(c.serviceHistory)||!c.serviceHistory[hIndex])return;
 const h=c.serviceHistory[hIndex];
 const items=Array.isArray(h.items)?h.items:[];
 app.innerHTML=`<div class="card"><div class="row"><div><div class="sectionTitle">Обслуживание от ${ruDate(h.date)}</div></div><button type="button" class="secondary" onclick="returnToHistoryList(${i})">Назад</button></div>
 <label>Дата замены</label><input id="editServiceDate" type="date" value="${h.date||''}">
 <label>Дата следующей замены</label><input id="editServiceNextDate" type="date" value="${h.nextDate||''}">
 <div style="margin-top:10px"><div class="sectionTitle">Картриджи</div><div id="editServiceRows"></div></div>
 <label>Комментарий</label><textarea id="editServiceComment" rows="4" placeholder="Что сделали, замечания">${esc(h.comment||'')}</textarea>
 <button type="button" class="secondary small" onclick="addEditServiceRow()">+ Добавить картридж</button>
 <button type="button" onclick="saveServiceHistory(${i},${hIndex})">Сохранить изменения</button>
 <button type="button" class="secondary" onclick="returnToHistoryList(${i})">Назад</button></div>`;
 items.forEach(x=>addEditServiceRow(x.part||'',x.brand||''));
 if(!items.length)addEditServiceRow();
}
function saveServiceHistory(i,hIndex){
 const c=db.clients[i],h=c&&c.serviceHistory&&c.serviceHistory[hIndex];
 if(!h)return;
 const date=document.getElementById('editServiceDate').value||h.date;
 const nextDate=document.getElementById('editServiceNextDate').value||'';
 const rows=[...document.querySelectorAll('.editServiceRow')];
 h.date=date;h.nextDate=nextDate;h.items=rows.map(r=>({part:r.querySelector('.editServicePart').value,brand:r.querySelector('.editServiceBrand').value}));
 h.comment=(document.getElementById('editServiceComment').value||'').trim();
 if(nextDate)c.replace=nextDate;
 save();
 form(i);
}
function deleteClient(i){if(confirm('Удалить клиента №'+db.clients[i].number+'?')){db.clients.splice(i,1);save();clients()}}
function toIntlPhone(phone){const p=phoneDigits(phone);return p.length===11&&p.startsWith('8')?'7'+p.slice(1):p;}
function callPhoneValue(phone){const dial=toIntlPhone(phone);if(!dial)return;if(window.Android&&Android.call){Android.call(dial);}else{location.href='tel:'+dial;}}
function waPhoneValue(phone){const waNumber=toIntlPhone(phone);if(!waNumber)return;if(window.Android)Android.whatsapp(waNumber);else{location.href='https://wa.me/'+waNumber;}}
function callExtraContact(index){const boxes=[...document.querySelectorAll('.extraContact')];const box=boxes[index];if(box)callPhoneValue(box.querySelector('.extraPhoneInput')?.value||'');}
function waExtraContact(index){const boxes=[...document.querySelectorAll('.extraContact')];const box=boxes[index];if(box)waPhoneValue(box.querySelector('.extraPhoneInput')?.value||'');}
function calendar(){
 setScreen('calendar');
 const y=month.getFullYear(),m=month.getMonth(),first=new Date(y,m,1),days=new Date(y,m+1,0).getDate(),offset=(first.getDay()+6)%7;
 let h=`<div class="calendarCard"><div class="row" style="margin-bottom:8px"><div class="sectionTitle">Выберите дату</div><button type="button" class="secondary" onclick="home()">Назад</button></div><div class="calhead row"><button onclick="month.setMonth(month.getMonth()-1);calendar()">‹</button><b>${month.toLocaleDateString('ru-RU',{month:'long',year:'numeric'})}</b><button onclick="month.setMonth(month.getMonth()+1);calendar()">›</button></div><div class="week">${['Пн','Вт','Ср','Чт','Пт','Сб','Вс'].map(x=>`<div>${x}</div>`).join('')}</div><div class="calendar">`;
 for(let i=0;i<offset;i++)h+='<div></div>';
 for(let d=1;d<=days;d++){let ds=`${y}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`,arr=db.clients.filter(c=>c.replace===ds&&!(c.completedDates||[]).includes(ds)),today=new Date(),isToday=today.getFullYear()===y&&today.getMonth()===m&&today.getDate()===d;h+=`<div class="day ${arr.length?'has':''} ${isToday?'today':''}" onclick="showDate('${ds}')"><span class="dayNum">${d}</span>${arr.length?`<span class=count>${arr.length}</span>`:''}</div>`}
 h+='</div></div>';app.innerHTML=h;
}
function showDate(ds){
 setScreen('date');const arr=db.clients.filter(c=>c.replace===ds);app.innerHTML=`<div class="card"><div class="row"><div class="sectionTitle">Заявки на ${ruDate(ds)}</div><button type="button" class="secondary" onclick="home()">Назад</button></div>${arr.length?arr.map(c=>`<div class="list"><div onclick="editClientByNumber(${c.number})"><b>№${c.number} — ${esc(c.name)}</b><div class="muted">📞 ${esc(c.phone)} · 🏠 ${esc(c.address)||'—'}${c.addressExtra?` · ${esc(c.addressExtra)}`:''}</div><div class="muted">Установка: ${c.install?ruDate(c.install):'—'} · Первая замена: ${firstService(c)?.date?ruDate(firstService(c).date):'ещё не было'} · Следующая: ${c.replace?ruDate(c.replace):'—'}</div></div></div>`).join(''):'<div class="empty">На эту дату замен нет.</div>'}</div>`}
function backup(){
 setScreen('backup');app.innerHTML=`<div class="card"><div class="row"><div class="sectionTitle">Сохранение данных</div><button type="button" class="secondary" onclick="home()">Назад</button></div><p class="muted">Сохраняются все данные приложения одним файлом: клиенты, адреса и дополнения к адресу, фильтры, картриджи, история обслуживания, доходы, расходы, счета и операции.</p><button onclick="Android.backup(JSON.stringify({version:2,filters:db,finance:financeDb}))">Сохранить данные</button><button class="secondary" onclick="Android.restore()">Восстановить данные</button></div>`}
function restoreBackup(s){try{const x=JSON.parse(s);
 if(x&&x.version===2&&x.filters&&Array.isArray(x.filters.clients)){db=x.filters;financeDb=(x.finance&&typeof x.finance==='object')?x.finance:financeDb;}
 else if(x&&Array.isArray(x.clients)){db=x;financeDb=db.finance||financeDb;} else throw 0;
 db.clients.forEach(c=>{delete c.mineralizer;delete c.postfilter;delete c.pp100;c.extraPhones=(Array.isArray(c.extraPhones)?c.extraPhones:[]).map(p=>typeof p==='string'?{name:'',phone:p}:{name:String(p?.name||''),phone:String(p?.phone||'')}).filter(p=>p.phone||p.name);c.addressExtra=String(c.addressExtra||'');});
 if(!Number.isInteger(db.nextClientNumber))db.nextClientNumber=db.clients.reduce((m,c)=>Math.max(m,Number(c.number)||0),0)+1;
 if(!financeDb||!Array.isArray(financeDb.incomeSources)||!Array.isArray(financeDb.accounts)||!Array.isArray(financeDb.expenses)||!Array.isArray(financeDb.transactions))financeDb={incomeSources:[],accounts:[],expenses:[],transactions:[]};
 save();financeSave();filterHome();alert('Данные восстановлены')}catch(e){alert('Не удалось восстановить данные')}}
let currentScreen='hub';
let androidBackStack=[];
let restoringAndroidBack=false;
function setScreen(name){
 if(name===currentScreen)return;
 if(!restoringAndroidBack){
  const header=document.querySelector('header');
  const counters=document.getElementById('homeCounters');
  const fab=document.querySelector('.fab');
  androidBackStack.push({screen:currentScreen,html:app.innerHTML,headerDisplay:header?header.style.display:'',countersDisplay:counters?counters.style.display:'',countersClass:counters?counters.className:'',fabDisplay:fab?fab.style.display:''});
 }
 currentScreen=name;
}
function restoreAndroidBackSnapshot(snap){
 restoringAndroidBack=true;currentScreen=snap.screen;app.innerHTML=snap.html;
 const header=document.querySelector('header'),counters=document.getElementById('homeCounters'),fab=document.querySelector('.fab');
 if(header)header.style.display=snap.headerDisplay||'';
 if(counters){counters.style.display=snap.countersDisplay||'';counters.className=snap.countersClass||counters.className;}
 if(fab)fab.style.display=snap.fabDisplay||'';
 restoringAndroidBack=false;
}
function handleAndroidBack(){if(androidBackStack.length){restoreAndroidBackSnapshot(androidBackStack.pop());return 'handled';}return 'exit';}
function setShell(mode){const header=document.querySelector('header'),counters=document.getElementById('homeCounters'),fab=document.querySelector('.fab');const hub=mode==='hub',finance=mode==='income';if(header)header.style.display=(hub||finance)?'none':'';if(counters)counters.style.display=(hub||finance)?'none':'';if(fab)fab.style.display=(hub||finance)?'none':'';}
function mainHome(){androidBackStack=[];restoringAndroidBack=true;currentScreen='hub';restoringAndroidBack=false;closeMenu();setShell('hub');app.innerHTML=`<div class="mainHub"><div class="hubTitle">Мои дела</div><div class="hubSub">Выберите нужный раздел</div><div class="hubGrid"><button type="button" class="hubTile filter" onclick="openFilters()"><span class="hubIcon"><svg viewBox="0 0 48 48" aria-hidden="true"><path fill="#1565c0" d="M24 4C17 14 10 21 10 29a14 14 0 0 0 28 0C38 21 31 14 24 4Z"/><path fill="#fff" d="M17 28h14v3H17z"/></svg></span><span class="hubName">Мои фильтры</span><span class="hubHint">Клиенты · замены · заявки</span></button><button type="button" class="hubTile income" onclick="financeHome()"><span class="hubIcon"><svg viewBox="0 0 48 48" aria-hidden="true"><path fill="#16834f" d="M8 12h28a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V16a4 4 0 0 1 4-4Z"/><path fill="#fff" d="M32 22h8v10h-8a5 5 0 0 1 0-10Zm0 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/><path fill="#16834f" d="M9 7h24v5H9z"/></svg></span><span class="hubName">Доходы</span><span class="hubHint">Финансы · аналитика</span></button></div></div>`;}
function openFilters(){setShell('filters');filterHome();}
const FIN_KEY='moifiltry_finance_v2';
let financeDb=db.finance||JSON.parse(localStorage.getItem(FIN_KEY)||'null');
if(!financeDb||!Array.isArray(financeDb.incomeSources)||!Array.isArray(financeDb.accounts)||!Array.isArray(financeDb.expenses)||!Array.isArray(financeDb.transactions)) financeDb={incomeSources:[],accounts:[],expenses:[],transactions:[]};
function financeSave(){db.finance=financeDb;save();localStorage.setItem(FIN_KEY,JSON.stringify(financeDb));}
function financeMoney(n){return Number(n||0).toLocaleString('ru-RU',{maximumFractionDigits:2})+' ₸';}
function financeMonth(){return todayISO().slice(0,7);}
let financeSelectedDate=todayISO();
function financeSum(list,kind,month){return list.filter(t=>t.kind===kind&&(!month||String(t.date||'').slice(0,7)===month)).reduce((a,t)=>a+Number(t.amount||0),0);}
function financeAccountBalance(id){let b=Number(financeDb.accounts.find(a=>a.id===id)?.balance||0);financeDb.transactions.forEach(t=>{if(t.kind==='income'&&t.accountId===id)b+=Number(t.amount||0);if(t.kind==='expense'&&t.accountId===id)b-=Number(t.amount||0);if(t.kind==='transfer'&&t.fromId===id)b-=Number(t.amount||0);if(t.kind==='transfer'&&t.toId===id)b+=Number(t.amount||0);});return b;}
function financeDefaultAccountId(){return financeDb.accounts.find(a=>String(a.name).toLowerCase().includes('кэш')||String(a.name).toLowerCase().includes('налич'))?.id||financeDb.accounts[0]?.id||'';}
function financeInit(){
 const old=JSON.parse(localStorage.getItem('moifiltry_income_v1')||'null');
 if(!financeDb.accounts.length) financeDb.accounts=[{id:'acc_default',name:'Кэш',icon:'₸',balance:0}];
 if(!financeDb.incomeSources.length) financeDb.incomeSources=[{id:'inc_default',name:'Технодом',icon:'▣'}];
 if(!financeDb.expenses.length) financeDb.expenses=[{id:'exp_default',name:'Прочее',icon:'•',color:'green'}];
 if(old&&Array.isArray(old.sources)&&old.sources.length&&!financeDb.transactions.length){
  financeDb.incomeSources=old.sources.map((s,i)=>({id:'inc'+Date.now()+i,name:String(s.name||'Доход'),icon:'▣'}));
  old.sources.forEach((s,i)=>(s.entries||[]).forEach(e=>financeDb.transactions.push({id:'t'+Date.now()+Math.random(),kind:'income',sourceId:financeDb.incomeSources[i].id,accountId:financeDefaultAccountId(),amount:Number(e.amount||0),date:e.date||todayISO(),note:''})));
 }
 financeSave();
}
financeInit();
financeSelectedDate=todayISO();
function financeEscName(x){return esc(String(x||''));}
function financeCoinIcon(type,icon){const map={income:'▣',account:'₸',expense:'•'};return `<span style="font-size:27px;font-weight:700;line-height:1">${esc(icon||map[type]||'•')}</span>`;}
function financeCoin(type,item,amount,extra){
 const cls=type==='income'?'incomeCoin':type==='account'?'accountCoin':(item.color==='orange'?'expenseCoin orange':'expenseCoin');
 const fn=type==='income'?`financeSourceDetail('${item.id}')`:type==='account'?`financeAccountDetail('${item.id}')`:`financeExpenseDetail('${item.id}')`;
 const draggable=type==='income'?'data-drag="income"':type==='account'?'data-drag="account"':''; const drop=type==='account'?'data-drop-type="account"':type==='expense'?'data-drop-type="expense"':'';
 return `<div class="coinWrap"><div class="coinLabel" title="${financeEscName(item.name)}">${financeEscName(item.name)}</div><button type="button" class="coin ${cls}" ${draggable} data-id="${esc(item.id)}" ${drop} onclick="${fn}">${financeCoinIcon(type,item.icon)}</button><div class="coinAmount">${amount?financeMoney(amount):'—'}</div>${extra||''}</div>`;
}
function financeAddCoin(type,label){return `<div class="coinWrap"><div class="coinLabel">${label||''}</div><button type="button" class="coin addCoin" onclick="financeAdd('${type}')"><span class="plus">+</span></button><div class="coinAmount">Добавить</div></div>`;}
function financeMenuToggle(){document.getElementById('financeMenu')?.classList.toggle('open');}
function financeCloseMenu(){document.getElementById('financeMenu')?.classList.remove('open');}
function financeSetDate(ds){financeSelectedDate=ds||todayISO();financeHome();}
function financeDatePrompt(){const el=document.getElementById('financeHeaderDate');if(el){el.value=financeSelectedDate||todayISO();if(el.showPicker)el.showPicker();else el.click();}}
function financeHeader(){return `<div class="financeHeader"><div class="financeHeaderRow"><button type="button" class="financeMenuBtn" onclick="financeMenuToggle()" aria-label="Меню">☰</button><div class="financeHeaderTitle">Финансы</div><button type="button" class="financeDateBtn" onclick="financeDatePrompt()" aria-label="Дата">📅</button><input id="financeHeaderDate" type="date" value="${financeSelectedDate||todayISO()}" onchange="financeSetDate(this.value)" style="position:absolute;width:1px;height:1px;opacity:0;pointer-events:none"></div><div class="financeMenu" id="financeMenu"><button onclick="financeOverview();financeCloseMenu()">📊 Общие данные</button><button onclick="financeStatistics();financeCloseMenu()">📈 Статистика</button><button onclick="financeHistory();financeCloseMenu()">🧾 История</button></div></div>`;}
function financeHome(){
 setScreen('income');setShell('income');
 const month=String(financeSelectedDate||todayISO()).slice(0,7);
 const incomes=financeDb.transactions.filter(t=>t.kind==='income'&&String(t.date).slice(0,7)===month).reduce((a,t)=>a+Number(t.amount||0),0);
 const expenses=financeDb.transactions.filter(t=>t.kind==='expense'&&String(t.date).slice(0,7)===month).reduce((a,t)=>a+Number(t.amount||0),0);
 const balance=financeDb.accounts.reduce((a,x)=>a+financeAccountBalance(x.id),0);
 const incomeCoins=financeDb.incomeSources.map(s=>{const sum=financeDb.transactions.filter(t=>t.kind==='income'&&t.sourceId===s.id&&String(t.date).slice(0,7)===month).reduce((a,t)=>a+Number(t.amount||0),0);return financeCoin('income',s,sum)}).join('')+financeAddCoin('income','');
 const accountCoins=financeDb.accounts.map(a=>financeCoin('account',a,financeAccountBalance(a.id))).join('')+financeAddCoin('account','');
 const expenseCoins=financeDb.expenses.map(e=>{const sum=financeDb.transactions.filter(t=>t.kind==='expense'&&t.expenseId===e.id&&String(t.date).slice(0,7)===month).reduce((a,t)=>a+Number(t.amount||0),0);return financeCoin('expense',e,sum)}).join('')+financeAddCoin('expense','');
 app.innerHTML=`<div class="financePage">${financeHeader()}<div class="financeFilterDate"><button onclick="financeDatePrompt()">📅 ${ruDate(financeSelectedDate)}</button><span class="muted">Дата операций: ${ruDate(financeSelectedDate)}</span></div><div class="financeSummary"><div class="financeTop"><div class="financeStat balance">Баланс<b>${financeMoney(balance)}</b></div><div class="financeStat">Расходы<b>${financeMoney(expenses)}</b></div><div class="financeStat">Доходы<b>${financeMoney(incomes)}</b></div></div></div><div class="financeSection"><div class="financeSectionTitle">Доходы</div><div class="financeRow">${incomeCoins}</div></div><div class="financeSection"><div class="financeSectionTitle">Кошельки / счета</div><div class="financeRow">${accountCoins}</div></div><div class="financeSection expenseSection"><div class="financeSectionTitle">Расходы</div><div class="financeRow">${expenseCoins}</div></div><div class="financeActionBar"><button class="financeAction" onclick="financeAdd('income')">＋ Доход</button><button class="financeAction" onclick="financeAdd('expense')">− Расход</button><button class="financeAction" onclick="financeAdd('transfer')">⇄ Перевод</button></div><div class="financeHint">Нажмите и перетащите доход на кошелёк/счёт или счёт на расход. После отпускания вводится сумма.</div></div>`;
 financeBindDrag();
}
function financeAdd(type){
 if(type==='income'){financeAddIncomeSource();return;}
 if(type==='account'){financeAddAccount();return;}
 if(type==='expense'){financeAddExpense();return;}
 financeAddTransfer();
}
function financePromptName(title,def){const v=prompt(title,def||'');return v&&v.trim()?v.trim():null;}
function financeAddIncomeSource(){const name=financePromptName('Название источника дохода:','Технодом');if(!name)return;financeDb.incomeSources.push({id:'inc'+Date.now()+Math.random(),name,icon:'▣'});financeSave();financeHome();}
function financeAddAccount(){const name=financePromptName('Название счёта:','Kaspi');if(!name)return;const raw=prompt('Начальный баланс, ₸:','0');if(raw===null)return;const b=Number(String(raw).replace(/[^0-9.,-]/g,'').replace(',','.'));if(!Number.isFinite(b)){alert('Введите корректную сумму.');return;}financeDb.accounts.push({id:'acc'+Date.now()+Math.random(),name,icon:'₸',balance:b});financeSave();financeHome();}
function financeAddExpense(){const name=financePromptName('Название категории расхода:','Еда');if(!name)return;financeDb.expenses.push({id:'exp'+Date.now()+Math.random(),name,icon:'•',color:financeDb.expenses.length%3===0?'green':'orange'});financeSave();financeHome();}
function financeOpenTransactionModal(kind,pre){pre=pre||{};if(!pre.accountId&&kind==='income')pre.accountId=financeDefaultAccountId();
 const title=kind==='income'?'Доход':kind==='expense'?'Расход':'Перевод';
 let fields='';
 if(kind==='income')fields=`<label>Источник дохода</label><select id="fmSource">${financeDb.incomeSources.map(x=>`<option value="${x.id}" ${x.id===pre?.sourceId?'selected':''}>${financeEscName(x.name)}</option>`).join('')}</select><label>Счёт</label><select id="fmAccount">${financeDb.accounts.map(x=>`<option value="${x.id}" ${x.id===pre?.accountId?'selected':''}>${financeEscName(x.name)}</option>`).join('')}</select>`;
 if(kind==='expense')fields=`<label>Счёт</label><select id="fmAccount">${financeDb.accounts.map(x=>`<option value="${x.id}" ${x.id===pre?.accountId?'selected':''}>${financeEscName(x.name)}</option>`).join('')}</select><label>Категория расхода</label><select id="fmExpense">${financeDb.expenses.map(x=>`<option value="${x.id}" ${x.id===pre?.expenseId?'selected':''}>${financeEscName(x.name)}</option>`).join('')}</select>`;
 if(kind==='transfer')fields=`<label>Откуда</label><select id="fmFrom">${financeDb.accounts.map(x=>`<option value="${x.id}">${financeEscName(x.name)}</option>`).join('')}</select><label>Куда</label><select id="fmTo">${financeDb.accounts.map(x=>`<option value="${x.id}">${financeEscName(x.name)}</option>`).join('')}</select>`;
 document.body.insertAdjacentHTML('beforeend',`<div class="financeModalBack" id="financeModalBack" onclick="if(event.target.id==='financeModalBack')financeCloseModal()"><div class="financeModal"><h3>${title}</h3>${fields}<label>Сумма, ₸</label><input id="fmAmount" inputmode="decimal" placeholder="1000"><label>Дата</label><input id="fmDate" type="date" value="${pre.date||financeSelectedDate||todayISO()}"><label>Комментарий</label><input id="fmNote" placeholder="Необязательно"><div class="modalButtons"><button class="secondary" onclick="financeCloseModal()">Отмена</button><button onclick="financeSaveModal('${kind}')">Готово</button></div></div></div>`);
}
function financeCloseModal(){document.getElementById('financeModalBack')?.remove();}
function financeSaveModal(kind){const amount=Number(String(document.getElementById('fmAmount')?.value||'').replace(/[^0-9.,-]/g,'').replace(',','.'));if(!Number.isFinite(amount)||amount<=0){alert('Введите корректную сумму.');return;}const date=document.getElementById('fmDate')?.value||todayISO();const note=document.getElementById('fmNote')?.value||'';const t={id:'t'+Date.now()+Math.random(),kind,amount,date,note};if(kind==='income'){t.sourceId=document.getElementById('fmSource').value;t.accountId=document.getElementById('fmAccount').value;}else if(kind==='expense'){t.accountId=document.getElementById('fmAccount').value;t.expenseId=document.getElementById('fmExpense').value;}else{t.fromId=document.getElementById('fmFrom').value;t.toId=document.getElementById('fmTo').value;if(t.fromId===t.toId){alert('Выберите разные счета.');return;}}financeDb.transactions.push(t);financeSave();financeCloseModal();financeHome();}
function financeRowsForDate(rows){const ds=financeSelectedDate||todayISO();return rows.filter(t=>String(t.date||'')===ds);}
function financeAddTransfer(){if(financeDb.accounts.length<2){alert('Сначала создайте минимум два счёта.');return;}financeOpenTransactionModal('transfer');}
function financeBindDrag(){
 document.querySelectorAll('[data-drag]').forEach(el=>{el.addEventListener('pointerdown',financePointerDown);});
}
let financeDrag=null;
function financePointerDown(e){const el=e.currentTarget;financeDrag={type:el.dataset.drag,id:el.dataset.id,startX:e.clientX,startY:e.clientY,moved:false};el.setPointerCapture?.(e.pointerId);const move=(ev)=>{if(!financeDrag)return;const d=Math.hypot(ev.clientX-financeDrag.startX,ev.clientY-financeDrag.startY);if(d>8){financeDrag.moved=true;el.classList.add('dragTarget');document.elementsFromPoint(ev.clientX,ev.clientY).forEach(x=>{if(x.dataset?.dragTarget)x.classList.add('dragTarget');});}};const up=(ev)=>{el.removeEventListener('pointermove',move);el.removeEventListener('pointerup',up);el.classList.remove('dragTarget');if(!financeDrag)return;const d=financeDrag;financeDrag=null;if(!d.moved)return;const target=document.elementsFromPoint(ev.clientX,ev.clientY).find(x=>x.dataset?.dropType);if(!target)return;if(d.type==='income'&&target.dataset.dropType==='account'){financeOpenTransactionModal('income',{sourceId:d.id,accountId:target.dataset.id});}else if(d.type==='account'&&target.dataset.dropType==='expense'){financeOpenTransactionModal('expense',{accountId:d.id,expenseId:target.dataset.id});}else if(d.type==='account'&&target.dataset.dropType==='account'&&target.dataset.id!==d.id){const from=d.id,to=target.dataset.id;financeOpenTransactionModal('transfer');setTimeout(()=>{const f=document.getElementById('fmFrom'),t=document.getElementById('fmTo');if(f)f.value=from;if(t)t.value=to;},0);}};el.addEventListener('pointermove',move);el.addEventListener('pointerup',up);}
function financeDropMarkup(type,item){return ''}
function financeSourceDetail(id){const s=financeDb.incomeSources.find(x=>x.id===id);if(!s)return;setScreen('financeSource');setShell('income');const all=financeDb.transactions.filter(t=>t.kind==='income'&&t.sourceId===id);const rows=financeRowsForDate(all);const total=all.reduce((a,t)=>a+Number(t.amount||0),0);app.innerHTML=`<div class="financePage">${financeHeader()}<div class="financeDetail"><div class="financeDetailHead"><div class="financeDetailTitle">${financeEscName(s.name)}</div></div><div class="financeDetailAmount">${financeMoney(total)}</div><div class="financeFilterDate"><button onclick="financeDatePrompt()">📅 ${ruDate(financeSelectedDate)}</button><span class="muted">Операции за выбранную дату</span></div><button onclick="financeOpenTransactionModal('income',{sourceId:'${id}',accountId:financeDefaultAccountId()})">＋ Записать доход</button><button class="danger small" onclick="financeDeleteSource('${id}')">Удалить</button></div><div class="financeDetail"><div class="sectionTitle">Операции за ${ruDate(financeSelectedDate)}</div><div class="financeList">${rows.length?rows.map(t=>`<div class="financeListRow"><div><div class="name financeIncome">Доход</div><div class="meta">${ruDate(t.date)}${t.note?' · '+financeEscName(t.note):''}</div></div><div class="sum financeIncome">+${financeMoney(t.amount)}</div></div>`).join(''):'<div class="financeEmpty">На выбранную дату операций нет.</div>'}</div></div></div>`;}
function financeAccountDetail(id){const a=financeDb.accounts.find(x=>x.id===id);if(!a)return;setScreen('financeAccount');setShell('income');const all=financeDb.transactions.filter(t=>t.accountId===id||t.fromId===id||t.toId===id);const rows=financeRowsForDate(all);app.innerHTML=`<div class="financePage">${financeHeader()}<div class="financeDetail"><div class="financeDetailHead"><div class="financeDetailTitle">${financeEscName(a.name)}</div></div><div class="financeDetailAmount">${financeMoney(financeAccountBalance(id))}</div><div class="financeFilterDate"><button onclick="financeDatePrompt()">📅 ${ruDate(financeSelectedDate)}</button><span class="muted">Операции за выбранную дату</span></div><button onclick="financeOpenTransactionModal('income',{accountId:'${id}'})">＋ Доход</button><button onclick="financeOpenTransactionModal('expense',{accountId:'${id}'})">− Расход</button></div><div class="financeDetail"><div class="sectionTitle">Операции за ${ruDate(financeSelectedDate)}</div><div class="financeList">${rows.length?rows.map(t=>{let label=t.kind==='income'?'Доход':t.kind==='expense'?'Расход':'Перевод';let sign=t.kind==='income'?'+':t.kind==='expense'?'−':(t.toId===id?'+':'−');let cls=t.kind==='income'?'financeIncome':t.kind==='expense'?'financeExpense':'financeTransfer';return `<div class="financeListRow"><div><div class="name ${cls}">${label}</div><div class="meta">${ruDate(t.date)}${t.note?' · '+financeEscName(t.note):''}</div></div><div class="sum ${cls}">${sign}${financeMoney(t.amount)}</div></div>`}).join(''):'<div class="financeEmpty">На выбранную дату операций нет.</div>'}</div></div></div>`;}
function financeExpenseDetail(id){const e=financeDb.expenses.find(x=>x.id===id);if(!e)return;setScreen('financeExpense');const rows=financeDb.transactions.filter(t=>t.kind==='expense'&&t.expenseId===id).slice().reverse();const total=rows.reduce((a,t)=>a+Number(t.amount||0),0);app.innerHTML=`<div class="financeDetail"><div class="financeDetailHead"><div class="financeDetailTitle">${financeEscName(e.name)}</div></div><div class="financeDetailAmount">${financeMoney(total)}</div><button onclick="financeOpenTransactionModal('expense',{expenseId:'${id}'})">− Записать расход</button><button class="danger small" onclick="financeDeleteExpense('${id}')">Удалить</button></div><div class="financeDetail"><div class="sectionTitle">Операции</div><div class="financeList">${rows.length?rows.map(t=>`<div class="financeListRow"><div><div class="name financeExpense">Расход</div><div class="meta">${ruDate(t.date)}${t.note?' · '+financeEscName(t.note):''}</div></div><div class="sum financeExpense">−${financeMoney(t.amount)}</div></div>`).join(''):'<div class="financeEmpty">Пока нет операций.</div>'}</div></div>`;}
function financeDeleteSource(id){if(!confirm('Удалить источник дохода?'))return;financeDb.incomeSources=financeDb.incomeSources.filter(x=>x.id!==id);financeDb.transactions=financeDb.transactions.filter(t=>t.sourceId!==id);financeSave();financeHome();}
function financeDeleteExpense(id){if(!confirm('Удалить категорию расхода?'))return;financeDb.expenses=financeDb.expenses.filter(x=>x.id!==id);financeDb.transactions=financeDb.transactions.filter(t=>t.expenseId!==id);financeSave();financeHome();}
function financeHistory(){setScreen('financeHistory');setShell('income');const rows=financeDb.transactions.slice().sort((a,b)=>String(b.date).localeCompare(String(a.date)));app.innerHTML=`<div class="financePage">${financeHeader()}<div class="financeDetail"><div class="financeDetailHead"><div class="financeDetailTitle">История операций</div></div><div class="financeFilterDate"><button onclick="financeDatePrompt()">📅 ${ruDate(financeSelectedDate)}</button></div><div class="financeList">${rows.length?rows.slice(0,200).map(t=>{const s=financeDb.incomeSources.find(x=>x.id===t.sourceId)?.name;const e=financeDb.expenses.find(x=>x.id===t.expenseId)?.name;const a=financeDb.accounts.find(x=>x.id===t.accountId)?.name;const from=financeDb.accounts.find(x=>x.id===t.fromId)?.name;const to=financeDb.accounts.find(x=>x.id===t.toId)?.name;const label=t.kind==='income'?s||'Доход':t.kind==='expense'?e||'Расход':(from||'Счёт')+' → '+(to||'Счёт');const sign=t.kind==='income'?'+':t.kind==='expense'?'−':'⇄';const cls=t.kind==='income'?'financeIncome':t.kind==='expense'?'financeExpense':'financeTransfer';return `<div class="financeListRow"><div><div class="name ${cls}">${financeEscName(label)}</div><div class="meta">${ruDate(t.date)}${a?' · '+financeEscName(a):''}${t.note?' · '+financeEscName(t.note):''}</div></div><div class="sum ${cls}">${sign}${financeMoney(t.amount)}</div></div>`}).join(''):'<div class="financeEmpty">Операций пока нет.</div>'}</div></div></div>`;}
function financeOverview(){setScreen('financeOverview');setShell('income');const months={};financeDb.transactions.forEach(t=>{const m=String(t.date||'').slice(0,7);if(!m)return;if(!months[m])months[m]={income:0,expense:0};if(t.kind==='income')months[m].income+=Number(t.amount||0);if(t.kind==='expense')months[m].expense+=Number(t.amount||0);});const sourceTotals={};financeDb.transactions.filter(t=>t.kind==='income').forEach(t=>{const n=financeDb.incomeSources.find(x=>x.id===t.sourceId)?.name||'Доход';sourceTotals[n]=(sourceTotals[n]||0)+Number(t.amount||0);});const monthRows=Object.keys(months).sort().reverse().map(m=>`<div class="financeAnalyticsRow"><span>${new Date(m+'-01T00:00:00').toLocaleDateString('ru-RU',{month:'long',year:'numeric'})}</span><b>+${financeMoney(months[m].income)} / −${financeMoney(months[m].expense)}</b></div>`).join('');const sourceRows=Object.entries(sourceTotals).sort((a,b)=>b[1]-a[1]).map(([n,v])=>`<div class="financeAnalyticsRow"><span>${financeEscName(n)}</span><b>${financeMoney(v)}</b></div>`).join('');const days={};financeDb.transactions.forEach(t=>{const d=String(t.date||'');if(!d)return;if(!days[d])days[d]={income:0,expense:0,sources:{}};if(t.kind==='income'){days[d].income+=Number(t.amount||0);const n=financeDb.incomeSources.find(x=>x.id===t.sourceId)?.name||'Доход';days[d].sources[n]=(days[d].sources[n]||0)+Number(t.amount||0);}if(t.kind==='expense')days[d].expense+=Number(t.amount||0);});const dayRows=Object.keys(days).sort().reverse().map(d=>{const src=Object.entries(days[d].sources).map(([n,v])=>financeEscName(n)+': '+financeMoney(v)).join(', ');return `<div class="financeAnalyticsRow"><span>${ruDate(d)}${src?' · '+src:''}</span><b>+${financeMoney(days[d].income)} / −${financeMoney(days[d].expense)}</b></div>`}).join('');app.innerHTML=`<div class="financePage">${financeHeader()}<div class="financeAnalytics"><div class="financeAnalyticsCard"><div class="financeAnalyticsTitle">Общие данные по месяцам</div>${monthRows||'<div class="financeEmpty">Данных пока нет.</div>'}</div><div class="financeAnalyticsCard"><div class="financeAnalyticsTitle">По датам и источникам</div>${dayRows||'<div class="financeEmpty">Данных пока нет.</div>'}</div><div class="financeAnalyticsCard"><div class="financeAnalyticsTitle">Откуда получен доход</div>${sourceRows||'<div class="financeEmpty">Доходов пока нет.</div>'}</div></div></div>`;}
function financeStatistics(){setScreen('financeStatistics');setShell('income');const tx=financeDb.transactions;const totalIncome=tx.filter(t=>t.kind==='income').reduce((a,t)=>a+Number(t.amount||0),0);const totalExpense=tx.filter(t=>t.kind==='expense').reduce((a,t)=>a+Number(t.amount||0),0);const sourceRows=financeDb.incomeSources.map(s=>{const sum=tx.filter(t=>t.kind==='income'&&t.sourceId===s.id).reduce((a,t)=>a+Number(t.amount||0),0);return `<div class="financeAnalyticsRow"><span>${financeEscName(s.name)}</span><b>${financeMoney(sum)}</b></div>`}).join('');const accountRows=financeDb.accounts.map(a=>`<div class="financeAnalyticsRow"><span>${financeEscName(a.name)}</span><b>${financeMoney(financeAccountBalance(a.id))}</b></div>`).join('');app.innerHTML=`<div class="financePage">${financeHeader()}<div class="financeAnalytics"><div class="financeAnalyticsCard"><div class="financeAnalyticsTitle">Итоги</div><div class="financeAnalyticsRow"><span>Всего доходов</span><b class="financeIncome">${financeMoney(totalIncome)}</b></div><div class="financeAnalyticsRow"><span>Всего расходов</span><b class="financeExpense">${financeMoney(totalExpense)}</b></div><div class="financeAnalyticsRow"><span>Разница</span><b>${financeMoney(totalIncome-totalExpense)}</b></div></div><div class="financeAnalyticsCard"><div class="financeAnalyticsTitle">По источникам дохода</div>${sourceRows||'<div class="financeEmpty">Данных пока нет.</div>'}</div><div class="financeAnalyticsCard"><div class="financeAnalyticsTitle">По кошелькам / счетам</div>${accountRows||'<div class="financeEmpty">Счетов пока нет.</div>'}</div></div></div>`;}

initTopDate();
setInterval(()=>{initTopDate();updateHomeCounters();},60000);
mainHome();
</script>
</body></html>
