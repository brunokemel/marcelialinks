import { Profile } from './components/Profile';
import { Footer } from './components/Footer';
import { GlobalStyle } from './styles/global';

const profileData = {
  name: "Marcelia Corrêa",
  bio: "Especialista em terapias naturais e energéticas.",
  imageUrl: "https://scontent.fbel10-1.fna.fbcdn.net/v/t39.30808-6/438171004_7104316853005508_6970590181989255742_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE0cNVVoIrXEgatYnG8OFTBsHm1MuEvtIawebUy4S-0huEicBzwJbZB-6CNJBszKGGTAmxebttANqqkPNPP6ns3&_nc_ohc=gbNakP-pQ4oQ7kNvwG-ycD_&_nc_oc=AdnCTWyBt0hSJIM5Il-ykJouPuvhhHUjoDpkMDGvsyEJsXFlxMZ4AITto-XufPFdb_M&_nc_zt=23&_nc_ht=scontent.fbel10-1.fna&_nc_gid=yZdjvvMq4vSNxvA3ZJPxaA&oh=00_AfLpkBp861AiSaau4cnsNLFReCZOKkpS7QIEKuWb3eO77A&oe=6822C03B",
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
      url: "https://www.facebook.com/profile.php?id=100092350825305&locale=pt_BR",
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