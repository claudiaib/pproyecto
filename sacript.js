document.querySelector('#login').addEventListener('submit',(e)=>{
    e.preventDefault();
    const nombre=document.getElementById('#usuario');
    const pass=document.getElementById('#password');
    const email=document.getElementById('#correo');
    console.log(nombre,pass)
    let prueva='ci975286@gmail.com';
    let esxpre=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    let mail=esxpre.test(prueva);
    console.log(mail);   true
   
    
    
       if(nombre=="Cludia"&& pass=="1258"){
        alert('usuario incorect')
       }
       else
       {
        
        window.location="index.html";
       }

    });