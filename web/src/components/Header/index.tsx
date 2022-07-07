
import { Logo } from '../../assets/Logo';

import {
    Container,
    Content,
} from './styles';

interface Props {
    onOpenModal: () => void;
}

export const Header = ({ onOpenModal }: Props) => {

    return (
        <Container>
            <Content>
                <Logo />
                <button type='button' onClick={onOpenModal}>Nova transação</button>


            </Content>
        </Container>
    );
}