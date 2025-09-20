import Footer from "../Footer";
import Header from "../Header";

const SiteNotice = () => {
  return (
    <>
      <Header />
      <div className="flex h-screen flex-col text-left m-4">
        <h1>Impressum</h1>
        <br />

        <p>Angaben gemäß § 5 TMG: Stuckwerkstatt Voitenko </p>
        <p>Inhaber: Oleksandr Voitenko</p>
        <p>Adresse: Berliner Str 23A, 19300, Grabow </p>
        <br />
        <p>Kontakt</p>
        <p>Telefon: +491639252077</p>
        <p>E-Mail: stuckwerkstattvoitenko@gmail.com</p>
        <br />

        <p> Umsatzsteuer-ID: [DE...]</p>
        {/* (сюда немецкий налоговый номер, если есть; если
      нет — убери эту строку)  */}
        <p> Handelsregister:</p>
        {/* [Registergericht, HRB-Nummer] */}
        {/* (сюда данные из торгового реестра, если есть; если у тебя
      Einzelunternehmen без Handelsregister — убери эту строку) */}
        <p>
          Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: Oleksandr
          Voitenko,Berliner Str 23A, 19300, Grabow{" "}
        </p>
        {/* [Name, Anschrift] (сюда снова твое имя и адрес, как выше) */}
      </div>
      <Footer />
    </>
  );
};

export default SiteNotice;
