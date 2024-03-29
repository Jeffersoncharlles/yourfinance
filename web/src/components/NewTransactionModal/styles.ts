import styled from 'styled-components';

export const Container = styled.form`
    h2{
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        padding:  0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;
        background: #e7e9ee;
        border: 1px solid #d7d7d7d7;
        font-weight: 400;
        font-size: 1rem;

        &::placeholder{
            color: var(--text-body);
        }

        & + input {
            //todo input a partir do segundo 
            margin-top: 1rem;
        }
    }

    button[type="submit"]{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        color: #e7e9ee;
        border: 0;
        border-radius: 0.25rem;
        font-size: 1rem;
        margin-top: 1.5rem;
        font-weight: 600;

        transition: filter .2s;

        &:hover{
            filter: brightness(.9);
        }
    }
`;

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0 ;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
`