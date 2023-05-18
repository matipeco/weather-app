import styled from "styled-components";

export const StyledCard = styled.article`
  /* display: flex;
    min-height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center; */
  .card {
    &__container {
      font-size: 1.5rem;
      font-family: "Outfit", sans-serif;
      padding: 3rem 3rem 3rem 2rem;
      border-radius: 5px;
      border: transparent;
      background-color: rgba(63, 51, 47, 0.4);
      position: relative;
      margin: 1rem;
      color: #e3fdff;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 30rem;
      &-title {
        display: flex;
        justify-content: center;
        /* align-items: center; */
      }
    }
    &__country {
      margin: 0 1rem;
    }
    &__city {
      border-right: 1px solid #c9d8ce;
      padding-right: 2rem;
      /* text-transform: uppercase; */
      font-size: 3rem;
      /* text-transform: uppercase; */
    }

    &__icon {
      width: 7rem;
      height: 7rem;
    }
    &__button {
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
      &:hover {
        transform: scale(1.1);
        text-shadow: 2px 2px 10px rgba(255, 255, 255, 0.8);
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }
  .card__container-section {
    /* background-color: red; */
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    /* flex-direction: column; */
    img {
    }
    .info {
      margin-left: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      p {
        /* display: flex; */
        /* display: inline; */
        margin-top: 1rem;
        /* text-transform: uppercase; */
        font-weight: 600;
        font-size: 1.2rem;
        margin-right: auto;
      }
      p:first-child {
        margin-top: 0;
      }
      span {
        font-size: 1.2rem;
        font-weight: 400;
        margin-right: 1rem;
        /* text-decoration: underline; */
        text-transform: uppercase;
      }
    }
  }
`;
