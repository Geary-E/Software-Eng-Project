import React from 'react';
const ItemCard = () => {
    return (
            <div className='item'>

                <div>
                <p>{"Item Type"}</p>
                </div>

                <div>
                <img src={'https:via.placeholder.com/400'} alt={'Service'}/>
                </div>

                <div>
                <span>{'Cost'}</span>
                <h3>{'Item Name'}</h3>
                </div>

                </div>
              )
}

export default ItemCard;