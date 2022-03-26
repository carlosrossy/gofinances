import styled, { css } from 'styled-components/native';
import { RFValue , RFPercentage } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'

interface IconProps{
    type: 'up' | 'down' | 'total';
}

export const Container = styled.View`
    background-color: ${({theme}) => theme.colors.shape};

    width: ${RFValue(300)}px;
    border-radius: 5px;

    padding: 19px 23px;
    padding-bottom:  ${RFValue(42)}px;
    margin-right: 16px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const Title  = styled.Text`
    font-size: ${RFValue(18)}px;
    color: ${({theme}) => theme.colors.text_dark};
    font-family: ${({theme})=> theme.fonts.regular};
`;

export const Icon   = styled(Feather)<IconProps>`
    font-size: ${RFValue(40)}px;

    ${(props) => props.type === 'up' && css`
        color: ${({theme}) => theme.colors.sucesse};
    `};

    ${(props) => props.type === 'down' && css`
    color: ${({theme}) => theme.colors.attention};
    `};

    ${(props) => props.type === 'total' && css`
    color: ${({theme}) => theme.colors.shape};
    `};
`;

export const Footer = styled.View`

`;

export const Amount = styled.Text`
    font-size: ${RFValue(32)}px;
    color: ${({theme}) => theme.colors.text_dark};
    font-family: ${({theme})=> theme.fonts.medium};

    margin-top: 38px;
`;

export const LastTransaction = styled.Text`
    font-size: ${RFValue(12)}px;
    color: ${({theme}) => theme.colors.text};
    font-family: ${({theme})=> theme.fonts.regular};
`;
