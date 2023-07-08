import React, { useState } from 'react'
import "./Style.css"

import CloseIcon from '@mui/icons-material/Close';

export  const Babyshoot = () => {
    let data = [
        {
            id: 1,
            imgSrc:'images/Kids/kid.webp',
        },
        {
            id: 2,
            imgSrc:'images/Kids/kid2.webp',
        },
        {
            id: 3,
            imgSrc:'images/Kids/kid3.webp',
        },
        {
            id: 4,
            imgSrc:'images/Kids/kid4.webp',
        },
        {
            id: 5,
            imgSrc:'images/Kids/kid5.webp',
        },
        {
            id: 6,
            imgSrc:'images/Kids/kid6.webp',
        },
        {
            id: 7,
            imgSrc:'images/Kids/kid7.webp',
        },
        {
            id: 8,
            imgSrc:'images/Kids/kid8.webp',
        },
        {
            id: 9,
            imgSrc:'images/Kids/kid9.webp',
        },
        {
            id: 10,
            imgSrc:'images/Kids/kid11.webp',
        },
        {
            id: 11,
            imgSrc:'images/Kids/kid11.webp',
        },
        {
            id: 12,
            imgSrc:'images/Kids/kid12.webp',
        },
        {
            id: 13,
            imgSrc:'images/Kids/kid13.webp',
        },
        {
            id: 14,
            imgSrc:'images/Kids/kid14.webp',
        },
        {
            id: 15,
            imgSrc:'images/Kids/kid15.webp',
        },
        {
            id: 16,
            imgSrc:'images/Kids/kid16.webp',
        },
        {
            id: 17,
            imgSrc:'images/Kids/kid17.webp',
        },
        {
            id: 18,
            imgSrc:'images/Kids/kid18.webp',
        },
        {
            id: 19,
            imgSrc:'images/Kids/kid16.webp',
        },
        {
            id: 20,
            imgSrc:'images/Kids/kid20.webp',
        },
        {
            id: 21,
            imgSrc:'images/Kids/kid21.webp',
        },
        {
            id: 22,
            imgSrc:'images/Kids/kid22.webp',
        },
        {
            id: 23,
            imgSrc:'images/Kids/kid23.webp',
        },
        {
            id: 24,
            imgSrc:'images/Kids/kid24.webp',
        },
        {
            id: 25,
            imgSrc:'images/Kids/kid25.webp',
        },
        {
            id: 26,
            imgSrc:'images/Kids/kid26.webp',
        },
        {
            id: 27,
            imgSrc:'images/Kids/kid27.webp',
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
                        <img src = {item.imgSrc} style= {{width: '100%'}} alt=" " />
                </div>    
            )

        } ) }
       
       </div>
       </>
    )
}

export default Babyshoot;
