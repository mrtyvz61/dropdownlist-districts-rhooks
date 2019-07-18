import React, { useContext } from 'react'

import AddressContext from '../context/addressContext';

import Ilceler from './Ilceler'
import Mahalleler from './Mahalleler'
import Sokaklar from './Sokaklar'
import Kapilar from './Kapilar'

const AddressWidget = () => {

    const addressContext = useContext(AddressContext);

    const { ilceSelected, mahalleSelected, sokakSelected } = addressContext

    return (
        <React.Fragment>
            <Ilceler />
            {ilceSelected ? <Mahalleler /> : null}
            {mahalleSelected ? <Sokaklar /> : null}
            {sokakSelected ? <Kapilar /> : null}
        </React.Fragment>
    )
}

export default AddressWidget