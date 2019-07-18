import React, { useReducer, useState } from 'react';
import axios from 'axios';
import AddressContext from './addressContext';
import AddressReducer from './addressReducer';
import { GET_ILCE, GET_MAHALLE, GET_SOKAK, GET_KAPI } from '../types';


const AddressState = props => {
    const initialState = {
        ilceler: [],
        mahalleler: [],
        sokaklar: [],
        kapilar: [],
        ilceSelected: null,
        mahalleSelected: null,
        sokaklarSelected: null,
        kapilarSelected: null,
    };

    const [state, dispatch] = useReducer(AddressReducer, initialState);


    getAdres = async (url) => {
        let response = await fetch(url);
        let data = await response.json();
        let liste = [];
        data.AdresList.Adresler.Adres.forEach(item => {
            liste.push({ label: item.ADI, value: item.ID });
        })
        return liste
    }

    useEffect(() => {
        const ilceUrl = "http://cbsproxy.ibb.gov.tr/?SehirHaritasiIlceListele151&";
        fetch(ilceUrl, {
            method: "GET"
        })
            .then(response => response.json())
            .then(ilceList => {
                let ilceler = [];
                ilceList.AdresList.Adresler.Adres.forEach(ilce => {
                    ilceler.push({ label: ilce.ADI, value: ilce.ID })
                })
            })

        dispatch({
            type: GET_ILCE,
            payload: ilceler
        })
    });

    handleIlceChange = async (e) => {
        let mahalleler = await getAdres(`http://cbsproxy.ibb.gov.tr/?SehirHaritasiMahalleListele151&&ID=${e.value}`)

        dispatch({
            type: GET_MAHALLE,
            payload: mahalleler
        })
    }

    handleMahalleChange = async (e) => {
        let sokaklar = await getAdres(`http://cbsproxy.ibb.gov.tr/?SehirHaritasiYolListele151&&ilceID=${this.state.ilceSelected}&mahalleID=${e.value}&yolAdi=`)

        dispatch({
            type: GET_SOKAK,
            payload: sokaklar
        })
    };

    handleSokakChange = async (e) => {
        let kapilar = await getAdres(`https://cbsproxy.ibb.gov.tr/?SehirHaritasiKapiListele151&&ilceID=${this.state.ilceSelected}&mahalleID=${this.state.mahalleSelected}&yolAdi=&kapiNo=&yolid=${e.value}`)
        dispatch({
            type: GET_KAPI,
            payload: kapilar
        })
    };

    return (
        <AddressContext.Provider
            value={{
                ilceSelected: state.ilceSelected,
                ilceler: state.ilceler,
                mahalleSelected: state.mahalleSelected,
                mahalleler: state.mahalleler,
                sokaklarSelected: state.sokakSelected,
                sokaklar: state.sokaklar,
                kapilarSelected: state.kapilarSelected,
                kapilar: state.kapilar,
                handleIlceChange,
                handleMahalleChange,
                handleSokakChange
            }}
        >
            {props.children}
        </AddressContext.Provider>
    );
};

export default AddressState;
