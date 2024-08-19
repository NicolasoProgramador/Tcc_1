import React from 'react'
import robohome from '../public/robohome.png'
import Pebble from '../public/Pebble.png'

export default function Home() {
  return (
    <div className='py-5 px-4 '> {/* Adicionei padding lateral para mobile */}
      <section id="inicio" className='flex flex-col items-center pt-20 md:pt-40'>
        <h1 className='font-kulim text-dark-blue text-4xl md:text-6xl font-bold text-center'>
          Venha Conhecer 
        </h1>
        <h1 className='font-kulim text-dark-blue text-4xl md:text-6xl font-bold text-center'>
          a janela inteligente!
        </h1>

        <div className='absolute left-0.5 right-1'>
          <div className='rounded-full bg-dark-blue h-30 w-30'></div>
        </div>

        <button className='rounded-full bg-orange py-3 px-8 md:py-5 md:px-10 font-kulim text-offwhite mt-6'>
          SAIBA MAIS
        </button>
        <img src={robohome} alt="" className='mt-7 w-48 md:w-72'/>
      </section>

      <section className='mt-10 md:mt-14 flex flex-col items-center'>
        <h1 className='font-kulim text-orange text-4xl md:text-6xl font-bold text-center'>
          Qual o nosso
        </h1>
        <h1 className='font-kulim text-orange text-4xl md:text-6xl font-bold text-center'>
          diferencial?
        </h1>
        <p className='font-kulim italic text-text-spaceblue font-bold text-xl md:text-2xl text-center mt-4'>
          Nossa Smart Window (Janela Inteligente) oferece a segurança que a sua residência precisa!
        </p>
        <p className='font-kulim font-bold text-lg md:text-2xl text-center mt-4'>
          Oferecemos segurança e tecnologia à sua casa, <br />  para proteger de fortes chuvas, umidade, <br /> fumaça e também substâncias tóxicas pelo ar, <br />  simplesmente usando o sistema Arduino, onde <br /> o projeto irá identificar umidade ao redor e <br />  fumaça para automaticamente fechar a janela.
        </p>
        <img src={Pebble} className='mt-6 w-64 md:w-96' alt="" />
      </section>
    </div>
  )
}
