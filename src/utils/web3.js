// web3.js

import Web3 from 'web3';

const web3 = new Web3('https://alfajores-forno.celo-testnet.org');

const userRegistryContractAddress = '0x123456789...'; // Address of deployed UserRegistry contract
const postStorageContractAddress = '0x987654321...'; // Address of deployed PostStorage contract

async function registerUser() {
    const userRegistryContract = new web3.eth.Contract(UserRegistryABI, userRegistryContractAddress);
    await userRegistryContract.methods.registerUser().send({ from: userAddress });
    console.log('User registered successfully!');
}

async function createPost(content) {
    const postStorageContract = new web3.eth.Contract(PostStorageABI, postStorageContractAddress);
    await postStorageContract.methods.createPost(content).send({ from: userAddress });
    console.log('Post created successfully!');
}
