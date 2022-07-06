import { ArrowCircleDown, ArrowCircleUp, CurrencyCircleDollar, CurrencyDollar } from 'phosphor-react';
import {
    Container,
} from './styles';

interface Props {
    title: string
    value: number
}

export const Summary = () => {

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <ArrowCircleUp size={24} weight="bold" color='#33CC95' />
                </header>
                <strong>R$1000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saidas</p>
                    <ArrowCircleDown size={24} weight="bold" color='#E52E4D' />
                </header>
                <strong> - R$500,00</strong>
            </div>

            <div className='highlight-background'>
                <header>
                    <p>Total</p>
                    <CurrencyDollar size={24} weight="bold" color='#fff' />
                </header>
                <strong>R$2500,00</strong>
            </div>

        </Container>
    );
}