const Services = require('./Services');

class PessoaServices extends Services {
  constructor() {
    super('Pessoa');
  }

  async findMatriculas(estudanteId){
    const pessoa = await this.findById(estudanteId);
    return await pessoa.getAulasMatriculadas();
  }
}

module.exports = PessoaServices;