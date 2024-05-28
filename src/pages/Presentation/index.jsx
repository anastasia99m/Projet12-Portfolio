import SectionTitle from '../../components/SectionTitle';
import './index.scss'
import MunteanAnastasia from '../../assets/MunteanAnastasia.jpg';
import FamilyPhoto from '../../assets/familyPhoto.jpeg';
import Photographe from '../../assets/Photographe.jpg';
function Presentation() {
    const photos = [
        {
            src: MunteanAnastasia,
            description: '< Developpeur >',
        },
        {
            src: FamilyPhoto,
            description: '< Maman de 3 enfants >',
        },
        {
            src: Photographe,
            description: '< Photographe >',
        },
      ];
    return (
        <main>
            <section id="presentation" className='presentation'>
                <SectionTitle
                backgroundtxt = 'Qui je suis?'
                txt = 'Presentation'
                />

                <div className="gallery">
                    {photos.map((image, index) => (
                        <div className='cadrePhoto' key={image.src}>
                        <img src={image.src} alt={`Image ${index + 1}`} />
                        <p className="image-description">{image.description}</p>
                        </div>
                    ))}
                </div>
                

                <p className='description'>Codeur passionné et photographe amateur, je m'efforce de capturer la beauté dans le code et dans le monde qui m'entoure.</p>


                
            </section>
            
      </main>
    );
  }
export default Presentation 