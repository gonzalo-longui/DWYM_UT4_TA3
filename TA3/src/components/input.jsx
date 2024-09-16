import { useState } from 'react';

export function Input() {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return(
        <div>
            <input type="text" value={text} onChange={handleChange} placeholder="Escribe algo..." />
            <p>Texto ingresado: </p>
            <p>{text}</p>
        </div>
    );
}