import React from "react";
import styled from "styled-components";
import data from "../data/data.json";

const MainContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
`;

const Item1 = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: conic-gradient(
    yellow ${data["item-4"]}deg,
    black ${data["item-4"]}deg
  );
`;

//START and END numbers
const Item2 = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: conic-gradient(
    orange ${data["item-2"]}deg,
    red ${data["item-2"]}deg ${data["item-6"]}deg
  );
`;

//START and END numbers
const Item3 = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: conic-gradient(
    pink ${data["item-7"]}deg,
    green ${data["item-8"][0]}deg ${data["item-8"][1]}deg
  );
`;

const Chart = () => {
  return (
    <MainContainer>
      <Item1 />
      <Item2 />
      <Item3 />
    </MainContainer>
  );
};

export default Chart;
