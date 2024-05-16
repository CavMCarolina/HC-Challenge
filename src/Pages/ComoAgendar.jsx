import bg from "../assets/background.jpg";

export default function ComoAgendar() {
  return (
    <main>
      <hr className="hr-normal" />
      <img src={bg} alt="Foto de fundo" className="bg" />
      <div className="main_container">
        <h1>Como Agendar?</h1>
        <iframe
          className="video"
          src="https://www.youtube.com/embed/dfaM_jT1LkQ?si=88rT5f0Vo1VTrZ0u"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen=""
        ></iframe>
      </div>
    </main>
  );
}
