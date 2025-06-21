import { Profile } from './components/Profile';
import { Footer } from './components/Footer';
import { GlobalStyle } from './styles/global';

const profileData = {
  name: "Marcelia Corrêa",
  bio: "Especialista em terapias naturais e energéticas.",
  imageUrl: "https://scontent.fbel10-1.fna.fbcdn.net/v/t39.30808-1/438171004_7104316853005508_6970590181989255742_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=110&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeE0cNVVoIrXEgatYnG8OFTBsHm1MuEvtIawebUy4S-0huEicBzwJbZB-6CNJBszKGGTAmxebttANqqkPNPP6ns3&_nc_ohc=5KPEBO8BCeYQ7kNvwF-bdZu&_nc_oc=Adn85HAYxpSF5BhI7GhuqHYgZPsJoXxsJeWuc811rJY1r86B8Wfr7MPR4yf4m6Gs9E0&_nc_zt=24&_nc_ht=scontent.fbel10-1.fna&_nc_gid=A7csrBvXf7gccqdqIXEBmw&oh=00_AfOkVVJE0iKqIEU3Gpqub1mBEa7Q1qF1kEb4p1QQ09Ecqg&oe=685CDB79",
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