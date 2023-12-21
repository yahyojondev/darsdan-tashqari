// alert('Hello javascript');

// let firstName = 'nabijonov';
// let lastName = 'yahyo23';

// let fullName = firstName + " " + lastName;

// console.log(fullName);
// console.log(fullName.length);
// console.log(fullName.toUpperCase());
// console.log(fullName.toLowerCase());

// let index = lastName.indexOf('23'); indexof - tanlagan harfni tartib raqamini chiqaradi

// console.log(index);

// let firstName = 'yahyojon';

// let result = firstName.indexOf('o');
// let lastresult = firstName.lastIndexOf('o'); lastindexof - oxirgi tanlagan harfni tarib raqamini chiqaradi

// console.log(result);
// console.log(lastresult);

// let firstName = 'yahyojon';

// let result = firstName.slice(4,5); slice - kesib beradi

// console.log(result);

// let firstName = 'yahyojon';

// let result = firstName.substr(1,5); substr- bu start dan boshlab sanedi

// console.log(result); 

// let firstName = 'yahyojon';

// let result = firstName.replace('a' , 'd'); replace - berilganni ikkinchi berilganga ozgartiradi

// console.log(result);

// let firstName = 'yahyojon';

// let result = firstName.charAt(); charAt - stringi birinchi harfini chiqaradi

// console.log(result);

// let firstName = 'yahyojon';

// let result = firstName.split("a");  split - stringni array korinshida  chiqaradi

// console.log(result);

// let firstName = 'nabijonov';
// let lastName = 'yahyojon';

// let result = `ismi ${lastName} familyasi ${firstName}`;

// console.log(result);

// let dostlar = ['yahyo','sardorbek','Izzatillo'];

// dostlar[0] = 'nurillo';
//  console.log(dostlar[2]);

// let number = [1,2,3,4];

// let result = dostlar.concat(number);

// dostlar.push('nurillo');

// dostlar.pop('izzatillo')

// console.log(dostlar);

// let  email = 'nabijonovdev@gmail.com';

// let result = email.includes('@');
//  console.log(result);

// let age = 25

// console.log(age > 24);
 

// let ism = prompt('ismingizni kiriting');

// let birinchiharf = ism.charAt().toUpperCase();

// let davomi = ism.slice(1).toLowerCase();

// let result = birinchiharf + davomi;

// alert(`salom, ${result}`);

// let names = ['yahyo','sardor','izzatilo'];

// for(let i =0; i < names.length; i++){
//     console.log(names[i]);
// }

// let pin = '12kfdls';

// if( pin.includes('@')){
//     console.log('ha bor');
// }else{
//     console.log('yoq');
// }

// let nom = 12345;

// let res = nom.sci

// console.log(nom.);


// let raqamlar = '12345';

// console.log(raqamlar.length);

let ism = prompt("ismingizni kiriting");
let hozirgiyil = prompt('hozirgi yilni kiriting')

let yosh = prompt('yoshni kiriting');

let result = `hurmatli ${ism} siz ${hozirgiyil - yosh} da tugillgansz.va siz ${yosh * 12} oy, ${(yosh * 365)/7} hafta, ${yosh * 365} kun,${(yosh*365)*24} soat,${(yosh*365)*24*60} daqiqa,${(yosh*365)*24*3600} soniya yashagansz.🤦‍♂️ `;

alert(result)








