import './index.scss';
import SectionTitle from '../../components/SectionTitle';
import htmlcssjsImage from '../../assets/html5-logo-best-web-design-psd-html-cms-development-ecommerce-6.png';
import react from '../../assets/react.png';
import node from '../../assets/nodejs.png';
function Competences() {
    return (
        <main>
            <section id="competences" className='competences'>
                <SectionTitle
                    backgroundtxt = 'Pourquoi moi?'
                    txt = 'Competences'
                />
                <div className='icons'>
                    <img src={react} alt="REACT" />
                    <img src={htmlcssjsImage} alt="HTML CSS JS" />
                    <img src={node} alt="NODE" />
                </div>

                <div className="listeGlobal">
                    <ul className="liste">
                      <li>GESTION DE PROJETS WEB</li>
                      <li>CONCEPTION GRAPHIQUE & WEBDESIGN</li>
                      <li>INTÉGRATION HTML / CSS</li>
                    </ul>
                  
            
                    <ul className="liste">
                      <li>DYNAMISE DES PAGES PAR JAVASCRIPT / REACT</li>
                      <li>VALIDATION W3C, RÉFÉRENCEMENT, ACCESIBILITE ET SEO</li>
                      <li>CONCEPTION MULTI-PLATEFORMES</li>
                    </ul>
                  
                </div>

            </section>
        </main>
    );
  }
export default Competences