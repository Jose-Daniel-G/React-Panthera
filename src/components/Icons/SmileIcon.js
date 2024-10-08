import React, { useState } from 'react';

const SmileIcon = ({ width = 24, height = 24, fill = "#ffffff", opacity = 0.7 }) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <svg
            onClick={handleClick}
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            style={{
                opacity: opacity,
                borderRadius: '50%', // Hace que el contenedor sea un círculo
                padding: '8px', // Ajusta el espacio dentro del círculo
                backgroundColor: isActive ? 'rgba(255, 255, 255, 0.2)' : 'transparent',// Borde activado al hacer clic
                cursor: 'pointer', // Añade un cursor de mano al pasar sobre el ícono
                transition: 'border 0.2s ease' // Transición suave para el borde
            }}
        >
            <g fill={fill}>
                <path d="M324.8 440c34.4 0 62.4-28 62.4-62.4s-28-62.4-62.4-62.4-62.4 28-62.4 62.4 28 62.4 62.4 62.4z m374.4 0c34.4 0 62.4-28 62.4-62.4s-28-62.4-62.4-62.4-62.4 28-62.4 62.4 28 62.4 62.4 62.4zM340 709.6C384 744 440.8 764.8 512 764.8s128-20.8 172-55.2c26.4-21.6 42.4-42.4 50.4-58.4 6.4-12 0.8-27.2-11.2-33.6s-27.2-0.8-33.6 11.2c-0.8 1.6-3.2 6.4-8 12-7.2 10.4-17.6 20-28.8 29.6-34.4 28-80.8 44.8-140.8 44.8s-105.6-16.8-140.8-44.8c-12-9.6-21.6-20-28.8-29.6-4-5.6-7.2-9.6-8-12-6.4-12-20.8-17.6-33.6-11.2s-17.6 20.8-11.2 33.6c8 16 24 36.8 50.4 58.4z" />
                <path d="M512 1010.4c-276.8 0-502.4-225.6-502.4-502.4S235.2 5.6 512 5.6s502.4 225.6 502.4 502.4-225.6 502.4-502.4 502.4zM512 53.6C261.6 53.6 57.6 257.6 57.6 508s204 454.4 454.4 454.4 454.4-204 454.4-454.4S762.4 53.6 512 53.6z" />
            </g>
        </svg>
    );
};

export default SmileIcon;
