import React, { useContext } from 'react'
import Select from 'react-select'

import AddressContext from '../context/addressContext';

const Ilceler = () => {

    const addressContext = useContext(AddressContext);

    return (
        <React.Fragment>
            <Select
                name="adresSelect"
                options={addressContext.ilceler}
                onChange={addressContext.handleIlceChange}
                placeholder="İlçe Seçiniz..."
            />
        </React.Fragment >
    )
}

export default Ilceler
