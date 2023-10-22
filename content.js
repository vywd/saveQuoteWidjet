localStorage.getItem("SQW") ? dataArray=JSON.parse(localStorage.getItem("SQW")) : dataArray=[];
let lang = "en-US"
const temp1 = document.createElement('ul');
const btn = document.getElementById('btn');
const inp = document.getElementById('inp');
const spans = document.getElementsByTagName('span');

function renderQuoteList() {
    if (dataArray.length == 0) {
        return "Your quotelist is empty"
    } else {
        let result = ""
        for (let i = 0; i<dataArray.length; i++){
            result += `<li>
                        <div>
                            <p>${dataArray[i].text}</p>
                            <span>&times;</span>
                        </div>
                        <a href="${dataArray[i].link}/#${dataArray[i].text}" target="_blank">Link</a>
                        </li>`
        }
        return result
    }
}
function addELs() {
    Array.from(spans).forEach((span,index)=>span.addEventListener("click",()=>{
        dataArray.splice(index, 1)
        saveQuoteWidjet();
    })) 
}

function saveQuoteWidjet() {
    temp1.innerHTML = renderQuoteList();
    btn.after(temp1);
    addELs();
}

btn.addEventListener('click', async (e)=>{
    e.preventDefault; 
    chrome.runtime.sendMessage({type: "getURL"});
    chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
        if (message.type === "url") {
            dataArray = [{text: inp.value, link: message.url}, ...dataArray];
            temp1.innerHTML = renderQuoteList();
            addELs();
            localStorage.setItem("SQW", JSON.stringify(dataArray))
            inp.value = "";
        }
      });
});

saveQuoteWidjet();