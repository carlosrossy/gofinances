import React from 'react';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard } from '../../components/TrasactionCard';

import { 
    Container,
    Header,
    UserInfo,
    Photo,
    User,
    UseGreeting,
    UserName,
    UserWrapper,
    Icon,
    HighlightCards,
    Transactions,
    Title,
    TransactionList
} from './styles';

export function Dashboard(){
    const data = [
        {
        title:'Desenvolvimento de site',
        amount:'R$ 12.000,00',
        category:{
            name:'Vendas',
            icon: 'dollar-sign',
        },
        date:'13/04/2020',
    },
    {
        title:'Hamburgueria Pizzy',
        amount:'R$ 59,00',
        category:{
            name:'Alimentação',
            icon: 'dollar-sign',
        },
        date:'10/04/2020',
    },
    {
        title:'Aluguel do apartamento',
        amount:'R$ 1.200,00',
        category:{
            name:'Vendas',
            icon: 'dollar-sign',
        },
        date:'10/04/2020',
    }]
    return(
        <Container>
          <Header>
            <UserWrapper>
                <UserInfo>
                    <Photo 
                       source={{uri:'https://avatars.githubusercontent.com/u/82986679?v=4'}}
                    />
                    <User>
                        <UseGreeting>Olá,</UseGreeting>
                        <UserName>Carlos</UserName>
                    </User>
                </UserInfo> 
                
                <Icon name='power'/>
            </UserWrapper>
          </Header>

          <HighlightCards>
            <HighlightCard type='up' title='Entradas' amount='R$ 17.400,00' lastTrasaction='Última entrada dia 13 de abril'/>
            <HighlightCard type='down' title='Saídas' amount='R$ 1.259,00' lastTrasaction='Última saída dia 03 de abril'/>
            <HighlightCard type='total' title='Total' amount='R$ 16.141,00' lastTrasaction='01 à 16 de abril'/>
          </HighlightCards>

          <Transactions>
            <Title>Listagem</Title>
            

            <TransactionList 
                data={data}
                renderItem={({item}) => <TransactionCard data={item}/> }
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: getBottomSpace()
                }}
            />

            
          </Transactions>
        </Container>
    )
}