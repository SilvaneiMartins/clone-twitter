import React from 'react';

import Tweet from '../Tweet';

import { Container, Tab, Tweets } from './styles';

const Feed: React.FC = () => {
  return (
      <Container>
          <Tab>Tweets</Tab>

          <Tweets>
            <Tweet 
            description="Apresentação dos Projetos 🚀"
            comments="52"
            retweets="34"
            likes="2437"
            />
            <Tweet 
            description="Convenção de Contábilidade!!"
            comments="39"
            retweets="24"
            likes="754"
            />
            <Tweet 
            description="Encontro de Programadores React!!"
            comments='741'
            retweets='764'
            likes='6543'
            />
            <Tweet 
            description="Encontro de Desenvolvedores Projeto Social 😎"
            comments="412"
            retweets="524"
            likes="6233"
            />
            <Tweet 
            description="Encontro de Tecnologia da Informação 🔌"
            comments="12"
            retweets="75"
            likes="631"
            />
          </Tweets>
      </Container>
  );
}

export default Feed;