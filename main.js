window.onload = function() {
    document.getElementById('button2').style.display ='none';
    document.getElementById('movinbttn').style.display ='none';
    document.getElementById('replaymsg').style.display ='none';
   }
   let wordArray = []
   let i;
   
   
   function addWords()
   {
     document.getElementById('button1').style.display ='none'; 
     let x = "";
   
     for (i = 0; i<3; i++){
       let word = prompt("Enter a word")
     wordArray.push(word);
      x = x + wordArray[i]+"<br>";
   }
   
    document.getElementById("demo").innerHTML = x;
    document.getElementById('button2').style.display ='inline';
   }
       function colorChange() 
     {
       document.getElementById('grad').className = "colorBlock2";
       document.getElementById('replaymsg').style.display ='inline';
       document.getElementById('title').style.display ='none';
       document.getElementById('movinbttn').style.display ='inline';
       }   
   
   function reverseWords()
   {  
      document.getElementById('demo').style.display ='none'
     let wordArray2 = wordArray.map(function(oneWord) {        return oneWord.charAt(oneWord.length - 1) + oneWord.substring(1, oneWord.length - 1) + oneWord.charAt(0); });
          (function(){
           let ul = document.createElement('ul');
           document.getElementById('demo2').appendChild(ul);
           wordArray2.forEach(renderWordList);
   
           function renderWordList(element, index, arr) {
               let li = document.createElement('li');
               ul.appendChild(li);
               li.innerHTML=li.innerHTML + element;
           }
       })();
   document.getElementById('button2').style.display ='none';
   
   
   }
   
