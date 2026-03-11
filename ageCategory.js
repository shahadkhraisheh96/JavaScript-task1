const age=parseInt(prompt("enter your age"));
let ageCategory;
if(age<13){
    ageCategory='Child';
}else if (age>=13 && age<=19){
    ageCategory='Teenager';
}
else if(age>=20 && age<59){
    ageCategory='Adult';
}
else{
    ageCategory='Senior';
}

alert("based on your age You are an"+ageCategory);
console.log(`based on your age You are an ${ageCategory}`)