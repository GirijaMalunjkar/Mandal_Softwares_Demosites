import React, { useState } from 'react'
import "./Style.css"

import CloseIcon from '@mui/icons-material/Close';

export  const Maternity = () => {
    let data = [
        {
            id: 1,
            imgSrc:'images/Maternity/maternity.webp',
        },
        {
            id: 2,
            imgSrc: 'images/Maternity/maternity2.webp',
        },
        
        {
            id: 3,
            imgSrc: 'images/Maternity/maternity3.webp',
        },
        {
            id: 4,
            imgSrc: 'images/Maternity/maternity4.webp',
        },
        {
            id: 5,
            imgSrc: 'images/Maternity/maternity5.webp',
        },
        {
            id: 6,
            imgSrc: 'images/Maternity/maternity6.webp',
        },
        {
            id: 7,
            imgSrc: 'images/Maternity/maternity7.webp',
        },
        {
            id: 8,
            imgSrc: 'images/Maternity/maternity8.webp',
        },
        {
            id: 9,
            imgSrc: 'images/Maternity/maternity9.webp',
        },
        {
            id: 10,
            imgSrc: 'images/Maternity/maternity10.webp',
        },
        {
            id: 11,
            imgSrc: 'images/Maternity/maternity11.webp',
        },
        {
            id: 12,
            imgSrc:'images/Maternity/maternity12.webp',
        },
        {
            id: 13,
            imgSrc: 'images/Maternity/maternity13.webp',
        },
        
        {
            id: 14,
            imgSrc: 'images/Maternity/maternity14.webp',
        },
        {
            id: 15,
            imgSrc: 'images/Maternity/maternity15.webp',
        },
        {
            id: 16,
            imgSrc: 'images/Maternity/maternity16.webp',
        },
        {
            id: 17,
            imgSrc: 'images/Maternity/maternity17.webp',
        },
        {
            id: 18,
            imgSrc: 'images/Maternity/maternity18.webp',
        },
        {
            id: 19,
            imgSrc: 'images/Maternity/maternity19.webp',
        },
        {
            id: 20,
            imgSrc: 'images/Maternity/maternity20.webp',
        },
        {
            id: 21,
            imgSrc: 'images/Maternity/maternity21.webp',
        },
        {
            id: 22,
            imgSrc: 'images/Maternity/maternity22.webp',
        },
        {
            id: 23,
            imgSrc:'images/Maternity/maternity23.webp',
        },
        {
            id: 24,
            imgSrc: 'images/Maternity/maternity24.webp',
        },
        
        {
            id: 25,
            imgSrc: 'images/Maternity/maternity25.webp',
        },
        {
            id: 26,
            imgSrc: 'images/Maternity/maternity26.webp',
        },
        {
            id: 27,
            imgSrc: 'images/Maternity/maternity27.webp',
        },
        {
            id: 28,
            imgSrc: 'images/Maternity/maternity28.webp',
        },
        {
            id: 29,
            imgSrc: 'images/Maternity/maternity29.webp',
        },
        {
            id: 30,
            imgSrc: 'images/Maternity/maternity30.webp',
        },
        {
            id: 31,
            imgSrc: 'images/Maternity/maternity31.webp',
        },
        {
            id: 32,
            imgSrc: 'images/Maternity/maternity32.webp',
        },
        {
            id: 33,
            imgSrc: 'images/Maternity/maternity33.webp',
        },
        {
            id: 34,
            imgSrc:'images/Maternity/maternity34.webp',
        },
        {
            id: 35,
            imgSrc: 'images/Maternity/maternity35.webp',
        },
        {
            id: 36,
            imgSrc: 'images/Maternity/maternity36.webp',
        },
        {
            id: 37,
            imgSrc: 'images/Maternity/maternity37.webp',
        },
        {
            id: 38,
            imgSrc: 'images/Maternity/maternity38.webp',
        },
        {
            id: 39,
            imgSrc: 'images/Maternity/maternity39.webp',
        },
        {
            id: 40,
            imgSrc: 'images/Maternity/maternity40.webp',
        },
        {
            id: 41,
            imgSrc: 'images/Maternity/maternity41.webp',
        },
        {
            id: 42,
            imgSrc: 'images/Maternity/maternity42.webp',
        },
        {
            id: 43,
            imgSrc: 'images/Maternity/maternity43.webp',
        },
        {
            id: 44,
            imgSrc: 'images/Maternity/maternity44.webp',
        },
        {
            id: 45,
            imgSrc: 'images/Maternity/maternity45.webp',
        },
        {
            id: 46,
            imgSrc: 'images/Maternity/maternity46.webp',
        },
        {
            id: 47,
            imgSrc: 'images/Maternity/maternity47.webp',
        },
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
       <div className='gallery'>
       
        {data.map((item, index) => {
            return(
                <div className='pics' key= {index} onClick={()=>getImg(item.imgSrc)}>
                        <img src = {item.imgSrc} style= {{width: '100%'}} alt="wedding" />
                </div>    
            )

        } ) }
       
       </div>
       </>
    )
}

export default Maternity;
