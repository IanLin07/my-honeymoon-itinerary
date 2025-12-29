// 1. 資料陣列 (確認這部分是你寫好的資料)
const honeymoonPlan = [
  {
    day: 1,
    date: "2026/02/27",
    shortDate: "2/27",
    weekday: "五",
    events: [
      { time: "10:00", loc: "高鐵台中站", stay: "01時00分" },
      { time: "11:41", loc: "高鐵桃園站", stay: "01時00分" },
      { time: "13:03", loc: "桃園機場第二航廈(巡迴巴士)", stay: "01時00分" },
      { time: "17:33", loc: "關西國際機場", stay: "01時00分" },
      { time: "19:44", loc: "大阪難波GRIDS PREMIUM酒店", stay: "00時20分" },
      { time: "20:15", loc: "一蘭 難波御堂筋店", stay: "01時00分" },
      { time: "21:28", loc: "LIFE中央廣場 難波店", stay: "01時00分" }
    ]
  },
  {
    day: 2,
    date: "2026/02/28",
    shortDate: "2/28",
    weekday: "六",
    events: [
      { time: "08:00", loc: "大阪難波GRIDS PREMIUM酒店", stay: "00時30分" },
      { time: "08:58", loc: "大阪城 天守閣", stay: "01時00分" },
      { time: "10:06", loc: "大阪城御座船乗船處", stay: "01時00分" },
      { time: "11:25", loc: "天王寺區", stay: "00時30分" },
      { time: "12:03", loc: "四天王寺", stay: "00時30分" },
      { time: "12:44", loc: "達摩串炸 新世界總本店", stay: "01時00分" },
      { time: "13:45", loc: "通天閣", stay: "01時00分" },
      { time: "14:47", loc: "Dive＆Walk 受付場所", stay: "01時00分" },
      { time: "15:49", loc: "Tower Slider (Tsutenkaku)", stay: "01時00分" },
      { time: "16:50", loc: "通天閣南本通り商店街", stay: "01時00分" },
      { time: "17:57", loc: "玉出超市 惠美須店", stay: "01時00分" },
      { time: "19:13", loc: "大阪觀光遊艇 Wonder Cruise（道頓堀 日本橋 船着場）", stay: "00時30分" },
      { time: "19:52", loc: "Dorajyu", stay: "01時00分" }
    ]
  },
  {
    day: 3,
    date: "2026/03/01",
    shortDate: "3/01",
    weekday: "日",
    events: [
      { time: "09:00", loc: "大阪難波GRIDS PREMIUM酒店", stay: "00時30分" },
      { time: "10:00", loc: "neel中崎町", stay: "01時00分" },
      { time: "11:13", loc: "Sugar Butter Tree 阪急梅田店", stay: "01時00分" },
      { time: "12:18", loc: "神戶花式可麗露 Daniel", stay: "00時20分" },
      { time: "12:49", loc: "扭蛋之森 梅田茶屋町店", stay: "01時00分" },
      { time: "13:51", loc: "Tower Records Umeda NU Chayamachi", stay: "01時00分" },
      { time: "14:58", loc: "Disney Store (Umeda HEP FIVE store)", stay: "02時00分" },
      { time: "17:16", loc: "魚伊鰻魚飯", stay: "01時00分" },
      { time: "18:18", loc: "Tenjin-bashi-suji", stay: "00時20分" },
      { time: "19:01", loc: "天神橋筋商店街 南端 - 全日本最長的商店街", stay: "01時00分" }
    ]
  },
  {
    day: 4,
    date: "2026/03/02",
    shortDate: "3/02",
    weekday: "一",
    events: [
      { time: "08:00", loc: "大阪難波GRIDS PREMIUM酒店", stay: "-02時00分" },
      { time: "06:25", loc: "日本環球影城", stay: "15時00分" }
    ]
  },
  {
    day: 5,
    date: "2026/03/03",
    shortDate: "3/03",
    weekday: "二",
    events: [
      { time: "08:00", loc: "大阪難波GRIDS PREMIUM酒店", stay: "01時00分" },
      { time: "09:07", loc: "難波八阪神社", stay: "01時00分" },
      { time: "10:07", loc: "立町カヌレ SHINSAIBASHI", stay: "01時00分" },
      { time: "11:07", loc: "驚安殿堂唐吉訶德難波千日前店", stay: "01時00分" },
      { time: "12:15", loc: "章魚燒 十八番", stay: "01時00分" },
      { time: "13:32", loc: "Owl Cafe Chouette", stay: "01時00分" },
      { time: "14:32", loc: "Jankara", stay: "02時00分" },
      { time: "16:39", loc: "Andrew’s Eggtart Osaka Namba ekiten", stay: "01時00分" },
      { time: "17:45", loc: "大阪難波站前相鐵FRESA INN飯店", stay: "01時00分" }
    ]
  },
  {
    day: 6,
    date: "2026/03/04",
    shortDate: "3/04",
    weekday: "三",
    events: [
      { time: "07:00", loc: "大阪難波站前相鐵FRESA INN飯店", stay: "00時30分" },
      { time: "07:50", loc: "日本橋2號出口", stay: "00時10分" },
      { time: "09:00", loc: "勝尾寺", stay: "01時20分" },
      { time: "11:40", loc: "嵐山（京福電氣鐵道）", stay: "02時30分" },
      { time: "15:00", loc: "伏見稻荷大社 千本鳥居", stay: "01時30分" },
      { time: "16:44", loc: "京都車站八條口", stay: "00時10分" },
      { time: "17:06", loc: "THE BLOSSOM 京都", stay: "01時00分" },
      { time: "18:25", loc: "高木批發超市三條店", stay: "01時00分" },
      { time: "19:37", loc: "麵屋 豬一 離れ", stay: "01時00分" }
    ]
  },
  {
    day: 7,
    date: "2026/03/05",
    shortDate: "3/05",
    weekday: "四",
    events: [
      { time: "08:00", loc: "THE BLOSSOM 京都", stay: "00時20分" },
      { time: "09:01", loc: "清水寺", stay: "01時00分" },
      { time: "10:08", loc: "三年坂（產寧坂）", stay: "00時30分" },
      { time: "10:45", loc: "八坂庚申堂", stay: "00時30分" },
      { time: "11:17", loc: "京 八坂布丁", stay: "00時20分" },
      { time: "12:01", loc: "錦市場 (travel quiz spot)", stay: "01時30分" },
      { time: "13:36", loc: "Samantha Thavasa 河原町Opa店", stay: "01時00分" },
      { time: "14:42", loc: "迪士尼商店 京都四條河原町", stay: "01時00分" },
      { time: "15:50", loc: "八坂神社參道", stay: "00時30分" },
      { time: "16:26", loc: "MALEBRANCHE加加阿365 祇園店", stay: "01時00分" },
      { time: "17:29", loc: "祇園町南側 花見小路立碑", stay: "01時00分" },
      { time: "18:32", loc: "祇園", stay: "00時30分" },
      { time: "19:08", loc: "挽肉與米 (京都)", stay: "01時00分" }
    ]
  },
  {
    day: 8,
    date: "2026/03/06",
    shortDate: "3/06",
    weekday: "五",
    events: [
      { time: "08:00", loc: "THE BLOSSOM 京都", stay: "00時30分" },
      { time: "09:04", loc: "JR嵯峨嵐山站", stay: "00時10分" },
      { time: "09:15", loc: "嵯峨野嵐山小火車", stay: "00時10分" },
      { time: "09:59", loc: "小火車龜岡車站", stay: "00時10分" },
      { time: "10:17", loc: "Umahori Station", stay: "00時10分" },
      { time: "10:42", loc: "保津川下り乗船場（バス）", stay: "00時10分" },
      { time: "12:52", loc: "保津川遊船碼頭", stay: "00時10分" },
      { time: "13:12", loc: "五穀豐收的茶屋飯 五木茶屋 嵐山本店", stay: "01時00分" },
      { time: "14:25", loc: "天龍寺", stay: "01時00分" },
      { time: "15:35", loc: "御髪神社", stay: "01時00分" },
      { time: "16:54", loc: "JR嵯峨嵐山站", stay: "00時10分" },
      { time: "17:43", loc: "空蟬亭", stay: "01時00分" }
    ]
  },
  {
    day: 9,
    date: "2026/03/07",
    shortDate: "3/07",
    weekday: "六",
    events: [
      { time: "08:00", loc: "THE BLOSSOM 京都", stay: "01時00分" },
      { time: "09:17", loc: "寺町京極商店街", stay: "01時30分" },
      { time: "10:48", loc: "OS新京極通（京都）", stay: "00時30分" },
      { time: "11:21", loc: "HARBS 京都藤井大丸店", stay: "01時00分" },
      { time: "12:37", loc: "SHAKE SHACK 京都四條烏丸店", stay: "01時00分" },
      { time: "16:00", loc: "關西機場第１航站樓（南）", stay: "03時00分" },
      { time: "21:30", loc: "桃園機場第一航廈", stay: "01時00分" }
    ]
  }
]
;

// 2. 渲染函式：把這件事封裝起來，確保呼叫時才執行
function renderApp() {
  const tabsNav = document.getElementById('tabs-nav');
  const tabsContent = document.getElementById('tabs-content');
  console.log("找到導覽列了嗎？", tabsNav); // 這裡會告訴我們答案
  // 先清空容器
  tabsNav.innerHTML = '';
  tabsContent.innerHTML = '';

  honeymoonPlan.forEach((dayData, index) => {
    const isActive = index === 0 ? 'active' : '';

    // 產生按鈕
tabsNav.innerHTML += `
  <button class="tab-btn ${isActive}" data-day="${dayData.day}">
    <span class="btn-label">DAY ${dayData.day}</span>
    <span class="btn-date">${dayData.shortDate}</span>
    <span class="btn-weekday">${dayData.weekday}</span>
  </button>
`;

    // 產生行程內容
    let eventsHTML = dayData.events.map(event => `
      <div class="event-item">
        <span class="time">${event.time}</span>
        <span class="location">${event.loc}</span>
        <span class="duration">⏱️ ${event.stay}</span>
      </div>
    `).join('');

    tabsContent.innerHTML += `
      <div id="day-${dayData.day}" class="tab-content ${isActive}">
        <h2 class="day-title">📅 第 ${dayData.day} 天 (${dayData.date})</h2>
        ${eventsHTML}
      </div>
    `;
  });

  // 3. 重新綁定點擊事件 (因為按鈕是動態產生的，必須在產生後才綁定)
  initTabEvents();
}

function initTabEvents() {
  const tabs = document.querySelectorAll('.tab-btn');
  const contents = document.querySelectorAll('.tab-content');
  console.log(`準備綁定 ${tabs.length} 個按鈕`); // 檢查點 1
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      console.log(`按鈕 Day ${tab.dataset.day} 被點擊了！`); // 檢查點 2
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      tab.classList.add('active');
      const dayId = `day-${tab.dataset.day}`;
      document.getElementById(dayId).classList.add('active');
    });
  });
}

// 修改最後執行渲染的部分
// 確保網頁內容完全載入後才執行渲染
window.addEventListener('DOMContentLoaded', () => {
  console.log("網頁載入完成，準備渲染...");
  renderApp();
});



