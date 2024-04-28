const Controller = require('./Controller');
const CategoriaServices = require('../services/CategoriaServices');

class CategoriaController extends Controller{
  constructor(){
    super(new CategoriaServices());
  }
}

module.exports = CategoriaController;