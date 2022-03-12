import styled from "styled-components";


const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    padding: 40px;
    display: flex;
    align-items:  center;
    justify-content: center;
    z-index: 1;
`;
const ModalContainer = styled.div`
    width: 500px;
    height:  100px;
    background: #fff;
    position: relative;
    border-radius:  5px;
    box-shadow: rgba(100,100,111,0.2),0px 7px 29px 0px;
    padding: 20px;    
`;

const ModalHead = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #E8E8E8;

    h3{
        font-weight: 500;
        font-size: 16px;
        color: #1766DC;
    }
`;
const ClosedButton = styled.button`
    position: absolute;
    top: 15px;
    right: 20px;

    width: 30px;
    height: 30px;
    border: none;
    background: none;
    cursor: pointer;
    transition: .3s ease all;
    border-radius: 5px;
    color: #1766DC;

    &:hover{
        background: #f2f2f2;
    }
`;
const ModalContent = styled.div`
    display: flex;
    flex-direction: column;    
	align-items: center;
	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}
	p {
		font-size: 18px;
		margin-bottom: 20px;
	}	
`;
const ModalButtonsRow = styled.div`
    display: flex;
    flex-direction: row;
    padding: 40px;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
`;
const Button = styled.button`
    display: block;
	padding: 10px 30px;
	border-radius: 100px;
	color: #fff;
	border: none;
	background: #1766DC;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;
	&:hover {
		background: #0066FF;
	}
`;

const Modal = ({ children, modalState, setModalState }) => {
    return (
        <>
            {modalState &&
                <Overlay>
                    <ModalContainer>
                        <ModalHead>
                            <h3>Information</h3>
                        </ModalHead>
                        <ClosedButton onClick={() => setModalState(false)}>
                            X
                        </ClosedButton>
                        {children}
                    </ModalContainer>
                </Overlay>
            }
        </>
    )
}

export default Modal;