    let variable = document.getElementById("perfil"); // Armazena o elemento com ID "root" em uma variável
    async function buscaDados() {
      console.log("carregando..."); // Imprime "carregando..." no console
      try {
        variable.innerText = "estamos configurando sua conta..."; // Define o texto do elemento com ID "root" como "estamos configurando sua conta..."
        const response = await fetch("https://api.github.com/users/devmariano"); // Faz uma requisição GET para a API do GitHub e aguarda a resposta
        const dados = await response.json(); // Converte a resposta em um objeto JSON e armazena na variável "dados"
        console.log(dados); // Imprime os dados do usuário no console

        variable.innerHTML = `
            <h2>Login: ${dados.login}</h2>
            <img class="image" src="${dados.avatar_url}" alt="Imagem do perfil do usuário">
            <p>Nome: ${dados.name}</p>
            <p>Username: ${dados.login}</p>
            <p>Data da criação do perfil: ${dados.created_at}</p>
            <a href="${dados.html_url}">Clique para acessar o perfil</a>
          `;
      } catch (e) {
        console.log(e); // Imprime o erro
        // Lida com erros (não utilizado no código atual)
      } finally {
        console.log("finalizando..."); // Imprime "finalizando..." no console
        // Lida com a lógica que deve ser executada independentemente de haver ou não erros (não utilizado no código atual)
      }
    }
    
    buscaDados(); // Chama a função "buscaDados" para iniciar o processo de busca dos dados do usuário
    /*
    Observe que o código usa o método document.getElementById() para obter o elemento com ID "root" e armazená-lo em uma variável chamada variable. Além disso, ele usa a função fetch() para fazer uma solicitação GET para a API do GitHub e aguarda a resposta usando a palavra-chave await. Quando a resposta é recebida, o código usa o método json() da resposta para converter os dados em um objeto JSON e armazená-los na variável dados. Em seguida, o código define o texto do elemento com ID "root" como o nome de usuário do GitHub, se houver.
    */