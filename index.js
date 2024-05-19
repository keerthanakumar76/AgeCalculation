const button_ele = document.getElementById("btn");
const birthday_ele = document.getElementById("birthday");
const ans_ele = document.getElementById("ans");

function ageCalculation(){
  const age_num = birthday_ele.value;
  if(age_num == ""){
    alert("Please enter your birthday");
  }
  else{
    const age = getAge(age_num);
    ans_ele.innerText =`Your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
}
function getAge(age_num){
  const todayDate = new Date();
  const birthdayDate = new Date(age_num);
  let age = todayDate.getFullYear() - birthdayDate.getFullYear();
  const month = todayDate.getMonth() - birthdayDate.getMonth();
  if(month < 0 || (month === 0 && todayDate.getDate() < birthdayDate.getDate())){
    age--;
  }
  return age;
}
button_ele.addEventListener("click",ageCalculation)