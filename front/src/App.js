import logo from './assets/img/logoblanc.png';
import bdrlogo from './assets/img/footer/Bouches-du-Rhône_13_logo.png';
import c4m from './assets/img/footer/code4marseille.png';
import vp from './assets/img/footer/Voyage_Privé.svg.png';
import inco from './assets/img/footer/inco.png';
import pt from './assets/img/footer/provencetourisme.png';
import aws from './assets/img/footer/AWS.png';
import './App.css';

import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <header>
        <div class="logo">
          <a href="https://dev.jo4marseille.fr/" src="Logo/logo by c4m noir.png" alt="Logo">
            <img src={logo} alt="logo" height="50px" width="150px" />
          </a>

        </div>
        <nav class="d-flex g-1 navi flx-w jc-c">

          <a href="https://dev.jo4marseille.fr/">Accueil</a>
          <a href="#">Projets</a>
          <a href="#">A propos </a>
          <a href="#">Contact</a>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer class="footer">
        <div class="row">
          <a href="https://www.departement13.fr/" target="_blank" class="column">
            <img src={bdrlogo} alt="d13" />
          </a>
          <a href="https://membres.voyage-prive.com/voyageprive/fr/?cid=31746&affid=Marque-exact-42638028443[…]NdCvePsNXX2k_o5m2k7P8h7CDTUxLBP9q1SEIj_No1QaAiqSEALw_wcB" target="_blank" class="column">
          <img src={vp} alt="voyage privé" />
          </a>

          <a href="https://inco-group.co/" target="_blank" class="column">
            <img class="smaller" src={inco} alt="inco"  />
            </a>
        </div>
        <div class="row">
          <a href="https://www.myprovence.fr/" target="_blank" class="column">
          <img class="smaller" src={pt} alt="my provence"  />
          </a>

          <a href="https://code4marseille.fr/" target="_blank" class="column">
          <img class="smaller" src={c4m} alt="code4marseille"  />
          </a>
          <a href="https://aws.amazon.com/fr/?nc2=h_lg" target="_blank" class="column">
            <img src={aws} alt="aws" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
