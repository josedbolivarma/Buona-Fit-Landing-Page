import styled from 'styled-components';

export const ButtonStyled = styled.button`
    width: 200px;
    padding: .6rem .8rem;
    color: #FFF;
    cursor: pointer;
    border: none;
    outline: none;
    border-radius: 2px;
    background-color: rgb(19,19,21);
    background: linear-gradient(90deg, rgba(19,19,21,1) 0%, rgba(29,29,30,1) 48%, rgba(30,30,31,1) 48%, rgba(49,50,55,1) 100%);
    transition: .3s all ease;
    font-weight: 540;
    &:hover {
        color: #000;
        letter-spacing: .4px;
        background: rgb(191,191,194);
        background: linear-gradient(90deg, rgba(191,191,194,1) 0%, rgba(171,171,172,1) 39%, rgba(166,166,168,1) 57%, rgba(227,227,228,1) 100%);
    }
    `;

    export const ExclusiveTitle = styled.h3`
    font-size: 1.8rem;
    color: #EFEFEF;
    `;

    export const ExclusiveText = styled.p`
        color: #ECECEC;
        font-size: 1.1rem;
    `;

    export const WrapBanner = styled.div`
    width: 100%;
    height: ${props => props.height};
    background-position:center;
    background-repeat: no-repeat;
    background-image: url('${props => props.imageBg}');
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.position}; // vertical
    align-items: center;
    padding: 2rem;
    `;