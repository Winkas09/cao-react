import LargeLink from "./LargeLink";
import NewsItem from "./NewsItem";

const NewsSection = () => {
  return (
    <section className="news-section">
      <div className="main-news">
        <NewsItem
          title="Karjera"
          date="2024-05-23"
          category="Kaip juniorui išnaudoti LinkedIn savo naudai ?"
          url="https://codeacademy.lt/kaip-juniorui-isnaudoti-linkedin-savo-naudai/"
          imageSrc="https://codeacademy.lt/wp-content/uploads/2024/05/315d4ed0-6067-11ed-8c07-f1146d90fed4-1-1024x607.jpg"
        />

        <NewsItem
          title="Sėkmės istorija – įsidarbinimas į Asteri"
          date="2024-07-23"
          category="Sėkmės istorija - įsidarbinimas į Asteri"
          url="https://codeacademy.lt/sekmes-istorija-isidarbinimas-i-asteri/"
          imageSrc="https://codeacademy.lt/wp-content/uploads/2024/05/nauja-pauliaus-ft.png"
        />
      </div>

      <div className="secondary-news">
        <NewsItem
          title="Sėkmės istorijos - įsidarbinimas į Bentley Systems"
          date="2024-05-23"
          category="Sėkmės istorijos"
          url="https://codeacademy.lt/sekmes-istorija-isidarbinimas-i-bentley-systems/"
          imageSrc="https://codeacademy.lt/wp-content/uploads/2024/04/Ovidijus-Zaborskis--e1714129215786-1024x870.jpeg"
          alt="news1"
        />
        <NewsItem
          title="Sėkmės istorija - įsidarbinimas į Fresh media"
          date="2024-05-23"
          category="Sėkmės istorijos"
          url="https://codeacademy.lt/sekmes-istorija-isidarbinimas-i-fresh-media/"
          imageSrc="https://codeacademy.lt/wp-content/uploads/2024/04/DSC_0903-Milda-N-1-scaled-e1714131896738-1024x899.jpg"
        />
        <NewsItem
          title="Sėkmės istorija - įsidarbinimas į Visma Tech"
          date="2024-05-23"
          category="Sėkmės istorijos"
          url="https://codeacademy.lt/sekmes-istorija-giedrius-tumosa/"
          imageSrc="https://codeacademy.lt/wp-content/uploads/2024/04/portrait-Giedrius-Tumosa.jpg"
        />
        <NewsItem
          title="Už verslo partnerystės CodeAcademy programavimo akademijoje bus atsakingas IT ekspertas Marius Pareščius"
          date="2024-05-23"
          category="Naujienos"
          url="https://codeacademy.lt/uz-verslo-partnerystes-codeacademy-programavimo-akademijoje-bus-atsakingas-it-ekspertas-marius-parescius/"
          imageSrc="https://codeacademy.lt/wp-content/uploads/2024/04/mp_nuotrauka.jpeg"
        />
      </div>

      <LargeLink url="/#">
        <span>Visos</span> naujienos
      </LargeLink>
    </section>
  );
};

export default NewsSection;
