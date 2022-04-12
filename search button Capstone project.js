

var numbers=[10,20,30,40,50];
var keys =document.getElementById('key')
var but = document.getElementById('sb')
function searchfun(){
    
    if(numbers.indexOf(Number(keys.value))==0){
        document.write(" <b> That movie is at index " + numbers.indexOf(Number(keys.value))+" in my Video library and therfore its avaliable </b>");
        document.write("<p>the movie was created in 2015 </p>");
        document.write("<p>Created by Baguma Brian </p>");

    } 
    else if(numbers.indexOf(Number(keys.value))==1){
        document.write(" <b> That movie is at index " + numbers.indexOf(Number(keys.value))+" in my Video library and therfore its avaliable </b>");
        document.write("<p> Red Notice is a 2021 American action comedy film written, directed, and produced by Rawson Marshall Thurber. <p> Dwayne Johnson, who also served as a producer, stars as an FBI agent who reluctantly teams up with a renowned art thief (Ryan Reynolds)</p>  <p>  in order to catch an even more notorious criminal (Gal Gadot). </p>");
        document.write("<p>Created by Baguma Brian </p>");

    } 
    else if(numbers.indexOf(Number(keys.value))==2){
        document.write(" <b> That movie is at index " + numbers.indexOf(Number(keys.value))+" in my Video library and therfore its avaliable </b>");
        document.write("<p> Revolves around Frank, an American tourist visiting Italy to mend a broken heart. Elise is an extraordinary woman who deliberately crosses his path.<p> Revolves around Frank, an American tourist visiting Italy to mend a broken heart.</p> Elise is an extraordinary woman who deliberately crosses his path. </p>");
        document.write("<p>Created by steve Author </p>");

    } 

    else if(numbers.indexOf(Number(keys.value))==3){
        document.write(" <b> That movie is at index " + numbers.indexOf(Number(keys.value))+" in my Video library and therfore its avaliable </b>");
        document.write("<p>the movie was created in 2017 </p>");
        document.write("<p>Created by steve Author </p>");

    } 
    else if(numbers.indexOf(Number(keys.value))==4){
        document.write(" <b> That movie is at index " + numbers.indexOf(Number(keys.value))+" in my Video library and therfore its avaliable </b>");
        document.write("<p>the movie was created in 2017 </p>");
        document.write("<p>Created by steve Author </p>");
        

    } 
    
    else(numbers.indexOf(Number(keys.value))==-1);{
        document.write(keys.value+" <b> Sorry,we dont have that movie in our  library</b>");

    } 
     /*    
    else{

        
        document.write(" <b> That movie is at index " + numbers.indexOf(Number(keys.value))+" in my Video library and therfore its avaliable </b>");
        document.write("<p>the movie was created in 2015 </p>");
        document.write("<p>Created by steve Author </p>");
        
       
    }*/
} 


but.addEventListener('click',searchfun);