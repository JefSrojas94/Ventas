const form=document.getElementById("myForm");
console.log(form);
const infoForm=[];

form.addEventListener("submit", e =>{
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target))
    infoForm.push(data);
    form.reset();
    console.log(infoForm);
})