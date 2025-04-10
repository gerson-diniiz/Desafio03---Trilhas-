function inscricao (){
 
    let nome = document.getElementById('nome').value;
    let senha = document.getElementById('senha').value;
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
    let declaracao = document.getElementById('declaracao');

   limparMensagens();
   verificaNome(nome);
   verificaSenha(senha);
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
   verificaDeclaracao(declaracao);

    let campos = ['nome', 'senha', 'dataNascimento', 'cpf', 'sexo', 'e-mail', 'telefone', 'identidade', 'cep', 'rua', 'numero', 'cidade', 'estado', 'comprovante', 'trilha', 'declaracao'];
    let temErro = false;

    campos.forEach(campo => {
        let erroTexto = document.getElementById(`erro-${campo}`).textContent;
        if (erroTexto !== '') {
            temErro = true;
        }
    });

    if (!temErro) {
        alert('Inscrição efetuada com sucesso!');
        salvarDados();
    }
}

function verificaNome(nome) {
   if (nome === '') {
       mensagemErro('nome', 'Preencha com seu nome completo');
   }
}

function verificaSenha(senha) {
    if (senha === '') {
        mensagemErro('senha', 'Preencha com sua senha');
    } else if (senha.length < 6) {
        mensagemErro('senha', 'A senha deve ter pelo menos 6 caracteres');
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
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
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

function verificaDeclaracao(declaracao){
    if(!declaracao.checked){
        mensagemErro('declaracao', 'Aceite os termos e condições');
    }
}

function mensagemErro(campo, mensagem) {
    document.getElementById(`erro-${campo}`).textContent = mensagem;
    let input = document.getElementById(campo);
    if (input) {
        input.classList.add('formulario__input__erro');
    }
}

function cancelar() {
    document.getElementById('nome').value = '';
    document.getElementById('senha').value = '';
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
    window.location.href = "/login.html";
}

function limparMensagens(){
    let campos = ['nome', 'senha', 'dataNascimento', 'cpf', 'sexo', 'e-mail', 'telefone', 'identidade', 'cep', 'rua', 'numero', 'cidade', 'estado', 'comprovante', 'trilha', 'declaracao'];
    campos.forEach(campo => {
        document.getElementById(`erro-${campo}`).textContent = '';
        let input = document.getElementById(campo);
        if(input) {
            input.classList.remove('formulario__input__erro');
        }
    });
}

function salvarDados(){
    let cpf = document.getElementById('cpf').value.trim();
    let senha = document.getElementById('senha').value.trim();

    verificaCPF(cpf);
    verificaSenha(senha);

    if (cpf !== '' && senha !== '') {
        
            sessionStorage.setItem('cpf', cpf);
            sessionStorage.setItem('senha', senha);

  
            sessionStorage.setItem('nome', document.getElementById('nome').value.trim());
            sessionStorage.setItem('dataNascimento', document.getElementById('dataNascimento').value);
            sessionStorage.setItem('sexo', document.getElementById('sexo').value);
            sessionStorage.setItem('email', document.getElementById('e-mail').value.trim());
            sessionStorage.setItem('telefone', document.getElementById('telefone').value.trim());
            sessionStorage.setItem('cep', document.getElementById('cep').value.trim());
            sessionStorage.setItem('rua', document.getElementById('rua').value.trim());
            sessionStorage.setItem('numero', document.getElementById('numero').value.trim());
            sessionStorage.setItem('cidade', document.getElementById('cidade').value.trim());
            sessionStorage.setItem('estado', document.getElementById('estado').value.trim());

        let trilhaSelecionada = document.querySelector('input[name="trilha"]:checked');
        if (trilhaSelecionada) {
                sessionStorage.setItem('trilha', trilhaSelecionada.value);
        }

        let declaracao = document.getElementById('declaracao').checked;
            sessionStorage.setItem('declaracao', declaracao);

        window.location.href = "/login.html";
    }
}

function login(){
    console.log("Função login() chamada");

    let cpf = document.getElementById('cpf').value.trim();
    let senha = document.getElementById('senha').value.trim();

    verificaCPF(cpf);
    verificaSenha(senha);

    const cpfArmazenado =       sessionStorage.getItem('cpf');
    const senhaArmazenada =     sessionStorage.getItem('senha');

    if (cpf === cpfArmazenado && senha === senhaArmazenada) {
        alert('Login realizado com sucesso!');
        window.location.href = "/index.html";
        restaurarDados();
    } else {
        mensagemErro('mensagem', 'CPF ou senha incorretos');
    }
}

function restaurarDados() {
    const campos = [
        'nome',
        'dataNascimento',
        'cpf',
        'sexo',
        'e-mail',
        'telefone',
        'cep',
        'rua',
        'numero',
        'cidade',
        'estado',
        'senha'
    ];

    campos.forEach(campo => {
        const valor =       sessionStorage.getItem(campo);
        if (valor !== null && document.getElementById(campo)) {
            document.getElementById(campo).value = valor;
        }
    });

    const declaracao =      sessionStorage.getItem('declaracao') === 'true';
    const inputDeclaracao = document.getElementById('declaracao');
    if (inputDeclaracao) {
        inputDeclaracao.checked = declaracao;
    }

    const trilha =      sessionStorage.getItem('trilha');
    if (trilha) {
        const inputTrilha = document.querySelector(`input[name="trilha"][value="${trilha}"]`);
        if (inputTrilha) inputTrilha.checked = true;
    }
}

window.addEventListener('DOMContentLoaded', restaurarDados);