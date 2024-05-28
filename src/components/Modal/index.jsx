import './index.scss';
function ImageModal({ title, src, description, icon, onClose }) {
    return (
      <div className="modal" onClick={onClose}>
        <div className='modal-content'>
            <h2>{title}</h2>
            <img src={src} alt="Image en taille réelle" />
            <ul>{description}</ul>
            <div className='icon'>{icon}</div>
        </div>
      </div>
    );
  }
export default ImageModal