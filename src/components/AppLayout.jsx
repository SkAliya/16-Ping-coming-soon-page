import Header from './Header';
import Input from './Input';
import Main from './Main';
import Footer from './Footer';

function AppLayout() {
  return (
    <div className="flex flex-col items-center justify-center p-10 text-center">
      <Header />
      <Input />
      <Main />
      <Footer />
    </div>
  );
}

export default AppLayout;
