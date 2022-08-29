import { faFire, faHeart, faMusic, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from 'react';
import {
    Container, Content55, Content60, Footer, Header
} from './style';



const Main: React.FC = () => {

    const player = useRef();

    const [srcRadio, setSrcRadio] = useState("https://radiotungane.ao/radio/8030/radio");
    const [canPlay, setCanPlay] = useState(false);

    return (
        <Container>

            <Header>

                <div className="image">
                    <img src={require('../../assets/images/radiot.png')} />
                </div>

                <div className="menu">

                    <span>
                        Estações
                    </span>

                    <span>
                        Programação
                    </span>

                    <div className="separator" />

                    <span>
                        Sobre Nós
                    </span>

                    <span>
                        Contato
                    </span>

                </div>

            </Header>

            <Content55>

                <div className="image">
                    <img src={require('../../assets/images/app.png')} alt="App Image" />
                </div>

                <div className="text">

                    <div>

                        {srcRadio !== "" && <video
                            autoPlay
                            controls
                            height={50}
                            width={350}
                            className={!canPlay ? "hide" : ""}
                            onCanPlay={() => {
                                console.log('...onCanPlay..')
                                setCanPlay(true);
                            }}
                            onLoadStart={() => {
                                console.log('...I am loading...')
                            }}
                            onError={() => {
                                setSrcRadio("");
                                setTimeout(() => {
                                    setSrcRadio("https://radiotungane.ao/radio/8030/radio");
                                }, 2000)
                            }}
                        >

                            <source src={srcRadio} />
                        </video>}

                        {/* <FontAwesomeIcon icon={faPlay} style={{ height: 45 }} />

                        <Lottie
                            options={defaultOptions}
                            height={60}
                            width={150}
                        /> */}

                    </div>

                    <p>Rádio à tua maneira mais de 60 000 estações em todo o mundo. Grátis.</p>
                    <button className="button">
                        BAIXAR RADIO TUNGA NÉ
                    </button>
                </div>

            </Content55>

            <Content60>

                <p>Porque a Rádio Tunga Né</p>

                <div className="grid-flex">

                    <div className='pub'>

                        <div className="icon">
                            <FontAwesomeIcon icon={faPlay} style={{ height: 75 }} />
                        </div>

                        <p className="title">Reproduz os teus favoritos.</p>

                        <p className="desc">
                            Ouve as músicas que adoras e descobre novas músicas e podcasts.
                        </p>

                    </div>

                    <div className='pub'>
                        <div className="icon">
                            <FontAwesomeIcon icon={faMusic} style={{ height: 75 }} />
                        </div>

                        <p className="title">Reproduz os teus favoritos.</p>

                        <p className="desc">
                            Ouve as músicas que adoras e descobre novas músicas e podcasts.
                        </p>

                    </div>

                    <div className='pub'>
                        <div className="icon">
                            <FontAwesomeIcon icon={faHeart} style={{ height: 75 }} />
                        </div>

                        <p className="title">Reproduz os teus favoritos.</p>

                        <p className="desc">
                            Ouve as músicas que adoras e descobre novas músicas e podcasts.
                        </p>
                    </div>

                    <div className='pub'>
                        <div className="icon">
                            <FontAwesomeIcon icon={faFire} style={{ height: 75 }} />
                        </div>

                        <p className="title">Reproduz os teus favoritos.</p>

                        <p className="desc">
                            Ouve as músicas que adoras e descobre novas músicas e podcasts.
                        </p>
                    </div>

                </div>

            </Content60>

            <Footer>

                <div className="content_menus">


                </div>

                <div className="links">

                    <div>
                        <p>Termos Legais</p>
                        <p>Centro de Privacidade</p>
                        <p>Política de Privacidade</p>
                        <p>Cookies</p>
                        <p>Acerca dos anúncios</p>
                    </div>

                    <div>
                        <p> © 2022 Assinatura</p>
                    </div>

                </div>

            </Footer>

        </Container>
    )
}

export default Main;
