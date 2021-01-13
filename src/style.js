import styled from 'styled-components';

export const Page = styled.div`
    background-color: #dedede;
    /* text-align: center;
    align-items: center;  */
    height: 100%;
`;
export const Header = styled.div`
    /* display: flex;
    align-items: center; 
    justify-content: center; */   
    h1{
        size: 50px;
        margin: 0;
        padding: 10px;
    }
    div:first{     
        margin: 0 auto;
        width: 50%;         
    }
    /* justify-content: space-between; */
    /* padding: 5px 50px; */
`;
export const Message = styled.p`
    color: red;
`;
// export const Title = styled.h1`
//     size: 50px;
//     margin: 0;
//     padding: 10px;
// `;
export const Input = styled.input`
    width: 50%;
    height: 50px;
    background: #f3f3f3;
`;
export const AddButton = styled.button`
    width: 10%;
    height: 55px;
    background: #ffb59d;
`;