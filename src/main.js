import './style.css';

/* ===== Mission data: [location, mission, game, x, y (map coords 0-1000 / 0-500), targets, blurb] ===== */
const M = [
 ["Чикаго — поместье Дианы", "A Personal Contract", "ABSOLUTION", 257.0, 129.0, "Диана Бёрнвуд", "Проникните в поместье Дианы по приказу ICA.", 1, "abs-personal-contract"],
 ["Чикаго — Чайнатаун", "The King of Chinatown", "ABSOLUTION", 261.8, 132.5, "Король Чайнатауна", "Убейте Короля, чтобы получить помощь Бёрди.", 2, "abs-king-of-chinatown"],
 ["Чикаго — отель Terminus", "Terminus", "ABSOLUTION", 259.9, 138.0, "Блейк Декстер", "Пробейтесь через отель до номера 899.", 3, "abs-terminus"],
 ["Чикаго", "Run For Your Life", "ABSOLUTION", 254.1, 138.0, "Нет (побег)", "Сбегите от пожара и полиции через библиотеку и вокзал.", 4, "abs-run-for-your-life"],
 ["Чикаго — Чайнатаун", "Hunter and Hunted", "ABSOLUTION", 252.2, 132.5, "Dom Osmond, Frank Owens, Bill Dole, Larry Clay", "Клуб Vixen и китайский Новый год.", 5, "abs-hunter-and-hunted"],
 ["Чикаго — приют Rosewood", "Rosewood", "ABSOLUTION", 262.9, 125.9, "Edward Wade", "Защитите Викторию и выясните, где она.", 6, "abs-rosewood"],
 ["Хоуп, Южная Дакота", "Welcome to Hope", "ABSOLUTION", 212.0, 122.0, "Нет (добраться до бармена)", "Доберитесь до бармена в Great Balls of Fire.", 7, "abs-welcome-to-hope"],
 ["Хоуп — оружейный магазин", "Birdie's Gift", "ABSOLUTION", 216.8, 125.5, "Нет (забрать Silverballers)", "Выиграйте состязание и заберите свои Silverballers.", 8, "abs-birdies-gift"],
 ["Хоуп — улицы и парикмахерская", "Shaving Lenny", "ABSOLUTION", 214.9, 131.0, "Lenny Dexter, Luke Wheeley, Mason McCready, Gavin LeBlond, Landon Metcalf, Tyler Colvin", "Пройдите по улицам Хоуп и через парикмахерскую.", 9, "abs-shaving-lenny"],
 ["Южная Дакота — пустыня (прибл.)", "End of the Road", "ABSOLUTION", 217.9, 118.9, "Нет", "Пересеките пустыню.", 10, "abs-end-of-the-road"],
 ["Южная Дакота — Dexter Industries (прибл.)", "Dexter Industries", "ABSOLUTION", 221.5, 130.1, "Нет", "Лесопилка, шахты и заводской комплекс Декстера.", 11, "abs-dexter-industries"],
 ["Южная Дакота — тестовый комплекс (прибл.)", "Death Factory", "ABSOLUTION", 212.0, 137.0, "Marcus Green, Raymond Valentine, Warren Ashford", "Уничтожьте исследования секретной лаборатории.", 12, "abs-death-factory"],
 ["Южная Дакота — арена (прибл.)", "Fight Night", "ABSOLUTION", 202.5, 130.1, "Sanchez", "Победите Санчеса на арене.", 13, "abs-fight-night"],
 ["Южная Дакота — мотель и кукурузное поле (прибл.)", "Attack of the Saints", "ABSOLUTION", 206.1, 118.9, "Jennifer Anne Paxton, Heather McCarthy, Agnija Radoncic, Louisa Cain, Jaqueline Moorhead, LaSandra Dixon, Kurt J. Dean, Raymond A. Campisi", "Устраните отряд убийц в мотеле и на поле.", 14, "abs-attack-of-the-saints"],
 ["Хоуп — здание суда и тюрьма", "Skurky's Law", "ABSOLUTION", 209.1, 131.0, "Clive Skurky", "Проникните в суд и тюрьму Хоуп.", 15, "abs-skurkys-law"],
 ["Хоуп — окружная тюрьма и ярмарка", "Operation Sledgehammer", "ABSOLUTION", 207.2, 125.5, "Нет", "Прорвитесь через тюрьму, ярмарку и окраины.", 16, "abs-operation-sledgehammer"],
 ["Чикаго — ателье (прибл.)", "One of a Kind", "ABSOLUTION", 266.5, 137.1, "Нет", "Короткая глава в ателье.", 17, "abs-one-of-a-kind"],
 ["Чикаго — Blackwater Park (прибл.)", "Blackwater Park", "ABSOLUTION", 257.0, 144.0, "Layla Stockton", "Проникните в пентхаус и устраните помощницу Декстера.", 18, "abs-blackwater-park"],
 ["Чикаго — крыша Blackwater (прибл.)", "Countdown", "ABSOLUTION", 247.5, 137.1, "Blake Dexter", "Доберитесь до крыши и устраните Декстера.", 19, "abs-countdown"],
 ["Кладбище — склеп Бёрнвудов (прибл.)", "Absolution", "ABSOLUTION", 251.1, 125.9, "Jade Nguyen", "Финал истории на кладбище.", 20, "abs-absolution"],
 ["Париж", "Showstopper", "HITMAN 2016", 505, 114, "Viktor Novikov, Dalia Margolis", "Модное шоу в Париже скрывает аукцион краденых данных.", null, "paris"],
 ["Сапиенца", "World of Tomorrow", "HITMAN 2016", 535, 137, "Silvio Caruso, Francesca De Santis", "Солнечное итальянское побережье скрывает лабораторию биооружия.", null, "sapienza"],
 ["Марракеш", "A Gilded Cage", "HITMAN 2016", 478, 162, "Reza Zaydan, Claus Hugo Strandberg", "Консульство в осаде посреди народных волнений.", null, "marrakesh"],
 ["Бангкок", "Club 27", "HITMAN 2016", 779, 211, "Ken Morgan, Jordan Cross", "Роскошный отель в Бангкоке и рок-звезда в центре событий.", null, "bangkok"],
 ["Колорадо", "Freedom Fighters", "HITMAN 2016", 208, 142, "Maya Parvati, Sean Rose, Penelope Graves, Ezra Berg", "Четверо лидеров ополчения на укреплённой базе.", null, "colorado"],
 ["Хоккайдо", "Situs Inversus", "HITMAN 2016", 892, 131, "Yuki Yamazaki, Erich Soders", "Заснеженная клиника с тёмной тайной.", null, "hokkaido"],
 ["Хокс-Бэй, Новая Зеландия", "Nightcall", "HITMAN 2", 980, 360, "Alma Reynard", "Ночная операция на побережье Новой Зеландии.", null, "hawkes-bay"],
 ["Майами", "A Finish Line", "HITMAN 2", 277, 178, "Robert Knox, Sierra Knox", "Гонка в Майами и двое Ноксов в роли целей.", null, "miami"],
 ["Колумбия (Санта-Фортуна)", "Three-Headed Serpent", "HITMAN 2", 292, 237, "Rico Delgado, Andrea Martínez, Jorge Franco", "Джунгли и картель с тремя головами.", null, "santa-fortuna"],
 ["Мумбаи", "Chasing a Ghost", "HITMAN 2", 701, 197, "Vanya Shah, Wazir Kale, Dawood Rangan", "Трущобы и особняки, власть и загадка.", null, "mumbai"],
 ["Уиттлтон-Крик, Вермонт", "Another Life", "HITMAN 2", 305, 120, "Nolan Cassidy, Janus", "Тихий американский пригород скрывает двух целей.", null, "whittleton-creek"],
 ["Остров Сгайл", "The Ark Society", "HITMAN 2", 483, 92, "Sophia Washington, Zoe Washington", "Тайное общество и его ритуалы.", null, "isle-of-sgail"],
 ["Нью-Йорк", "Golden Handshake", "HITMAN 2", 294, 137, "Athena Savalas", "Проникните в банк Milton-Fitzpatrick и заберите ключевые данные.", null, "new-york"],
 ["Остров Хейвен (Мальдивы)", "The Last Resort", "HITMAN 2", 703, 241, "Tyson Williams, Ljudmila Vetrova, Steven Bradley", "Тропический курорт и три цели.", null, "haven-island"],
 ["Дубай", "On Top of the World", "HITMAN 3", 654, 180, "Marcus Stuyvesant, Carl Ingram", "Небоскрёб в Дубае и двое Партнёров Providence.", null, "dubai"],
 ["Дартмур, Англия", "Death in the Family", "HITMAN 3", 482, 113, "Alexa Carlisle", "Загадочное убийство в английском поместье.", null, "dartmoor"],
 ["Берлин", "Apex Predator", "HITMAN 3", 537, 104, "ICA Agents", "Охота на агентов ICA в Берлине.", null, "berlin"],
 ["Чунцин", "End of an Era", "HITMAN 3", 796, 168, "Imogen Royce, Hush", "Залитый дождём мегаполис и конец эпохи.", null, "chongqing"],
 ["Мендоса", "The Farewell", "HITMAN 3", 309, 342, "Don Yates, Tamara Vidal", "Виноградник, скрывающий предательство.", null, "mendoza"],
 ["Карпаты", "Untouchable", "HITMAN 3", 569, 122, "Arthur Edwards", "Финальный удар трилогии.", null, "carpathian"]
];
/* ----- English text for each mission, same order as M: [location, targets, blurb] ----- */
const EN = [["Chicago — Diana's estate", "Diana Burnwood", "Infiltrate Diana's estate on the ICA's orders."], ["Chicago — Chinatown", "The King of Chinatown", "Kill the King to earn Birdie's help."], ["Chicago — Terminus Hotel", "Blake Dexter", "Work your way through the hotel to room 899."], ["Chicago", "None (escape)", "Escape the fire and the police through a library and a train station."], ["Chicago — Chinatown", "Dom Osmond, Frank Owens, Bill Dole, Larry Clay", "The Vixen Club and Chinese New Year."], ["Chicago — Rosewood orphanage", "Edward Wade", "Defend Victoria and learn where she was taken."], ["Hope, South Dakota", "None (reach the bartender)", "Reach the bartender at Great Balls of Fire."], ["Hope — gun shop", "None (retrieve the Silverballers)", "Win the contest and retrieve your Silverballers."], ["Hope — streets and barbershop", "Lenny Dexter, Luke Wheeley, Mason McCready, Gavin LeBlond, Landon Metcalf, Tyler Colvin", "Fight through the streets and barbershop of Hope."], ["South Dakota — desert (approx.)", "None", "Cross the desert."], ["South Dakota — Dexter Industries (approx.)", "None", "Dexter's sawmill, mines and factory compound."], ["South Dakota — test facility (approx.)", "Marcus Green, Raymond Valentine, Warren Ashford", "Destroy the research of a secret lab."], ["South Dakota — arena (approx.)", "Sanchez", "Take down Sanchez in the arena."], ["South Dakota — motel and cornfield (approx.)", "Jennifer Anne Paxton, Heather McCarthy, Agnija Radoncic, Louisa Cain, Jaqueline Moorhead, LaSandra Dixon, Kurt J. Dean, Raymond A. Campisi", "Eliminate a squad of assassins at a motel and in a field."], ["Hope — courthouse and jail", "Clive Skurky", "Infiltrate the courthouse and jail of Hope."], ["Hope — county jail and fair", "None", "Fight through the jail, the fair and the outskirts."], ["Chicago — tailor shop (approx.)", "None", "A short chapter in a tailor shop."], ["Chicago — Blackwater Park (approx.)", "Layla Stockton", "Infiltrate the penthouse and eliminate Dexter's assistant."], ["Chicago — Blackwater roof (approx.)", "Blake Dexter", "Reach the roof and eliminate Dexter."], ["Cemetery — Burnwood family tomb (approx.)", "Jade Nguyen", "The story's finale at a cemetery."], ["Paris", "Viktor Novikov, Dalia Margolis", "A Paris fashion show hides an auction of stolen data."], ["Sapienza", "Silvio Caruso, Francesca De Santis", "A sunlit Italian coast hides a bioweapon lab."], ["Marrakesh", "Reza Zaydan, Claus Hugo Strandberg", "A consulate under siege amid civil unrest."], ["Bangkok", "Ken Morgan, Jordan Cross", "A luxury hotel in Bangkok with a rock star at the center."], ["Colorado", "Maya Parvati, Sean Rose, Penelope Graves, Ezra Berg", "Four militia leaders on a fortified compound."], ["Hokkaido", "Yuki Yamazaki, Erich Soders", "A snowbound clinic with a dark secret."], ["Hawke's Bay, New Zealand", "Alma Reynard", "A night operation on the coast of New Zealand."], ["Miami", "Robert Knox, Sierra Knox", "A race in Miami and two Knoxes as targets."], ["Colombia (Santa Fortuna)", "Rico Delgado, Andrea Martínez, Jorge Franco", "Jungle and a cartel with three heads."], ["Mumbai", "Vanya Shah, Wazir Kale, Dawood Rangan", "Slums and mansions, power and a mystery."], ["Whittleton Creek, Vermont", "Nolan Cassidy, Janus", "A quiet American suburb hides two targets."], ["Isle of Sgàil", "Sophia Washington, Zoe Washington", "A secret society and its rituals."], ["New York", "Athena Savalas", "Infiltrate the Milton-Fitzpatrick bank and retrieve key data."], ["Haven Island (Maldives)", "Tyson Williams, Ljudmila Vetrova, Steven Bradley", "A tropical resort island and three targets."], ["Dubai", "Marcus Stuyvesant, Carl Ingram", "A Dubai skyscraper and two Partners of Providence."], ["Dartmoor, England", "Alexa Carlisle", "A murder mystery in an English manor."], ["Berlin", "ICA Agents", "Hunting ICA agents in Berlin."], ["Chongqing", "Imogen Royce, Hush", "A rain-soaked megacity and the end of an era."], ["Mendoza", "Don Yates, Tamara Vidal", "A vineyard hiding betrayal."], ["Carpathian Mountains", "Arthur Edwards", "The final strike of the trilogy."]];
let lang="ru";
const LB={ru:{leg_woa:"Стилизованная карта мира. Расположение приблизительное.",leg_abs:"Стилизованная карта США. Миссии внутри города расставлены схематично, цифра на маркере — номер главы.",loc:"Локация:",mis:"Миссия:",tg:"Цели:",x:"Закрыть",
 abs:"Ключевые контракты Hitman: Absolution. Выберите маркер на карте, чтобы открыть полное досье.",
 woa:"Контракты HITMAN, HITMAN 2 и HITMAN 3. Выберите маркер на карте, чтобы открыть полное досье."},
 en:{leg_woa:"Stylized world map. Locations are approximate.",leg_abs:"Stylized map of the US. Missions inside a city are spread out schematically; the number on a marker is the chapter number.",loc:"Location:",mis:"Mission:",tg:"Target(s):",x:"Close",
 abs:"Key contracts from Hitman: Absolution. Select a marker on the map for the full dossier.",
 woa:"Contracts from HITMAN, HITMAN 2 and HITMAN 3. Select a marker on the map for the full dossier."}};
const S=()=>LB[lang];
const d=i=>lang==="en"?EN[i]:[M[i][0],M[i][5],M[i][6]]; // [location, targets, blurb] in current language
const esc=s=>String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;");

/* ----- Target portraits shown on the Absolution mission cards: [name RU, name EN, file] ----- */
const TG = {"A Personal Contract": [["Диана Бёрнвуд", "Diana Burnwood", "diana"]], "The King of Chinatown": [["Король Чайнатауна", "The King of Chinatown", "king-of-chinatown"]], "Terminus": [["Блейк Декстер", "Blake Dexter", "blake-dexter"]], "Hunter and Hunted": [["Dom Osmond", "Dom Osmond", "dom-osmond"], ["Frank Owens", "Frank Owens", "frank-owens"], ["Bill Dole", "Bill Dole", "bill-dole"], ["Larry Clay", "Larry Clay", "larry-clay"]], "Rosewood": [["Edward Wade", "Edward Wade", "edward-wade"]], "Shaving Lenny": [["Lenny Dexter", "Lenny Dexter", "lenny-dexter"], ["Luke Wheeley", "Luke Wheeley", "luke-wheeley"], ["Mason McCready", "Mason McCready", "mason-mccready"], ["Gavin LeBlond", "Gavin LeBlond", "gavin-leblond"], ["Landon Metcalf", "Landon Metcalf", "landon-metcalf"], ["Tyler Colvin", "Tyler Colvin", "tyler-colvin"]], "Death Factory": [["Marcus Green", "Marcus Green", "marcus-green"], ["Raymond Valentine", "Raymond Valentine", "raymond-valentine"], ["Warren Ashford", "Warren Ashford", "warren-ashford"]], "Fight Night": [["Sanchez", "Sanchez", "sanchez"]], "Attack of the Saints": [["Jennifer Anne Paxton", "Jennifer Anne Paxton", "jennifer-paxton"], ["Heather McCarthy", "Heather McCarthy", "heather-mccarthy"], ["Agnija Radoncic", "Agnija Radoncic", "agnija-radoncic"], ["Louisa Cain", "Louisa Cain", "louisa-cain"], ["Jaqueline Moorhead", "Jaqueline Moorhead", "jaqueline-moorhead"], ["LaSandra Dixon", "LaSandra Dixon", "lasandra-dixon"], ["Kurt J. Dean", "Kurt J. Dean", "kurt-dean"], ["Raymond A. Campisi", "Raymond A. Campisi", "raymond-campisi"]], "Skurky's Law": [["Clive Skurky", "Clive Skurky", "clive-skurky"]], "Blackwater Park": [["Layla Stockton", "Layla Stockton", "layla-stockton"]], "Countdown": [["Блейк Декстер", "Blake Dexter", "blake-dexter-countdown"]], "Absolution": [["Джейд Нгуен", "Jade Nguyen", "jade-nguyen"]]};
function tgHTML(m){
 const t=m[2]==="ABSOLUTION"&&TG[m[1]];
 return t?`<div class="tg">${t.map(x=>`<figure><img src="${import.meta.env.BASE_URL}img/targets/${x[2]}.jpg" alt="${esc(x[0])}" loading="lazy"><figcaption>${esc(lang==="en"?x[1]:x[0])}</figcaption></figure>`).join("")}</div>`:"";
}

/* ----- Game key: ABSOLUTION entries belong to the "abs" tab, everything else to "woa" ----- */
const gk=m=>m[2]==="ABSOLUTION"?"abs":"woa";

/* ----- Missions hub cards (filtered by the active tab) ----- */
function renderMissions(game){
 document.getElementById("missionLead").textContent=S()[game]||"";
 document.getElementById("missionGrid").innerHTML=M.map((m,i)=>gk(m)!==game?"":
  `<article class="card${m[8]?" ch":""}">${m[8]?`<img class="pic shot" src="${import.meta.env.BASE_URL}img/missions/${m[8]}.jpg" alt="${esc(m[1])}" loading="lazy">`:""}<span class="tag">${m[2]}</span><h3>${m[7]?m[7]+". ":""}${esc(m[1])}</h3>
  <p><b>${S().loc}</b> ${esc(d(i)[0])}</p><p><b>${S().tg}</b> ${esc(d(i)[1])}</p><p>${esc(d(i)[2])}</p>${tgHTML(m)}</article>`).join("");
}

/* ----- Map graticule ----- */
let g="";for(let x=0;x<=1000;x+=83)g+=`<line x1="${x}" y1="0" x2="${x}" y2="500"/>`;
for(let y=0;y<=500;y+=83)g+=`<line x1="0" y1="${y}" x2="1000" y2="${y}"/>`;
document.getElementById("grat").innerHTML=g;

/* ----- Markers and popup ----- */
const box=document.getElementById("mapBox"),pop=document.getElementById("pop");
let active=null;
function closePop(){pop.classList.remove("show");if(active)active.classList.remove("on");active=null}
M.forEach((m,i)=>{
 const b=document.createElement("button");
 b.className="mk";b.dataset.i=i;b.dataset.game=gk(m);if(m[7])b.textContent=m[7];b.setAttribute("aria-label",m[0]+": "+m[1]);
 b.style.left=m[3]/10+"%";b.style.top=m[4]/5+"%";
 b.onclick=e=>{
  e.stopPropagation();closePop();active=b;b.classList.add("on");
  pop.innerHTML=`<button class="x" aria-label="${S().x}">&times;</button><h3>${esc(d(i)[0])}</h3>
   <p><b>${S().mis}</b> ${m[7]?m[7]+". ":""}${esc(m[1])} (${m[2]})</p><p><b>${S().tg}</b> ${esc(d(i)[1])}</p><p>${esc(d(i)[2])}</p>`;
  pop.classList.add("show");
  // Place popup beside marker, keeping it inside the map
  const w=pop.offsetWidth,h=pop.offsetHeight,bw=box.clientWidth,bh=box.clientHeight;
  let l=b.offsetLeft+16,t=b.offsetTop-h/2;
  if(l+w>bw)l=b.offsetLeft-w-16;
  l=Math.max(6,l);t=Math.min(Math.max(6,t),bh-h-6);
  pop.style.left=l+"px";pop.style.top=t+"px";
  pop.querySelector(".x").onclick=closePop;
 };
 box.appendChild(b);
});
/* ----- Map view: Absolution zooms into the US, World of Assassination shows the whole world ----- */
const svg=box.querySelector("svg"),VIEW={abs:[169,97.5,130,65],woa:[0,0,1000,500]};
function layout(g){
 const [vx,vy,vw,vh]=VIEW[g];
 svg.setAttribute("viewBox",`${vx} ${vy} ${vw} ${vh}`);
 box.querySelectorAll(".mk").forEach(b=>{const m=M[+b.dataset.i];b.style.left=(m[3]-vx)/vw*100+"%";b.style.top=(m[4]-vy)/vh*100+"%"});
}
function setLegend(){document.getElementById("legend").textContent=S()["leg_"+(document.body.dataset.game||"abs")]}
box.onclick=closePop;
document.addEventListener("keydown",e=>{if(e.key==="Escape")closePop()});

/* ----- Language switcher (RU / EN): elements with data-en hold the English text ----- */
const tr=[...document.querySelectorAll("[data-en]")];
tr.forEach(e=>e.dataset.ru=e.innerHTML);
const langBtns=[...document.querySelectorAll(".lang button")];
function setLang(l){
 lang=l;document.documentElement.lang=l;
 tr.forEach(e=>e.innerHTML=l==="en"?e.dataset.en:e.dataset.ru);
 langBtns.forEach(b=>b.classList.toggle("on",b.dataset.lang===l));
 document.querySelectorAll(".mk").forEach(b=>{const i=+b.dataset.i;b.setAttribute("aria-label",d(i)[0]+": "+M[i][1])});
 renderMissions(document.body.dataset.game||"abs");setLegend();closePop();
 try{localStorage.setItem("hitmanLang",l)}catch(e){}
}
langBtns.forEach(b=>b.onclick=()=>setLang(b.dataset.lang));
let savedLang="ru";try{savedLang=localStorage.getItem("hitmanLang")||"ru"}catch(e){}
setLang(savedLang==="en"?"en":"ru");

/* ----- Game tabs: switch between Absolution and World of Assassination ----- */
const tabs=[...document.querySelectorAll(".tabs button[data-tab]")];
function setGame(g){
 document.body.dataset.game=g;
 tabs.forEach(t=>t.setAttribute("aria-selected",String(t.dataset.tab===g)));
 layout(g);renderMissions(g);setLegend();closePop();
 try{localStorage.setItem("hitmanGame",g)}catch(e){}
}
tabs.forEach(t=>t.onclick=()=>{setGame(t.dataset.tab);window.scrollTo({top:0,behavior:"smooth"})});
let saved="abs";try{saved=localStorage.getItem("hitmanGame")||"abs"}catch(e){}
setGame(saved==="woa"?"woa":"abs");
