"use client"

import React, { useState } from 'react';

const Page: React.FC = () => {
  const [mousePos, setMousePos] = useState<number>(0);  // Posição do mouse no eixo Y
  const [minutes, setMinutes] = useState<number>(0);    // Minutos baseados na posição do mouse
  const [mouseUpdate, setMouseUpdate] = useState<boolean>(false); // Controle de visibilidade da linha vermelha

  // Função para lidar com o movimento do mouse dentro do container
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const containerHeight = e.currentTarget.clientHeight;  // Altura do container
    const offsetY = e.clientY - e.currentTarget.getBoundingClientRect().top;  // Distância do topo do container até o mouse
    const newPos = Math.min(offsetY, containerHeight);  // Limitar a posição do mouse ao tamanho do container

    // Calcular os minutos (2px = 1 minuto)
    const newMinutes = Math.floor(newPos / 2);  // Calcula os minutos com base nos pixels do mouse

    setMouseUpdate(true);  // Mostrar a linha vermelha quando o mouse se mover
    setMousePos(newPos);   // Atualiza a posição do mouse no eixo Y
    setMinutes(newMinutes);  // Atualiza os minutos
  };

  // Função para esconder a linha vermelha quando o mouse sair da área
  const handleMouseOut = () => {
    setMouseUpdate(false); // Esconde a linha vermelha quando o mouse sai
  };

  return (
    <div className="w-full flex justify-center py-4">
      <div
        className="w-full h-[2880px] relative bg-gray-100 overflow-hidden"
        onMouseMove={handleMouseMove}   // Evento de movimento do mouse
        onMouseOut={handleMouseOut}     // Evento de mouse saindo do container
      >
        {/* Linha vermelha que segue o mouse no eixo Y */}
        {mouseUpdate && (
          <div
            className="absolute left-0 w-full h-[2px] bg-red-500"
            style={{ top: mousePos }}  // A linha segue a posição Y do mouse
          >
            <p className='absolute left-0 top-0 p-2 rounded-xl bg-red-500 text-white'>
              {minutes} minutos
            </p>
          </div>
        )}

        {/* Exibindo os minutos calculados */}
        <div className="absolute top-0 left-0 p-2 text-white bg-black rounded">
          {minutes} minutos
        </div>
      </div>
    </div>
  );
};

export default Page;
