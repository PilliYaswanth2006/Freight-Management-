document.addEventListener("DOMContentLoaded",()=>
{
  console.log("add event listener");
  let save = document.getElementById("request");
  save.addEventListener("click",() =>
  {
    request();
    
    
  }
  );
});
function request() {
  console.log("enterded");
  
  let from = document.getElementById("from");
  
   let to = document.getElementById("to");
    let weight = document.getElementById("weight");
    let data = document.getElementById("description");

let request = {
    weight: weight.value,
    data: data.value,
    from: from.value,
    to: to.value
};


  let requests = JSON.parse(localStorage.getItem('requests')) || [];
  requests.push(request);
  localStorage.setItem("requests", JSON.stringify(requests));
}

