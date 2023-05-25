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
      background-color: rgba(63, 51, 47, 0.5);
      position: relative;
      margin: 1rem;
      color: #e3fdff;
      display: flex;
      flex-direction: column;
      /* align-items: center; */
      width: 28rem;
      /* border: 1px solid red; */
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
      transition: 300ms ease-out;

      &-title {
        display: flex;
        align-items: center;
        justify-content: center;
        /* background-color: grey; */
      }
      &-flag {
        display: flex;
      }
      &:hover {
        background-color: rgba(63, 51, 47, 0.6);
      }
    }
    &__country {
      margin: 0 1rem 0 2rem;
      /* margin: 0 0 1rem; */
      font-size: 1.2rem;
    }
    &__city {
      border-right: 1px solid #c9d8ce;
      font-size: 2rem;
      font-weight: 600;
      padding-right: 2rem;
      /* text-transform: uppercase; */
    }

    &__icon {
      width: 8rem;
      height: 8rem;
    }
    &__button {
      top: 15px;
      right: 17px;
      padding: 0;
      position: absolute;
      border: none;
      background-color: transparent;
      cursor: pointer;
      font-size: 1rem;
      text-transform: uppercase;
      font-weight: bold;
      color: #e3fdff;
      /* text-shadow: 1px 1px 8px rgba(255, 255, 255, 0.5); */
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
`;
