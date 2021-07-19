const userEmail = document.getElementById('user-email');
const userName = document.getElementById('user-name');
const btnSetItem = document.getElementById('btnSetItem');

setItemLocal=()=>{
          localStorage.setItem('name',`${userName.value}`);
        localStorage.setItem('email',`${userEmail.value}`);
    }
