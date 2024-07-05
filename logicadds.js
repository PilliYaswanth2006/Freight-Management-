document.addEventListener("DOMContentLoaded",()=>
{
  console.log("added1");
  render();
  console.log("adde2");
  
});

function render() {
  console.log("comed");
    let requests = JSON.parse(localStorage.getItem('requests')) || [];
    let requestslist = document.getElementById('requestslist');
    
    requestslist.innerHTML = "";  // Clear the list before rendering

    for (let i = 0; i < requests.length; i++) {
        console.log("entered in the loop");

        let list = document.createElement('li');
        list.innerHTML = `
            <span>${requests[i].weight}</span>
            <br> <span>From: ${requests[i].from}</span>
            <br> <span>To: ${requests[i].to}</span>
            <br> <span>Description: ${requests[i].data}</span>
            <br> <button onclick="add(${i})">Add</button>
            <hr>
        `;
        requestslist.appendChild(list);
    }
}

function add(i) {
    let requests = JSON.parse(localStorage.getItem('requests')) || [];
    let adds = JSON.parse(localStorage.getItem('adds')) || [];
    let manage = JSON.parse(localStorage.getItem('manage')) || [];
    
    manage.push(requests[i]);  // Add the selected request to the manage array
    localStorage.setItem('manage', JSON.stringify(manage));
}
