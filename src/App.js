import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav';
import MyGallery from './components/MyGallery';
import MyFooter from './components/MyFooter';

function App() {
  return (
    <div>
      <MyNav />
      <MyGallery saga="Avengers" />
      <MyGallery saga="Rocky" />
      <MyGallery saga="Harry Potter" />
      <MyFooter />
    </div>
  );
}

export default App;
