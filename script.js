$("#client-form").submit(function(event){
    event.preventDefault();
    createClient();
  });
  
  const clients = [];
  
  class Client {
    
    nome;
    fone;
    email;
    cpf;
    cep;
    logradouro;
    numero;
    cidade;
    estado;
  
    constructor(nome, fone, email, cpf, cep, logradouro, numero, cidade, estado) {
      this.nome = nome;
      this.fone = fone;
      this.email = email;
      this.cpf = cpf;
      this.cep = cep;
      this.logradouro = logradouro;
      this.numero = numero;
      this.cidade = cidade;
      this.estado = estado;
    }
  }
  
  function createClient() {
    const nome = $("#nome").val();
    const fone = $("#fone").val();
    const email = $("#email").val();
    const cpf = $("#cpf").val();
    const cep = $("#cep").val();
    const logradouro = $("#logradouro").val();
    const numero = $("#numero").val();
    const cidade = $("#cidade").val();
    const estado = $("#estado").val();
    

  
    const client = new Client(nome, fone, email, cpf, cep, logradouro, numero, cidade, estado);
    storeClients(client);
    showClients();
  }
  
  function storeClients(client) {
    clients.push([ client.nome, client.fone, client.email, client.cpf, client.cep, client.logradouro, client.numero, client.cidade, client.estado ])
  }
  
  function showClients() {
  
    const table = $("#client-table").DataTable({
      paging: false,
      destroy: true,
      data: clients,
      bPaginate: false,
      bLengthChange: false,
      bFilter: false,
      bInfo: false,
      search: false,
      columns: [
             { title: 'Nome' },
             { title: 'Telefone' },
             { title: 'E-mail' },
             { title: 'CPF/CNPJ' },
             { title: 'CEP' },
             { title: 'Logradouro' },
             { title: 'Número' },
             { title: 'Cidade' },
             { title: 'Estado' },
      ]
  });
  }