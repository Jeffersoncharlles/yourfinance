import {
    Container,
} from './styles';
import { ArrowCircleDown, ArrowCircleUp } from 'phosphor-react';

interface Props {
    type: 'deposit' | 'withdraw';
    title: string;
    onType: () => void;
    isActive: boolean;
    activeColor: 'green' | 'red'
}

export const CheckButton = ({ title, type, onType, isActive, activeColor }: Props) => {


    return (
        <Container onClick={onType} isActive={isActive} activeColor={activeColor}>
            {type === 'deposit' ?
                (<ArrowCircleUp size={24} weight="bold" color='#33CC95' />)
                : (<ArrowCircleDown size={24} weight="bold" color='#E52E4D' />)
            }
            <span>{title}</span>
        </Container>
    );
}