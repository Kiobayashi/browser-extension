const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
let myLeads = []
let leadsFromLocalStorage = JSON.parse(localStorage.getItem(myLeads))
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
    console.log(localStorage.getItem("myLeads"))
})

function renderLeads(){

    ulEl.innerHTML = myLeads.map(lead => `<li><a href="${lead}" target="_blank">${lead}</a></li>`).join("");

}
