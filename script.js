const userEmail = document.getElementById('user-email');
const userName = document.getElementById('user-name');
const btnSetItem = document.getElementById('btnSetItem');
const product = document.getElementsByClassName('productDescription').value;


setItemLocal=()=>{
          localStorage.setItem('name',`${userName.value}`);
        localStorage.setItem('email',`${userEmail.value}`);
    }

setCartLocal=()=>{
  localStorage.setItem('product',`${product.value}`);

}

createUser=()=>{
  window.prompt('Coloque seu email');
  localStorage.setItem('email',`${prompt.value}`);
}