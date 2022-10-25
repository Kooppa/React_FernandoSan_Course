import { useState} from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setinputValue] = useState('');

    const onInputChange = (event) => {
        setinputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        //para que si es menor o igual a 1 caracter no se ejecute
        if( inputValue.trim().length <= 1) return;
        //llama categories del padre y cuando se hace on submit actualiza las categories
        //setCategories( categories => [inputValue, ...categories]);
        onNewCategory( inputValue.trim());
        setinputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
            type="text"
            placeholder="Buscar gifs" 
            value={ inputValue }
            onChange={ onInputChange }
        
            />
        </form>
        
    )
}
