let check = document.getElementById("check")
fetch("https://backend-csav.onrender.com/api/data")
.then(res=>res.json()).then((data)=>{
    console.log(data.orders[0].id);
    check.innerHTML=`${data.orders[0].id}`
})