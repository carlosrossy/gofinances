import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';

import { 
    Container,
    Header,
    UserInfo,
    Photo,
    User,
    UseGreeting,
    UserName,
    UserWrapper,
    Icon
} from './styles';

export function Dashboard(){
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

          <HighlightCard />
        </Container>
    )
}