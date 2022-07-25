import { darken, transparentize } from 'polished';
import styled from 'styled-components';

interface Props {
    isActive: boolean
    activeColor: 'green' | 'red'
}

const colors = {
    green: '#33CC95',
    red: '#e5234d'
}


export const Container = styled.button<Props>`
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem ;
    background: ${({ isActive, activeColor }) =>
        isActive
            ? transparentize(0.9, colors[activeColor])
            : 'transparent'
    };
    display: flex;
    align-items: center;
    justify-content: center;
    transition: border-color .2s;

    span{
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;
        color: var(--text-title);
    }

    &:hover{
        border-color: ${darken(0.1, '#d7d7d7')};
        //lib trabalha com cores e ai to escurecendo em 10%
    }
`;