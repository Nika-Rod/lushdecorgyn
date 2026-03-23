import styled from "styled-components";


export const SectionTitle = styled.h2`
  font-family: "Neucha", cursive; 
  font-size: 2.8rem;
  color: #fff;
  text-align: center;
  margin-bottom: 50px;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 10%;
    width: 80%;
    height: 4px;
    background-color: #ffd700; 
    border-radius: 2px;
    transform: rotate(-1deg);
  }
`;

export const OpinionCard = styled.div`
  background-color: #fff;
  padding: 40px 25px;
  border-radius: 15px 50px 15px 40px / 40px 15px 50px 15px;
  border: 2px solid #1a1a1a;
  box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin: 10px;
  box-sizing: border-box;
`;

export const UserPhoto = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 2px solid #1f2a37;
  object-fit: cover;
`;

export const TestimonyText = styled.p`
  font-family: "Neucha", cursive;
  font-size: 1.2rem;
  line-height: 1.5;
  color: #4a5568;
  margin: 20px 0;
  text-align: center;
  flex-grow: 1;

  &::before {
    content: '" ';
    color: #f89071;
    font-weight: bold;
    font-size: 1.5rem;
  }
  &::after {
    content: ' "';
    color: #f89071;
    font-weight: bold;
    font-size: 1.5rem;
  }
`;
