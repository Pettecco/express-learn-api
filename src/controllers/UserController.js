const Controller = require('./Controller.js');
const UserServices = require('../services/UserServices.js');

const usersService = new UserServices();

class UserController extends Controller {
  constructor() {
    super(usersService);
  }
}

module.exports = UserController;
