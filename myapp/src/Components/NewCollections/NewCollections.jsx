import React from 'react'
import './NewCollections.css'
import Item from '../Items/items'
import new_collections from '../Assets/new_collections'



const NewCollections = () => {
  return (
    <div className='NewCollections'>
      <h1>New Collections</h1>
      <hr />
      <div className='NewCollections-item'>
        {new_collections.map((item, i) => (
          <Item 
            key={item.id} // Utiliser `item.id` comme clé unique
            id={item.id} 
            name={item.name} 
            img={item.image} 
            new_price={item.new_price} 
            old_price={item.old_price} 
          />
        ))}
      </div>
    </div>
  );
}

export default NewCollections;
