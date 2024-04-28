const Controller = require('./Controller');
const CursoServices = require('../services/CursoServices');

class CursoController extends Controller{
  constructor(){
    super(new CursoServices());
  }
}

module.exports = CursoController;