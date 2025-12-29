// 1. 資料陣列 (確認這部分是你寫好的資料)
const honeymoonPlan = [
  {
    day: 1,
    date: "2026/02/27",
    events: [
      { time: "10:00", loc: "高鐵台中站", stay: "01時00分" },
      { time: "11:41", loc: "高鐵桃園站", stay: "01時00分" },
      { time: "13:03", loc: "桃園機場第二航廈", stay: "01時00分" },
      { time: "17:33", loc: "關西國際機場", stay: "01時00分" },
      { time: "19:44", loc: "大阪難波GRIDS PREMIUM酒店", stay: "00時20分" },
      { time: "20:15", loc: "一蘭 難波御堂筋店", stay: "01時00分" },
      { time: "21:28", loc: "LIFE中央廣場 難波店", stay: "01時00分" }
    ]
  },
  {
    day: 2,
    date: "2026/02/28",
    events: [
      { time: "08:00", loc: "大阪難波GRIDS PREMIUM酒店", stay: "00時30分" },
      { time: "08:58", loc: "大阪城 天守閣", stay: "01時00分" }
    ]
  }
];

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
    tabsNav.innerHTML += `<button class="tab-btn ${isActive}" data-day="${dayData.day}">Day ${dayData.day}</button>`;

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


// 執行渲染
renderApp();

