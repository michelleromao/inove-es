import React, { useCallback, useEffect, useState } from "react";

import api from '../../services/api';

import { AiOutlineCloseCircle, AiOutlineDelete } from 'react-icons/ai';
import Modal from '@mui/material/Modal';
import Subheader from "../../components/Subheader";
import { Highlight as Stores } from "../../components/Highlight";
import Button from "../../components/Button";

import { Container, Content, Highlights, ModalContent, TitleModal } from './styles';


const Highlight = () => {
    const [highlights, setHighlights] = useState([]);
    const [open, setOpen] = useState(false);
    const [highlight, setHighlight] = useState({});
    
    const getHighlights = useCallback(async() => {
        const { data } = await api.get(`/highlights/`);
        setHighlights(data.highlights)
    }, [])

    const deleteHighlight = useCallback(async(uuid) => {
        const request = await api.delete(`/highlights/${uuid}`);
        setOpen(false);
        getHighlights()
    },[getHighlights])

    const getHighlight= useCallback(async(uuid) => {
        const { data } = await api.get(`/highlights/${uuid}`);
        console.log(data)
        setHighlight({id: data.id,
                    name: data.project.name})
    }, [])

    const handleOpen = useCallback((uuid) => {
        getHighlight(uuid);
        setOpen(true)
    },[getHighlight]);

    const handleClose = useCallback(() => {
        setOpen(false)
        setHighlight({})
    }, []);

    useEffect(() => {
        getHighlights()
    }, [getHighlights])

    return (
        <>
            <Container>
                <Content>
                    <Subheader link={"/adicionar/destaque"} show title={"Destaques"} type={"destaque"}/>
                <Highlights>
                    {highlights.map(highlight => (
                        <Stores key={highlight.id} title={highlight.project.name} expire={`${new Date(highlight.end_date).getDate()}/${new Date(highlight.end_date).getMonth()+1}/${new Date(highlight.end_date).getFullYear()}`}>
                             <button onClick={() => handleOpen(highlight.id)}>
                                <AiOutlineDelete color="#005B58" size={20}/>
                            </button>
                        </Stores>
                    ))}
                </Highlights>
                </Content>
            </Container>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <ModalContent>
                    <div>
                        <TitleModal> Excluir destaque</TitleModal>
                        <button onClick={handleClose} style={{backgroundColor: "#fafafa", border: "none"}}><AiOutlineCloseCircle size={20}/></button>
                    </div>
                    <p>Deseja excluir destaque do projeto {highlight.name}?</p>
                    <div>
                       <div>
                           <Button action={"Cancelar"} onClick={handleClose} styled={"secondary"}/>
                        </div> 
                       <div>
                           <Button action={"Sim, excluir"} 
                                    onClick={() => {deleteHighlight(highlight.id)}}
                            />
                       </div>
                    </div>
                    
                </ModalContent>
            </Modal>
        </>
    )
}

export default Highlight;