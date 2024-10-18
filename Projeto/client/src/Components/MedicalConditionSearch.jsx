import { useState } from "react";

const MedicalConditionSearch = () => {
  const [text, setText] = useState("");
  const [sourceLang, setSourceLang] = useState("en"); // idioma de origem
  const [targetLang, setTargetLang] = useState("pt"); // idioma de destino
  const [translatedText, setTranslatedText] = useState("");
  const [error, setError] = useState("");

  const handleTranslate = async () => {
    try {
      const response = await fetch("http://localhost:8080/translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text, sourceLang, targetLang }),
      });

      if (!response.ok) {
        throw new Error("Erro ao traduzir");
      }

      const data = await response.json();
      setTranslatedText(data.translatedText);
      setError("");
    } catch (err) {
      setError("Erro ao conectar ao servidor ou traduzir.");
      setTranslatedText("");
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Traduzir Condição Médica</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Insira o texto a traduzir"
      />
      <div>
        <label>
          Idioma de Origem:
          <select value={sourceLang} onChange={(e) => setSourceLang(e.target.value)}>
            <option value="en">Inglês</option>
            <option value="pt">Português</option>
          </select>
        </label>
        <label>
          Idioma de Destino:
          <select value={targetLang} onChange={(e) => setTargetLang(e.target.value)}>
            <option value="en">Inglês</option>
            <option value="pt">Português</option>
          </select>
        </label>
      </div>
      <button onClick={handleTranslate}>Traduzir</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {translatedText && (
        <div>
          <h2>Texto Traduzido:</h2>
          <p>{translatedText}</p>
        </div>
      )}
    </div>
  );
};

export default MedicalConditionSearch;