import ethers from "../ethers";

const { ethers: etherjs } = ethers;
import abi from "../abi.js";
import { CONTRACT_ADDRESS, rpcURL } from "../demo.js";

const getContract = (
    isSigner = false,
    address = CONTRACT_ADDRESS,
    ABI = abi
) => {
    const provider = new etherjs.providers.JsonRpcProvider(rpcURL);
    
    const signerOrProvider = new etherjs.providers.Web3Provider(window.ethereum);
    const signer = signerOrProvider.getSigner(process.env.ACCOUNT_PRIVATE_KEY);
    
    const newProvider = isSigner ? signer : provider;
    return new etherjs.Contract(address, ABI, newProvider);



}; 

export default getContract;
