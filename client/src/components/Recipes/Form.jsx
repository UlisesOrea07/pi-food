import React, { useState } from "react";
import styled from "styled-components";
import noImg from "../../images/noImg.png";
import { letter, bars, secundary, bg } from "../../theme/colors";
// import UploadImage from "../UploadImage/UploadImage";

const Body = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
`;
const Title = styled.h1`
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 25px;
    font-weight: bold;
    color: ${letter};
`;

const FormR = styled.form`
    margin-top: 2%;
    box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.345);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    color: ${letter};    
    background-color: ${bg};
`;
const Section = styled.section`
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    height: auto;
`;
const Group = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    justify-content: space-around;
    width: 100%;
    height: auto;
`;
const GrpRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    padding: 0;
`;

const Label = styled.label`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: bold;
`;
const Input = styled.input`
    border: 0;
    margin-right: 0;
    padding: 2px 0 2px 5px;
    background-color: rgba(255, 255, 255, 0.924) ;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.100); 
    font-size: 17px;
    outline: none;
    width:100%;
`;
const ButtonsBox = styled.div`
    display: flex;
    justify-content: space-evenly;
    position: relative;
    width: 100%;    
`;

const Button = styled.button`
    margin: 10px;
    padding: 4px 8px 4px 8px;
    background-color: ${secundary};    
    border: none;
    box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.345);
    color: ${bg};
    width: 20%;
`;
const Select = styled.select`
    padding: 4px 8px 4px 8px;
    background-color: ${secundary};      
    border: none;
    box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.345);
    color: ${bg};
    width: 30%;
`;
const TextArea = styled.textarea`    
    resize: none;
    border: 0;
    margin-right: 0;
    padding: 2px 0 2px 5px;
    background-color: rgba(255, 255, 255, 0.924) ;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.100); 
    font-size: 17px;
    outline: none;
    width:100%;
`;
const Hr = styled.hr`
    margin: 0;
    height: 2px;
    background-color: ${secundary};
    width: 80%;
`;
const ImagenBox = styled.div`
    width: 100%;  
    height: 50%;
    margin: 0 0 10px 0;
`;
const Image = styled.img`
    width: inherit;   
    max-height:169px;
    border-radius: 10px;
`;

export const validate = (input) => {
    let errors = {};
    if (!input.title) {
        errors.title = 'Title is required';
    } else if (input.title.trim() < 0) {
        errors.title = 'Title is invalid';
    }
    return errors;
}
const Form = () => {
    const [newRecipe, setNewRecipe] = useState({
        title: '',
        summary: '',
    });

    const [input, setInput] = useState({ title: '' });
    const [errors, setErrors] = useState({});

    const handleChanged = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value,
        }))
    }
    return (
        <Body>
            <FormR>
                <Title>New Ricipe</Title>
                <Hr />
                <Container>
                    <Section>
                        <Group>
                            <ImagenBox>
                                <Image src={noImg} />
                            </ImagenBox>
                            <input type="file" accept="image/png, .jpeg, .jpg, image/gif" />
                            {/* <UploadImage /> */}
                        </Group>
                        <Group>
                            <Label>
                                STEPS:
                            </Label>
                            <ul>
                                <li>
                                    1. HAcer cuaticomate
                                </li>
                            </ul>
                            <GrpRow>
                                <Input type='text' name='step' placeholder="Next step" />
                                <Button>Add</Button>
                            </GrpRow>
                        </Group>
                    </Section>
                    <Section>
                        <Group>
                            <Input
                                className={errors.title && 'danger'}
                                type='text'
                                name='title'
                                placeholder='Title'
                                onChange={handleChanged}
                                value={input.title}
                            />
                            {errors.title && (
                                <p className='danger'>{errors.title}</p>
                            )}
                        </Group>
                        <GrpRow>
                            <GrpRow>
                                <Label>
                                    Health:
                                </Label>
                                <Input type='number' name='health' step="10" min="0" max="100" />
                            </GrpRow>
                            <GrpRow>
                                <Label>
                                    Score:
                                </Label>
                                <Input type='number' name='score' step="10" min="0" max="100" />
                            </GrpRow>
                        </GrpRow>
                        <Group>
                            <Select multiple={false} name='diets' value={['B', 'C']}>
                                <option value="Diets">Grapefruit</option>
                            </Select>
                            <div>

                            </div>
                        </Group>
                        <Group>
                            <Label>
                                Summary:
                            </Label>
                            <TextArea type='text' name='summary' maxLength={1000} placeholder='write' rows={10} cols={50} />
                        </Group>

                    </Section>

                </Container>
                <ButtonsBox>
                    <Button type='submit' name='add' >Agregar</Button>
                    <Button>Cancelar</Button>
                </ButtonsBox>

            </FormR>
        </Body>
    )
}

export default Form;