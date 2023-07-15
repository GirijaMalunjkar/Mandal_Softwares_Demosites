import React, { useState } from 'react'
import '../assets/css/gallery.css';   

import CloseIcon from '@mui/icons-material/Close';

export  const Weddings = () => {
    let data = [
        {
            id: 1,
            imgSrc: 'images/Wedding/wedding.webp',
        },
        {
            id: 2,
            imgSrc: 'images/Prewedding/pre.webp',
        },
        
        {
            id: 3,
            imgSrc: 'images/Portrait/Portrait.webp',
        }
        
    ]

    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    return (
       <>
       <div className={model ? "model open" : "model"}>
            <img src = {tempimgSrc} alt="error"/>
            <CloseIcon onClick={()=>setModel(false)}/>
       </div>
       <div className='othersgallery'>
       
        {data.map((item, index) => {
            return(
                <div className='pics' key= {index} onClick={()=>getImg(item.imgSrc)}>
                        <img src = {item.imgSrc} style= {{width: '100%'}} alt=" " />
                </div>    
            )

        } ) }
       
       </div>
        <div className='section'>
            <div className='container'>
                <div className='row'>
                    <h3>PREWEDDING</h3>
                </div>
                <div>
                    <h3>PORTRAIT</h3>
                </div>
                
            </div>
        </div>
       </>
    )
}

export default Weddings;
