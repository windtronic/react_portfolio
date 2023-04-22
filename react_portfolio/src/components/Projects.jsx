import gardeningAppImg from "../images/gardening-app.png";
import tickItImg from "../images/tick-it.png";
import pixiDreamsImg from "../images/pixi-dreams.png";
import goFindAnimeImg from "../images/go-find-anime.png";

export default function Projects() {
  return (
    <div className="project-container">
      <div className="project-card">
        <a
          href="https://github.com/windtronic/garden_front_end"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={gardeningAppImg}
            alt="Gardening App"
            width="360"
            height="160"
          />
          <h3>My Gardening App</h3>
        </a>
        <p>
          A <strong>Full-Stack</strong> web application that I developed using <strong>Django in Python,
          DBeaver, React.js, CSS</strong>, and various other libraries including
          <strong> React-Big-Calendar, Material-UI, React Spring, and React Gesture</strong>. The
          purpose of this application is to help gardening enthusiasts plan and
          track their gardens. I was responsible for designing and implementing the entire application.
          This included creating the user interface and using <strong>Reactjs</strong> and its
          various libraries to create a smooth and intuitive user experience.
        </p>
      </div>
      <div className="project-card">
        <a
          href="https://github.com/windtronic/tickit_app_frontend"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={tickItImg} alt="Tick-It" width="360" height="200" />
          <h3>Tick-It</h3>
        </a>
        <p>
          A group project Tick-iT is a concert search and booking app for the
          Denver Metropolitan area. This is a <strong>Full-Stack</strong> project developed
          utilizing <strong>Django for Python, PostgreSQL, React.js, DBeaver, and CSS</strong>. My primary
          role on this project was creating the backend and assisting with the
          front end components.
        </p>
      </div>
      <div className="project-card">
        <a
          href="https://github.com/windtronic/pixidreams-front-end"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={pixiDreamsImg} alt="PixiDreams" width="360" height="180" />
          <h3>PixiDreams</h3>
        </a>
        <p>
        A group project movie blog that provides news & reviews of the latest animated movies. 
        Our blog also provides opportunities for interactivity where visitors can comment or 
        like a blog post, and possibly recommend updates for more content. This <strong>Full-Stack PERN 
        project</strong> developed utilizing <strong>PostgreSQL, Sequelize, Express / Node.js, React.js, and CSS</strong>.
        My primary role on this project was creating the backend and assisting with front end components.

        </p>
      </div>
      <div className="project-card">
        <a
          href="https://github.com/windtronic/anime_search_database"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={goFindAnimeImg}
            alt="Go Find Anime"
            width="360"
            height="160"
          />
          <h3>Go Find Anime</h3>
        </a>
        <p>
          An application made using <strong>Axios, React.js, JavaScript, HTML5, and CSS</strong>.
          The purpose of this application is to search different anime of their
          choice, see a brief synopsis, and a link to “myanimelist” to view the
          full information. This project pulls information from various
          endpoints within the Jikan <strong> Rest API</strong>. The application features a search bar
          that permits searches by title. I used various <strong>React Hooks, including
          useState, and useEffect</strong> to create this functionality.
        </p>
      </div>
    </div>
  );
}
