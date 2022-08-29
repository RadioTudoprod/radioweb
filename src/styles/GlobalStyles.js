import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
       margin: 0;
       padding: 0;
       box-sizing: border-box;   
       color: var(--primary);    
    }
    html, body, #root {
        max-height: 100vh;
        max-width: 100vw;
        height: 100%;
        width: 100%;
    }
    *, button, input {
        border: 0;
        background: none;
        font-family: "Montserrat", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    input:focus{
        outline: none;
    }

    html {
        background: var(--primary);
        scroll-behavior: smooth;
    }

    ::-webkit-scrollbar {
        display: none;
    }

    :root { 

        --primary: #fff;
        --secondary:#eae3da;

        --greenDefault: #928c80;
        --brownDefault: #997a65;

        --details: #2c83d6;

        --white:#fff;
        --black: #000000;
        --black2: #222222;
        --like: #e82653;
        
        --drak-hover: #011017;
        --outline: #2f3336;      
        
        --newGray: #eee;  
        --danger: #dc3545;
        --warning: #ffc107;
        --success: #28a745;     
        --info: #17a2b8;
    
    }
`;