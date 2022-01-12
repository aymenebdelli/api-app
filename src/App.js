import React from 'react';
import './App.css';
import styled from 'styled-components';
import Badge from './components/Badge';
import UserList from './components/UserList'
import websites from './websites';


const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  min-height: -webkit-fill-available; /* mobile viewport bug fix */
  overflow-x: auto;
  scroll-behavior: smooth;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap : wrap;
 

  /* Fake padding-right */
  &::after {
    content: '';
    position: relative;
    display: block;
    flex-shrink: 0;
    width: calc(50vw - 160px);
    height: 1px;
  }

  
`;


function App() {

  return (
    <div className="App">
      <Page>
        <Badge fixed>API Card</Badge>

        <Grid>
          {websites.map((website, index) => (
            <UserList
              key={website.description}
              hexa={website.hexa}
              image={website.image}
            />
          ))}
        </Grid>
      </Page>
    </div>
  );
}

export default App;
