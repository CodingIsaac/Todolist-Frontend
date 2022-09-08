const abi =
[{"inputs":[{"internalType":"string","name":"_message","type":"string"},
{"internalType":"string","name":"_title","type":"string"}],
"name":"createToDo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],
"name":"deleteTask","outputs":[],"stateMutability":"nonpayable","type":"function"}
,{"inputs":[],"name":"getTodo","outputs":[{"components":[{"internalType":"string","name":"message","type":"string"}
,{"internalType":"string","name":"title","type":"string"},{"internalType":"bool","name":"taskCompleted","type":"bool"}],
"internalType":"struct ToDoList.Todo[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"todos","outputs":[{"internalType":"string","name":"message","type":"string"},
{"internalType":"string","name":"title","type":"string"},{"internalType":"bool","name":"taskCompleted","type":"bool"}],"stateMutability":"view","type":"function"}
,{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"toggleCOmpleted","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"},
{"internalType":"string","name":"_newMessage","type":"string"},{"internalType":"string","name":"_newTitle","type":"string"}],

"name":"updateToDo","outputs":[],"stateMutability":"nonpayable","type":"function"}]

export default abi;