const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deletAallEl = document.getElementById("delete-all-btn")
const tabBtn = document.getElementById("tab-btn")
let myLeads = []
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url
    })
    myLeads.push(url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})
deletAallEl.addEventListener("click", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)

})
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

function render(leads) {
    ulEl.innerHTML = leads.map((lead, index) => `
        <li>
            <a href="${lead}" target="_blank">${lead}</a>
            <button class="delete-btn" data-index="${index}">X</button>
        </li>
    `).join("");
}

ulEl.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-btn")) {
        const indexToDelete = event.target.getAttribute("data-index");
        myLeads.splice(indexToDelete, 1);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    }
});