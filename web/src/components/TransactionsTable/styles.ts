import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 4rem;

    table{
        width: 100%;
        border-spacing: 0 0.5rem;//dar espaçamento na table


        th {
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 2rem;
        }

        td{
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            font-weight: 500;
            color: var(--text-body);
            border-radius: 0.25rem;

            &:first-child{
                //primeiro elemento do td vai ter essa cor
                color: var(--text-title);
            }

            &.withdraw{
                color: var(--red);
            }

            &.deposit{
                color: var(--green);
            }
        }
    }
`;