const Task = document.getElementById('addTask');
const output = document.getElementById('output');


let taskData = [];

const addTask = ()=>{
    if(!Task.value) return
    taskData.push(Task.value)
    showData()
}

const showData = (data = taskData)=>{
    Task.value = '';
    output.innerHTML = '';
    for(let i = 0; i < data.length; i++){
        output.innerHTML += `
        <label for="${i}" class="flex items-center justify-between w-full bg-slate-300 p-2 rounded-2xl">
            <div class="w-fit gap-2 flex items-center">
                <input id="${i}" onclick="checkeds(this.id)" type="checkbox">
                <p id="p${i}" class="font-semibold text-wrap">${data[i]}</p>
            </div>
            <div class='w-fit icon relative right-0'>
                <i onclick="editData(${i})" class="fa-solid z-10 fa-pen-to-square text-blue-500"></i>
                <i onclick="deleteData(${i})" class="fa-solid z-10 fa-trash text-red-500"></i>
            </div>
        </label>
    `;
    }

}

const checkeds = (id)=>{
    const inp = document.getElementById(id);
    const p = document.getElementById('p'+id);
    console.log(inp.checked)
    switch(inp.checked){
        case true:
            p.style.textDecoration = 'line-through';
        break;
        case false:
            p.style.textDecoration = 'none';
        break;
    }
}

const deleteData = (i)=>{
    taskData.splice(i,1);
    showData()
}
const submit = document.getElementById('su')
const update = document.getElementById('up')
let upI = null;
const editData = (i)=>{
    submit.style.display = 'none'
    update.style.display = 'block'
    Task.value = taskData[i];
    upI = i;
}

const updateTask = ()=>{
    submit.style.display = 'block'
    update.style.display = 'none'
    taskData[upI] = Task.value;
    showData()
}

const search = document.getElementById('search');
search.addEventListener('keyup',()=>{
    let dataTwo = taskData.filter((e)=>{
        return e.includes(search.value)
    })
    showData(dataTwo)
})