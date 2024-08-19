import React from "react"
import sensorchuva from '../public/sensor_chuva.png'

function Bibliografia() {
  return (
    <div id="bibliografia" className='px-4 py-5'>
      <h2 className="font-kulim text-orange text-3xl md:text-5xl font-bold text-center">
        Referências Bibliográficas
      </h2>
      <section className="flex flex-col items-center mt-6">
        <p className="font-kulim text-center font-bold text-base md:text-2xl mt-2">
          <a href="https://ecoinovar.com.br/cd2017/arquivos/artigos/ECO1729.pdf" target="_blank" rel="noopener noreferrer">
            https://ecoinovar.com.br/cd2017/arquivos/artigos/ECO1729.pdf
          </a>
        </p>
        <p className="font-kulim text-center font-bold text-base md:text-2xl mt-2">
          <a href="https://ric.cps.sp.gov.br/handle/123456789/7407" target="_blank" rel="noopener noreferrer">
            https://ric.cps.sp.gov.br/handle/123456789/7407
          </a>
        </p>
        <p className="font-kulim text-center font-bold text-base md:text-2xl mt-2">
          <a href="https://www.youtube.com/watch?v=Qgv7h8H24d0" target="_blank" rel="noopener noreferrer">
            https://www.youtube.com/watch?v=Qgv7h8H24d0
          </a>
        </p>
        <img src={sensorchuva} className='mt-6 w-48 md:w-96' alt="Sensor de chuva" />
      </section>
    </div>
  )
}

export default Bibliografia
