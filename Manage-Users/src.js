const heads = ["id", "name", "age", "status"]
let id = 1;
const addUser = document.querySelector("#addUser")
const dataWrap = document.querySelector("#dataWrap")

const readDataFromStorage = (itemKey="users",resType="json") =>{
    let data = localStorage.getItem(itemKey)
    if(resType=="json") {
        try{
            data = JSON.parse(data)||[]
        }
        catch(e){
            data = []
        }
    }
    return data
}

const writeDataToStorage = (data,itemKey="users")=> localStorage.setItem(itemKey, JSON.stringify(data))
if(addUser)
addUser.addEventListener("submit", (e)=>{
    e.preventDefault()
    const User = {}
    const data = readDataFromStorage()
    const ID = data.length === 0 ? 1 : parseInt(data.at(-1).id)+ 1
    addUser.elements['id'].value = ID
    
    heads.forEach(h=> User[h]= addUser.elements[h].value)
    data.push(User)
    writeDataToStorage(data)
    document.location.reload ()
})


if(dataWrap){
    const data = readDataFromStorage()
    
    data.forEach(d=>{
        console.log(data.indexOf(d))
        const user = document.createElement("div")
        dataWrap.appendChild(user)
        
        const rmButton = document.createElement("button")
        rmButton.innerText = `Remove User` 
        user.appendChild(rmButton)
        
        const statusButton = document.createElement("button")
        statusButton.innerText = `Change Status` 
        user.appendChild(statusButton)

        const p = document.createElement("p")
        p.innerText = `Name: ${d.name} \n Age: ${d.age} \n Status: ${d.status == "true"? "Active":"InActive"}`
        user.appendChild(p)
        
        
        rmButton.onclick = function () {
            //user.remove();
            data.splice(data.indexOf(d),1);
            writeDataToStorage(data)
            document.location.reload()  
        }

        statusButton.onclick = function () {
            if ( d.status == "true")
            {
                d.status = "false"
            }else{
            d.status = "true"
            }
                writeDataToStorage(data)
                document.location.reload()
        }
    })
}



