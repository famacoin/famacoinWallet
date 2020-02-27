# About famacoinWallet

famacoinWallet (fW) is a minimal browser application wholly devoted to FamaCoin transactions. It is in progress now ...
You can run famacoinWallet from https://famacoin.org/famacoinwallet/ or you can download all scripts, unzip them and run locally this browser application from the ~/famacoinWallet-master/index.html local folder. If you download the wallet, before running it you must edit the index.html file and place your <a hreff="https://infura.io/">own infura key </a>where it says '"put_your_infura_code_here', into web3 infura provider row.

fW is using the basic infura web3 provider, and web3.min.js, jquery-3.4.1.min.js, ethereumjs-tx-1.3.3.min.js and famacoin.min.js modules, to make interactions with FamaCoin smart contract on the Ethereum blockchain.In addition, it is using the qrcode.min.js module to generate the QR code of the public address.

# About Use

famacoinWallet cannot be used to perform offline fmc transactions or any other offline active interaction with the FamaCoin smart contract.

fW only does four basic things:

1. Check balances of Ether and FamaCoin. Balances appear automatically when an Ethereum public address is added using the "choose address with public key" option or "choose address with private key" option.
2. Transfer fmc from a wallet to another using the "fmc transfer..." option.
3. Close and open an auction using the "close auction..." option.
4. Make a bid using the "make a bid..." option.

The last three options require using the private key, so you must proceed with care.

# About Security

Please note that fW is in progress now so you must not use real Ether account yet. fW has not been through a comprehensive security review at this point. It is still experimental software, intended for small amounts of Ether and the only interaction with FamaCoin smart contract on the Ethereum blockchain. Do not expect anything else from fW yet.

fW does not store private keys anywhere. But you must be cautious while using private keys to interact with the FamaCoin smart contract when you are both transfering FamaCoin token, closing an auction or making a bid.
 
# License
This project is licensed under the MIT license, Copyright (c) 2016 FamaCoin, famacoin.org. For more detail see LICENSE.md

