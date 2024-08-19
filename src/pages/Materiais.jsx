import React from "react"
import Arduino from '../public/arduino.png'
import Chuva from '../public/sensor_chuva.png'

function Materiais() {
  return (
    <div id="materias" className='px-4 py-5'> {/* Adicionei padding para mobile */}
        <h1 className="font-kulim text-orange text-4xl md:text-6xl font-bold text-center">
          Materiais
        </h1>
        <p className="font-kulim text-dark-blue font-bold text-lg md:text-2xl text-center mt-4">
          Contamos com os principais materiais para fazer
        </p>
        <p className="font-kulim text-dark-blue font-bold text-lg md:text-2xl text-center">
          o projeto funcionar e a base dele.
        </p>
        
        <section className="mt-10">
            <div className='flex flex-col items-center'>
                <h2 className='font-kulim text-dark-blue text-3xl md:text-4xl font-bold text-center'>
                  Arduino
                </h2>
                <p className='font-kulim font-bold text-base md:text-2xl text-center mt-4'>
                  Arduino é uma plataforma programável 
                </p>
                <p className='font-kulim font-bold text-base md:text-2xl text-center'>
                  de prototipagem eletrônica de placa única e 
                </p>
                <p className='font-kulim font-bold text-base md:text-2xl text-center'>
                  hardware livre, que permite aos usuários criar 
                </p>
                <p className='font-kulim font-bold text-base md:text-2xl text-center'>
                  objetos eletrônicos interativos e independentes.
                </p>
                <p className='font-kulim font-bold text-base md:text-2xl text-center'>
                  O preço gira em torno de R$50,00.
                </p>
                <img src={Arduino} alt="" className='mt-6 w-64 md:w-96'/>
            </div>
        </section> 

        <section className="mt-10">
            <div className='flex flex-col items-center'>
                <h2 className='font-kulim text-dark-blue text-3xl md:text-4xl font-bold text-center'>
                  Sensor de chuva
                </h2>
                <p className="font-kulim font-bold text-base md:text-2xl text-center mt-4">
                  Este Sensor de Chuva pode ser usado para 
                </p>
                <p className="font-kulim font-bold text-base md:text-2xl text-center">
                  monitorar uma variedade de condições 
                </p>
                <p className="font-kulim font-bold text-base md:text-2xl text-center">
                  climáticas como gotas de chuva ou neve.
                </p>
                <p className="font-kulim font-bold text-base md:text-2xl text-center">
                  Quando o clima está seco a saída do sensor fica
                </p>
                <p className="font-kulim font-bold text-base md:text-2xl text-center">
                  em estado alto e quando há uma gota de chuva,
                </p>
                <p className="font-kulim font-bold text-base md:text-2xl text-center">
                  a saída fica em estado baixo. O preço gira em 
                </p>
                <p className="font-kulim font-bold text-base md:text-2xl text-center">
                  torno de R$9,00 ou R$10,00 junto com o comparador.
                </p> 
                <img src={Chuva} alt="" className="mt-6 w-64 md:w-96"/>
            </div>
        </section>
    </div>
  )
}

export default Materiais
