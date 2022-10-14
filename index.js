
const form = document.forms['input'] //gets the form 
const WEB_APP_URL = ''
const appScriptUrl = WEB_APP_URL //web app url

form.addEventListener('submit',(data)=>{

    data.preventDefault();

    fetch(appScriptUrl,{method:'POST', body: new FormData(form)})
    .then(response => alert("Data Send"))
    .catch(error => console.error('Error!',error.message))

})
