function Fruta(props) {
    return <li>Fruta: { props.cesta }</li>;
  }
  
  function Armazen() {
    const frutas = [
      {id: 1, cesta: 'Maçã'},
      {id: 2, cesta: 'Banana'},
      {id: 3, cesta: 'Morango'},
      {id: 4, cesta: 'Abacate'},
      {id: 5, cesta: 'Uva'}
    ];
    return (
      <>
        <h1>Minhas futas</h1>
        <ul>
          {frutas.map((fruta) => <Fruta key={fruta.id} cesta={fruta.cesta} />)}
        </ul>
      </>
    );
  }
  export default Armazen