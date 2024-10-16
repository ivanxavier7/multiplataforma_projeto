# 1 - Criar React App

## 1.1 - Node

Cross-platform, open-source JavaScript runtime environment

[Download Node.js](https://nodejs.org/en/download/prebuilt-installer)


## 1.2 - VsCode

Code editor

[Download VsCode](https://code.visualstudio.com/download)

## 1.3 - Git Bash

Emulation layer for a Git command line experience

[Download Git Bash](https://git-scm.com/downloads)


## 1.4 - Criar React App

No VsCode no menu superior direito, carregar em **Terminal** -> **New Terminal**

Carregar na seta virada para baixo, ao lado do sinal **+** -> **Git Bash**

``` bash
npm create vite@latest my-react-app --template react
```

Escolher:
-> React
-> Javascript

Possíveis erros:
Se o comando **npm** não existir, instalar o Node.js
Se o comando **vite** não existir:
``` bash
npm i vite
```

## 1.5 - Instalar e Iniciar

Entrar na pasta:
``` bash
cd my-react-app
```

Instalar:
``` bash
npm install
```

Iniciar:
``` bash
npm run dev
```

Carregar no link gerado ou copiar e colar no Browser. (http://localhost:5173/)

Quando reiniciarem a máquina e quiserem voltar a correr a aplicação, só precisam de abrir no VsCode o terminal, entrarem em my-react-app com o comando **cd**, e iniciar com **npm run dev**.

## 1.6 - Instalação de packages adicionais

[Procurar Packages](https://www.npmjs.com/)

Sempre que quiserem acrescentar pacotes ao projeto, devem usar o **npm i nome-da-package**, exemplo:

``` bash
npm i react
```
PS: O package react foi instalado inicialmente pelo Vite, mas pode ser adicionado desta forma.

### Packages populares
* Express
    Um framework leve para Node.js usado para construir aplicações web e APIs. Ele simplifica o desenvolvimento de servidores web, oferecendo uma camada mínima para gerenciar rotas, middleware e manipulação de pedidos HTTP.

* React
    Uma biblioteca JavaScript desenvolvida pelo Facebook, usada para criar interfaces de utilizador. Baseia-se em componentes reutilizáveis e no conceito de estados para construir aplicações web interativas e dinâmicas.

* Lodash
    Um utilitário JavaScript que oferece funções para tarefas comuns de manipulação de arrays, objetos, números, strings, etc. Ele simplifica operações como filtragem, mapeamento e agregação de dados.

* Axios
    Uma biblioteca para fazer pedidos HTTP em navegadores e no Node.js. É frequentemente utilizada para consumir APIs, oferecendo uma interface simples e funcionalidades como suporte a Promises e interceptores de pedidos/respostas.

* Webpack
    Um empacotador de módulos para JavaScript que compila múltiplos arquivos (HTML, CSS, JS, imagens) em um único bundle, otimizando o carregamento e melhorando o desempenho da aplicação.

* Mongoose
    Uma biblioteca de modelagem de objetos para MongoDB e Node.js, que facilita a interação com bases de dados MongoDB, fornecendo uma camada de abstração para definir esquemas e manipular dados.

* Jest
    Um framework de testes em JavaScript mantido pelo Facebook, utilizado para realizar testes unitários, de integração e de snapshot, oferecendo uma API simples e funcional.

* Socket.io
    Uma biblioteca que facilita a comunicação bidirecional e em tempo real entre clientes e servidores web, muito utilizada para implementar funcionalidades de chat e colaboração em tempo real.

* Passport
    Um middleware de autenticação para Node.js, usado para implementar facilmente estratégias de login, como autenticação local, OAuth e outras integrações de login social.

* Tailwind CSS
    Uma biblioteca de utilitários CSS que oferece classes pré-definidas para construir interfaces de utilizador rapidamente. Em vez de criar estilos personalizados, o desenvolvedor utiliza classes já existentes para estilizar os componentes.

O **package.json** guarda a referência dos pacotes instalados.

## 1.7 - Reinstalação da App

Para voltar a instalar os packages, deve remover o ficheiro **package-lock.json**, a pasta **node_modules** e correr os comandos:

``` bash
cd pasta-do-projeto
npm install
npm run dev
```

## 1.8 Estrutura Base

Explicação genérica.

my-react-app/src/main.jsx

```javascript
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

Função createRoot, cria o elemento Root, que é selecionado com DOM, onde carregamos um tag.

StrictMode e App são componentes React, mais tarde vamos criar e passar informação nas propriedades do componente.

Dá Erro, dois tags:
```javascript
createRoot(document.getElementById('root')).render(
  <div>Exemplo</div>
  <div>Exemplo</div>,
)
```

Funciona, um tag:
```javascript
createRoot(document.getElementById('root')).render(
    <>
        <div>Exemplo</div>
        <div>Exemplo</div>
    </>,
)
```


my-react-app/src/App.jsx

```javascript
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
```

No início podemos ver como carregar imagens e colocar no tag <img>

O **useState** é uma das utilidades do React, permite criar uma variável que é atualizada na página sem ser necessário carregar os restantes elementos.

Está a ser associada no <Button> quando o evento de clique é chamado.

() => setCount((count) => count + 1) É uma arrow function, será abordado mais tarde.
setCount permite alterar o valor, (count) é a variável que estamos a passar lá para dentro, depois de **=>** é o que fazemos a essa variável. Está a pedir o valor anterior e a incrementar mais um a cada clique.
