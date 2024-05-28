import './index.scss'

function SectionTitle({backgroundtxt , txt}) {
    return (
            <div className='title'>
              <p className='backgroundtxt'>{backgroundtxt}</p>
              <p className='txt'>{txt}</p>              
            </div>
    );
  }
export default SectionTitle 