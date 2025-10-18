//基本資料型態 & 變數


//使用DOM建立p文字
// let p = document.createElement("p");  //建立一個 <p>
// p.textContent = "Hello World!";       //填上文字
// document.getElementById("demo").appendChild(p);  //加到網頁裡

// //變數
// let 年齡 = 25;
// 年齡 = 26;
// console. log (年齡);

// //常數

// const 圓周率 = 3.141549;
// console.log(圓周率);

//計算數字
// let 衣服 = 300;
// let 褲子 = 700;
// let 折扣 = 0.8; //加入折扣
// let 總金額 = (衣服+褲子) * 折扣;

// 總金額 += 500;

// console.log(總金額); 

//字串串列
// let 城市 = "台北市";
// let 街道 = "羅斯福路500號";
// let 地址 = 城市 + 街道;
// console.log(地址);

// //字串模板
// let 句子 = `小明今天花了${總金額}元，其中衣服原價${衣服}元，褲子原價${褲子}元` ;

// console.log(句子);

// //其他計算方法(計算句子的文字總數用length)
// let 字數 = 句子.length;

// console.log(字數);

// //replace (替換文字)
// let 新句子 = 句子.replace("今天" , "昨天");

// console.log(新句子);

// //slice擷取字串第0~第10個字(但不包含第10個字)
// let 第一句 = 句子.slice(0,10);

// console.log(第一句);

//計算數字變數的方法
// let 總金額 = 100;
// let 商品數量 = 7;
// let 平均價格 = Math.round(總金額 / 商品數量);
// console.log(平均價格.toFixed(2));

//布林 Boolean 真true 假fales
// let 分數 = 50;
// let 及格 = 60;
// let 出席率 = 0.7;

// if (分數 >= 及格 && 出席率 >= 0.8) {
//     console.log("恭喜通過課程!");
// } else if (分數 >= 及格 || 出席率 >= 0.8) {    
//     console.log("通過但要補交作業!");
// } else {
//     console.log("未通過課程");
// }

//陣列 array
// let 考試成績 = [85, 90, 75, 60, 95,]; //索引標號 [0][1][2][3][4]
// 考試成績.push(100); //.push 新增第[5]的值

// console.log(考試成績.length); //length 功能是讓js自動判斷數值上限

// for (let i = 0; i < 考試成績.length; i++) { // i=0 用.length自動判斷條件 i每次重複執行+1
//     console.log(`第${i+1}位同學的成績是${考試成績[i]}分`); //用 ` ${} ` 加入文字使其成為字串模板
// }

// function 打招呼 (姓名) {  //function後面定義名稱，在{}內輸入函式要執行的內容
//     console.log(`${姓名}你好!`); //用 ` ${} ` 加入文字使其成為字串模板
// }

// 打招呼("小明"); //呼叫函式，因為函式並不會自動執行

// let myVariable = [1, "bob", 'steve', 10]; //陣列可以放不同型態的資料[呼叫順序0對應1 ,1對應"bob" ,2對應"steve" ,3對應10]

// console.log(myVariable[2]); //呼叫陣列的第2個資料(steve)

// let myVariable2 = 
// document.querySelectorAll('h1'); //用querySelectorAll抓取所有h1標籤(會以陣列方式呈現)

// let myVariable3 = 
// document.getElementsByClassName('food'); //用getElementsByClassName抓取所有class屬性為food的標籤(會以陣列方式呈現)

// let myVar = "Hello World";
// myVar = "Alex"; //變數可以重新命名
// console.log(myVar); //在開發者console.log顯示變數myVar(也就是Alex)

// let number = 10;
// number = number + 5; //變數可以用自己本身的值做運算
// number === 20; //判斷number是否等於20
// console.log(number); //在開發者console.log顯示變數number(也就是15)

// const comparisons = [ //建立一個陣列comparisons
//     {value: number, equals15: number === 15, equals20: number === 20}, //陣列內放入一個物件，物件內有三個屬性:value, equals15, equals20
//     {value: 20, equals15: 20 === 15, equals20: 20 === 20} //陣列內放入第二個物件，物件內有三個屬性:value, equals15, equals20
// ]
// console.table(comparisons); //用table方式在開發者console.log顯示陣列comparisons的內容

// console.log(number === 15); //判斷number是否等於15
// console.log(number === 20); //判斷number是否等於20


// === if 條件式判斷===

// let iceCream = "chocolate"; //建立一個變數iceCream並賦值為chocolate
// if (iceCream === "chocolate") {
//     alert("Yay, I Love chocolate ice cream!"); //如果iceCream等於chocolate就跳出視窗顯示訊息
//  } else {
//     alert("Awwww, but chocolate is my favorite..."); //如果iceCream不等於chocolate就跳出視窗顯示訊息
//  }


// === 函式 function ===

// function multiply(num1 , num2) { //建立一個函式multiply並帶入兩個參數num1和num2
//     let result = num1 * num2; //在函式multiply內建立一個變數result並賦值為num1乘以num2的結果
//     return result; //回傳result的值，回傳給呼叫函式的地方，例:(let total or multiply(2 , 3); )
//  }

// multiply(2 , 3); //呼叫函式multiply並帶入參數2和3
// console.log(multiply(2 , 3)); //在開發者console.log顯示函式multiply的回傳值(也就是6)

// multiply(6 , 7);
// console.log(multiply(6 , 7)); //結果=42
// // alert(multiply(6 , 7)); //跳出視窗顯示result的值(也就是42)


// let total = multiply(2 , 3); //建立一個變數total並呼叫函式multiply


// // === 事件監聽 Event Listener ===

// document.querySelector("html").onclick = function() { //當使用者點擊網頁任何地方時會執行function內的程式碼
//     // alert("挖! 別再打我了!");
// }


// === 歡迎訊息按鈕設定===

let myButton = document.querySelector("button"); //抓取網頁上的button標籤
let myHeading = document.querySelector("h1");    //抓取網頁上的h1標籤

function setUserName() {                                   //建立一個函式setUserName
    let myName = prompt("Please enter your name:");        //跳出視窗讓使用者輸入名字並賦值給變數myName
    
    if (!myName) {
        myHeading.textContent = "Formula 1 is cool!";      //如果使用者沒有輸入名字就把h1標籤的文字內容改為"Formula 1 is cool!"
    } else {
        localStorage.setItem("name" , myName);                 //把變數myName的值存到localStorage裡，key為name
        myHeading.textContent = "Formula 1 is cool," + myName; //把h1標籤的文字內容改為"Formula 1 is cool,"加上使用者輸入的名字
    }
}

myButton.onclick = function() { //當使用者點擊button標籤時會執行function內的程式碼
    setUserName();
}

// === 圖片+文字變換器 ===


let myImage = document.querySelector("img"); 
let caption = document.getElementById("carCaption");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "img transporter/mc.avif") {
        myImage.setAttribute("src" , "img transporter/rb.jpg"); //setAttribute(設定屬性,值) 切換圖片1的功能
        caption.textContent = "RedBull車隊正式推出的2024年新F1賽車:RB20"; //更換圖片1的說明文字
    } else {
        myImage.setAttribute("src" , "img transporter/mc.avif"); //切換圖片2
        caption.textContent = "McLaren車隊正式推出的2024年新F1賽車:MCL38"; //更換圖片2的說明文字
    }
};

                                     
   //== 表單按鈕 ==

const textarea = document.querySelector("textarea"); //先抓取textarea元素

const button1 = document.querySelector(".btn1"); //抓取送出按鈕
button1.onclick = function () { //按鈕處點擊滑鼠觸發函式
    const message = textarea.value.trim(); //設置常數message取得文字欄輸入內容並去除前後空白
    if (message) {
        alert(`訊息已送出：${message}`); //有內容則提示送出
    } else {
        alert("請先輸入內容再送出。"); //沒有內容的提示
    }
    textarea.value = ""; //清空文字欄
    textarea.focus(); //將游標移回文字欄
    console.log(message);
};

const button2 = document.querySelector(".btn2"); //抓取取消按鈕
button2.onclick = function () {
    textarea.value = ""; //清空文字欄
    textarea.focus(); //將游標移回文字欄
    alert("已取消並清空內容。"); //提示取消
};