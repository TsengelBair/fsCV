import "./Main.css";

const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="main_inner">
          <h1 className="main_inner_title">
            Hi, my name is <em>Bair</em>
          </h1>
          <h2 className="main_inner_subtitle">I’m a math and chess teacher</h2>
          <a
            href="https://drive.google.com/file/d/1YaRFNaD0EcG-uH5p0SV5IbapcMedPGnK/view?usp=sharing"
            download
          >
            <button className="main_btn">Download CV</button>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Main;
