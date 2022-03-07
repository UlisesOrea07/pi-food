import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDiets } from '../../actions/index';
import styled from "styled-components";
import { postRecipe } from "../../actions";
import noImg from "../../images/noImg.png";
import { letter, bars, secundary, bg } from "../../theme/colors";
import { useNavigate } from "react-router-dom";

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
    width:80%;
`;
const Section = styled.section`
    margin: 0 15px 15px 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
`;
const Group = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    justify-content: space-around;
    width: 90%;
`;
const GrpRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    width: 100%;
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
const InputNumber = styled.input.attrs({
    type: 'number',
    min: 0,
    max: 100
})`
    
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
    display: flex;  
    width: 90%;  
    height: 40%;
    margin: 0 0 10px 0;
    align-items: center;
    justify-content: center;
`;
const Image = styled.img`
    width: 80%;   
    max-height: 120px;
    border-radius: 10px;
`;
const Box = styled.div`
    height: 100px;
    width: 400px;
    border: 1px solid #ddd;
    background: ${bg};
    overflow-y: scroll;
`;
const BoxMessage = styled.div`
    height: auto;
`;
const BoxText = styled.div`
    padding: 4px;
    background:${bg};
`;

const TyniButton = styled.button`
    width: 3%;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    font-weight: bold;
    height: auto;
    padding: 0;
    margin: 2px;
    background-color: transparent;    
    border: none;   
    color: ${bars};
`;
const ButtonIn = styled.div`
    width: 90%;
    position: relative;
`;
const BtnX = styled.button`
    position: absolute;
    top: 0;
    border-radius: 1px;
    right: 0px;
    z-index: 2;
    border: none;
    height: 25px;
    cursor: pointer;
    color: ${bg};
    margin:0;
    background-color: ${secundary};
    transform: translateX(2px);
`;

const InputGroup = styled.input`
    margin: 0px;
    width: 95%;
    outline: none;
    height: 20px;
    border-radius: 2px;
    border: 0;   
    padding: 2px 0 2px 10px;
    background-color: rgba(255, 255, 255, 0.924) ;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.100); 
    font-size: 13px;
`;

const CheckContent = styled.div`
    position: relative;
    display: flex;    
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-around;
    width: 30%;
    height: 50px;
`;
const Check = styled.input.attrs({
    type: 'checkbox'
})``;

const Warning = styled.span`
    color: red;
    font-family: monospace;
`;
const Form = () => {
    const dietsLoaded = useSelector(state => state.dietsLoaded)
    const dispatch = useDispatch();
    const [img, setImg] = useState(noImg)
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getAllDiets())
    }, [dispatch])


    const [newRecipe, setNewRecipe] = useState({
        title: '',
        summary: '',
        spoonacularScore: '',
        healthScore: '',
        image: '',
        steps: [],
        diets: []
    });
    const [validations, setValidations] = useState({
        title: '',
        summary: '',
        spoonacularScore: '',
        healthScore: '',
        image: '',
        steps: '',
        diets: ''
    });


    const quitImg = (e) => {
        setImg(noImg);
        setNewRecipe({ image: '' })
    }

    const [step, setStep] = useState('');


    const newStep = (e) => {
        e.preventDefault();
        setNewRecipe({ ...newRecipe, steps: [...steps, step] })
    };


    const validateValues = () => {
        const { title, summary, spoonacularScore, healthScore, image, steps, diets } = newRecipe;
        const validations = { title: '', summary: '', spoonacularScore: '', healthScore: '', image: '', steps: '', diets: '' }
        let isValid = true;
        if (!title) {
            validations.title = 'Title is required';
            isValid = false;
        }
        if (title.trim() < 1) {
            validations.title = 'Title is required';
            isValid = false;
        }
        if (title && title.length < 1 || title.length > 30) {
            validations.title = 'Title must contain between 1 and 30 characters';
            isValid = false;
        }
        if (!summary) {
            validations.summary = 'Summary is required';
            isValid = false;
        }
        if (summary && summary.length < 1 || summary.length > 500) {
            validations.summary = ' Summary must contain between 1 and 500 characters';
            isValid = false;
        }
        if (!spoonacularScore) {
            validations.spoonacularScore = 'Score is required'
            isValid = false;
        }
        if (!healthScore) {
            validations.healthScore = 'Healt is required';
            isValid = false;
        }
        if (!image) {
            validations.image = 'Image is required';
            isValid = false;
        }
        if (image.trim() < 1) {
            validations.image = 'Image is required';
            isValid = false;
        }
        if (image && image.length < 1 || image.length > 30) {
            validations.image = 'Image must contain between 1 and 30 characters';
            isValid = false;
        }
        if (steps.length < 1) {
            validations.steps = 'Steps must contain 1 step';
            isValid = false;
        }
        if (diets.length < 1) {
            validations.diets = 'You must choose at least one diet';
            isValid = false;
        }


        if (!isValid) {
            setValidations(validations);
        }
        return isValid;
    }

    const validatePerValue = (e) => {
        const { name } = e.target;
        const value = newRecipe[name];
        let message = '';

        if (!value) {
            message = `${name} is required`;
        }

        if (value && name === 'title' && (value.length < 1 || value.length > 50)) {
            message = 'Title must contain between 1 and 50 characters';
        }
        setValidations({ ...validations, [name]: message })
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewRecipe({ ...newRecipe, [name]: value })
    }
    const [checkbox, setCheckbox] = useState({})
    const onCheck = (e) => {
        const { value } = e.target;
        // if (e.target.checked) {
        //     setCheckbox({ ...checkbox, [value]: value })
        // } else {
        //     setCheckbox(delete checkbox[value])
        // }
        // console.log(checkbox + 'lol')
        setNewRecipe({ ...newRecipe, diets: [...diets, value] })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validateValues();
        if (!isValid) {
            return false;
        }
        dispatch(postRecipe(newRecipe));
        navigate('/home');
        // alert(JSON.stringify(newRecipe));
    }

    const { title, summary, spoonacularScore, healthScore, image, diets, steps } = newRecipe;

    const {
        title: titleM,
        summary: summaryM,
        spoonacularScore: spoonacularScoreM,
        healthScore: healthScoreM,
        image: imageM,
        diets: dietsM,
        steps: stepsM
    } = validations;




    return (
        <Body>
            <FormR onSubmit={handleSubmit}>
                <Title>New Ricipe</Title>
                <Hr />
                <Container>
                    <Section>
                        <Group>
                            <ImagenBox>
                                <Image src={img} />
                            </ImagenBox>
                            <GrpRow>
                                <ButtonIn >
                                    <InputGroup
                                        type="text"
                                        placeholder="Insert URL"
                                        onBlur={validatePerValue}
                                        name="image"
                                        value={image}
                                        onChange={handleChange}
                                        onBlur={validatePerValue}
                                    />
                                    <BtnX onClick={quitImg}>X</BtnX>
                                </ButtonIn>
                            </GrpRow>
                            <Warning>{imageM}</Warning>
                        </Group>
                        <Group>
                            <Label>
                                STEPS:
                            </Label>
                            <Group>
                                <Box>
                                    <BoxText>
                                        {newRecipe.steps?.map((st, i) => {
                                            return (
                                                <BoxMessage key={i}>
                                                    <TyniButton>
                                                        X
                                                    </TyniButton>
                                                    {i + 1}.-{st}
                                                </BoxMessage>
                                            )
                                        })}
                                    </BoxText>
                                </Box>
                                <Warning>{stepsM}</Warning>
                            </Group>
                            <GrpRow>
                                <ButtonIn>
                                    <InputGroup
                                        type='text'
                                        name='step'
                                        valu={step}
                                        placeholder="Next step"
                                        onChange={e => setStep(e.target.value)}
                                    />
                                    <BtnX onClick={newStep}>+</BtnX>
                                </ButtonIn>
                            </GrpRow>
                        </Group>
                    </Section>
                    <Section>
                        <Group>
                            <Input
                                type='text'
                                name='title'
                                placeholder='Title'
                                value={title}
                                onChange={handleChange}
                                onBlur={validatePerValue}
                            />
                            <Warning>{titleM}</Warning>
                        </Group>
                        <GrpRow>
                            <Group>
                                <GrpRow>
                                    <Label>
                                        Health:
                                        <InputNumber
                                            name='healthScore'
                                            value={healthScore}
                                            onChange={handleChange}
                                            onBlur={validatePerValue}
                                        />
                                        <small>(1-100)</small>
                                    </Label>
                                </GrpRow>
                                <Warning>{healthScoreM}</Warning>
                            </Group>

                            <Group>
                                <GrpRow>
                                    <Label>
                                        Score:
                                        <InputNumber
                                            name='spoonacularScore'
                                            value={spoonacularScore}
                                            onChange={handleChange}
                                            onBlur={validatePerValue}
                                        />
                                        <small>(1-100)</small>
                                    </Label>
                                </GrpRow>
                                <Warning>{spoonacularScoreM}</Warning>
                            </Group>

                        </GrpRow>
                        <Group>
                            <CheckContent>
                                {
                                    dietsLoaded?.map((diet) => {
                                        return (
                                            <label key={diet.id} ><Check onClick={onCheck} name={diet.name} value={diet.id} />{diet.name}</label>
                                        )
                                    })
                                }
                            </CheckContent>
                            <Warning>{dietsM}</Warning>
                        </Group>
                        <Group>
                            <Label>
                                Summary:
                            </Label>
                            <TextArea
                                type='text'
                                name='summary'
                                maxLength={500}
                                placeholder='write'
                                rows={10}
                                cols={50}
                                onChange={handleChange}
                                onBlur={validatePerValue}
                                value={summary}
                            />
                            <Warning>{summaryM}</Warning>
                        </Group>
                    </Section>
                </Container>
                <ButtonsBox>
                    <Button type='submit' name='add'>ADD</Button>
                    <Button type='reset'>CANCEL</Button>
                </ButtonsBox>
            </FormR>
        </Body >
    )
}

export default Form;