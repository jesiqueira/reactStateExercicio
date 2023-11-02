import Produto from "./Produto";
import React from "react";

function App() {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  async function handleClick(event) {
    // console.log(event.target.innerText);
    setCarregando(true)
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
    );
    console.log(response);
    const json = await response.json();
    // console.log(json);

    setDados(json);
    setCarregando(false)
  }
  return (
    <div>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        Notebook
      </button>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        Smartphone
      </button>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        tablet
      </button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto dados={dados} />}
    </div>
  );
}

export default App;
