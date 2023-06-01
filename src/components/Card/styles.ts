import styled from "styled-components";

export const StyledCard = styled.article`
  
  .ubicacion {
    text-decoration: none;
    color: #e3fdff;
    cursor: pointer;
    transition: 300ms ease-out;
  }
  .ubicacion:hover {
    text-shadow: 1px 1px 12px rgba(255, 255, 255, 0.2);
    color: white;
  }
  .card {
    &__container {
      font-size: 1.5rem;
      font-family: "Outfit", sans-serif;
      padding: 2rem;
      border-radius: 5px;
      border: transparent;
      background-color: rgba(63, 51, 47, 0.3);

      /* background-color: rgba(63, 51, 47, 0.5); */
      position: relative;
      margin: 1rem;
      color: #e3fdff;
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 28rem;

      /* border: 1px solid red; */
      /* box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2); */
      opacity: 0;
      transition: opacity 1s ease-in, background-color 350ms ease-in, box-shadow 350ms ease-in;
      animation: aparecer 350ms ease-in;

      &.visible {
        opacity: 1;
      }

      &-title {
        display: flex;
        /* align-items: center; */
        justify-content: center;
        /* background-color: grey; */
      }
      &-flag {
        display: flex;
        margin-right:1rem ;
      }
      &:hover {
        box-shadow: 0px 0px 12px 4px rgba(45, 45, 45, 0.1);
         background-color: rgba(63, 51, 47, 0.4);
      }
    }
    &__country {
      margin: 0 1rem 0 2rem;
      font-size: 1.2rem;
    }
    &__city {
      border-right: 1px solid #c9d8ce;
      font-size: 2rem;
      font-weight: 600;
      padding-right: 2rem;
    }

    &__icon {
      width: 7rem;
      height: 7rem;
      margin: 0 auto
    }
    &__button {
      top: 15px;
      right: 17px;
      position: absolute;
      border: none;
      background-color: transparent;
      cursor: pointer;
      font-size: 1rem;
      text-transform: uppercase;
      font-weight: bold;
      color: #e3fdff;
      transition: 300ms ease-out;
    }
  }
  .card__container-section {
    /* background-color: red; */
    margin-top: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    /* flex-direction: column; */
    /* border: 1px solid red; */
    .info {
      margin-left: 1rem;
      display: flex;
      flex-direction: column;
      /* align-items: center; */
      p {
        display: flex;
        align-items: center;
        /* display: inline; */
        margin-top: 1rem;
        /* text-transform: uppercase; */
        font-weight: 600;
        font-size: 1rem;
        /* margin-right: auto; */
      }
      p:first-child {
        margin-top: 0;
      }
      span {
        font-size: 1rem;
        font-weight: 400;
        margin-right: 1rem;
        /* text-decoration: underline; */
        text-transform: uppercase;
      }
      img {
        margin-right: 1rem;
        /* background-color: red; */
      }
    }
  }

  @keyframes aparecer {
  0% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
  }
}

  @media (max-width:70rem){
    .card{
      &__container{
        width: 18rem;
     
      }
      &__city{
        padding:0;
        padding-right: 0.5rem;
        font-size: 1.5rem;
      }
      &__country{
        margin: 0 0.5rem;
        font-size: 1rem;
        
      }
     &__icon{
      width: 5rem;
      height: 5rem;
     }

    }
    .card__container-section{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 16rem;
      .info{
        margin: auto;
        p{
          font-size: 0.9rem;
        }
        span{
          font-size: 0.8rem;
          margin-right:0.5rem;

        }
        img{
          width: 1.2rem;
          height: 1.2rem;
          margin-right: 0.5rem;
        }
      }
    }
  }
`;
