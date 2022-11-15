Charte graphique de JO4Marseille : 



Typographie : 

Poppins  :(google font)

-slim
-régular
-medium
-semibold


	
Couleur : 

Hexa

bleu nuit : #00004D
Or : #D7C378
Corail : #FF5757
bleu olympique : #0282C8
jaune olympique : #00A651
vert olympique : #00A651
rouge olympique : #ED354F
noir : #000000
blanc : #FFFFFF




HTML Footer :

<footer class="footer">
      <div class="row">
        <a href="https://www.departement13.fr/" target="_blank" class="column">
          <img src="/img/1280px-Bouches-du-Rhône_13_logo.png" alt="d13" />
        </a>
        <a href="https://membres.voyage-prive.com/voyageprive/fr/?cid=31746&affid=Marque-exact-42638028443[…]NdCvePsNXX2k_o5m2k7P8h7CDTUxLBP9q1SEIj_No1QaAiqSEALw_wcB" target="_blank" class="column">
        <img src="/img/1280px-Voyage_Privé.svg.png" alt="voyage privé" />
        </a>
        <a href="https://aws.amazon.com/fr/?nc2=h_lg" target="_blank" classN="column">
        <img src="/img/1024px-Amazon_Web_Services_Logo.png" alt="aws" />
        </a>
      </div>
      <div class="row">
        <a href="https://www.myprovence.fr/" target="_blank" class="column">
        <img class="smaller" src="/img/provencetourisme.png" alt="my provence"  />
        </a>
        <a href="https://inco-group.co/" target="_blank" class="column">
        <img class="smaller" src="/img/inco.png" alt="inco"  />
        </a>
        <a href="https://code4marseille.fr/" target="_blank" className="column">
        <img class="smaller" src="/img/code4marseilleF.png" alt="code4marseille"  />
        </a>
      </div>
    </footer>


CSS Footer


.container {
  padding: 0 2rem;
}
.footer {
  display: flex;
  flex: 1;
  flex-direction: column;
  border: 1px solid #707070;
  padding-bottom: 40px;
}

.footer a {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}

.row {
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 33%;
  padding: 10px;
}

.column img {
  height: 70px;
  object-fit: contain;
}

.smaller{
  height: 40px !important;
}

@media (max-width: 600px) {
  .grid {
    width: 100%;
    flex-direction: column;
  }
}









