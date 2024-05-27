class Controller {
  constructor(services) {
    this.services = services;
  }

  async getAll(req, res) {
    try {
      const allItems = await this.services.findAll();
      return res.status(200).json(allItems);
    } catch (error) {
      return res.status(500).json({error: error.message});
    }
  }

  async getById(req, res) {
    try {
      const id = parseInt(req.params.id);
      const item = await this.services.findById(id);
      if (!item) {
        return res.status(404).json({ message: `id ${id} not found` });
      }
      return res.status(200).json(item);
    } catch (error) {
      return res.status(500).json({error: error.message});
    }
  }

  async create(req, res) {
    try {
      const item = req.body;
      const createdItem = await this.services.create(item);
      return res.status(201).json(createdItem);
    } catch (error) {
      return res.status(500).json({error: error.message});
    }
  }
  
  async update(req, res) {
    try {
      const id = parseInt(req.params.id);
      const item = req.body;
      const hasUpdated = await this.services.update(id, item);
      if (!hasUpdated) {
        return res.status(404).json({ message: `id ${id} not found` });
      }
      const updatedItem = await this.services.findById(id);
      return res.status(200).json(updatedItem);
    } catch (error) {
      return res.status(500).json({error: error.message});
    }
  }

  async replace(req, res) {
    try {
      const id = parseInt(req.params.id);
      const item = req.body;
      const upsertedItem = await this.services.upsert(id, item);
      return res.status(200).json(upsertedItem);
    } catch (error) {
      return res.status(500).json({error: error.message});
    }
  }

  async delete(req, res) {
    try {
      const id = parseInt(req.params.id);
      const hasDeleted = await this.services.delete(id);
      if (!hasDeleted) {
        return res.status(404).json({ message: `id ${id} not found` });
      }
      return res.status(200).json({ message: `id ${id} deleted` });
    } catch (error) {
      return res.status(500).json({error: error.message});
    }
  }
}

module.exports = Controller;