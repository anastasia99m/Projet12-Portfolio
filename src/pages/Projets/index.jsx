import SectionTitle from '../../components/SectionTitle';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SophieBluel from '../../assets/SophieBluel.png';
import Kasa from '../../assets/Kasa.png';
import Optimisation from '../../assets/Optimisation.png';
import Chloe from '../../assets/Chloe-56.jpg';
import Raul from '../../assets/Botez-Raul-82.jpg';
import Mark from '../../assets/NewbornMark-62.jpg';
import ImageModal from '../../components/Modal'; 
import React, { useState } from 'react';
import GitLogo from '../../assets/github.png';
import WfolioLogo from '../../assets/wfolio2.jpeg';

function Projets() {
    const projets = [
        {
            src: SophieBluel,
            title: "Développment front-end pour l'architecte Sophie Bluel",
            description: [
                "La page de présentation des travaux de l'architecte ",
                "La page de connexion de l'administrateur du site ",
                "La modale permettant d'uploader de nouveaux médias",
                "L’appel à l’API avec fetch afin de récupérer dynamiquement les informations"
            ],
            icon: {
                url: "https://github.com/anastasia99m/Projet6", 
                imgSrc: GitLogo,
                altText: "Lien vers Github"
            }
        },
        {
            src: Kasa,
            title: "Application web de location immobilière avec React",
            description: [
                "Routage logique du site grace a React Router",
                "Utilisation de composants",
                "Composant Collapse et gestion des animations",
                "Gestion des erreurs",
                "Sass pour simplifier le CSS"
            ],
            icon: {
                url: "https://github.com/anastasia99m/projet8-Kasa", 
                imgSrc: GitLogo,
                altText: "Lien vers Github"
            }
        },
        {
            src: Optimisation,
            title: "Optimisation d'un site de photographe",
            description: [
                "Meilleur référencement (SEO) et donc plus de visibilité pour les potentiels clients",
                "Référencement local du site web",
                "L’optimisation du code et des images afin d’améliorer le chargement et l’accessibilité du site"
            ],
            icon: {
                url: "https://github.com/anastasia99m/Projet9_Optimisation", 
                imgSrc: GitLogo,
                altText: "Lien vers Github"
            }
        },
        {
            src: Raul,
            title: "Baptême de Raul",
            description: [
                "Afin d’immortaliser ce moment sacré dans la vie de votre enfant, je suis Photographe pour capturer chaque émotion du Baptême. De la cérémonie à l’Église à la fête que vous aurez organisée. Avec une approche discrète et professionnelle, je peux vous aider à créer des souvenirs durables de ce jour mémorable.",
            ],
            icon: {
                url: "https://mun-anastasia99.wfolio.pro/disk/20-01-2024-botezul-lui-raul-rjbpm5", 
                imgSrc: WfolioLogo,
                altText: "Lien vers gallerie des photos"
            }
        },
        {
            src: Chloe,
            title: "Anniversaire de Chloe",
            description: [
                "Capturer les moments les plus forts de l’anniversaire de votre enfant de façon à vous offrir des souvenirs inoubliables. Vous pourrez utiliser ces photos pour votre album mais aussi pour les offrir à vos proches. capturer les moments les plus forts de l’anniversaire de votre enfant de façon à vous offrir des souvenirs inoubliables. Vous pourrez utiliser ces photos pour votre album mais aussi pour les offrir à vos proches. "
            ],
            icon: {
                url: "https://mun-anastasia99.wfolio.pro/disk/chloe-vzjdkl", 
                imgSrc: WfolioLogo,
                altText: "Lien vers gallerie des photos"
            }
        },
        {
            src: Mark,
            title: "Shooting photo Newborn",
            description: [
                "Lors de ses premières semaines de vie, le nouveau-né change très vite. C'est pourquoi un shooting photo naissance permet d'immortaliser ses traits délicats à peine quelques jours après l'accouchement. En tant que parent, avoir un souvenir haut de gamme de son tout-petit est très précieux."
            ],
            icon: {
                url: "https://mun-anastasia99.wfolio.pro/disk/mark-newborn-j5tzhr", 
                imgSrc: WfolioLogo,
                altText: "Lien vers gallerie des photos"
            }
        },
       
      ];
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const openModal = (src) => {
    setSelectedImage(src);
    setModalOpen(true);
    };

    const closeModal = () => {
    setModalOpen(false);
    };
    return (
        <main>
            <section id="projets" className='projets'>
                <SectionTitle
                backgroundtxt = 'EXPÉRIENCE'
                txt = 'Projets'
                />

                <div className="gallery">
                    {projets.map((photo, index) => (
                        <div key={index} className='cadrePhoto' onClick={() => openModal(photo)}>
                            <img src={photo.src} alt={`Image ${index + 1}`} />
                        </div>
                    ))}
                    {modalOpen && (
                        <ImageModal 
                        src={selectedImage.src} 
                        title={selectedImage.title} 
                        description={
                            
                                   
                                    selectedImage.description.map((element, index) => (
                                    <li key={index}>&rarr;{element}</li>
                                )) 
                        }
                        icon={
                            selectedImage.icon && (
                                <a href={selectedImage.icon.url} target="_blank">
                                    <img src={selectedImage.icon.imgSrc} alt={selectedImage.icon.altText} />
                                </a>
                            )
                        }
                        onClose={closeModal} 
                        />
                    )}
                </div>
            </section>
        </main>
    );
  }
export default Projets