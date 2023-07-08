import React, { useState } from 'react'
import "./Style.css"

import CloseIcon from '@mui/icons-material/Close';

export  const Weddings = () => {
    let data = [
        {
            id: 1,
            imgSrc:'images/Wedding/wedding.webp',
        },
        {
            id: 2,
            imgSrc:'images/Wedding/wedding2.webp',
        },
        {
            id: 3,
            imgSrc:'images/Wedding/wedding3.webp',
        },
        {
            id: 4,
            imgSrc:'images/Wedding/wedding4.webp',
        },
        {
            id: 5,
            imgSrc:'images/Wedding/wedding5.webp',
        },
        {
            id: 6,
            imgSrc:'images/Wedding/wedding6.webp',
        },
        {
            id: 7,
            imgSrc:'images/Wedding/wedding7.webp',
        },
        {
            id: 8,
            imgSrc:'images/Wedding/wedding8.webp',
        },
        {
            id: 9,
            imgSrc:'images/Wedding/wedding9.webp',
        },
        {
            id: 10,
            imgSrc:'images/Wedding/wedding10.webp',
        },
        {
            id: 11,
            imgSrc:'images/Wedding/wedding11.webp',
        },
        {
            id: 12,
            imgSrc:'images/Wedding/wedding12.webp',
        },
        {
            id: 13,
            imgSrc:'images/Wedding/wedding13.webp',
        },
        {
            id: 14,
            imgSrc:'images/Wedding/wedding14.webp',
        },
        {
            id: 15,
            imgSrc:'images/Wedding/wedding15.webp',
        },
        {
            id: 16,
            imgSrc:'images/Wedding/wedding16.webp',
        },
        {
            id: 17,
            imgSrc:'images/Wedding/wedding17.webp',
        },
        {
            id: 18,
            imgSrc:'images/Wedding/wedding18.webp',
        },
        {
            id: 19,
            imgSrc:'images/Wedding/wedding19.webp',
        },
        {
            id: 20,
            imgSrc:'images/Wedding/wedding20.webp',
        },
        {
            id: 21,
            imgSrc:'images/Wedding/wedding21.webp',
        },
        {
            id: 22,
            imgSrc:'images/Wedding/wedding22.webp',
        },
        {
            id: 23,
            imgSrc:'images/Wedding/wedding23.webp',
        },
        {
            id: 24,
            imgSrc:'images/Wedding/wedding24.webp',
        },
        {
            id: 25,
            imgSrc:'images/Wedding/wedding.webp',
        },
        {
            id: 26,
            imgSrc:'images/Wedding/wedding26.webp',
        },
        {
            id: 27,
            imgSrc:'images/Wedding/wedding27.webp',
        },
        {
            id: 28,
            imgSrc:'images/Wedding/wedding28.webp',
        },
        {
            id: 29,
            imgSrc:'images/Wedding/wedding29.webp',
        },
        {
            id: 30,
            imgSrc:'images/Wedding/wedding30.webp',
        },
        {
            id: 31,
            imgSrc:'images/Wedding/wedding31.webp',
        },
        {
            id: 32,
            imgSrc:'images/Wedding/wedding32.webp',
        },
        {
            id: 33,
            imgSrc:'images/Wedding/wedding33.webp',
        },
        {
            id: 34,
            imgSrc:'images/Wedding/wedding34.webp',
        },
        {
            id: 35,
            imgSrc:'images/Wedding/wedding35.webp',
        },
        {
            id: 35,
            imgSrc:'images/Wedding/wedding35.webp',
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

export default Weddings;
