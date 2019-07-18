import React, { useContext } from 'react'
import Select from 'react-select'
import AddressContext from '../context/addressContext';

const Kapilar = () => {

    const addressContext = useContext(AddressContext);

    return (
        <React.Fragment>
            <Select
                name="adresSelect"
                options={addressContext.kapilar}
                placeholder="Kapı Seçiniz..."
            />
        </React.Fragment >
    )
}

export default Kapilar
