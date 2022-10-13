/* eslint-disable import/no-anonymous-default-export */
import styled from "styled-components";
import { Star } from "src/assets/icons/Star";

const Wrapper = styled.div`
    display: grid;
    gap: 30px;
    padding-top: 50px;
    position: relative;
`;

const StarRandingFilter = styled.div`
    display: flex;
    width: 150px;
    gap: 5px;

    > * {
        cursor: pointer;
    }
`;

const RatingStar = styled(Star)`
    cursor: pointer;
`;

const Filters = styled.div`
    max-width: 1200px;
    border: 1px solid black;
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    position: sticky;
    top: -1px;
    background: white;
    z-index: 2;

    button {
        margin: 0 5px;
        padding: 5px;
        border: none;
        cursor: pointer;
        width: 30px;
        height: 30px;
    }
`;

export default { Wrapper, StarRandingFilter, RatingStar, Filters };