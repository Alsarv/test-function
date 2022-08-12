 
 function sayHelloWorld(){
    console.log('Hello world!');
 };

sayHelloWorld();


(function sayILearn(){
    console.log('Я учу html, JS');
})();


function sayArgument(a,b){
    console.log(a+b);
};

sayArgument(4,5);

function saySum(a,b,){
    return a+b;
};

console.log(saySum (6,8,));


function summ(b){
    if(b%2==0) {
        return 1;
    } else{
        return 2;
    }
};

 console.log(summ(3));



 let arr=[34, 50, 64, 120, 1, 6, 78, 96]
 function maxElement(arr){
    let max= arr[0]

    for(let i=0; i<arr.length; i++){
        if((arr[i])>max){
            max=arr[i]
        }
    }
    return max;
 }
 console.log(maxElement(arr));



String.prototype.reverse = function() {
    let s = "Добро пожаловать!";
    let i = s.length;
    while (i>0) {
        s += s.substring(i-1,i);
        i--;
    }
    return s;
}

{
console.log(String.prototype.reverse());

let test='123456789'
function reverse(str){
    let reverseStr=''
    for(let i=str.length-1; i>=0;i--){
        reverseStr +=str[i];
    }
    return reverseStr;

}
console.log(reverse(test))
}