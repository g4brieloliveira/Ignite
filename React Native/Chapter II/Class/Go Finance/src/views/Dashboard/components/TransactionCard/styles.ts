import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

interface TransactionProps {
  type: "positive" | "negative";
}

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.shape};
  border-radius: 5px;

  padding: 15px 25px;
  margin: 8px 0;
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${(props) => props.theme.fonts.regular};
`;

export const Amount = styled.Text<TransactionProps>`
  font-size: ${RFValue(20)}px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) =>
    props.type === "positive"
      ? props.theme.colors.success
      : props.theme.colors.error};
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${RFValue(15)}px;
`;

export const Category = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(18)}px;
  color: ${(props) => props.theme.colors.text};
  margin-right: ${RFValue(5)}px;
`;

export const CategoryName = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${(props) => props.theme.colors.text};
`;

export const Date = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${(props) => props.theme.colors.text};
`;
