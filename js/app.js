function inscricao (){
    // Conseguindo as informações
    let nome = document.getElementById('nome').value;
    let dataNascimento = document.getElementById('dataNascimento').value;
    let cpf = document.getElementById('cpf').value;
    let sexo = document.getElementById('sexo').value;
    let email = document.getElementById('e-mail').value;
    let telefone = document.getElementById('telefone').value;
    let identidade = document.getElementById('identidade').files;
    let cep = document.getElementById('cep').value;
    let rua = document.getElementById('rua').value;
    let numero = document.getElementById('numero').value;
    let cidade = document.getElementById('cidade').value;
    let estado = document.getElementById('estado').value;
    let comprovante = document.getElementById('comprovante').files;
    let trilha = document.querySelector('input[name="trilha"]:checked') ? document.querySelector('input[name="trilha"]:checked').value : '';

    //Chamadas de verificação
   limparMensagens();
   verificaNome(nome);
   verificaDataNascimento(dataNascimento);
   verificaCPF(cpf);
   verificaSexo(sexo);
   verificaEmail(email);
   verificaTelefone(telefone);
   verificaIdentidade(identidade);
   verificaCEP(cep);
   verificaRua(rua);
   verificaNumero(numero);
   verificaCidade(cidade);
   verificaEstado(estado);
   verificaComprovante(comprovante);
   verificaTrilha(trilha);

    //Verifica se tem algum erro
    let campos = ['nome', 'dataNascimento', 'cpf', 'sexo', 'e-mail', 'telefone', 'identidade', 'cep', 'rua', 'numero', 'cidade', 'estado', 'comprovante', 'trilha'];
    let temErro = false;

    campos.forEach(campo => {
        let erroTexto = document.getElementById(`erro-${campo}`).textContent;
        if (erroTexto !== '') {
            temErro = true;
        }
    });

    if (!temErro) {
        alert('Inscrição efetuada com sucesso!');
    }
}

function verificaNome(nome) {
   if (nome === '') {
       mensagemErro('nome', 'Preencha com seu nome completo');
   }
}

function verificaDataNascimento(dataNascimento) {
   if (dataNascimento === '') {
       mensagemErro('dataNascimento', 'Preencha com sua data de nascimento');
   }
}

function verificaCPF(cpf) {
   if (cpf === '') {
       mensagemErro('cpf', 'Preencha com seu CPF');
   }else if (!/^\d{11}$/.test(cpf)) {
    mensagemErro('cpf', 'O CPF deve conter exatamente 11 dígitos numéricos');
}
}

function verificaSexo(sexo) {
   if (sexo === '') {
       mensagemErro('sexo', 'Selecione seu sexo');
   }
}

function verificaEmail(email) {
   if (email === '') {
       mensagemErro('e-mail', 'Preencha com seu e-mail');
   }else if (!email.includes('@')) {
    mensagemErro('e-mail', 'Insira um e-mail válido');
    }
}

function verificaTelefone(telefone) {
   if (telefone === '') {
       mensagemErro('telefone', 'Preencha com seu telefone');
   }
}

function verificaIdentidade(identidade) {
   if (identidade.length === 0) {
       mensagemErro('identidade', 'Envie uma cópia da identidade');
   }
}

function verificaCEP(cep) {
   if (cep === '') {
       mensagemErro('cep', 'Preencha com seu CEP');
   }
}

function verificaRua(rua) {
   if (rua === '') {
       mensagemErro('rua', 'Preencha com sua rua');
   }
}

function verificaNumero(numero) {
   if (numero === '') {
       mensagemErro('numero', 'Preencha com o número da residência');
   }
}

function verificaCidade(cidade) {
   if (cidade === '') {
       mensagemErro('cidade', 'Preencha com sua cidade');
   }
}

function verificaEstado(estado) {
   if (estado === '') {
       mensagemErro('estado', 'Preencha com seu estado');
   }
}

function verificaComprovante(comprovante) {
   if (comprovante.length === 0) {
       mensagemErro('comprovante', 'Envie um comprovante de residência');
   }
}

function verificaTrilha(trilha) {
    if (trilha === '') {
        mensagemErro('trilha', 'Selecione uma trilha');
    }
}

function mensagemErro(campo, mensagem) {
    document.getElementById(`erro-${campo}`).textContent = mensagem;
    let input = document.getElementById(campo);
    input.style.border = '2px solid #DC2626';
}

function cancelar() {
    document.getElementById('nome').value = '';
    document.getElementById('dataNascimento').value = '';
    document.getElementById('cpf').value = '';
    document.getElementById('sexo').value = '';
    document.getElementById('e-mail').value = '';
    document.getElementById('telefone').value = '';
    document.getElementById('cep').value = '';
    document.getElementById('rua').value = '';
    document.getElementById('numero').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
    document.getElementById('identidade').value = '';
    document.getElementById('comprovante').value = '';
    document.getElementById('declaracao').checked = false;
    let trilhas = document.querySelectorAll('input[name="trilha"]');
    trilhas.forEach(trilha => trilha.checked = false);

    limparMensagens();

    alert('Inscrição cancelada');
}

function limparMensagens(){
    let campos = ['nome', 'dataNascimento', 'cpf', 'sexo', 'e-mail', 'telefone', 'identidade', 'cep', 'rua', 'numero', 'cidade', 'estado', 'comprovante', 'trilha'];
    campos.forEach(campo => {
        document.getElementById(`erro-${campo}`).textContent = '';
        let input = document.getElementById(campo);
        if(input) {
            input.style.border = '';
        }
    });
}