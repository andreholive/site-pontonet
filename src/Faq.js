import './Faq.css';



function Faq() {
    
function open(e){
    const element = e.target;
    element.classList.toggle('active');
    var panal = element.nextElementSibling;
    if(panal.style.maxHeight){
        panal.style.maxHeight = null;
    }else{
        panal.style.maxHeight = panal.scrollHeight + 'px';
    }
}
  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"/>
    <div className='faq'>
    <div class="container_faq">
        <h2>Perguntas mais frequentes</h2>
              
        <div class="accordion" onClick={(e)=>{open(e)}}>
            <h5>O que é 5.8GHz e 2.4GHz, e qual a diferença?</h5>
            <i class="fas fa-minus"></i>
            <i class="fas fa-plus"></i>
        </div>
        <div class="panal">
            <p class="lead">
                    São grupos de canais, e o roteador usa um canal para comunicação.<br />
                    Fica mais fácil de entender se a gente pensar neles como pessoas falando numa sala:
                    Quando duas pessoas falam ao mesmo tempo, a conversa não anda e a gente demora mais
                    pra falar tudo o que queremos.
            </p>
            <p class="lead">
                Outra coisa importante, é que o 5.8 é necessário para passar velocidades maiores que
                100 Megas, pois ele tem capacidade muito maior que o 2.4.<br/>
                Além disso, o roteador precisa ter portas <span class="text-warning">Giga</span> para mais de 100 Megas!<br/>
            </p>
            <span class="badge-pill badge badge-warning">Nem todo celular <br />e tv opera em
                5.8GHz.</span>
            <span class="badge-pill badge badge-success">Recomendamos roteador<br/> Dual Band</span>
            <span class="badge-pill badge badge-danger">
                Nem todo roteador de 4 antenas<br/>
                passa mais que 100M
            </span>
        </div>

        <div class="accordion" onClick={(e)=>{open(e)}}>
            <h5>O que é a fibra ótica? É melhor que o rádio?</h5>
            <i class="fas fa-minus"></i>
            <i class="fas fa-plus"></i>
        </div>
        <div class="panal">
        <p class="lead">
            A fibra ótica é um cabo plástico com uma fibra de vidro no interior. Por ela passam
            sinais de luz, conduzindo a o sinal de internet.
        </p>
        <p class="lead">Algumas vantagens da fibra: Permite velocidades muito maiores.
            Não sofre interferência de sinal. É livre de interferencia de chuva e raios.
        </p>
        </div>

        <div class="accordion" onClick={(e)=>{open(e)}}>
            <h5>Posso mudar de de plano?</h5>
            <i class="fas fa-minus"></i>
            <i class="fas fa-plus"></i>
        </div>
        <div class="panal">
        <p class="lead">
            Claro! Pra isso você entra em <a href="#contato">contato</a> com a nossa equipe.
            Você pode aumentar o plano quando quiser, mas só pode baixar depois do primeiro ano
            (<a href="#fidelidade">fidelidade</a>).
        </p>
        </div>

        <div class="accordion" onClick={(e)=>{open(e)}}>
            <h5>Estou sem internet, o que eu faço?</h5>
            <i class="fas fa-minus"></i>
            <i class="fas fa-plus"></i>
        </div>
        <div class="panal">
        <p class="lead">
            <div>
            Você pode reiniciar o roteador, demora um minutinho pra voltar.<br/>
            Se mesmo assim não voltou, entre em contato com a nossa equipe.<br/>
            Pra agilizar, verifica no aparelhinho da fibra (Não no roteador) se tem uma luzinha
            piscando vermelha.
            Você pode solicitar suporte técnico através do what clicando no botão abaixo:
            </div>
            <a href='https://api.whatsapp.com/send?phone=554835331778' className='btn-whats' >
            Suporte pelo Whatsapp
            </a>
        </p>
        </div>

        <div class="accordion" onClick={(e)=>{open(e)}}>
            <h5>Minha internet está lenta, o que eu faço?</h5>
            <i class="fas fa-minus"></i>
            <i class="fas fa-plus"></i>
        </div>
        <div class="panal">
        <p class="lead">
            Sugerimos fazer um <a href="#teste">teste de velocidade</a>. <small
                class="badge badge-pill badge-warning">Leia as dicas antes de testar</small>.<br/>
            Se ainda assim tiver lentidão, entre em <a href="#contato">contato</a> com a equipe de
            suporte que ajudamos você a resolver o problema.
        </p>
        <p class="lead">
            Algumas vezes o problema é sério e precisamos fazer uma visita técnica, mas geralmente
            resolvemos a distância.<br/>
            Você sabia que a grande maioria dos problemas de lentidão é causado pelo roteador? <a
                href="#faqroteador">Confira</a> algumas dicas de como melhorar o sinal
        </p>
        </div>

        <div class="accordion" onClick={(e)=>{open(e)}}>
            <h5>O que é Fidelidade?</h5>
            <i class="fas fa-minus"></i>
            <i class="fas fa-plus"></i>
        </div>
        <div class="panal">
        <p class="lead">
            É um acordo entre a empresa e o cliente, em troca de beneficios, o cliente se compromete
            a manter o plano contratado (ou maior) por um ano. Geralmente o benefício é desconto na
            instalação, que custa bem mais do que é cobrado do cliente.
        </p>
        </div>

        <div class="accordion" onClick={(e)=>{open(e)}}>
            <h5>A internet no quarto é fraca, se aumentar o plano resolve?</h5>
            <i class="fas fa-minus"></i>
            <i class="fas fa-plus"></i>
        </div>
        <div class="panal">
        <p class="lead">
            Não. Quando é lento em um local da casa mas nâo em outro o problema é o sinal do
            roteador. Você pode ler a proxima dica <strong>Como melhorar o sinal do
                roteador</strong>, mas as vezes só resolvemos esse problema com um repetidor de
            sinal <strong>com cabo</strong>.
        </p>
        </div>

        <div class="accordion" onClick={(e)=>{open(e)}}>
            <h5>Como melhorar o sinal do roteador?</h5>
            <i class="fas fa-minus"></i>
            <i class="fas fa-plus"></i>
        </div>
        <div class="panal">
        <p class="lead">
            A melhor maneira é instalar o roteador no meio da casa, ou próximo do local onde houver
            mais uso.
            Não deixar o roteador escondido dentro de móveis ou atras de outros aparelhos
            Trocar o canal do roteador
            Trocar a senha e o nome do wifi (as vezes algum vizinho pode estar usando a sua
            internet!)
            Mas as vezes não tem o que fazer mesmo, e a solução é colocar um roteador novo, de
            preferência que tenha as duas frequências
        </p>
        </div>

        <div class="accordion" onClick={(e)=>{open(e)}}>
            <h5>Esqueci de pagar o meu boleto, e agora?</h5>
            <i class="fas fa-minus"></i>
            <i class="fas fa-plus"></i>
        </div>
        <div class="panal">
        <p class="lead">
            Simples, você entra no <a href="https://sac.pontonetsul.com.br/sac">SAC</a> e libera a
            sua internet por 3 dias. Aí você tem tempo de pagar. Se quiser, pode pegar a segunda via
            do boleto também.
        </p>
        </div>
        <div>
        <p class="fs--14 mt-3 botton-faq">
            Fique a vontade para falar com nossos <a href="#contato">atendentes</a> para tirar suas dúvidas.
        </p>
        </div>
    </div>
    </div>
    </>
  );
}

export default Faq;