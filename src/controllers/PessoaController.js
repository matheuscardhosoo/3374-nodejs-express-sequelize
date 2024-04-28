const Controller = require('./Controller');
const PessoaServices = require('../services/PessoaServices');

class PessoaController extends Controller{
  constructor(){
    super(new PessoaServices());
  }

  async getMatriculas(req, res){
    try {
      const estudanteId = parseInt(req.params.estudanteId);
      const matriculas = await this.services.findMatriculas(estudanteId);
      return res.status(200).json(matriculas);
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = PessoaController;