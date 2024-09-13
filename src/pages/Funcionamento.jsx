import React from 'react';
import Arduino from '../public/arduino.png';
import Header from './Header';

function Funcionamento() {
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <div id="funcionamento" className='px-4 sm:px-8 py-8'>
        <section className='flex flex-col items-center'>
          <h1 className='font-kulim text-center text-4xl sm:text-5xl md:text-6xl text-orange font-bold'>
            Funcionamento
          </h1>
          
          <p className="font-kulim text-center font-bold text-lg sm:text-xl md:text-2xl mt-6">
            O projeto é simplesmente utilizar o sistema <br className="hidden sm:block"/> 
            Arduino na janela, programando o sistema <br className="hidden sm:block"/>
            de funcionamento da janela. A programação que <br className="hidden sm:block"/>
            fará a sua janela inteligente funcionar para <br className="hidden sm:block"/>
            o seu devido propósito, ou seja, não é nada <br className="hidden sm:block"/>
            difícil, basta a PROGRAMAÇÃO e os componentes <br className="hidden sm:block"/>
            para funcionar devidamente!
          </p>

          <div className="mt-8 space-y-4">
            <p className="font-kulim text-center font-bold text-lg sm:text-xl md:text-2xl">
              1 - Conecte os sensores na sua janela.
            </p>
            <p className="font-kulim text-center font-bold text-lg sm:text-xl md:text-2xl">
              2 - Conecte ao Arduino e programe.
            </p>
            <p className="font-kulim text-center font-bold text-lg sm:text-xl md:text-2xl">
              3 - Execute o programa da janela.
            </p>
          </div>

          <img src={Arduino} className='mt-7 w-full max-w-xs sm:max-w-sm md:max-w-md' alt="Arduino" />
        </section>
      </div>
    </>
  );
}

export default Funcionamento;
