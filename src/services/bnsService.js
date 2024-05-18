const BNS = require('../models/bnsModel');
const blockchainService = require('./blockchainService');

class BnsService {
  async registerName(name, owner, zoneFileHash) {
    await blockchainService.registerName(name, owner, zoneFileHash);
    const newName = new BNS({ name, owner, zoneFileHash });
    return await newName.save();
  }

  async getName(name) {
    const nameDetails = await blockchainService.getNameDetails(name);
    if (nameDetails) {
      return nameDetails;
    }
    return await BNS.findOne({ name });
  }

  async updateName(name, zoneFileHash) {
    await blockchainService.updateZoneFile(name, zoneFileHash);
    return await BNS.findOneAndUpdate({ name }, { zoneFileHash }, { new: true });
  }

  async deleteName(name) {
    return await BNS.findOneAndDelete({ name });
  }
}

module.exports = new BnsService();
