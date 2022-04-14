const emailCollectorForm = document.getElementById("Email-Collector")

emailCollectorForm.addEventListener("submit", event =>{
    event.preventDefault();

    let ourFormData = new FormData(event.target);

    let userFirstName = ourFormData.get("firstName")
    let userEmailAddress = ourFormData.get("emailAddress")

    let updatedMainContent = `
    <h2>Congratulations ${userFirstName}!</h2>
    <p>You are on your way to becoming a BBQ Master!</p>
    <p class="fine-print">You will get weekly BBQ tips sent to ${userEmailAddress}</p>  
    `

    let newContentRefresh = document.getElementById("main-content")

    newContentRefresh.innerHTML = updatedMainContent
})