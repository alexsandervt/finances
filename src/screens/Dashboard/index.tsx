import React from 'react';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionsCard } from '../../components/TransactionCard';

import { 
  Container, 
  Header, 
  UserWrapper,
  UserInfo, 
  Photo,
  User, 
  UserGratting, 
  UserName,
  HighlightCards,
  Title,
  Transactions,
  TransactionList,
  Icon 
} from './styles'

export function Dashboard(){

  const data = [{
    title: "Desenvolvimento de site" ,
    amount: "R$ 12.000,00" ,
    category: {
     name: 'Vendas',
      icon: 'dollar-sign'
  },
  date: "13/04/2021"
  },
  {
    title: "Desenvolvimento de site" ,
    amount: "R$ 12.000,00" ,
    category: {
     name: 'Vendas',
      icon: 'dollar-sign'
  },
  date: "13/04/2021"
  },
  {
    title: "Desenvolvimento de site" ,
    amount: "R$ 12.000,00" ,
    category: {
     name: 'Vendas', 
      icon: 'dollar-sign'
  },
  date: "13/04/2021"
  }]


  return(
    <Container>
     <Header>
       <UserWrapper>
        <UserInfo>
          <Photo source={{uri: 'https://avatars.githubusercontent.com/u/61851828?v=4'}} />
          <User>
            <UserGratting>Olá,</UserGratting>
            <UserName>Alexsander</UserName>
          </User>
        </UserInfo>
        <Icon name="power"/>
       </UserWrapper>
     </Header>
    
    <HighlightCards>
      <HighlightCard 
        type="up"
        title="Entradas" 
        amount="R$ 17.400,00" 
        lastTransaction="Última entrada dia 13 de abril"
        />
      <HighlightCard 
        type="down"
        title="Saídas" 
        amount="R$ 1.259,00" 
        lastTransaction="Última saída dia 03 de abril"
        />
      <HighlightCard 
        type="total"
        title="Total" 
        amount="R$ 16.141,00" 
        lastTransaction="01 à 16 de abril"
        />
     
    </HighlightCards>
    
    <Transactions>
      <Title>Listagem</Title>
      <TransactionList
        data={data}
        renderItem={({ item })=> <TransactionsCard data={item}/>}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: getBottomSpace()}}
      />
      

    </Transactions>
        
    </Container>
  )
}
