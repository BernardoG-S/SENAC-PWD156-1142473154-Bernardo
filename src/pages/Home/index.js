import {Link} from 'react-router-dom'

function Home(){
  return (
    <div>
       <h1> HOME </h1> 
       <Link to = '/Cadastro' > Cadastro de cliente</Link><br/>
       <Link to = '/Movimentacao' > Movimentação da conta corrente</Link><br/>
       <Link to = '/Simulacao' > Simulação de financiamento</Link><br/>
       <Link to = '/Sobre' > Sobre nós</Link>
    </div>
  )

}

export default Home;