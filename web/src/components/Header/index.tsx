import { Logo } from '../../assets/Logo';
import {
    Container,
    Content,
} from './styles';

export const Header = () => {

    return (
        <Container>
            <Content>
                <Logo />
                <button type='button'>Nova transação</button>
            </Content>
        </Container>
    );
}