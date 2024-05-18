const { makeSTXTokenTransfer, broadcastTransaction, estimateTransfer } = require('@blockstack/stacks-transactions');
const { StacksTestnet } = require('@blockstack/stacks-network');
const { TransactionsApi } = require('@blockstack/stacks-blockchain-api-client');
const bitcoin = require('bitcoinjs-lib');
const axios = require('axios');

class BlockchainService {
  constructor() {
    this.network = new StacksTestnet();
    this.api = new TransactionsApi();
  }

  async registerName(name, owner, zoneFileHash) {
    // Implement Stacks registration logic here
  }

  async updateZoneFile(name, zoneFileHash) {
    // Implement Stacks update logic here
  }

  async getNameDetails(name) {
    // Implement logic to get name details from Stacks
  }

  async handleBitcoinTransaction(fromAddress, toAddress, amount, privateKey) {
    const keyPair = bitcoin.ECPair.fromWIF(privateKey);
    const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });

    if (address !== fromAddress) {
      throw new Error('Private key does not match the from address');
    }

    const utxos = await axios.get(`https://api.blockcypher.com/v1/btc/test3/addrs/${fromAddress}?unspentOnly=true`).then(res => res.data.txrefs);

    const txb = new bitcoin.TransactionBuilder(bitcoin.networks.testnet);

    let inputAmount = 0;
    utxos.forEach(utxo => {
      txb.addInput(utxo.tx_hash, utxo.tx_output_n);
      inputAmount += utxo.value;
    });

    const satoshiAmount = amount * 1e8;
    const fee = 10000;
    const change = inputAmount - satoshiAmount - fee;

    txb.addOutput(toAddress, satoshiAmount);
    if (change > 0) {
      txb.addOutput(fromAddress, change);
    }

    utxos.forEach((utxo, index) => {
      txb.sign(index, keyPair);
    });

    const rawTransaction = txb.build().toHex();

    const txId = await axios.post('https://api.blockcypher.com/v1/btc/test3/txs/push', { tx: rawTransaction }).then(res => res.data.tx.hash);

    return txId;
  }
}

module.exports = new BlockchainService();
