import gardeningAppImg from '../images/gardening-app.png';
import tickItImg from '../images/tick-it.png';
import pixiDreamsImg from '../images/pixi-dreams.png';
import goFindAnimeImg from '../images/go-find-anime.png';

export default function Projects() {
  return (
    <div className="project-container">
      <div className="project-card">
        <a href="https://github.com/windtronic/garden_front_end" target="_blank" rel="noopener noreferrer">
          <img src={gardeningAppImg} alt="Gardening App" width="360" height="260" />
          <h3>My Gardening App</h3>
        </a>
      </div>
      <div className="project-card">
        <a href="https://github.com/windtronic/tickit_app_frontend" target="_blank" rel="noopener noreferrer">
          <img src={tickItImg} alt="Tick-It" width="360" height="260" />
          <h3>Tick-It</h3>
        </a>
      </div>
      <div className="project-card">
        <a href="https://github.com/windtronic/pixidreams-front-end" target="_blank" rel="noopener noreferrer">
          <img src={pixiDreamsImg} alt="PixiDreams" width="360" height="260" />
          <h3>PixiDreams</h3>
        </a>
      </div>
      <div className="project-card">
        <a href="https://github.com/windtronic/anime_search_database" target="_blank" rel="noopener noreferrer">
          <img src={goFindAnimeImg} alt="Go Find Anime" width="360" height="260" />
          <h3>Go Find Anime</h3>
        </a>
      </div>
    </div>
  );
}
