import './MenuLateral.css'

function MenuLateral(){
    return (<div class="menu">
    <ul>
      <li><a href="#">Página Inicial</a></li>
      <li><a href="#">Livros</a></li>
      <li><a href="#">Autores</a></li>
      <li><a href="#">Sobre</a></li>
      <li><a href="#">Contato</a></li>
    </ul>
    <aside>
      <span class="close-icon">x</span>
    </aside>
  </div>)
}

export default MenuLateral