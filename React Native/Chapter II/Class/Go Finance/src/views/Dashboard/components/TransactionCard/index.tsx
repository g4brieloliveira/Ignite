import React from "react";

import {
  Amount,
  Category,
  CategoryName,
  Container,
  Date,
  Footer,
  Icon,
  Title,
} from "./styles";

interface CardCategoryProps {
  name: string;
  icon: string;
}
export interface TransactionCardProps {
  data: {
    type: "positive" | "negative";
    title: string;
    amount: string;
    category: CardCategoryProps;
    date: string;
  };
}

export const TransactionCard = ({ data }: TransactionCardProps) => {
  return (
    <Container>
      <Title>{data.title}</Title>
      <Amount type={data.type}>
        {data.type === "negative" && "- "}
        {data.amount}
      </Amount>
      <Footer>
        <Category>
          <Icon name={data.category.icon} />
          <CategoryName>{data.category.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
};
