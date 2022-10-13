import styled from "styled-components";

const Image = styled.div<{imageUrl: string}>`
    background-image: url(${({ imageUrl }) => imageUrl && imageUrl});
    width: 180px;
    height: 130px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto 1fr auto;
    padding: 15px;
    border: 2px solid #eee;
    gap: 15px;
    margin-bottom: -2px;
`;

const Data = styled.div`
    text-align: left;
`;

const RoomItemWrapper = styled.div`
    display: grid;
    grid-template-columns: 180px 1fr;
    gap: 15px;
    padding: 25px 20px;
    border: 2px solid #eee;
    text-align: left;
    margin-bottom: -2px;

    h5 {
        margin: 0;
    }
`;

export default { Image, Wrapper, Data, RoomItemWrapper };
