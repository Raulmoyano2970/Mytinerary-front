import React from 'react'


export default function MyCard(props) {

    const { tinerary, photo, name, onClick, idR } = props
    console.log(tinerary)
    


    return (
        <div className='reactionCard-container' >
            
            <img width='100px' src={tinerary.photo[0]} alt={tinerary.name}
            id={ name === 'love' ? ('love')
            : name === 'like' ? ('like')
            : name === 'not-like' ? ('not-like')
            : name === 'surprise' ? ('surprise')
            : null
            } 
            className={ name === 'love' ? ('love')
            : name === 'like' ? ('like')
            : name === 'not-like' ? ('not-like')
            : name === 'surprise' ? ('surprise')
            : null
            }/>
            <div className='reactionCard-info'>
                <p className='tinerary'>{tinerary.name}</p>
                <img src={photo} alt={name} name={idR} onClick={onClick} width='20px' />
            </div>
        </div>
    )
} 