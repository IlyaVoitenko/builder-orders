import Footer from "../Footer";
import Header from "../Header";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <div className="flex h-screen flex-col text-left m-4">
        <h1>Privacy Policy</h1>
        <br />

        <p>1. Verantwortlicher Stuckwerkstatt Voitenko </p>
        <p>Adresse: Berliner Str 23A, 19300, Grabow </p>
        <p>Inhaber: Oleksandr Voitenko</p>
        <p>E-Mail: stuckwerkstattvoitenko@gmail.com</p>
        <p></p>
        <br />
        <p>
          2. Allgemeine Hinweise
          <br />
          Der Schutz Ihrer persönlichen Daten ist uns wichtig. Unsere Website
          dient ausschließlich zur Bereitstellung von Informationen über unsere
          Produkte und Dienstleistungen. Eine Erhebung, Speicherung oder
          Verarbeitung personenbezogener Daten findet nicht statt.
        </p>
        <br />

        <p>
          3. Server-Logfiles
          <br />
          Beim Aufruf unserer Website werden durch den Provider automatisch
          Informationen gespeichert (z. B. IP-Adresse, Browsertyp, Uhrzeit des
          Zugriffs). Diese Daten werden ausschließlich zur Sicherstellung des
          technischen Betriebs und zur Verbesserung des Angebots verwendet und
          nicht mit anderen Datenquellen zusammengeführt.
        </p>
        <br />

        <p>
          4. Cookies
          <br />
          Unsere Website verwendet keine Cookies, die personenbezogene Daten
          speichern.{" "}
        </p>
        <br />

        <p>
          5. Rechte der Nutzer
          <br />
          Da keine personenbezogenen Daten verarbeitet werden, ergeben sich für
          Nutzer keine weitergehenden Ansprüche. Im Falle von Fragen zum
          Datenschutz können Sie uns jedoch jederzeit unter der oben genannten
          Adresse kontaktieren.{" "}
        </p>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
