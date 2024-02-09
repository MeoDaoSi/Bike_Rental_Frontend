import React from 'react';
import motorcycle from '../../assets/images/motorcycle.png';
import { MultiForm } from '../../hooks/MultiForm';

function MotorcycleForm() {
    const { next } = MultiForm([<MotorcycleForm />]);

    return (
        <>

        </>
    )
}

export default MotorcycleForm