import React, { useState } from 'react';

function HookMegaSena() {

  const [numeroMega, setNumeroMega] = useState();
  const [numerosSorteados, setNumerosSorteados] = useState([]);

  function sortearNumero() {
    if (numerosSorteados.length < 6) {
        let sorteado = Math.floor(Math.random() *60) +1
        setNumeroMega(sorteado)
        setNumerosSorteados([...numerosSorteados, sorteado])
    } else{
        alert("Já temos os seis números sorteados!")
    }
    
  }

  return (<div>
    <h1>Sorteador da Mega em React.</h1>
    <button onClick={sortearNumero}>Sortear Número</button>
    <h1>Último número sorteado: {numeroMega}</h1>
    <h1>Sorteados: {numerosSorteados.join(" - ")}</h1>
    </div>
  )
}

export default HookMegaSena;
