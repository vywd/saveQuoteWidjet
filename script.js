let dataArray = [
    {
        text: "11111111111111111",
        link: "11111111111"
    },
    {
        text: "2222222222222222",
        link: "2222222"
    }
];
//localStorage.getItem("SQW") ? dataArray=JSON.parse(localStorage.getItem("SQW")) : dataArray=[];
let lang = "en-US"
const temp1 = document.createElement('ul');
const btn = document.getElementById('btn');
const inp = document.getElementById('inp');

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
                        <a href="${dataArray[i].link}">Link</a>
                        </li>`
        }
        return result
    }
}

function saveQuoteWidjet() {
    temp1.innerHTML = renderQuoteList();
    btn.after(temp1)
}

btn.addEventListener('click', (e)=>{
    console.log(inp.value);
    e.preventDefault;
    dataArray = [...dataArray, {text: inp.value, link: window.location.href}];
    temp1.innerHTML = renderQuoteList();
})

///
///
///


saveQuoteWidjet();