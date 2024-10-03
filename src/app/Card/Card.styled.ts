import styled from "styled-components";
import img from "../../../public/assets/tree.jpg"

export const StyledCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background-color: #fff;
  transition: all 0.3s ease;

  &.card-1 {
    padding: 5rem;
    background-color: rgb(137, 215, 230);
    border: 3px solid rgb(147, 241, 179);
    }
`;

export const StyledDiv = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center;     
    height: 100%;           
`;

export const StyledText = styled.p`
    font-family: "Allura", cursive;
    font-weight: 100;
    font-style: normal;
    font-size: 30px;
    color: purple;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const StyledImg = styled.div`
  background-image: url(${img.src});
  background-size: cover;
  width: 100px;
  height: 100px;
`;