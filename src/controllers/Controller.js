class Controller {
  constructor(services) {
    this.services = services;
  }

  async getAll(req, res) {
    try {
      const allItems = await this.services.findAll();
      return res.status(200).json(allItems);
    } catch (error) {
      console.error(error);
    }
  }

  async getById(req, res) {
    const id = parseInt(req.params.id);
    try {
      const item = await this.services.findById(id);
      if (!item) {
        return res.status(404).json({ message: `id ${id} not found` });
      }
      return res.status(200).json(item);
    } catch (error) {
      console.error(error);
    }
  }

  async create(req, res) {
    const item = req.body;
    try {
      const createdItem = await this.services.create(item);
      return res.status(201).json(createdItem);
    } catch (error) {
      console.error(error);
    }
  }
  
  async update(req, res) {
    const id = parseInt(req.params.id);
    const item = req.body;
    try {
      const hasUpdated = await this.services.update(id, item);
      if (!hasUpdated) {
        return res.status(404).json({ message: `id ${id} not found` });
      }
      const updatedItem = await this.services.findById(id);
      return res.status(200).json(updatedItem);
    } catch (error) {
      console.error(error);
    }
  }

  async replace(req, res) {
    const id = parseInt(req.params.id);
    const item = req.body;
    try {
      const upsertedItem = await this.services.upsert(id, item);
      return res.status(200).json(upsertedItem);
    } catch (error) {
      console.error(error);
    }
  }

  async delete(req, res) {
    const id = parseInt(req.params.id);
    try {
      const hasDeleted = await this.services.delete(id);
      if (!hasDeleted) {
        return res.status(404).json({ message: `id ${id} not found` });
      }
      return res.status(200).json({ message: `id ${id} deleted` });
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = Controller;