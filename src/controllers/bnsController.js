const bnsService = require('../services/bnsService');

class BnsController {
  async registerName(req, res) {
    const { name, owner, zoneFileHash } = req.body;
    try {
      const result = await bnsService.registerName(name, owner, zoneFileHash);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getName(req, res) {
    const { name } = req.params;
    try {
      const result = await bnsService.getName(name);
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({ message: 'Name not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateName(req, res) {
    const { name } = req.params;
    const { zoneFileHash } = req.body;
    try {
      const result = await bnsService.updateName(name, zoneFileHash);
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({ message: 'Name not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteName(req, res) {
    const { name } = req.params;
    try {
      const result = await bnsService.deleteName(name);
      if (result) {
        res.status(200).json({ message: 'Name deleted' });
      } else {
        res.status(404).json({ message: 'Name not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new BnsController();
