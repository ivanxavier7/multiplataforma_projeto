const DownloadJsonButton = () => {
  const handleDownload = () => {
    // Exemplo de dados JSON
    const data = {
      name: "Ivan",
      age: 29,
      city: "Aveiro"
    };

    // Converte o objeto JSON em uma string
    const jsonString = JSON.stringify(data, null, 2);
    
    // Cria um blob a partir da string JSON
    const blob = new Blob([jsonString], { type: 'application/json' });

    // Cria uma URL para o blob
    const url = URL.createObjectURL(blob);

    // Cria um elemento <a> para o download
    const link = document.createElement('a');
    link.href = url;
    link.download = 'data.json'; // Nome do ficheiro

    // Aciona o download
    document.body.appendChild(link);
    link.click();
    
    // Remove o link após o download
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <button onClick={handleDownload}>
      Descarregar JSON
    </button>
  );
};

export default DownloadJsonButton;