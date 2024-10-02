function Livro(props) {
    return <li>Esse livro e { props.coleção }</li>;
  }
  
  function Estante() {
    const livros = [
      {id: 1, coleção: 'Harry Potter'},
      {id: 2, coleção: 'O senhor dos Aneis'},
      {id: 3, coleção: 'Percy jackson'},
      {id: 4, coleção: 'Narnia'},
      {id: 5, coleção: 'Fundação'}
    ];
    return (
      <>
        <h1>Livros da minha coleção</h1>
        <ul>
          {livros.map((livro) => <Livro key={livro.id} coleção={livro.coleção} />)}
        </ul>
      </>
    );
  }
  
  export default Estante