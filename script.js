const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deletAallEl = document.getElementById("delete-all-btn")
let myLeads = []
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads()
}

deletAallEl.addEventListener("click", function(){
    localStorage.clear()
    myLeads = []
    renderLeads()

})
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
    console.log(localStorage.getItem("myLeads"))
})

function renderLeads(){

    ulEl.innerHTML = myLeads.map(lead => `<li><a href="${lead}" target="_blank">${lead}</a><button id="delete-btn">X</button></li>`).join("");

}
