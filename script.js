var dd=document.body.querySelector(".dragondamage")
var ud=document.body.querySelector(".userdamage")
var r=document.body.querySelector(".result")

var user = 0;
var dragon = 0;
var hits = 0;
var random = 0;


while(user <5 && dragon <10) {
  hits=Number(prompt("How many times are you going to attempt to hit the dragon? 1-5"));
  
  random=Math.floor(Math.random() * hits)+1;
  if(random >5){random=dragon +1;}
  else {dragon = dragon + random;
       }
  user = user + (Math.floor(Math.random() *2) +1);
  
  
  ud.innerHTML="User Damage:" + user;
  
  dd.innerHTML="Dragon Damage:" + dragon;
}


if (dragon>=10){
  r.innerHTML="User Wins";
}
else if(user>=5){
  r.innerHTML="User Loses";

}