import { useState } from 'react';

const PortugueseToEnglish = () => {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleTranslate = async () => {
    setLoading(true);
    setTranslatedText('');

    try {
      const response = await fetch('https://libretranslate.com/translate', {
        method: 'POST',
        body: JSON.stringify({
          q: text,
          source: 'pt',
          target: 'en',
          format: 'text'
        }),
        headers: { 'Content-Type': 'application/json' }
      });

      const data = await response.json();
      setTranslatedText(data.translatedText);
    } catch (error) {
      console.error('Erro na tradução', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Traduzir de Português para Inglês</h1>
      <textarea
        rows="4"
        cols="50"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escreva algo em Português"
      />
      <br />
      <button onClick={handleTranslate}>Traduzir</button>
      {loading ? <p>A traduzir...</p> : <p>Tradução: {translatedText}</p>}
    </div>
  );
};

export default PortugueseToEnglish;