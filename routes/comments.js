const express = require('express')
const router = express.Router()
const { connection } = require('../config/database')
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1')
const { IamAuthenticator } = require('ibm-watson/auth')
const keys = require('../config/keys')



// Config watson
const textToSpeech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({
    apikey: keys.APIKEY
  }),
  url: keys.APIURL
})

router.post('/add', (req, res) => {
    const { text } = req.body;
    const INSERT_COMMENT_QUERY = `INSERT INTO comments (text) VALUES("${text}")`;
    connection.query(INSERT_COMMENT_QUERY, (err, results) => {
        if (err) {
            res.status(500).json('Erro para gravar dados.')
        } else {
            // return res.redirect("/comments");
            res.status(200).json(results)
        }
    });
})

router.get('/', (req, res) => {
    const SELECT_ALL_COMMENTS_QUERY = "SELECT * FROM comments";
    connection.query(SELECT_ALL_COMMENTS_QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      res.status(200).json(results);
    }
  });
})

router.get('/listen/:text', async (req, res) => {
  const text = req.params.text
  const params = {
    text: text,
    accept: "audio/webm",
    voice: "pt-BR_IsabelaVoice",
  };
  try {
    const { result } = await textToSpeech.synthesize(params).catch((err) => {
      res.status(500).json('Erro para processar o texto.')
    });
    const transcript = result;
    transcript.pipe(res);
  } catch (error) {
    res.status(500).json(error);
  }
})

module.exports = router