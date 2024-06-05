function checkandprint() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
    let gender;
    let pass = document.getElementById("pass").value;
    let passc = document.getElementById("passc").value;

    if (name.length < 5) {
        alertname1.style.display = "block";
        return;
    } else {
        alertname1.style.display = "none";
    }

    for (let i = 0; i < name.length; i++) {
        if (!isNaN(parseInt(name[i]))) {
            alertname2.style.display = "block";
            return;
        } else {
            alertname2.style.display = "none";
        }
    }

    if (!email.endsWith("@gmail.com")) {
        alertgmail.style.display = "block";
        return;
    } else {
        alertgmail.style.display = "none";
    }

    if (number.toString().length !== 10) {
        alertnum.style.display = "block";
        return;
    } else {
        alertnum.style.display = "none";
    }

    gender = document.getElementById("genbut").innerText.trim();
    if (!gender) {
        alertgen.style.display = "block";
        return;
    } else {
        alertgen.style.display = "none";
    }

    if (pass.length < 8) {
        alertpass1.style.display = "block";
        return;
    } else {
        alertpass1.style.display = "none";
    }

    if (pass !== passc) {
        alertpass2.style.display = "block";
        return;
    } else {
        alertpass2.style.display = "none";
    }

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone Number:", number);
    console.log("Gender:", gender);
    console.log("\n");

    mainbox.classList.remove("open-mainbox");
    togglesecbox()
}

function togglesecbox(){
    let secbox = document.getElementById("secbox");
    secbox.classList.add("open-secbox");
}

function checkandprintsport(){
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let checkedboxes=[];
    for(let i=0 ; i<checkboxes.length;i++)
        {
           if(checkboxes[i].checked)
            {
                checkedboxes.push(checkboxes[i].labels[0].innerText);
           
            }
        }
    if(checkedboxes.length==0){
        alertsport=document.getElementById("alertsport")
        alertsport.style.display="block";
        return;
    }
  
    if(checkedboxes.length>0)
        {
            console.log("Sports Selected:" , checkedboxes.toString());
        }
    secbox.classList.remove("open-secbox");
    thanks.classList.add("open-thanks");
}

function closereg(){
  thanks.classList.remove("open-thanks");

}

function toggle() {
    let option = document.getElementById("genopt");
    if (option.style.display === "block") {
        option.style.display = "none";
    } else {
        option.style.display = "block";
    }
}

function selectopt(a) {
    event.preventDefault();
    document.getElementById("genbut").innerText = a;
    toggle();
}

document.addEventListener('click', function (event) {
    let but = document.getElementById('genbut');
    let con = document.getElementById('genopt');
    if (!but.contains(event.target) && !con.contains(event.target)) {
        con.style.display = "none";
    }
});


function togglepop() {
    let mainbox = document.getElementById("mainbox");
    mainbox.classList.add("open-mainbox");
}

let butt1 = document.getElementById('nextbut1');


butt1.addEventListener('click', function(event) {
    event.stopPropagation();
    togglepop();
});

document.addEventListener('click', function (event) {
    let mainbox = document.getElementById("mainbox");
    if (mainbox.classList.contains("open-mainbox") && !mainbox.contains(event.target)) {
        mainbox.classList.remove("open-mainbox");
      
    }

});
