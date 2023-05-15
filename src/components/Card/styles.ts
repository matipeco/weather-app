import styled from 'styled-components';

export const StyledCard = styled.article`
    display: flex;
    min-height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center;
    .card-container{
        padding: 20px;
        border-radius: 5px;
        border: transparent;
        background-color: rgba(45, 45, 45, 0.4);
        position: relative;
    }
    .card-button {
        top: 10px;
        right: 17px;
        padding: 0; 
        position: absolute;
        border: none;
        background-color: transparent;
        cursor: pointer;
        font-size: 18px;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.7);
        text-shadow: 1px 1px 8px rgba(255, 255, 255, 0.5);
        transition: 350ms ease-in-out;
    }

    .card-button:hover {
        transform: scale(1.1);
        text-shadow: 2px 2px 10px rgba(255, 255, 255, 0.8);
        color: rgba(0, 0, 0, 0.5);
    }
`