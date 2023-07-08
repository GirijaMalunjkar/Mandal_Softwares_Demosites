import React, { useState } from 'react'
import "./Style.css"

import CloseIcon from '@mui/icons-material/Close';

export  const Portraits = () => {
    let data = [
        {
            id: 1,
            imgSrc:'images/Portrait/portrait.webp',
        },
        {
            id: 2,
            imgSrc: 'images/Portrait/portrait2.webp',
        },
        
        {
            id: 3,
            imgSrc: 'images/Portrait/portrait3.webp',
        },
        {
            id: 4,
            imgSrc: 'images/Portrait/portrait4.webp',
        },
        {
            id: 5,
            imgSrc:'images/Portrait/portrait5.webp',
        },
        {
            id: 6,
            imgSrc: 'images/Portrait/portrait6.webp',
        },
        
        {
            id: 7,
            imgSrc: 'images/Portrait/portrait7.webp',
        },
        {
            id: 8,
            imgSrc: 'images/Portrait/portrait8.webp',
        },
        {
            id: 9,
            imgSrc:'images/Portrait/portrait9.webp',
        },
        {
            id: 10,
            imgSrc: 'images/Portrait/portrait10.webp',
        },
        {
            id: 11,
            imgSrc: 'images/Portrait/portrait11.webp',
        },
        {
            id: 12,
            imgSrc: 'images/Portrait/portrait12.webp',
        },
        {
            id: 13,
            imgSrc:'images/Portrait/portrait13.webp',
        },
        {
            id: 14,
            imgSrc: 'images/Portrait/portrait14.webp',
        },
        {
            id: 15,
            imgSrc: 'images/Portrait/portrait15.webp',
        },
        {
            id: 16,
            imgSrc: 'images/Portrait/portrait16.webp',
        },
        {
            id: 17,
            imgSrc:'images/Portrait/portrait17.webp',
        },
        {
            id: 18,
            imgSrc: 'images/Portrait/portrait18.webp',
        },
        {
            id: 19,
            imgSrc: 'images/Portrait/portrait19.webp',
        },
        {
            id: 20,
            imgSrc: 'images/Portrait/portrait20.webp',
        },
        {
            id: 21,
            imgSrc:'images/Portrait/portrait21.webp',
        },
        {
            id: 22,
            imgSrc: 'images/Portrait/portrait22.webp',
        },
        {
            id: 23,
            imgSrc: 'images/Portrait/portrait23.webp',
        },
        {
            id: 24,
            imgSrc: 'images/Portrait/portrait24.webp',
        },
        {
            id: 25,
            imgSrc:'images/Portrait/portrait25.webp',
        },
        {
            id: 26,
            imgSrc: 'images/Portrait/portrait26.webp',
        },
        {
            id: 27,
            imgSrc: 'images/Portrait/portrait27.webp',
        },
        {
            id: 28,
            imgSrc: 'images/Portrait/portrait28.webp',
        },
        {
            id: 29,
            imgSrc:'images/Portrait/portrait29.webp',
        },
        {
            id: 30,
            imgSrc: 'images/Portrait/portrait30.webp',
        },
        {
            id: 31,
            imgSrc: 'images/Portrait/portrait31.webp',
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

export default Portraits;
