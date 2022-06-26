import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

interface TypeProps {
  type: "entry" | "exit" | "total";
}

export const Container = styled.View<TypeProps>`
  background-color: ${(props) =>
    props.type === "total"
      ? props.theme.colors.secondary
      : props.theme.colors.shape};

  width: ${RFValue(300)}px;
  border-radius: 5px;
  padding: 20px 20px ${RFValue(42)}px;
  margin: 0 8px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text<TypeProps>`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${RFValue(20)}px;
  color: ${(props) =>
    props.type === "total"
      ? props.theme.colors.shape
      : props.theme.colors.darkShape};
`;

export const Icon = styled(Feather)<TypeProps>`
  font-size: ${RFValue(30)}px;

  ${(props) =>
    props.type === "entry" &&
    css`
      color: ${(props) => props.theme.colors.success};
    `}

  ${(props) =>
    props.type === "exit" &&
    css`
      color: ${(props) => props.theme.colors.error};
    `}

  ${(props) =>
    props.type === "total" &&
    css`
      color: ${(props) => props.theme.colors.shape};
    `}
`;

export const Content = styled.View``;

export const Amount = styled.Text<TypeProps>`
  font-family: ${(props) => props.theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  margin-top: 38px;
  color: ${(props) =>
    props.type === "total"
      ? props.theme.colors.shape
      : props.theme.colors.darkShape};
`;

export const LastTransaction = styled.Text<TypeProps>`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${(props) =>
    props.type === "total"
      ? props.theme.colors.shape
      : props.theme.colors.text};
`;
