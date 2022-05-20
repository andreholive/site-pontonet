import React, {useState} from 'react';
import './App.css';
import './bootstrap.css'
import Logo from './imgs/logo.png';
import LogoFooter from './imgs/logo-footer.png';
import imgSuporte from './imgs/suporte.png';
import imgMap from './imgs/map.png';
import Pin from './imgs/pin.png';
import Slider from './Slider';
import Planos from './Planos';
import Faq from './Faq'

function App() {
  const [menu, setMenu] = useState(false)
  const [bigmenu, setBigMenu] = useState(false)
  function open(){
    setMenu(!menu)
  }
  function openBigMenu(){
    setBigMenu(!bigmenu)
  }
  let menuState = {
    display: menu ? 'block' : 'none'
  }
  let bigmenuState = {
    display: bigmenu ? 'block' : 'none'
  }
  return (
    <div className="App">
        <nav class="menu-itens">
          <ul>
              <li>
                <a href="https://ixc.pontonetsul.com.br/central_assinante_web">2ª Via do Boleto</a>
              </li>
              <li>
                <a href="https://ixc.pontonetsul.com.br/central_assinante_web">Desbloqueio</a>
              </li>
              <li>
                <a href="https://www.pontonetsul.com.br/downloads/contrato2020.pdf">Contrato</a>
              </li>
              <li>
                <a href="tel:04835331778">Ligue agora</a>
              </li>
              <li>
                <a href="https://wa.me/554835331778">Whataspp</a>
              </li>
          </ul>
        </nav>
        <nav className="navbar navbar-expand-lg navbar-white fixed-top header" id="banner">
        <div className='container'>
          <a class="navbar-brand" href="#">
            <img className='dropBritnees' draggable="false" src={Logo} alt="PontoNet" width={200}></img>
          </a>
          <input type="checkbox" id="toggle"/>
          <label class="checkbox" for="toggle">
              <div class="trace"></div>
              <div class="trace"></div>
              <div class="trace"></div>
          </label>
          <div class="menu"></div>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item dropdown">
                <div class="nav-link dropdown-toggle" id="navbarDropdown" role="button" onClick={open} >Area do Cliente</div>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={menuState}>
                  <a class="dropdown-item" href="https://ixc.pontonetsul.com.br/central_assinante_web">2ª Via do Boleto</a>
                  <a class="dropdown-item" href="https://ixc.pontonetsul.com.br/central_assinante_web">Desbloqueio</a>
                  <a class="dropdown-item" href="https://www.pontonetsul.com.br/downloads/contrato2020.pdf">Contrato</a>
                  <a class="dropdown-item" href="tel:04835331778">Ligue agora</a>
                  <a class="dropdown-item" href="https://wa.me/554835331778">Whataspp</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#planos">Planos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#cobertura">Cobertura</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#faq">FAQ</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#velocidade">Teste de Velocidade</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">Contato</a>
              </li>
              <li class="lh-55px">
                <a href="https://ixc.pontonetsul.com.br/viabilidade-tecnica.php" class="btn login-btn ml-50">Consulte a disponibilidade</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Slider />
      <a name="planos"></a>
      <Planos />
      <div className='suporte'>
        <div className='container'>
          <div className='img'>
            <img draggable="false" src={imgSuporte} alt="Suporte"></img>
          </div>
          <div className='title'>
            Suporte técnico? Nosso atendimento é 24Hs!
          </div>
          <div className='text'>
            Na Ponto Net você tem assistência qualificada pra te dar suporte, tirar suas dúvidas e ajudar com possíveis problemas de conexão.
          </div>
          <div className='text'>
            Clique no botão abaixo para entrar em contato com nossa equipe!
          </div>
          <a href='https://api.whatsapp.com/send?phone=554835331778' className='btn-whats' >
            Suporte pelo Whatsapp
          </a>
        </div>
      </div>
      <a name="faq"></a>
      <Faq />
      <a name="velocidade"></a>
      <div className='velocidade'>
      <div className='title'>
        <span>Teste de Velocidade</span>
        <h1>Teste a velocidade da sua internet abaixo:</h1>
      </div>
      <iframe width="100%" height="650px" frameBorder="0" src="https://pontonetsul.speedtestcustom.com" />
      </div>
      <a name="cobertura"></a>
      <div className='cobertura'>
      <div className='container area1'>
      <div className='title'>
      <span>Cobertura</span>
      <h1>Nossa rede de fibra ótica abrange as cidades abaixo.</h1>
      </div>
        <div className='cidades'>
          <div className='cidade'>Balneário Gaivota</div>
          <div className='cidade'>Jacinto Machado</div>
          <div className='cidade'>Mampituba</div>
          <div className='cidade'>Praia Grande</div>
          <div className='cidade'>Sombrio</div>
          <div className='cidade'>Santa Rosa do Sul</div>
          <div className='cidade'>São João do Sul</div>
        </div>
        <div className='img'>
              <img draggable="false" src={imgMap} alt="Suporte" />
              
        </div>
        </div>
        </div>
      <div className='footer'>
      <div className='footer-top'>
      <div className='footer-container'>
      <div className='footer-box'>
        <img draggable="false" src={LogoFooter} alt="PontoNet" width={200}></img><br/>
        <img draggable="false" src={Pin} alt="PontoNet" height={60} className='pin'/>
        <span className='addr'>
        Avenida Getúlio Vargas, 1135, Nova Brasília<br />
        Sombrio, Santa Catarina
        </span>
        <span className='copyright'>
        © Pontonet Computadores e Redes Ltda Epp<br />CNPJ 10.912.823/0001-47
        </span>
      </div>
      </div> 
      </div>
      </div>
      
    </div>
  );
}

export default App;
