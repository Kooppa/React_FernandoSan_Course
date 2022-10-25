import { useState} from 'react';
import {AddCategory,GifGrid} from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'HunterXHunter' ]);

    const onAddCategory = ( newCategory ) => {
        //se asegura que la key no sea duplicada
        if( categories.includes(newCategory)  ) return;

        setCategories([newCategory, ...categories])
    }
    
    return (
        <>
            <h1>App de Gifs</h1>

            <AddCategory 
                // setCategories={ setCategories }
                onNewCategory={ (event) => onAddCategory(event)}
            />
            { 
                categories.map( (category) => (
                        // <div key={category}>
                        //     {/* <h3>{category}</h3> */}
                        //     <li>{category}</li>
                        // </div>

                        <GifGrid key={category} category={category}/>
                )) 
            }

        </>
    )
}