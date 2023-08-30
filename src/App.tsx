import { GlobalStyle } from './styles/globalStyle';
import useApp from './hooks/useApp';
import useLocalStorage from './hooks/useLocalStorage';
import MainPage from './pages/MainPage';
function App() {

  const {getItem, lastPage} = useLocalStorage()
  const { goForward, goBack, movePageInBreadCrumb, moveHomePage, currentPage, resetPage } = useApp()
  
  return (
    <div className="App">
      <GlobalStyle/>
      <MainPage 
      forward = { goForward }
      back = { goBack }
      movePageInBreadCrumb = { movePageInBreadCrumb }
      moveHomePage={ moveHomePage }
      lastPage = { lastPage('prac1') }
      breadCrumbData = { getItem('prac1') }
      currentPage = { currentPage }
      resetPage = { resetPage }
      />
    </div>
  );
}

export default App;
