<h1> IBM-Watson leitor de texto</h1>

Aplicação desenvolvida em Node.Js com React e API IBM-Watson
<br>
<br>

<h4> Modo de execução </h4><br>

Criar arquivo dev.js na pasta config com esses dados:<br>


module.exports = {<br>
    APIKEY: 'TU8_Lq4MACI_LspJS0Qr63qpmfa20a6h8-9JjyMlICp-',<br>
    APIURL: 'https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/64b89757-7a7f-4d83-9469-67198a4c7bde',<br>
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
