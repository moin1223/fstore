import AppRouter from './AppRouter';
import Header from './components/common/Header';
function App() {
  let helloo = '';
  console.log(helloo);

  return (
    <>
      <AppRouter>
        <Header />
      </AppRouter>
    </>
  );
}

export default App;
