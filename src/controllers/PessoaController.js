const Controller = require('./Controller');
const PessoaServices = require('../services/PessoaServices');

class PessoaController extends Controller{
  constructor(){
    super(new PessoaServices());
  }
}

module.exports = PessoaController;