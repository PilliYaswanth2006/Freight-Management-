function render() {
    let storage = JSON.parse(localStorage.getItem('storage')) || 0;
    let Storagebutton = document.getElementById("Storagebutton");
    Storagebutton.innerHTML = storage;

    let carryStorage = JSON.parse(localStorage.getItem("carryStorage")) || 0;
    let carryStorageButton = document.getElementById("carryStorage");
    carryStorageButton.innerHTML = carryStorage;

    let manage = JSON.parse(localStorage.getItem('manage')) || [];
    let managelist = document.getElementById("managelist");

    managelist.innerHTML = "";

    for (let i = 0; i < manage.length; i++) {
        let text = document.createElement('li');
        text.innerHTML = `
            <span>Weight: ${manage[i].weight}</span>
            <br> <span>From: ${manage[i].from}</span>
            <br> <span>To: ${manage[i].to}</span>
            <br> <span>Description: ${manage[i].data}</span>
            <br> <button onclick="add(${i})">Add</button>
            <hr>
        `;
        managelist.appendChild(text);
    }
}

function add(i) {
    let carryStorage = parseInt(JSON.parse(localStorage.getItem("carryStorage")) || 0);
    let storage = parseInt(JSON.parse(localStorage.getItem("storage")) || 100);
    let manage = JSON.parse(localStorage.getItem("manage")) || [];
    let manageValue = parseInt(manage[i].weight);
    let currentValue = manageValue + carryStorage;

    if (currentValue > storage) {
        const content = document.querySelector('.content');

        // Add the shake class to the content
        content.classList.add('shake');

        // Remove the shake class after the animation duration
        setTimeout(() => {
            content.classList.remove('shake');
            content.classList.add('shake-finish');

            // Remove the shake-finish class after a short delay
            setTimeout(() => {
                content.classList.remove('shake-finish');
            }, 300);
        }, 300);

        showToast(); // Match this duration with the animation duration in CSS
    } else {
        carryStorage = currentValue;
        localStorage.setItem("carryStorage", JSON.stringify(carryStorage));
        render();
    }
}

function showToast() {
    var toast = document.getElementById("toast");
    toast.className = "toast show"; // Use the correct class name
    setTimeout(function () {
        toast.className = toast.className.replace("show", "");
    }, 3000);
}

// Call render initially to load existing data
render();
