const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
let myLeads = []
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    renderLeads()
    inputEl.value = "";
})

function renderLeads(){

    ulEl.innerHTML = myLeads.map(lead => `<li><a href="${lead}" target="_blank">${lead}</a></li>`).join("");

}
