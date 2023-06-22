let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if((e.target.innerHTML == '=') && (string != "")){
      string = eval(string);
      string +=''
      let le = string.length;
      if(le > 10){
      string=string.substring(0,10);}
      document.querySelector('input').value = string;
    }
    else if((e.target.innerHTML == '=') && (string == "")){
        alert("Enter the value");
      }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'X'){
        string +='*'
        document.querySelector('input').value = string;
      }
      else if(e.target.innerHTML == '%'){
        string +='/100';
        string=eval(string);
        document.querySelector('input').value = string;
      }
      else if(e.target.innerHTML == 'DEL'){
        let len=string.length;
        string=string.slice(0,len-1);
        document.querySelector('input').value = string;
      }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  });
});
