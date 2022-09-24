


const storageKey='STORAGE_KEY'
const submitAction=document.getElementById('form-data-user');

document.addEventListener('DOMContentLoaded',function(){

    document.getElementById('conPass').addEventListener('change',function(){
        console.log('confirm: change');
        const inputPassword=document.getElementById('pass').value;
        const inputConPassword = document.getElementById('conPass').value;
        const signUpButtonStatus = document.getElementById('signUp');
    
        if(inputConPassword !== inputPassword){
            const para = document.createElement("p");
            para.classList.add('hapus');
            para.innerHTML = "Password berbeda !";
            para.style.left='0';
            para.style.color='red';
            para.style.fontSize='10px';
            document.getElementById('form').appendChild(para);
        } else {
            signUpButtonStatus.removeAttribute('disabled');
            signUpButtonStatus.style.cursor='pointer';
            var x = document.getElementById('form').querySelectorAll('.hapus');
            x[0].remove();
            x[1].remove();
            x[2].remove();
            x[3].remove();
            x[4].remove();
        }

    });

    submitAction.addEventListener('submit', function(event){
        const inputNama=document.getElementById('nama').value;
        const inputEmail=document.getElementById('email').value;
        const inputPassword=document.getElementById('pass').value;
        const newUserData={
            nama:inputNama,
            email:inputEmail,
            password:inputPassword
        }
        if(newUserData!==null){
            alert('Selemat! Anda sudah terdaftar :D')
        }
        event.preventDefault();
    });

})

