const input = document.getElementById('input');
const submit = document.getElementById('make-card');
const sinput = document.getElementById('search');
const search = document.getElementById('search-card');
const cardObjs = document.getElementById('named-objs');

list = []

submit.onclick = () => {
    if (input.value == "") {return }
    
    list.push(input.value);
    console.log(list);

    const e = document.createElement('div');
    e.classList.add('named-obj');
    e.innerText = input.value;
    cardObjs.appendChild(e)

    input.value = "";
}

search.onclick = () => {
    if (cardObjs.childElementCount == 0) { return }
    let find = sinput.value;
    for (let i = 0; i < cardObjs.childElementCount; i++) { 
        if (list[i] == find) {
            find = i;
            break;
        }
    }
    console.log("Found Name at index:"+ find);
}
