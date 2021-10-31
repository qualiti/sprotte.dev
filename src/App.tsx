import styled from 'styled-components'
import GlobalStyle from './GlobalStyle'

const Page = styled.div`
  background-color: #303030;
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`

const Header = styled.h1`
  font-size: 96px;
  color: #FF7C50;
  margin: 0;
`

const Underline = styled.span`
  text-decoration: underline;
`

const SubHeader = styled.h2`
  font-size: 36px;
  color: white;
  margin-top: 4px;
`

const SocialsList = styled.ul`
  list-style: none;
  font-size: 24px;
  margin: -4px;

  display: flex;
  flex-flow: column;
  align-items: center;

  & > li > a {
    color: white;
    text-decoration: none;
  }

  & > li > a:hover {
    text-decoration: underline;
  }
`

function App() {
  return (
    <Page>
      <GlobalStyle />
      <Header>NOT MUCH TO SEE <Underline>YET</Underline></Header>
      <SubHeader>While I’m working on finishing this page, feel free to check out my public profiles</SubHeader>
      <SocialsList>
        <li><a target="_blank" rel="noreferrer" href='https://github.com/qualiti'>Github</a></li>
        <li><a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/tony-david-sprotte-6555a11a5/'>LinkedIn</a></li>
      </SocialsList>
    </Page>
  );
}

export default App;
