import './App.css';
import CardList from './CardList';
import CardList1 from './CardList1';
import Header from './Header';
import Data from './data';
import Text from './text';
import Photo from './photo';
import Photo2 from './photo2';
import Button from './button';
import Button2 from './button2';

function App() {
  return (
    <>

      <div>
        <Data />
        <img src="https://www.chitkara.edu.in/wp-content/themes/chitkara/images/home-banner/chitkara-university-slider.jpg" style={{ width: '100%' }} />
        <Photo />
        <CardList />
        <Button />
        <Photo2 />
        <CardList1 />
        <Button2 />
        <Header />
        <Text />
      </div>

    </>
  );
}

export default App;
