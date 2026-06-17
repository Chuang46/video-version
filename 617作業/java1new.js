//1. 傳送某一段話給控制台
console.log('javascript已連接，準備進行互動...');

//2. 詢問使用者的姓名
let visitorname = prompt('您好，我是你的助理，請問我應該怎麼稱呼您:');

if (visitorname === '' || visitorname === null){
    visitorname = '訪客';
}

window.alert('Hello ' + visitorname + ' , 歡迎來到我的網站!' );

const logoElement = document.getElementById('main-logo');
logoElement.innerText = visitorname + "'s Website";

const titleElement = document.getElementById('hero-title');
titleElement.innerHTML = `我的未來，由 <span class="highlight">${visitorname}</span> 主宰`;


function changeColor(){
    const highlight = document.querySelector('.highlight');
    if (highlight.style.color === 'red'){
        highlight.style.color = '#38bdf8'; 
    } else {
        highlight.style.color = 'red';
    }
}

const SendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const aiResponse = document.getElementById('ai-response');


SendBtn.addEventListener('click', function(){
    const userMessage = userInput.value;

    if (userMessage === ""){
        alert('請先輸入指令囉!');
        return;
    }

    // 1. 判斷「你好 / 哈囉」
    if (userMessage.includes('你好') || userMessage.includes('哈囉') || userMessage.includes('您好')){
        aiResponse.innerText = 'AI 助理: 您好呀~ 今天過得還好嗎？很高興認識你！';
    } 
    // 2. 判斷「學校 / 東吳」
    else if (userMessage.includes('學校') || userMessage.includes('東吳') || userMessage.includes('大學')){
        aiResponse.innerText = 'AI 助理: 這是在東吳大學開設的基礎網頁設計課作品喔！我們正在學習 RWD 響應式佈局。';
    } 
    // 3. 判斷「功能 / 指令」
    else if (userMessage.includes('功能') || userMessage.includes('指令')){
        aiResponse.innerText = 'AI 助理: 目前網站支援「變換顏色」按鈕，也可以試著對我輸入「你好」或「學校」喔！';
    } 
    // 4. 當輸入其他看不懂的指令時
    else {
        aiResponse.innerText = `AI 助理: 收到指令「${userMessage}」，但我目前只看得懂「你好」、「學校」或「功能」喔！`;
    }

    userInput.value = "";
});