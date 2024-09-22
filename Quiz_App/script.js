 
    // Loading function 
    window.onload = function(){
        show(0);
    }
      // Loading function end


    //   Start  Quized  question //

 let questions = [


    {
        id: 1,
        question:"What  does HTML stand for?",     //qusitopn
        answer:"Background-color:red;",
        options:[
            "Hyper Tag Markup  Language",
            "Hyper Text  Markup  Language",
            "Hyperlinks  Text  Mark  Language",
            "Hyperlinks  Text  Marking   Language"
        ]
       
     },

    {
        id: 2,
        question:"Where  should a CSS file be referenced in a HTML file?",
        answer:"Inside the head section",
        options:[
            "Before any HTML code",
            "Aflter all HTML code",
            "Inside the head section",
            "Inside the body section"
        ]
       
     },

     {
        id: 3,
        question:"What  does CSS stand for?",
        answer:"Background-color:red;",
        options:[
            "Computing does Style Sheet",
            "Creative Style System",
            "Cascadeing Style Sheet",
            "Creative Styling Sheet"
        ]
       
     },

     {
        id: 4,
        question:"What is the correct format for changing the background colour of a div in CSS?",
        answer:"Background-color:red;",
        options:[
            "Bg-color:red;",
            "bg:red;",
            "Background-colour:red;",
            "Background-color:red;"
        ]
       
     },


     {
        id: 5,
        question:"What is the correct JavaScript syntax to change the content of the HTML element below?",
        answer:"Both the <head> section and  the <body> section",
        options:[
            "The <head> section",
            "Both the <head> section and  the <body> section",
            "The <body> section",
            "None of these"
        ]
       
     },

     {
        id: 6,
        question:"Where is the correct place to insert a JavaScript?",
        answer:"Both the <head> section and  the <body> section",
        options:[
            "The <head> section",
            "Both the <head> section and  the <body> section",
            "The <body> section",
            "None of these"
        ]
       
     },

     {
        id: 7,
        question:" What is the full of RAM ?",
        answer:"Random Access Memory",
        options:[
            "Random Access Memory",
            "Randomly  Access Memory",
            "Run Acceapt Memory",
            "None of these"
        ]
     },
     {
        id: 8,
        question:"What is the full of CPU ?",
        answer:"Central Processing Unit",
        options:[
            "Central Program Unit",
            "Central Processing Unit",
            "Central Preload unit",
            "None of these"
        ]
     },
     {
        id: 9,
        question:"What is the full of E-mail ?",
        answer:"Electronic Mail",
        options:[
            "Electronic  Mail",
            "Electric Mail",
            "Engine Mail",
            "None of these"
        ]
        
     },

    
   
     {
        id: 10,
        question:"Who is making the Web standards?",
        answer:"Consortium",
        options:[
            "Microsoft",
            "Mozilla",
            "World wide web",
            "Consortium"
        ]
       
     },

 ]
  //   End  Quized  question //


    //  Start form function //
 function submitForm(e){
     e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;

    // store player name

    sessionStorage.setItem("name",name);
    location.href="quiz.html";
    //  console.log(name)
 }
  //  End form function //


//   Start Next Button function //

 let questions_count = 0;
 let point = 0;
 let index  = 0 ;
 let attempt = 0;
 
 function  next(){
    let user_answer = document.querySelector("li.option.active").innerText;

    if(user_answer == questions[questions_count].answer){
        point += 10;
         sessionStorage.setItem('points', point);
         
     }
     if(questions_count == questions.length - 1){
         sessionStorage.setItem("time", `${minutes} minutes and ${seconds} seconds`);
         clearInterval(mytime);
         location.href ="result.html";
         return;
     }
    
    // check answer by the user
    let  QuestionNO =  document.querySelector(".queNO").innerHTML=`${questions_count+2}`;
    questions_count++;
    show(questions_count);
    let pract =  document.querySelector(".socre").innerHTML=  `Score: ${questions_count+1}`;
    
 }




 //   Start Next Button function //


//  OPtions  functionlilty //


 function show(count){

     let question = document.getElementById("questions");
    //  question.innerHTML = "<h2>" + questions[count].question + "</h2>";

    question.innerHTML = `
            <h2>Q${questions_count+1}.${questions[count].question}</h2>
            <ul class="quiz_group">
                    <li class="option"> ${questions[count].options[0]}</li>
                    <li class="option">${questions[count].options[1]}</li>
                    <li class="option">${questions[count].options[2]}</li>
                    <li class="option">${questions[count].options[3]}</li>
                </ul> `;

                toggleActive();
 }
 function toggleActive(){
       
    let option = document.querySelectorAll('li.option');

    for(let i=0; i< option.length; i++){
        option[i].onclick =  function(){
            for(let j=0; j< option.length; j++){
                if(option[j].classList.contains("active")){   //add the active class 
                    option[j].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
 }

 //   End  OPtions  functionlilty //



//  Start Timer function Start //

 let dt = new Date(new Date().setTime(0));
 let time =dt.getTime();
 let seconds = Math.floor((time % (100 * 60))/1000);
 let minutes = Math.floor((time %(100 * 60))/(1000*60));
  let timex = 0;
   let mytime = setInterval(function(){
     if(seconds < 50){
         seconds++;
     }else{
         minutes++;
         seconds = 0;
     }
     let formatted_sec = seconds < 10 ? `0${seconds}`: `${seconds}`;
      let formatted_min = minutes < 10 ? `0${minutes}`: `${minutes}`;
    document.querySelector('.time').innerHTML = `${formatted_min}:${formatted_sec}`;
 },1000)

 //  End  Timer function Start //


 