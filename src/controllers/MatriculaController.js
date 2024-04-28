const Controller = require('./Controller');
const MatriculaServices = require('../services/MatriculaServices');

class MatriculaController extends Controller{
  constructor(){
    super(new MatriculaServices());
  }
}

module.exports = MatriculaController;