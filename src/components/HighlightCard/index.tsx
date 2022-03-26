import React from 'react';

import {
    Container,
    Header,
    Title,
    Icon,
    Footer,
    Amount,
    LastTransaction,
} from './style'

interface Props{
    title: string;
    amount:string;
    lastTrasaction:string;
    type: 'up' | 'down' | 'total';
}

const icon ={
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
    total: 'dollar-sign'
}

export function HighlightCard({type,title,amount,lastTrasaction}: Props){
    return(
        <Container>
            <Header>
                <Title>{title}</Title>
                <Icon name={icon[type]} type={type}/>
            </Header>
            <Footer>
                <Amount>{amount}</Amount>
                <LastTransaction>{lastTrasaction}</LastTransaction>
            </Footer>
        </Container>
    )
}