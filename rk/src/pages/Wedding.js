import React, { useState } from 'react'
import '../assets/css/gallery.css';   

import CloseIcon from '@mui/icons-material/Close';

export  const Weddings = () => {
    let data = [
        {
            id: 1,
            imgSrc: require('../assets/images/Wedding/wedding.webp'),
        },
        {
            id: 2,
            imgSrc: require('../assets/images/Wedding/wedding1.webp'),
        },
        {
            id: 3,
            imgSrc: require('../assets/images/Wedding/wedding2.webp'),
        },
        {
            id: 4,
            imgSrc: require('../assets/images/Wedding/wedding3.webp'),
        },
        {
            id: 5,
            imgSrc: require('../assets/images/Wedding/wedding4.webp'),
        },
        {
            id: 6,
            imgSrc: require('../assets/images/Wedding/wedding5.webp'),
        },
        {
            id: 7,
            imgSrc: require('../assets/images/Wedding/wedding6.webp'),
        },
        {
            id: 8,
            imgSrc: require('../assets/images/Wedding/wedding7.webp'),
        },
        {
            id: 9,
            imgSrc: require('../assets/images/Wedding/wedding8.webp'),
        },
        {
            id: 10,
            imgSrc: require('../assets/images/Wedding/wedding9.webp'),
        },
        {
            id: 11,
            imgSrc: require('../assets/images/Wedding/wedding10.webp'),
        },
        {
            id: 12,
            imgSrc: require('../assets/images/Wedding/wedding11.webp'),
        },
        {
            id: 13,
            imgSrc: require('../assets/images/Wedding/wedding12.webp'),
        },
        {
            id: 14,
            imgSrc: require('../assets/images/Wedding/wedding13.webp'),
        },
        {
            id: 15,
            imgSrc: require('../assets/images/Wedding/wedding14.webp'),
        },
        {
            id: 16,
            imgSrc: require('../assets/images/Wedding/wedding15.webp'),
        },
        {
            id: 17,
            imgSrc: require('../assets/images/Wedding/wedding16.webp'),
        },
        {
            id: 18,
            imgSrc: require('../assets/images/Wedding/wedding17.webp'),
        },
        {
            id: 19,
            imgSrc: require('../assets/images/Wedding/wedding18.webp'),
        },
        {
            id: 20,
            imgSrc: require('../assets/images/Wedding/wedding19.webp'),
        },
        {
            id: 21,
            imgSrc: require('../assets/images/Wedding/wedding20.webp'),
        },
        {
            id: 22,
            imgSrc: require('../assets/images/Wedding/wedding21.webp'),
        },
        {
            id: 23,
            imgSrc: require('../assets/images/Wedding/wedding22.webp'),
        },
        {
            id: 24,
            imgSrc: require('../assets/images/Wedding/wedding23.webp'),
        },
        {
            id: 25,
            imgSrc: require('../assets/images/Wedding/wedding24.webp'),
        },
        {
            id: 26,
            imgSrc: require('../assets/images/Wedding/wedding25.webp'),
        },
        {
            id: 27,
            imgSrc: require('../assets/images/Wedding/wedding26.webp'),
        },
        {
            id: 28,
            imgSrc: require('../assets/images/Wedding/wedding27.webp'),
        },
        {
            id: 29,
            imgSrc: require('../assets/images/Wedding/wedding28.webp'),
        },
        {
            id: 30,
            imgSrc: require('../assets/images/Wedding/wedding29.webp'),
        },
        {
            id: 31,
            imgSrc: require('../assets/images/Wedding/wedding30.webp'),
        },
        {
            id: 32,
            imgSrc: require('../assets/images/Wedding/wedding31.webp'),
        },
        {
            id: 33,
            imgSrc: require('../assets/images/Wedding/wedding32.webp'),
        },
        {
            id: 34,
            imgSrc: require('../assets/images/Wedding/wedding33.webp'),
        },
        {
            id: 35,
            imgSrc: require('../assets/images/Wedding/wedding34.webp'),
        },
        {
            id: 36,
            imgSrc: require('../assets/images/Wedding/wedding35.webp'),
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
