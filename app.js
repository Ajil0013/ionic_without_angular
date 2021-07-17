const clBtn=document.querySelector("#clear");
const addBtn=document.querySelector("#add");
const reason=document.querySelector("#ex-method");
const amount=document.querySelector("#ex-amount");
const exlist=document.querySelector("#expense-list");
const total=document.querySelector("#totexp");

let totalamt=0;

const cleartext = () => {
    reason.value="";
    amount.value="";
}

addBtn.addEventListener('click',()=>{
    const ex_method=reason.value;
    const ex_amount=amount.value;
    if (ex_method.trim().length<=0 || ex_amount.trim().length<=0 || ex_amount<=0){
        return;
    }
    const newitem=document.createElement("ion-item");
    newitem.textContent=ex_method+" :₹"+ex_amount;
    exlist.appendChild(newitem);
    cleartext();
    totalamt+=+ex_amount;
    total.textContent=totalamt;
});

clBtn.addEventListener('click',()=>{
    cleartext();
})