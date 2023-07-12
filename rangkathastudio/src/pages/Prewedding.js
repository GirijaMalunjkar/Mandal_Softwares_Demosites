import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';

export  const Prewedding = () => {
    let data = [
        {
            id: 1,
            imgSrc: require('../assets/images/Prewedding/pre.webp'),
        },
        {
            id: 2,
            imgSrc: require('../assets/images/Prewedding/pre1.webp'),
        },
        
        {
            id: 3,
            imgSrc: require('../assets/images/Prewedding/pre3.webp'),
        },
        {
            id: 4,
            imgSrc: require('../assets/images/Prewedding/pre4.webp'),
        },
        {
            id: 5,
            imgSrc: require('../assets/images/Prewedding/pre5.webp'),
        },
        {
            id: 6,
            imgSrc: require('../assets/images/Prewedding/pre6.webp'),
        },
        {
            id: 7,
            imgSrc: require('../assets/images/Prewedding/pre7.webp'),
        },
        
        {
            id: 8,
            imgSrc: require('../assets/images/Prewedding/pre8.webp'),
        },
        {
            id: 9,
            imgSrc: require('../assets/images/Prewedding/pre9.webp'),
        },
        {
            id: 10,
            imgSrc: require('../assets/images/Prewedding/pre10.webp'),
        },
        {
            id: 11,
            imgSrc: require('../assets/images/Prewedding/pre11.webp'),
        },
        {
            id: 12,
            imgSrc: require('../assets/images/Prewedding/pre12.webp'),
        },
        
        {
            id: 13,
            imgSrc: require('../assets/images/Prewedding/pre13.webp'),
        },
        {
            id: 14,
            imgSrc: require('../assets/images/Prewedding/pre14.webp'),
        },
        {
            id: 15,
            imgSrc: require('../assets/images/Prewedding/pre15.webp'),
        },
        {
            id: 16,
            imgSrc: require('../assets/images/Prewedding/pre16.webp'),
        },
        {
            id: 17,
            imgSrc: require('../assets/images/Prewedding/pre17.webp'),
        },
        {
            id: 18,
            imgSrc: require('../assets/images/Prewedding/pre18.webp'),
        },
        {
            id: 19,
            imgSrc: require('../assets/images/Prewedding/pre19.webp'),
        },
        {
            id: 20,
            imgSrc: require('../assets/images/Prewedding/pre20.webp'),
        },
        {
            id: 21,
            imgSrc: require('../assets/images/Prewedding/pre21.webp'),
        },
        {
            id: 22,
            imgSrc: require('../assets/images/Prewedding/pre22.webp'),
        },
        {
            id: 23,
            imgSrc: require('../assets/images/Prewedding/pre23.webp'),
        },
        {
            id: 24,
            imgSrc: require('../assets/images/Prewedding/pre24.webp'),
        },
        {
            id: 25,
            imgSrc: require('../assets/images/Prewedding/pre25.webp'),
        },
        {
            id: 26,
            imgSrc: require('../assets/images/Prewedding/pre26.webp'),
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

export default Prewedding;
