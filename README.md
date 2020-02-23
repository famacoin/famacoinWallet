# About famacoinWallet
famacoinWallet (fW) is a minimal browser application wholly devoted to FamaCoin transactions. It is in progress now ...
You can run famacoinWallet from https://famacoin.org/famacoinwallet/ or you can download all scripts and run locally this browser application from the ~/famacoinwallet/ folder.

# About Use

fW is using the basic infura web3 provider and web3.min.js module, to make interactions with FamaCoin smart contract on the Ethereum blockchain. Thus, famacoinWallet cannot be used to perform offline FamaCoin transactions or any other offline active interaction with the FamaCoin smart contract.

fW only does four basic things:
1. Check balances of Ether and FamaCoin. Balances appear automatically when an Ethereum public address is added using the "choose address with public key" option or "choose address with private key" option.
2. Transfer FamaCoin from a wallet to another using the "fmc transfer..." option.
3. Close an auction using the "close auction..." option.
4. Make a bid using the "make a bid..." option. 
The last three options require using the private key, so you must proceed with care.

# About Security

Please note that fW is in progress now so you must not use real Ether account yet. fW has not been through a comprehensive security review at this point. It is still experimental software, intended for small amounts of Ether and the only interaction with FamaCoin smart contract on the Ethereum blockchain. Do not expect anything else from fW yet.

fW does not store private keys anywhere. But you must be cautious when using private keys to interact with the FamaCoin smart contract when you are both transfering FamaCoin, closing an auction or making a bid.
 
# License
This project is licensed under the MIT license, Copyright (c) 2016 FamaCoin, famacoin.org. For more detail see LICENSE.md

