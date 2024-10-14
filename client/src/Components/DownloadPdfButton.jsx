import { jsPDF } from 'jspdf';

const DownloadPdfButton = () => {
  const handleDownload = () => {
    // Cria uma nova instância do jsPDF
    const doc = new jsPDF();

    // Adiciona conteúdo ao PDF
    doc.text("Exemplo de PDF", 10, 10);
    doc.text("Nome: Ivan", 10, 20);
    doc.text("Idade: 29", 10, 30);
    doc.text("Cidade: Aveiro", 10, 40);

    // Gera o PDF e inicia o download
    doc.save('data.pdf'); // Nome do ficheiro
  };

  return (
    <button onClick={handleDownload}>
      Descarregar PDF
    </button>
  );
};

export default DownloadPdfButton;