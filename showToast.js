export const showToast=(opeartion,id)=>{
    const toast = document.querySelector("div");
    toast.classList.add("toast");

    if(opeartion==='add'){
        toast.textContent= `Product with ID ${id} has been added.`;
    }
    else{
        toast.textContent = `Product with ID ${id} has been removed.`;
    }

    document.body.append(toast)

    setTimeout(() => {
        toast.remove();
    }, 2000);
}