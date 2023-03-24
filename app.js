let exp = " ";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((eve)=>{
    eve.addEventListener('click',(mag)=>{
        if(mag.target.innerHTML == '=')
        {
            exp =eval(exp);
            document.querySelector('input').value=exp;
        }
        else if(mag.target.innerHTML =='C')
        {
            exp =""
            document.querySelector('input').value=exp;
        }
        else
        {
            console.log(mag.target);
            exp =exp + mag.target.innerHTML;
            document.querySelector('input').value=exp;
        }
    })
})