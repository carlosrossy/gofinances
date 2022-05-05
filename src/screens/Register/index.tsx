import React, { useState } from 'react';
import { Modal } from 'react-native';

import {Input} from '../../components/Forms/Input'
import { Button } from '../../components/Forms/Button';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton';

import{ 
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionsTypes
} from './styles';


export function Register(){
    const [TransactionType , setTransactionType] = useState('')

    function HandleTransactionsTypeSelect(type : 'up' | 'down'){
        setTransactionType(type)
    }

    return(
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>

        <Form>
            <Fields>
                <Input
                    placeholder='Nome'
                />
                <Input
                    placeholder='Preço'
                />

                <TransactionsTypes>
                    <TransactionTypeButton 
                        type='up' 
                        title='Income'
                        onPress={ () => HandleTransactionsTypeSelect('up')}
                        isActive={TransactionType === 'up'}
                    />

                    <TransactionTypeButton 
                        type='down' 
                        title='Outcome'
                        onPress={ () => HandleTransactionsTypeSelect('down')}
                        isActive={TransactionType === 'down'}
                    /> 
                </TransactionsTypes>

                <CategorySelectButton title='Categoria'/>
                
            </Fields>

            <Button title='Enviar'/>
        </Form>
           
        </Container>
    )
}