<h1> IBM-Watson leitor de texto</h1>

Aplicação desenvolvida em Node.Js com React e API IBM-Watson
<br>
<br>

<h4> Modo de execução </h4><br>

Criar arquivo dev.js na pasta config com esses dados:<br>


module.exports = {<br>
    APIKEY: '', (sua chave da API IBM-Watson disponível gratuitamente no site https://www.ibm.com/cloud/watson-text-to-speech)<br>
    APIURL: '', (url disponibilizada pelo site acima)<br>
    DB_HOST: 'localhost',<br>
    DB_USER: 'root',<br>
    DB_PASS: '',<br>
    DATABASE: 'commentsdb'<br>
}<br>

Na pasta raiz digitar:<br>
npm install<br>

Entrar na pasta cliente:<br>
cd cliente<br>
npm install<br>

Voltar para pasta raiz:<br>
cd .. <br>
npm run dev
