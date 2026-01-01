/* ========= 1) DARK MODE ========= */

function toggleDarkMode(){
    document.body.classList.toggle("dark");
    localStorage.setItem("darkMode", document.body.classList.contains("dark"));
}

// keep user preference saved
if(localStorage.getItem("darkMode") === "true"){
    document.body.classList.add("dark");
}


/* ========= 2) TABLE SEARCH ========= */

function searchTable(){
    let input = document.getElementById("searchInput");
    let filter = input.value.toLowerCase();
    let rows = document.querySelectorAll("table tbody tr");

    rows.forEach(row=>{
        let text = row.innerText.toLowerCase();
        row.style.display = text.includes(filter) ? "" : "none";
    });
}


/* ========= 3) FORM VALIDATION ========= */

function validateForm(event){
    let inputs = document.querySelectorAll("input[required]");
    let valid = true;

    inputs.forEach(input=>{
        if(input.value.trim()===""){
            valid = false;
            input.style.borderColor="red";
        } else {
            input.style.borderColor="green";
        }
    });

    if(!valid){
        event.preventDefault();
        alert("Please fill all required fields");
    }
}


/* ========= 4) DELETE CONFIRMATION ========= */

function confirmDelete(){
    return confirm("Are you sure you want to delete?");
}


/* ========= 5) SIMPLE LOGIN HANDLER (Frontend simulation) ========= */
/* You will replace this later with real JAVA backend login */

function loginUser(event){
    event.preventDefault();

    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(user === "admin" && pass === "admin"){
        window.location.href="admin-dashboard.html";
    }
    else if(user === "teacher" && pass === "teacher"){
        window.location.href="teacher-dashboard.html";
    }
    else if(user === "student" && pass === "student"){
        window.location.href="student-dashboard.html";
    }
    else{
        alert("Invalid username or password");
    }
}
