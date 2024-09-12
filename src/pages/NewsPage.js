import MainSection from "../components/MainSection";
import SidebarSection from "../components/SidebarSection";
import "./NewsPage.css";
import HeaderSection from "../components/HeaderSection";
import FooterSection from "../components/FooterSection";

const NEWS_DATA = [
  {
    title: "Kaip juniorui išnaudoti LinkedIn savo naudai ?",
    date: "2024-05-23",
    category: "Karjera",
    url: "https://codeacademy.lt/kaip-juniorui-isnaudoti-linkedin-savo-naudai/",
    imageSrc:
      "https://codeacademy.lt/wp-content/uploads/2024/05/315d4ed0-6067-11ed-8c07-f1146d90fed4-1-1024x607.jpg",
  },

  {
    title: "Sėkmės istorija – įsidarbinimas į Asteri",
    date: "2024-07-23",
    category: "Sėkmės istorijos",
    url: "https://codeacademy.lt/sekmes-istorija-isidarbinimas-i-asteri/",
    imageSrc: "https://codeacademy.lt/wp-content/uploads/2024/05/nauja-pauliaus-ft.png",
  },

  {
    title: "Sėkmės istorijos - įsidarbinimas į Bentley Systems",
    date: "2024-05-23",
    category: "Sėkmės istorijos",
    url: "https://codeacademy.lt/sekmes-istorija-isidarbinimas-i-bentley-systems/",
    imageSrc:
      "https://codeacademy.lt/wp-content/uploads/2024/04/Ovidijus-Zaborskis--e1714129215786-1024x870.jpeg",
    alt: "news1",
  },
  {
    title: "Sėkmės istorija - įsidarbinimas į Fresh media",
    date: "2024-05-23",
    category: "Sėkmės istorijos",
    url: "https://codeacademy.lt/sekmes-istorija-isidarbinimas-i-fresh-media/",
    imageSrc:
      "https://codeacademy.lt/wp-content/uploads/2024/04/DSC_0903-Milda-N-1-scaled-e1714131896738-1024x899.jpg",
  },
  {
    title: "Sėkmės istorija - įsidarbinimas į Visma Tech",
    date: "2024-05-23",
    category: "Sėkmės istorijos",
    url: "https://codeacademy.lt/sekmes-istorija-giedrius-tumosa/",
    imageSrc: "https://codeacademy.lt/wp-content/uploads/2024/04/portrait-Giedrius-Tumosa.jpg",
  },
  {
    title:
      "Už verslo partnerystės CodeAcademy programavimo akademijoje bus atsakingas IT ekspertas Marius Pareščius",
    date: "2024-05-23",
    category: "Naujienos",
    url: "https://codeacademy.lt/uz-verslo-partnerystes-codeacademy-programavimo-akademijoje-bus-atsakingas-it-ekspertas-marius-parescius/",
    imageSrc: "https://codeacademy.lt/wp-content/uploads/2024/04/mp_nuotrauka.jpeg",
  },
];

const PODCASTS_SECTION_DATA = {
  sectionTitle: "Podcast'ai ir radijo laidos!",
  podcastsList: [
    {
      title: "Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas",
      date: "2024-04-20",
      length: "7:10",
      image: "https://codeacademy.lt/wp-content/uploads/2021/09/Spotify-260x260.png",
    },
    {
      title: "Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas",
      date: "2024-09-20",
      length: "8:00",
      image: "https://codeacademy.lt/wp-content/uploads/2021/09/Spotify-260x260.png",
    },
    {
      title: "Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas",
      date: "2024-07-20",
      length: "6:30",
      image: "https://codeacademy.lt/wp-content/uploads/2021/09/Spotify-260x260.png",
    },
    {
      title: "Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas",
      date: "2024-05-27",
      length: "5:00",
      image: "https://codeacademy.lt/wp-content/uploads/2021/09/Spotify-260x260.png",
    },
  ],
};

const VIDEO_SECTION_DATA = {
  sectionTitle: "Vaizdo įrašai",
  videoList: [
    {
      title: "#6 Studentės istorija: Sėkmė slypi disciplinoje",
      src: "https://www.youtube.com/embed/Rz6bswWbPqw?si=JO7T63DfL1Vp6vgc",
    },
    {
      title: "#4 Ctrl+Alt+Defend: Kibernetinis saugumas šiandien",
      src: "https://www.youtube.com/embed/yovsPjuDElw?si=g-b3fhYCiBu7Ok64",
    },
    {
      title: "Susipažink su mūsų įdarbinimo partneriais - Danske Bank!",
      src: "https://www.youtube.com/embed/7X4iX-D6ymQ?si=PPDI5GmSGyV9ZgmI",
    },
    {},
    {},
  ],
};

const EVENTS_DATA = {
  sectionTitle: "Renginiai",
  eventsList: [
    {
      title: "CodeAcademy galimybės verslui",
      day: "5",
      month: "Spalio",
      location: "Upės g. 21, Greenhall 1, 10 aukštas ir Online",
      imageSrc: "https://codeacademy.lt/wp-content/uploads/2024/06/0530_CA_event-768x432.png",
    },
    {
      title: "CodeAcademy galimybės verslui",
      day: "30",
      month: "Gegužės",
      location: "Upės g. 21, Greenhall 1, 10 aukštas ir Online",
    },
    {
      day: "5",
      month: "Spalio",
    },
    {
      day: "",
      month: "",
    },
  ],
};

const NewsPage = () => {
  return (
    <div className="container">
      <HeaderSection />
      <div className="page-content">
        <MainSection newsData={NEWS_DATA} videoSectionData={VIDEO_SECTION_DATA} />
        <SidebarSection podcastSectionData={PODCASTS_SECTION_DATA} eventsData={EVENTS_DATA} />
      </div>
      <FooterSection />
    </div>
  );
};
export default NewsPage;
