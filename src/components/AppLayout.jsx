import Header from './Header';
import Input from './Input';
import Main from './Main';
import Footer from './Footer';

function AppLayout() {
  return (
    <div className="flex h-dvh flex-col items-center justify-center text-center">
      <Header />
      <Input />
      <Main />
      <Footer />
    </div>
  );
}

export default AppLayout;
