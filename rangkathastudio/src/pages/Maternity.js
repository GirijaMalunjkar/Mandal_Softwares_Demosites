import React, { useState } from 'react'
import '../assets/css/gallery.css';   

import CloseIcon from '@mui/icons-material/Close';

export  const Maternity = () => {
    let data = [
        {
            id: 1,
            imgSrc: require('../assets/images/Maternity/maternity.webp'),
        },
        {
            id: 2,
            imgSrc: require('../assets/images/Maternity/maternity47.webp'),
        },
        
        {
            id: 3,
            imgSrc: require('../assets/images/Maternity/maternity2.webp'),
        },
        {
            id: 4,
            imgSrc: require('../assets/images/Maternity/maternity3.webp'),
        },
        {
            id: 5,
            imgSrc: require('../assets/images/Maternity/maternity4.webp'),
        },
        {
            id: 6,
            imgSrc: require('../assets/images/Maternity/maternity5.webp'),
        },
        {
            id: 7,
            imgSrc: require('../assets/images/Maternity/maternity6.webp'),
        },
        {
            id: 8,
            imgSrc: require('../assets/images/Maternity/maternity7.webp'),
        },
        {
            id: 9,
            imgSrc: require('../assets/images/Maternity/maternity8.webp'),
        },
        {
            id: 10,
            imgSrc: require('../assets/images/Maternity/maternity9.webp'),
        },
        {
            id: 11,
            imgSrc: require('../assets/images/Maternity/maternity10.webp'),
        },
        {
            id: 12,
            imgSrc: require('../assets/images/Maternity/maternity11.webp'),
        },
        {
            id: 13,
            imgSrc: require('../assets/images/Maternity/maternity12.webp'),
        },
        
        {
            id: 14,
            imgSrc: require('../assets/images/Maternity/maternity13.webp'),
        },
        {
            id: 15,
            imgSrc: require('../assets/images/Maternity/maternity14.webp'),
        },
        {
            id: 16,
            imgSrc: require('../assets/images/Maternity/maternity15.webp'),
        },
        {
            id: 17,
            imgSrc: require('../assets/images/Maternity/maternity16.webp'),
        },
        {
            id: 18,
            imgSrc: require('../assets/images/Maternity/maternity17.webp'),
        },
        {
            id: 19,
            imgSrc: require('../assets/images/Maternity/maternity18.webp'),
        },
        {
            id: 20,
            imgSrc: require('../assets/images/Maternity/maternity19.webp'),
        },
        {
            id: 21,
            imgSrc: require('../assets/images/Maternity/maternity20.webp'),
        },
        {
            id: 22,
            imgSrc: require('../assets/images/Maternity/maternity21.webp'),
        },
        {
            id: 23,
            imgSrc: require('../assets/images/Maternity/maternity22.webp'),
        },
        {
            id: 24,
            imgSrc: require('../assets/images/Maternity/maternity23.webp'),
        },
        
        {
            id: 25,
            imgSrc: require('../assets/images/Maternity/maternity24.webp'),
        },
        {
            id: 26,
            imgSrc: require('../assets/images/Maternity/maternity25.webp'),
        },
        {
            id: 27,
            imgSrc: require('../assets/images/Maternity/maternity26.webp'),
        },
        {
            id: 28,
            imgSrc: require('../assets/images/Maternity/maternity27.webp'),
        },
        {
            id: 29,
            imgSrc: require('../assets/images/Maternity/maternity28.webp'),
        },
        {
            id: 30,
            imgSrc: require('../assets/images/Maternity/maternity29.webp'),
        },
        {
            id: 31,
            imgSrc: require('../assets/images/Maternity/maternity30.webp'),
        },
        {
            id: 32,
            imgSrc: require('../assets/images/Maternity/maternity31.webp'),
        },
        {
            id: 33,
            imgSrc: require('../assets/images/Maternity/maternity32.webp'),
        },
        {
            id: 34,
            imgSrc: require('../assets/images/Maternity/maternity33.webp'),
        },
        {
            id: 35,
            imgSrc: require('../assets/images/Maternity/maternity34.webp'),
        },
        {
            id: 36,
            imgSrc: require('../assets/images/Maternity/maternity35.webp'),
        },
        {
            id: 37,
            imgSrc: require('../assets/images/Maternity/maternity36.webp'),
        },
        {
            id: 38,
            imgSrc: require('../assets/images/Maternity/maternity37.webp'),
        },
        {
            id: 39,
            imgSrc: require('../assets/images/Maternity/maternity38.webp'),
        },
        {
            id: 40,
            imgSrc: require('../assets/images/Maternity/maternity39.webp'),
        },
        {
            id: 41,
            imgSrc: require('../assets/images/Maternity/maternity40.webp'),
        },
        {
            id: 42,
            imgSrc: require('../assets/images/Maternity/maternity41.webp'),
        },
        {
            id: 43,
            imgSrc: require('../assets/images/Maternity/maternity42.webp'),
        },
        {
            id: 44,
            imgSrc: require('../assets/images/Maternity/maternity43.webp'),
        },
        {
            id: 45,
            imgSrc: require('../assets/images/Maternity/maternity45.webp'),
        },
        {
            id: 46,
            imgSrc: require('../assets/images/Maternity/maternity46.webp'),
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
