import bg from "../assets/background.jpg";

export default function Sangue() {
  return (
    <main>
      <hr className="hr-normal" />
      <div className="main_container">
        <h1>Exames - Exame de Sangue</h1>
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
