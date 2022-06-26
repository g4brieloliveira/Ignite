import React from "react";
import { Text } from "react-native";

import {
  Amount,
  Container,
  Content,
  Header,
  Icon,
  LastTransaction,
  Title,
} from "./styles";

interface CardProps {
  type: "entry" | "exit" | "total";
  title: string;
  amount: string;
  lastTransaction: string;
}

export const Card = ({ type, title, amount, lastTransaction }: CardProps) => {
  const icon = {
    entry: "arrow-up-circle",
    exit: "arrow-down-circle",
    total: "dollar-sign",
  };

  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>
        <Icon name={icon[type]} type={type} />
      </Header>
      <Content>
        <Amount type={type}>{amount}</Amount>
        <LastTransaction type={type}>{lastTransaction}</LastTransaction>
      </Content>
    </Container>
  );
};
