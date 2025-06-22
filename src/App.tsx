import { Profile } from './components/Profile';
import { Footer } from './components/Footer';
import { GlobalStyle } from './styles/global';
import marceImg from '../src/assets/marcelia2.png';

const profileData = {
  name: "Marcelia Corrêa",
  bio: "Especialista em terapias naturais e energéticas.",
  imageUrl: marceImg,
  links: [
    {
      title: "Instagram",
      url: "https://www.instagram.com/marcelia.correa/",
      icon: "bi bi-instagram"
    },
    {
      title: "Ebook de Pilates",
      url: "https://marceliacorrea.orbitpages.online/",
      icon: "bi bi-cart3",
      highlight: true
    },
    {
      title: "Facebook",
      url: "https://www.facebook.com/people/Cultive-Mais-Sa%C3%BAde/100092350825305/?locale=pt_BR",
      icon: "bi bi-facebook"
    },
    {
      title: "Whatsapp",
      url: "https://wa.me/559184475446",
      icon: "bi bi-whatsapp"
    }
  ]
};

function App() {
  return (
    <>
      <GlobalStyle />
      <Profile {...profileData} />
      <Footer />
    </>
  );
}

export default App;

///https://wa.me/559184475446