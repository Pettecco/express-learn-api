class Controller {
  constructor(entityService) {
    this.entityService = entityService;
  }

  async getAll(req, res) {
    try {
      const registersList = await this.entityService.getAll();
      return res.status(200).json(registersList);
    } catch (error) {
      // erro
    }
  }
}

module.exports = Controller;
