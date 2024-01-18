/*
//常數規定寫大寫
const PI = 3.1415926;
//prompt 提示輸入
let hight = prompt("input your hight:");
let weight = prompt("input your weight:")
let BMI = weight / (hight / 100) ** 2;
/**print=console.log
const常數 不變的數
字串+數字(自串串接)
typeof()看物件的型態


//輸出在網頁(給使用者看到的資訊)
let result = "<ul>";
result += "<li>身高:" + hight + "</li>";
result += "<li>體重:" + weight + "</li>"
//toFixed(2)跟Python的round(2)是一樣的用法，約束小數點
result += "<li>BMI:" + BMI.toFixed(2) + "</li>"

console.log(hight, weight, result, typeof (BMI));
result += "</ul>"
document.write(result);
//alert警告
/*alert(result);*/

//.length 取容器長度
let email = "shibainuhappypoppy@gmail.com"
console.log(email);
console.log(email.length);
console.log(email[email.length - 1]);
for (let i = 0; i < email.length; i++) {
    console.log(i, email[i]);
} //++ 每次加1 ,for(初始,判斷式,遞增的輸出)
/**for i in range(len(email)):
    print(i,email[i])*/

//++遞增 --遞減
let x = 10
console.log(++x); //前置運算(先加再輸出)
let y = 20
console.log(y++); //後置運算(先輸出再加)
console.log(10 == "10"); //字串自動轉為數字 值相等
console.log(10 === "10"); //兩者值跟型態都要相等
//型態強轉 Number,String,Boolean
console.log(String(10) === "10");

//運算子 and=&& or=|| not=!
let ch = 60;
let en = 60;
let ma = 39;
/*if (ch>=60 or en>=60) and ma>=60:
    print("Pass!")*/
if ((ch >= 60 || en >= 60) && ma >= 60) {
    console.log("pass!");
} else {
    console.log("fail...");
}

let z = null; //z=none在javascript的寫法
console.log(z + 10);
console.log(Math.PI);
//設置亂數(import random 在這裡的寫法)
//1-10之間亂數
//0-1浮點數
//Math.floor()小於等於最大數,Math.cell()大於等於最大數
for (let i = 0; i < 10; i++) {  //for i in range(10): i+=1
    let r = Math.floor(Math.random() * 49) + 1; //因為要的是小於終止值(49)的數 /原0-9,+1變1-10
    console.log(r);
}


/*
while (true) {
    let r = GetRandomInt(1, 49);
    console.log(r);
    if (r == 49) {
        break;
    }
} //冒號都變成括號,true是小寫
/*javascript中可以先使用後宣告函式，沒有規定先後順序*/
//定義函式def在這裡的寫法
function GetRandomInt(start, end) {
    let x = Math.floor(Math.random() * end) + start;
    return x
}

//console.log()是輸出在console端，document.write()是輸出在網頁body端
/*for (let i = 0; i < 6; i++) {
    let r = GetRandomInt(1, 49);
    document.write("<h3>第" + (i + 1) + "個號碼:" + r + "</h3>")
}*/


/*
for (let i = 0; i < 6; i++) {
    document.write(`<h3>第${i + 1}個號碼為:${GetRandomInt(1, 49)}</h3>`);
}
document.write(`<h3><b>特別號為:${GetRandomInt(1, 49)}</b></h3>`)
*/

//陣列(串列)
//外迴圈控制組數
const H3 = document.querySelector("h3");
H3.innerHTML = Date() + "<hr>"
//document.write(Date() + "<hr>"); //java內建Date()物件


let numbers = []
for (let j = 0; j < 6; j++) {
    let number = []
    for (let i = 0; i < 6; i++) {
        let r = GetRandomInt(1, 49);
        /*if (!number.includes(x)) {
        number.push(x);
        }
    if (number.length == 6) {
            break;}*/
        console.log(`<h3>第${i + 1}個號碼為:${r}</h3>`);
        number.push(r)

    }


    //console.log(number);
    //排序
    number.sort(compare);
    numbers.push(number)
}

//push=append
//輸出樂透號碼到document
console.log(numbers);
const lottoryElement = document.querySelector("#lottory") //因為是全域變數所以要先放前面不能放在下面
for (let i = 0; i < numbers.length; i++) {
    result = numbers[i].join(",")
    console.log(result);
    lottoryElement.innerHTML += `<h3>第${i + 1}組號碼:${result}</h3><hr>`
    //document.write(`<h3>第${i + 1}組號碼:${result}</h3><hr>`)

}



function compare(a, b) {
    //排序:compare(a,b) a大於b 升序
    //排序:compare(b,a) b大於a 降序
    return a - b
}

//parseInt()強制轉為整數
x = "3.5"
document.write(parseInt(x) + "<br>")
document.write(Number(x))

//object=>json  物件表達方式(key:value)
let user = {
    name: "Louis",
    hight: 175,
    weight: 70
}
console.log(user, typeof (user));
console.log(user.name, user["name"]);

//計算BMI函式

console.log(getBMI(user.hight, user.weight));

function getBMI(hight, weight) {
    let bmi = weight / (hight / 100) ** 2;
    //檢查數值是否錯誤
    if (isNaN(bmi)) {
        return "Number is Wrong! check your input item..";
    }

    return bmi.toFixed(2)
}


const h1 = document.querySelector("h1"); //取得元素之後把它變成一般常數

console.log(h1);
console.log(lottoryElement);
//h1.innerText = `${user.name} 的樂透預測`   (想把html的語法加入就不能用text)
h1.innerHTML = `<u>${user.name} 的樂透預測</u>`
h1.style.color = "blue"
h1.style.fontFamily = "Time New Romans"