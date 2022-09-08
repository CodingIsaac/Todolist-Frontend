import getContract from "./utils/contract.js";

async function getTodoList() {
    const contract = getContract();
    try {
        const response = await contract.getTodo();
        const formattedRes = response.map((item) => {
            return {
                name: item[0],
                description: item[1],
                status: item[2]
            }
        })

        return formattedRes;

    }
    catch (error) {
        console.log("error occured", error)

    }
}

const updateTodo = async () => {
    const data = await getTodoList();
    data.forEach((item) => {
        todos.innerHTML += `
        <li class='my-2 bg-blue-800 text-white p-4 flex justify-between items-center'>
      <span>
        <span class='font-bold'>${item.name}:</span> ${item.description}
      </span> 
      <span class='inline-block text-right'>
        <button class='bg-white text-black p-3'>Edit</button> 
        <button class='bg-green-500 p-3'>Toggle status</button> 
        <button class='bg-red-500 p-3'>Del</button></li>
      </span>`;

    })
}

updateTodo();

createToDoBTN.addEventListerner("click", async (e) => {
    e.preventDefault();
    // if (typeof window.ethereum !== "undefined") {
    //     ethereum.request({method: "eth_requestAccounts"});
    // }
    const todoTitle = tdTitle.value;
    const todoDescription = tdDescription.value;

    console.log(todoTitle);

    await createNewTodo (todoTitle, todoDescription);
} )

async function createNewTodo(message, title) {
    const contract = getContract(true);
    try {
        const tnx = await contract.createToDo(message, title);
        const receipt = tnx.wait();

        todos.innerHTML = "";
        await updateTodo();
        console.log("Here you go: ", receipt)

    }
    catch(error) {
        console.log("Error Occured", error);
    } finally {
        console.log("Undefeated");
    }
}