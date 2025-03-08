import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import ProductsListPage from "./pages/ProductsListPage";

const App = () => {
  const localUser = localStorage.getItem('user')
  const user = JSON.parse(localUser)
  const page = user ? <ProductsListPage /> : <LoginPage />
  return (
    <>
      <Header />
      {page}
      <Footer />
    </>
  );
};

export default App;
