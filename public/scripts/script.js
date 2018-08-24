var today = new Date();
var currentTime = today.getHours();
var greeting;

if (currentTime > 18){
  greeting = "Hello!! Good Evening";
} else if (currentTime > 12){
  greeting = "Hello!! Good Afternoon";
} else if (currentTime > 0 ){
  greeting= " Hello!! Good Morning ";
} else{

  greeting = "Welcome";
}

document.write(greeting);
