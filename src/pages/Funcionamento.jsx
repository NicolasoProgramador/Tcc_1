import React from 'react' 
import Arduino from '../public/arduino.png'

function Funcionamento() {
  return (
    <div id="funcionamento">
      <br /><br />
       

        <section className=' flex flex-col items-center'>
            <h1 className='font-kulim text-center text-6xl text-orange font-bold'>Funcionamento</h1>
            <br />
            <p className="font-kulim text-center font-bold text-2xl">O projeto é simplesmente utilizar o sistema <br />Arduino na janela, programando o sistema <br />de funcionamento da janela. A programação que <br />fará a sua janela inteligente funcionar para <br />o seu devido propósito, ou seja, não é nada <br />difícil, basta a PROGRAMAÇÃO e os <br /> para funcionar devidamente!</p>
            <br />
            <br />
            <p className="font-kulim text-center font-bold  text-2xl">1 - Conecte os sensores na sua janela.</p>
            <p className="font-kulim text-center font-bold text-2xl">2 - Conecte ao Arduino e programe.</p>
            <p className="font-kulim text-center font-bold text-2xl">3 - Execute o programa da janela.</p>
            <br />
            <img src= {Arduino}   width={400} className='mt-7' alt="" />
            <br />
        </section>
        
    </div>
  )
}

export default Funcionamento