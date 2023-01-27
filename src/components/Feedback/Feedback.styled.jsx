import styled from 'styled-components';

//.color1 {color: #140f07;}
//.color2 {color: #212744;}
//.color3 {color: #56609e;}
//.color4 {color: #97a0fa;}
//.color5 {color: #e9eef6;}

export const Container = styled.div`
  width: fit-content;

  margin: 30px;
  padding: 20px;

  background-color: #e9eef6;
  border: solid 1px #56609e;
  border-radius: 5px;
  box-shadow: 5px 5px 5px -5px rgba(86, 96, 158, 0.6);
`;

export const Title = styled.h1`
  font-size: 30px;
  padding: 0;
  margin: 0;
  color: #212744;
`;

export const ButtonBlock = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 15px;
  margin: 0;
  margin-top: 20px;
`;

export const Button = styled.button`
  padding: 8px 16px;

  text-transform: capitalize;
  background-color: #e9eef6;
  border: solid 1px #56609e;
  border-radius: 8px;
  box-shadow: 5px 5px 5px -5px rgba(86, 96, 158, 0.6);
  color: #212744;
  &:hover,
  &:focus {
    background-color: #56609e;
    color: #e9eef6;
    border-color: #97a0fa;
    transform: scale(0.95);
  }
`;

export const TitleStatistic = styled.h2`
  font-size: 30px;
  padding: 0;
  margin: 0;
  color: #212744;
  margin-top: 20px;
`;

export const StatisticList = styled.ul`
  padding: 0;
  margin: 0;
  margin-top: 20px;

  font-size: 18px;
  color: #212744;
  list-style: none;
`;

export const Item = styled.li`
  font-size: 18px;
  color: #212744;
  margin-bottom: 5px;
  text-transform: capitalize;
`;
