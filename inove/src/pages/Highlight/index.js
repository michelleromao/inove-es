import React, { useCallback, useEffect, useState } from "react";

import api from '../../services/api';

import Subheader from "../../components/Subheader";
import { Highlight as Stores } from "../../components/Highlight";

import { Container, Content, Highlights } from './styles';

const ly = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptatibus voluptatum vero fuga, corrupti quam, ipsa quibusdam vel quod ex est commodi consectetur vitae numquam repellat itaque distinctio quasi harum?"

const Highlight = () => {
    const [highlights, setHighlights] = useState([]);
    
    const getHighlights = useCallback(async() => {
        const { data } = await api.get(`/rota/`);
        setHighlights([])
    }, [])

    useEffect(() => {
        getHighlights()
    }, [getHighlights])

    return (
        <Container>
            <Content>
                <Subheader link={"/adicionar/destaque"} show title={"Destaques"} type={"destaque"}/>
            <Highlights>
                {highlights.map(highlight => (
                    <Stores title={highlight.title} expire={highlight.expire}/>
                ))}
            </Highlights>
               

            </Content>
        </Container>
    )
}

export default Highlight;