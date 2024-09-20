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
      <br />
      <div id="funcionamento" className='px-4 sm:px-8 py-8 bg-gray-50'>
        <section className='flex flex-col items-center'>
          <h1 className='font-kulim text-center text-4xl sm:text-5xl md:text-6xl text-orange-600 font-bold mb-6'>
            Funcionamento
          </h1>
          
          <p className='text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl text-center'>
            O <span className="font-semibold text-orange-500">Smart Window</span> é um projeto de automação residencial voltado para a segurança e conforto. O sistema utiliza sensores e um micro servo para controlar automaticamente uma janela deslizante, com o objetivo de fechar ou abrir conforme as condições ambientais detectadas. Ele opera da seguinte forma:
            <br /><br />
            <span className="font-semibold text-orange-500">Sensor de Chuva</span>: Quando o sensor de chuva detecta a presença de água, o sistema fecha automaticamente a janela, evitando que a água entre no ambiente. A janela permanece fechada até que o sensor detecte que o tempo está seco. Neste caso, a janela é automaticamente reaberta.
            <br /><br />
            <span className="font-semibold text-orange-500">Sensor de Gás/Fumaça (MQ2)</span>: Caso o sensor MQ2 identifique a presença de fumaça ou gases potencialmente perigosos, o sistema automaticamente abre a janela para permitir a ventilação, garantindo maior segurança ao ambiente.
            <br /><br />
            <span className="font-semibold text-orange-500">Display LCD</span>: As informações sobre o estado atual da janela e as condições detectadas são exibidas em um display LCD, proporcionando uma visualização fácil para o usuário. Por exemplo, quando água é detectada, o LCD exibe "AGUA DETECTADA!" e "Fechando janela". Se o ambiente estiver seco, o LCD exibe "Tempo seco" e "Abrir Janela". Quando fumaça é detectada, o LCD alerta com "Fumaca Detectada!" e "Abrir Janela".
            <br /><br />
            <span className="font-semibold text-orange-500">Micro Servo</span>: O movimento da janela é controlado por um micro servo, que abre ou fecha a janela conforme as leituras dos sensores. A janela se move para a posição fechada (180 graus) ao detectar chuva e volta à posição aberta (0 graus) quando o ambiente está seco ou há fumaça no local.
            <br /><br />
            O Smart Window oferece uma solução prática e eficiente para evitar a entrada de água em dias de chuva e melhorar a ventilação em casos de fumaça, tudo isso sem a necessidade de intervenção manual, garantindo conforto e segurança ao usuário.
          </p>

          <img 
            src={Arduino} 
            className='mt-7 w-full max-w-xs sm:max-w-sm md:max-w-md shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out' 
            alt="Arduino" 
          />
        </section>
      </div>
    </>
  );
}

export default Funcionamento;
