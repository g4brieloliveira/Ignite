import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Card } from "./components/Card";
import { TransactionCard, TransactionCardProps } from "./components/TransactionCard";

import {
  CardsContainer,
  Container,
  Header,
  Icon,
  Photo,
  User,
  UserGreeting,
  UserInfo,
  UserName,
  UserWrapper,
  Transactions,
  Title,
  TransactionsList,
} from "./styles";

export interface DataProps extends TransactionCardProps {
  id: number;
}

export const Dashboard = () => {
  const data: DataProps[] = [
    {
      id: 1,
      type: 'positive',
      title: "Desenvolvimento",
      amount: "R$12.000,00",
      category: {
        name: "Venda",
        icon: "dollar-sign",
      },
      date: "00/00/0000",
    },
    {
      id: 2,
      type: 'negative',
      title: "Desenvolvimento 2",
      amount: "R$10.000,00",
      category: {
        name: "Comida",
        icon: "coffee",
      },
      date: "00/00/0000",
    },
    {
      id: 3,
      type: 'positive',
      title: "Desenvolvimento 3",
      amount: "R$8.000,00",
      category: {
        name: "Casa",
        icon: "home",
      },
      date: "00/00/0000",
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/66377006?v=4",
              }}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Gabriel</UserName>
            </User>
          </UserInfo>
          <TouchableOpacity>
            <Icon name="power" />
          </TouchableOpacity>
        </UserWrapper>
      </Header>
      <CardsContainer>
        <Card
          type="entry"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
        <Card
          type="exit"
          title="Saídas"
          amount="R$ 1.259,00"
          lastTransaction="Última saída dia 03 de abril"
        />
        <Card
          type="total"
          title="Total"
          amount="R$ 16.141,00"
          lastTransaction="01 à 16 de abril"
        />
      </CardsContainer>

      <Transactions>
        <Title>Listagem</Title>
        <TransactionsList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
          showsVerticalScrollIndicator={false}
        />
      </Transactions>
    </Container>
  );
};
