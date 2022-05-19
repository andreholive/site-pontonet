import './Planos.css';
import img1 from './imgs/150mb.png';
import img2 from './imgs/100mb.png';
import img3 from './imgs/250mb.png';
import img4 from './imgs/350mb.png';
import img5 from './imgs/450mb.png';

function Planos() {
    
  return (
    <div id="pricing" className="pricing-table-area pdt-125px pdb-95px">
            <div className="container">
               <div className="row">
                   <div className="col-lg-12">
                       <div className="section-title mb-50px text-center">
                           <span>Nossos Planos</span>
                           <h1>Escolha o plano que melhor combina com você!</h1>
                       </div>
                   </div>
               </div>
                <div className="row">
                    <div className="col-lg-4 col-md-4 plano">
                        <div className="pricing-item text-center mb-30px">
                            <div className="pricing-head" style={{backgroundImage: 'url(' +img2+ ')'}}>
                                
                            </div>
                            <div className="pricing-content">
                                <ul>
                                    <li>Assistir Filmes e Séries em Full HD</li> 
                                    <li>Curtir o Instagram</li>
                                    <li>Trabalhar e Estudar de casa</li>
                                </ul>
                            </div>
                            <div className="pricing-footer">
                                <a href="https://api.whatsapp.com/send?phone=554835331778" className="ournet-btn">Eu Quero</a>
                                <div className="price">
                                    <h1>R$ 79,90</h1>
                                    <span>mensais</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 plano">
                        <div className="pricing-item text-center mb-30px">
                            <div className="pricing-head" style={{backgroundImage: 'url(' +img1+ ')'}}>
                                
                            </div>
                            <div className="pricing-content">
                                <ul>
                                    <li>Assistir Filmes e Séries em Full HD</li> 
                                    <li>Trabalhar e Estudar de casa</li>
                                    <li>Roteador de 3 antenas</li>
                                </ul>
                            </div>
                            <div className="pricing-footer">
                                <a href="https://api.whatsapp.com/send?phone=554835331778" className="ournet-btn">Eu Quero</a>
                                <div className="price">
                                    <h1>R$ 89,90</h1>
                                    <span>Mensais</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 plano">
                        <div className="pricing-item text-center mb-30px">
                            <div className="pricing-head" style={{backgroundImage: 'url(' +img3+ ')'}}>
                                
                            </div>
                            <div className="pricing-content">
                                <ul>
                                    <li>Tudo que os outros fazem, mais rápido</li> 
                                    <li>Roteador 4 antenas</li>
                                    <li>Várias pessoas ao mesmo tempo, fazendo tudo!</li>
                                </ul>
                            </div>
                            <div className="pricing-footer">
                                <a href="https://api.whatsapp.com/send?phone=554835331778" className="ournet-btn">Eu Quero</a>
                                <div className="price">
                                    <h1>R$ 99,90</h1>
                                    <span>Mensais</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 plano">
                        <div className="pricing-item text-center mb-30px">
                            <div className="pricing-head" style={{backgroundImage: 'url(' +img4+ ')'}}>
                                
                            </div>
                            <div className="pricing-content">
                                <ul>
                                    <li>Pra fazer tudo ao mesmo tempo</li> 
                                    <li>Roteador 4 antenas</li>
                                    <li>Pra quem curte internet de verdade</li>
                                </ul>
                            </div>
                            <div className="pricing-footer">
                                <a href="https://api.whatsapp.com/send?phone=554835331778" className="ournet-btn">Eu Quero</a>
                                <div className="price">
                                    <h1>R$ 109,90</h1>
                                    <span>Mensais</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 plano">
                        <div className="pricing-item text-center mb-30px">
                            <div className="pricing-head" style={{backgroundImage: 'url(' +img5+ ')'}}>
                                
                            </div>
                            <div className="pricing-content">
                                <ul>
                                    <li>Pra navegar na velocidade da luz</li> 
                                    <li>Roteador 4 antenas</li>
                                    <li>Pra quem quer toda a internet!</li>
                                </ul>
                            </div>
                            <div className="pricing-footer">
                                <a href="https://api.whatsapp.com/send?phone=554835331778" className="ournet-btn">Eu Quero</a>
                                <div className="price">
                                    <h1>R$ 119,90</h1>
                                    <span>Mensais</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
  );
}

export default Planos;
