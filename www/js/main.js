//日付から文字列に変換する関数
var date = new Date();
var rtn_str = getStringFromDate(date);
console.log(rtn_str);//日付 8ケタ
function getStringFromDate(date) {
var year_str = date.getFullYear();
//月だけ+1すること
var month_str = 1 + date.getMonth();
var day_str = date.getDate();
month_str = ('0' + month_str).slice(-2);
day_str = ('0' + day_str).slice(-2);
format_str = 'YYYYMMDD';
format_str = format_str.replace(/YYYY/g, year_str);
format_str = format_str.replace(/MM/g, month_str);
format_str = format_str.replace(/DD/g, day_str);
return format_str;
};
var n; // 数値格納用
var number; // 数値表示部分の取得用
const STORAGE_KEY = getStringFromDate(date);// ローカルストレージキー
const state = { count: 0 };
const btn = document.getElementById('countUp');//カウントする
btn.addEventListener('click', () => {
add();
});

function checkStorageKey(){
// ローカルストレージチェック
let ret = localStorage.getItem(STORAGE_KEY);
console.log("保存状態: " + ret);
// キーが存在するかのチェック
if(ret !== null){ // 戻り値がnull：保存データあり
n = Number(ret); // 数値化して変数に代入（ローカルストレージデータは文字列のため計算できるようにする）
}
else{ // 戻り値が存在：保存データなし
n = 0; // 0を代入
}
console.log("n = " + n);
}
/*ローカルストレージに現在表示中の番号を保存*/
function setStorageKey(){
localStorage.setItem(STORAGE_KEY, n);
}
/*数値を＋１する*/
function add(){
n ++;
setNumber(); // 表示とローカルストレージ保存
}
/*数値を画面に表示後、ローカルストレージに保存*/
function setNumber(){
// 数値を表示
number.innerHTML = n;
// ストレージに表示中の数値を保存
setStorageKey();
}
window.addEventListener("load", function(){
// 数値表示部分のDOM取得
number = document.getElementById("number");
// ローカルストレージをチェック
checkStorageKey();
// 数値を画面に表示
setNumber();
});
for(let i=0; i<localStorage.length; i++) {
    let key = localStorage.key(i);
    console.log(`${key}: ${localStorage.getItem(key)}`);
	document.getElementById("text-area").innerText=(`${key}: ${localStorage.getItem(key)}`);
}


