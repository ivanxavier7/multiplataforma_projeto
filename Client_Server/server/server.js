import express from 'express';
import axios from 'axios'; // Para fazer a requisição HTTP
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();

const corsOptions = {
    origin: [
      "http://localhost:5173", // Permite o front-end local
      "https://libretranslate.com/translate" // Permite a API externa, se necessário
    ],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Métodos permitidos
    credentials: true, // Permite cookies e credenciais
    optionsSuccessStatus: 204 // Para navegadores antigos
  };

app.use(cors(corsOptions));
app.use(express.json()); // Para permitir o recebimento de JSON no body das requisições

// Endpoint para teste
app.get("/api", (req, res) => {
    res.json({ teste: ["exemplo 1", "exemplo 2", "exemplo 3"] });
});


app.use(cors(corsOptions));
app.use(express.json());

// Endpoint para tradução
app.post("/translate", async (req, res) => {
    const { text, sourceLang, targetLang } = req.body;
  
    // Verifica se os parâmetros necessários foram fornecidos
    if (!text || !sourceLang || !targetLang) {
      return res.status(400).json({ error: "Parâmetros 'text', 'sourceLang' e 'targetLang' são obrigatórios." });
    }
  
    try {
      // Faz a chamada à API LibreTranslate
      const response = await axios.post("https://libretranslate.com/translate", {
        q: text,
        source: sourceLang,
        target: targetLang,
        format: "text",
      });
  
      // Retorna a tradução recebida
      res.json({ translatedText: response.data.translatedText });
    } catch (error) {
      console.error("Erro ao conectar à API de tradução:", error);
      res.status(500).json({ error: "Erro ao traduzir o texto." });
    }
  });

app.listen(8080, () => {
  console.log("Server started on port 8080");
});