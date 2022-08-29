import styled from 'styled-components';

export const Container = styled.div`
    background-color: var(--primary);
    height: 100vh;
    width: 100vw;

    .hide {
        display: none;
    }
`;

export const Header = styled.div`
    height: 85px;
    background-color: #000;
    width: 100vw;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 120px 0 120px;

    @media (max-width: 845px) {
        padding: 0 10px 0 10px;
    }

    > .image {
        > img {
            height: 60px;
        }
    }

    > .menu {

        display: flex;
        justify-content: center;
        align-items: center;

        > .separator {
            height: 20px;
            width: 1px;
            border-radius: 5px;
            background-color: #fff;
            margin: 0 15px 0 15px;

            @media (max-width: 845px) {
                margin: 0 5px 0 5px;
            }
        }

        > span {

            font-weight: bold;
            font-size: 15px;
            margin: 0 15px 0 15px;
            color: #fff;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
                color: #FF616F;
            }

            @media (max-width: 845px) {
                font-size: 12px;
                margin: 0 5px 0 5px;
            }
        }

    }

`;

export const Content55 = styled.div`
    height: 75vh;
    width: 100vw;
    /* background: linear-gradient(to left,#9df3ed 0,rgb(80, 136, 185) 100%); */
    background: url(https://www.scdn.co/i/free/bubbles-dktp.svg) center -138px / 100% 1068px no-repeat, linear-gradient(-45deg, #9df3ed -5%, rgb(80, 136, 185));
    background-position: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    overflow: hidden;

    @media (max-width: 845px) {
        height: 45vh;
    }

    > .image {

        @media (max-width: 845px) {
            display: none;
        }

        position: absolute;
        height: 60vh;
        bottom: 0;
        left: 15vw;

        > img {
            height: 60vh;
            width: 40vh;
        }
    }

    > .text {

        @media (max-width: 845px) {
            width: 70vw;
            position: relative;
            left: 50px;
            top: 100px;
        }

        position: absolute;
        left: 45vw;
        width: 40vw;
        height: 60vh;
        bottom: 0;

        > div {

            height: 50px;
            width: 350px;

        }

        > p {
            font-size: 50px;
            font-weight: bold;
            margin: 20px 0 0 0;

            @media (max-width: 845px) {
                font-size: 35px;
            }

        }

        > button {

            cursor: pointer;
            height: 60px;
            margin: 20px 0 0 0;
            padding: 0 20px 0 20px;
            font-size: 15px;
            font-weight: bold;
            background-color: #fff;
            color: #222;
            border-radius: 35px;
            transition: all 0.3s;

            &:hover {
                transform: scale(1.1);
            }
        
        }
        
    }
`;


export const Content60 = styled.div`

    background-color: #fff;
    height: 70vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;    
    justify-content: center;

    @media (max-width: 845px) {
        height: auto;
    }

    > p {
        margin: 40px 0;
        font-size: 50px;
        font-weight: bold;
        color: #111;

        @media (max-width: 845px) {
            text-align: center;
            font-size: 30px;
        }


    }

    > .grid-flex {
        
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        .pub {

            flex: 200px 100px;
            max-width: 300px;
            height: calc(50vh - 120px);
            position: relative;
            transition: all 0.3s;
            margin: 0 30px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            @media (max-width: 845px) {
                height: 250px;
                margin: 0 0px;
            }

            > .icon {

                background: linear-gradient(to top,#9df3ed 0,rgb(80, 136, 185) 100%);
                height: 150px;
                width: 150px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 100px;

                * {
                    color: rgb(31, 75, 114) !important;
                }
            }

            > p {
                color: rgb(0, 0, 0) !important;
            }

            .title {
                margin: 20px 0 0 0;
                font-weight: bold;
                font-size: 20px;
                text-align: center;
            }

            .desc {
                margin: 10px 0 0 0;
                font-weight: 300;
                font-size: 15px;
                text-align: center;
            }
        }

    }
`;

export const Footer = styled.div`
    height: 55vh;
    background-color: #000;
    width: 100vw;

    .content_menus {
        height: 80%;
        width: 100vw;
    }

    .links {

        border: 2px solid #222;
        border-bottom-width: 0;
        border-left-width: 0;
        border-right-width: 0;
        height: 20%;
        width: 100vw;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0 120px 0 120px;
        justify-content: space-around;

        > div {

            display: flex;
            flex-direction: row;

            > p {
                font-size: 10px;
                font-weight: 300;
                margin: 0 30px 0 30px;
            }
        } 

    }
`;

