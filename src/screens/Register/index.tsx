import React, { useState } from 'react';
import { Modal } from 'react-native';

import { Input } from '../../components/Forms/Input'
import { Button } from '../../components/Forms/Button';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton';

import { CategorySelect } from '../CategorySelect';

import {
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionsTypes
} from './styles';


export function Register() {

    const [TransactionType, setTransactionType] = useState('')
    const [CategoryModalopen, setCategoryModalopen] = useState(false)

    const [Category, setCategory] = useState({
        key: 'category',
        name: 'Categoria',
    })

    function HandleTransactionsTypeSelect(type: 'up' | 'down') {
        setTransactionType(type)
    }

    function hadleOpenSelectCategoryModal() {
        setCategoryModalopen(true)
    }

    function hadleCloseSelectCategoryModal() {
        setCategoryModalopen(false)
    }

    return (
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
                            onPress={() => HandleTransactionsTypeSelect('up')}
                            isActive={TransactionType === 'up'}
                        />

                        <TransactionTypeButton
                            type='down'
                            title='Outcome'
                            onPress={() => HandleTransactionsTypeSelect('down')}
                            isActive={TransactionType === 'down'}
                        />
                    </TransactionsTypes>

                    <CategorySelectButton title={Category.name} onPress={hadleOpenSelectCategoryModal} />

                </Fields>

                <Button title='Enviar' />
            </Form>

            <Modal visible={CategoryModalopen}>
                <CategorySelect
                    category={Category}
                    setCategory={setCategory}
                    closeSelectCategory={hadleCloseSelectCategoryModal}
                />
            </Modal>
        </Container>
    )
}