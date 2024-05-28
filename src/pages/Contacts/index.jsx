import SectionTitle from '../../components/SectionTitle';
import './index.scss';
import FBicon from '../../assets/fb.png';
import insta from '../../assets/insta.webp';
import github from '../../assets/github.png';
import linkedin from '../../assets/link.png'

function Contacts() {
    const contactsTab = [
        {
            titleTab: 'Adresse',
            description: '3 Pace de la Fresnaye, 77380 Combs-la-Ville',
        },
        {
            titleTab: 'Numero',
            description: '+33 7 66 34 39 18',
        },
        {
            titleTab: 'E-mail',
            description: 'mun.anastasia99@gmail.com',
        },
      ];
    return (
        <main>
            <section id="contacts" className='contacts'>
                <SectionTitle
                backgroundtxt = 'Contactez-moi'
                txt = 'Contacts'
                />

                <p className='contacts-intro'>Une idée? N'hésites pas à demander un devis!</p>
                
     
        <div className='bloc-contacts'>
            {contactsTab.map((adresse) => (   
                <div className='carre'>   
                    <p className='bloc-titre'>{adresse.titleTab}</p>
                    <p>{adresse.description}</p>
                </div>
             ))}    
        </div>
        
        <div className='bloc-formulaire'>
            
        </div>
   

      <div className="social-media">
        <h3>Suivez-moi sur les réseaux sociaux:</h3>
            <div className='mediaLogo'>
                <a href="https://www.facebook.com/nastyusha.colesnic" target="_blank"><img src={FBicon} alt="facebook icon" /></a>
                <a href="https://www.instagram.com/anastasia_events.france/" target="_blank"><img src={insta} alt="instagram icon" /></a>
                <a href="https://github.com/anastasia99m" target="_blank"><img src={github} alt="github icon" /></a>
                <a href="https://www.linkedin.com/in/anastasia-muntean-850586243/" target="_blank"><img src={linkedin} alt="linkedin icon" /></a>
            </div>
      </div>
   
            </section>
        </main>
    );
  }
export default Contacts