import Produto from './Produto';
import React from 'react';

function App() {
  const [dados, setDados] = React.useState(null);

  async function handleClick(event) {
    // console.log(event.target.innerText);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
    );
    const json = await response.json();
    // console.log(json);

    setDados(json);
  }
  return (
    <div>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>
        Notebook
      </button>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>
        Smartphone
      </button>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>
        tablet
      </button>
      <Produto dados={dados} />
    </div>
  );
}

export default App;
