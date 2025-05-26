import { Profile } from './components/Profile';
import { Footer } from './components/Footer';
import { GlobalStyle } from './styles/global';

const profileData = {
  name: "Marcelia Corrêa",
  bio: "Especialista em terapias naturais e energéticas.",
  imageUrl: "https://scontent.fbel10-1.fna.fbcdn.net/v/t39.30808-6/438171004_7104316853005508_6970590181989255742_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=uxJfbix6jbEQ7kNvwGJYLPZ&_nc_oc=AdkWft7RTW8iMXrhEmCYXuw04il-TowZfJmUFwGyvaWzNOUe912SYf1pYXVzZCYVMJM&_nc_zt=23&_nc_ht=scontent.fbel10-1.fna&_nc_gid=Ig601f_LMQPGzxwslRUkxg&oh=00_AfK1opN4qiWojFWmDdjDESYAM2CTzENelEPbZySGZsDFQQ&oe=683AB37B",
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