import React, { useState } from 'react'
import logo from "./img/solandLogo.png"
import introVideo from "./img/Soland Collection.mp4"
import nftVideo from "./img/Soland City Intro.mp4"
import poster from "./img/poster.png"
import nftpster from "./img/poster2.png"
import solfare from "./img/Solflare Wallet.png"
import phantomlogo from "./img/phantomlogo-.net.png"
import { NavLink } from 'react-router-dom';
import styles from "../../styles/style.css"
import collection1 from "./img/collection/1.png"
import collection2 from "./img/collection/2.png"
import collection3 from "./img/collection/5.png"
import collection4 from "./img/collection/9.png"
import collection5 from "./img/collection/14.png"
import collection6 from "./img/collection/15.png"
import collection7 from "./img/collection/18.png"
import collection8 from "./img/collection/30.png"
import collection9 from "./img/collection/42.png"
import collection10 from "./img/collection/83.png"
import collection12 from "./img/collection/147.png"
import collection13 from "./img/collection/339.png"
import collection14 from "./img/collection/340.png"
import bar from "./img/bar.png"

import collection15 from "./img/collection/345.png"
import dscord from "./img/discord.png"
import cat from "./img/cat.png"
import youtube from "./img/youtube.png"
import tiktok from "./img/tiktok.png"
import twitter from "./img/twitter.png"
import insta from "./img/insta.png"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Solandpdf from "../pdf/Soland Web Presentation.pdf"
const Spanish = () => {
    const styles = {
        visibility: "hidden",

    }
    const styles2 = {
        visibility: "visible",

    }
    const [toggleStyles, settoggleStyles] = useState(styles)
    const [toggle, settoggle] = useState(true)


    const Toggel = () => {
        settoggle(!toggle)

        toggle == true ? settoggleStyles(styles2) : settoggleStyles(styles)
    }

    return (
        <>
            <div className="mainheader">

                <div className="navsection">
                    <div className="logos">
                        <ul>

                            <li> <img className="solandlogo" src={logo} width="60px" alt="" /></li>

                        </ul>
                    </div>
                    <div className="icons">

                        <ul>

                            <li><NavLink to="/preorder">Pre-order</NavLink></li>
                            <li><NavLink to="/team">Team</NavLink></li>
                            <li><NavLink to="/aboutus">About us</NavLink></li>
                            <li><NavLink to="/login">Login</NavLink></li>
                            <li><NavLink to="/signup">Register</NavLink></li>
                            <li>

                                <div className="dropdown">
                                    <a className="btn   mydrwop dropdown-toggle" href="/spanish" role="button" id="dropdownMenuLink"
                                        data-toggle="dropdown" aria-expanded="false">
                                        Spanish
                                    </a>

                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <a className="dropdown-item" href="/">English</a>


                                    </div>
                                </div>
                            </li>

                            <li id="bar" onClick={Toggel}> <img src={bar} alt="" />

                                <ul style={toggleStyles} className="mobilemenu">
                                    <li><NavLink to="/preorder">Pre-order</NavLink></li>
                                    <li><NavLink to="/team">Team</NavLink></li>
                                    <li><NavLink to="/aboutus">About us</NavLink></li>
                                    <li><NavLink to="/login">Login</NavLink></li>
                                    <li><NavLink to="/signup">Register</NavLink></li>

                                    <li>

                                        <div className="dropdown">
                                            <a className="btn   mydrwop dropdown-toggle" href="/spanish" role="button"
                                                id="dropdownMenuLink" data-toggle="dropdown" aria-expanded="false">
                                                Spanish
                                            </a>

                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <a className="dropdown-item" href="/">English</a>


                                            </div>
                                        </div>
                                    </li>



                                </ul>
                            </li>



                        </ul>
                    </div>
                </div>



                {/* <!-- ///Content Section --> */}

                <section className="content">

                    <div className="heading">
                        <h1 className="animate__animated animate__zoomIn">Bienvenido a casa en la ciudad de Soland</h1>
                        <p>
                            Apuesta, cultiva y presta en el distrito financiero de Solana.</p>
                        <p>Experimente una nueva perspectiva sobr /e DeFi.
                        </p>
                    </div>
                </section>




            </div>


            <div className="counter">


                <div className="solandpresentation">

                    <h3> <a id="presentaion" target="_blank" href="../pdf/Soland Web Presentation.pdf">Presentaci??n</a> </h3>
                    <span className="download" id="GetFile">
                        <a href={Solandpdf} download><i className="fa-solid fa-download"></i></a>
                    </span>
                </div>

                {/* <div className="counterheading">
    <h1 id="solandColection">Lanzamiento de la colecci??n Soland </h1>
</div>
<div className="hour">

    <h3 className="timer">00d</h3>
    <h3 className="timer">00h</h3>
    <h3 className="timer"> 00m</h3>
    <h3 className="timer">00s</h3>
</div> */}

                <div className="exteraContent">
                    <div>
                        <p>acu??ado al azar</p>
                    </div>
                    <div>
                        <p>Recompensa aleatoria</p>
                    </div>
                    <div>
                        <p>Fondo de premio mayor</p>
                    </div>
                    <div>
                        <p>El 40% de las ventas de la colecci??n se coloca en el fondo de liquidez de tokens de Soland</p>
                    </div>
                </div>

            </div>

            {/* <!-- //About --> */}

            <div id="carouselExampleSlidesOnly" className="carousel slide" data-interval="false" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">

                        <div id="mintsection" className="videos">
                            <video width="100%" controls>
                                <source poster={poster} src={introVideo} />
                            </video>
                        </div>
                    </div>

                </div>
            </div>


            <section className="about">

                <br />
                <br />


                <div className="about-content container ">

                    <div className="aboutPara">
                        <h1>Introducci??n</h1>
                        <br />

                        <p>La ciudad de Soland es el destino ideal para todo elest?? en b??squeda de una experiencia DeFi
                            personalizada. </p>
                        <p> Podr??s gestionar f??cilmente tus finanzas y disfrutar de una variedad de caracter??sticas nunca antes
                            vistas.
                        </p>
                        <p>Si est??s buscando explorar nuevos mundos o simplemente gestionar tu dinero con mas eficiencia, Soland
                            City puede ser tu hogar lejos de casa.</p>
                    </div>
                    <div className="about-img">
                        <img src={collection1} id="img" className="img-fluid" width="300px" alt="" />
                    </div>
                </div>
                <br />
                <br />

            </section>



            <div className="cardSection">

                <br />


                <div className="card-content   ">

                    <div data-aos="fade-up" data-aos-duration="800" className="card1 ">
                        <h4>Participa</h4>
                        <p>Podr??s participar en la construcci??n del centro financiero de Solana apostando tus NFTs y tokens.</p>


                    </div>

                    <div className="card1 " data-aos="fade-up" data-aos-duration="1000">
                        <h4>Intercambiar
                        </h4>
                        <p>Podr??s comprar, vender e intercambiarcriptomonedas directamente desde tu monedero sin renunciar al
                            control de tus claves y adem??s utilizando los intercambios de Raydium.</p>




                    </div>
                    <div className="card1 " data-aos="fade-up" data-aos-duration="1000">
                        <h4>Farm
                        </h4>
                        <p>Proporcionatokens fungibles o no fungibles a los grupos de liquidez para obtener un rendimiento
                            ??ptimo de tuscripto.</p>


                    </div>

                </div>


                <div className="card-content   ">

                    <div className="card1 " data-aos="fade-up" data-aos-duration="1000">
                        <h4>Bake</h4>
                        <p>Utilizafarming y bakingen tu colecci??n de NFT para maximizar lo que obtienes de tus inversiones.
                        </p>


                    </div>

                    <div className="card1 " data-aos="fade-up" data-aos-duration="1000">
                        <h4>Presta

                        </h4>
                        <p>Con gran flexibilidad. Sin dep??sito m??nimo, sin tiempo m??nimo de dep??sito. Retiratus ganancias cuando
                            tu decidas.</p>




                    </div>
                    <div className="card1 " data-aos="fade-up" data-aos-duration="1000">
                        <h4>Sala de exposiciones
                        </h4>
                        <p>Mu??strale tu portafolio al mercado. Encuentra un lugar para mostrar tu colecci??n al mundo.</p>


                    </div>

                </div>

                <br />
                <br />
                <br />
                <br />

            </div>




            <div className="animateContent">
                <br />
                <br />



                <div className="allContent container ">

                    <div className="whitepaper">
                        <div className="card question">
                            <div className="card-header" id="headingSeveteen">
                                <h2 className="mb-0">
                                    <button className="btn  btn-block text-left collapsed questionbtn" type="button"
                                        data-toggle="collapse" data-target="#collapseSeveteen" aria-expanded="false"
                                        aria-controls="collapseSeveteen">
                                        <h1>
                                            Papel blanco</h1>
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseSeveteen" className="collapse" aria-labelledby="headingSeveteen"
                                data-parent="#accordionExample">
                                <div className="card-body questionbtn">
                                    <h1>El equipo</h1>
                                    <p>El equipo que hay detr??s de Solandes una gran comunidad de personas que se sienten muy
                                        inspiradas por las grandes oportunidades del Metaverso. Lo que buscamos es crecer y
                                        prosperar en este nuevo mundo, y queremos que t?? seas parte de ese progreso. </p>
                                    <p>Este es un viaje largo que requiere la fuerza de una comunidad s??lida para crear
                                        oportunidades de crecimiento financiero dentro de un entorno completamente nuevo y sin
                                        l??mites. Hay un mundo de complejidad detr??s de las NFT y el Metaverso, pero nuestro
                                        objetivo es hacer que este proceso sea fluido y ayudarle a realizar esta transici??n
                                        hacia la nueva etapa de la era digital.</p>
                                    <p>No es necesario tener ning??n conocimiento t??cnico, ni las explicaciones complejas. Puedes
                                        aprender lo esencial y seguir siendo un miembr /o productivo y muy valioso de nuestra
                                        comunidad. Esta es la raz??n por la que SolandCit es donde quieres estar cuando te abr /es
                                        paso en el Metaverso.</p>


                                    <br />
                                    <br />
                                    <h1>Colecci??n NFT</h1>
                                    <p>Retiratus ganancias cuando tu decidas.
                                        Sala de exposiciones
                                        Mu??strale tu portafolio al mercado. Encuentra un lugar para mostrar tu colecci??n al
                                        mundo.
                                        El equipo
                                        El equipo que hay detr??s de Solandes una gran comunidad de personas que se sienten muy
                                        inspiradas por las grandes oportunidades del Metaverso. Lo que buscamos es crecer y
                                        prosperar en este nuevo mundo, y queremos que t?? seas parte de ese progreso.
                                        Este es un viaje largo que requiere la fuerza de una comunidad s??lida para crear
                                        oportunidades de crecimiento financiero dentro de un entorno completamente nuevo y sin
                                        l??mites. Hay un mundo de complejidad detr??s de las NFT y el Metaverso, pero nuestro
                                        objetivo es hacer que este proceso sea fluido y ayudarle a realizar esta transici??n
                                        hacia la nueva etapa de la era digital.
                                        No es necesario tener ning??n conocimiento t??cnico, ni las explicaciones complejas.
                                        Puedes aprender lo esencial y seguir siendo un miembr /o productivo y muy valioso de
                                        nuestra comunidad. Esta es la raz??n por la que SolandCit es donde quieres estar cuando
                                        te abr /es paso en el Metaverso.
                                        Colecci??n NFT
                                        La colecci??n NFT de Solandes ??nica al ser una peque??a representaci??n de su participaci??n
                                        en una ciudad vibr /ante. Un lugar que va a cambiar la forma en que vemos la propiedad
                                        virtual. Nuestras vidas est??n a punto de dar un giro que no se parece a nada que hayamos
                                        experimentado anteriormente como especie.
                                        .</p>

                                    <p>Hay muchos aspectos t??cnicos y complejos en el Metaverso, los servicios DeFi, las NFT y
                                        toda la estructura de la criptomoneda/blockchain. La complejidad de estos temas es
                                        suficiente para escribir muchos libr /os, pero la idea detr??s de nuestra colecci??n es
                                        ayudar a cualquier persona a convertirse en un miembr /o de la comunidad con solo entender
                                        lo basico del mundo de las NFT y la forma en que el Metaverso se implementar?? en nuestra
                                        vida diaria.
                                    </p>
                                    <p>Soland City cubr /e toda la complejidad delMetaverso y todas las herramientas que necesitas
                                        para convertirte en un miembr /o activo y productivo de esta comunidad. La colecci??n sirve
                                        como punto de entrada a una comunidad que te ayudar?? a comprender lo b??sico de una
                                        manera fluida y f??cil de entender.
                                    </p>
                                    <p>No es necesario sentirse abr /umado por el fen??meno que est?? a punto de producirse. Esta
                                        colecci??n de NFT es tu entrada a la nueva era. Una vez Eso implica aprovechar al m??ximo
                                        las oportunidades de las finanzas descentralizadas que tienen un potencial ilimitado.
                                    </p>
                                    <p>Permite queSoland te d?? ese empuj??n inicial que va a proporcionar los bloques de
                                        construcci??n a una forma de vida totalmente nueva. Somos una comunidad que busca crear
                                        un v??nculo permanente con todos los miembr /os mientras les ayudamos a desarrollar las
                                        habilidades para prosperar dentro del reino del Metaverso.</p>

                                    <br />
                                    <br />
                                    <h1>Historia de NFT</h1>
                                    <p>No es posible negar que vivimos en un mundo completamente cambiado por las restricciones
                                        de las fronteras globales. Todo el planeta avanza hacia una nueva forma de vida, pero
                                        que limita la forma en que podemos llevar a cabo nuestros negocios.</p>
                                    <p>Hay varios aspectos de la sociedad tal y como la conocemos que hoy se est??n desmoronando
                                        ante nuestros ojos. Nos dirigimos hacia un cambio grande y la mayor parte del mundo no
                                        est?? preparada para la transici??n. Puede parecer que es un momento dif??cil, pero es un
                                        momento que trae cambios muy positivos a nuestras vidas.</p>
                                    <p>En tiempos en que la comunicaci??n digital es tan fluida, parece que no somos capaces de
                                        aprovecharla al m??ximo, pero todo eso est?? a punto de cambiar. Pronto nos veremos
                                        envueltos en el que es el mayor y m??s relevante cambio jam??s visto. </p>
                                    <p>Estamos en camino alMetaverso. Se trata de una nueva realidad alternativa que podemos
                                        controlar sin miedo a las restricciones en el proceso de desarrollo, y el crecimiento
                                        financiero. Este mundo es un lugar completamente nuevo y emocionante, y Soland es la
                                        comunidad financiera virtual definitiva para ayudarle a realizar esta importante
                                        transici??n.</p>
                                    <p>No hay duda de que vamos a vivir en este mundo tanto como en el mundo tradicional. No es
                                        ideal decir "real" y "virtual". La verdad es que el mundo digital que experimentamos en
                                        el Metaverso va a ser tan real como el que experimentas en la vida real.</p>
                                    <p>Podr??s vivir en una ciudad llena de vida, dentro de un metaverso muy atractivo y lleno de
                                        opciones que nos ofrecen un gran n??mero de oportunidades, las cuales hoy parecen estar
                                        fuera de nuestro alcance. La humanidad a??n no ha sido testigo de los incre??bles cambios
                                        que se avecinan y Soland City quiere ofrecer la comunidad perfecta durante esta
                                        transici??n.</p>

                                    <br />
                                    <br />
                                    <h1>Utilidad NFT</h1>
                                    <p>Al iniciarSoland City, la idea era crear una comunidad poderosa que creciera junta y
                                        creara una fuerte presencia en el gran Metaverso. Su valor NFT es algo que puede crecer
                                        sin limitaciones y ese es uno de los aspectos m??s emocionantes.</p>
                                    <p>Dicho esto, el verdadero valor de la adquisici??n de NFT de Soland viene en forma de apoyo
                                        de la comunidad. No s??lo eso, sino tambi??n en la sensaci??n de que formas parte de algo
                                        m??s grande y que te permite hacer esta intimidante transici??n mas simple.</p>
                                    <p>Es sin duda gracias al poder de la comunidad que hemos podido avanzar y evolucionar como
                                        especie. La fuerza siempre ha estado en los n??meros y esto es a??n m??s relevante y cierto
                                        ahora que nos dirigimos a un futuro tan masivamente nuevo y prometedor.</p>
                                    <p>La comunidad es lo que da m??s valor a nuestra colecci??n. Va m??s all?? del valor de la
                                        propia NFT y se convierte en un pasaporte que te convierte en miembr /o de una comunidad
                                        exclusiva y en ciudadano anactivo del Metaverso.</p>
                                    <p>En otros tiempos todo esto parec??a ciencia ficci??n, pero el Metaverso es real y vamos a
                                        crear la fusi??ndel mundo offline con el online de formas incre??blemente creativas y
                                        eficaces.</p>
                                    <p>Soland global te dar?? el poder de evolucionar dentro del Metaverso y de crear
                                        oportunidades de negocio que tengan un alcance mayor y sean mas concretas.</p>

                                    <div className="logimg">
                                        <img src="./img/Soland Logo.png" width="250px" alt="" />
                                    </div>
                                    <br />
                                    <div className="para">
                                        <p>Nos reservamos el derecho de editar este Whitepaper en cualquier momento sin
                                            anunciarlo previamente</p>



                                        <p>2. Nuestra documentaci??n t??cnica se publicar?? durante el mes de abr /il</p>

                                        <p>www.soland.live</p>
                                        <p>Whitepaper 1.0</p>

                                        <a href="https://discord.gg/3rNUnCbW3V">
                                            <img src="./img/discord.png" width="30px" alt="" />
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>


                </div>


                <div id="colectionsection" className="collectioHeading">
                    <h1>Nuestra colecci??n</h1>
                </div>
                <br />
                <br />

                <div className="check">
                    <div className="scroll-main">

                        <div className="scrollimg2">
                            <img src={collection1} width="250px" alt="" />
                            <img src={collection2} width="250px" alt="" />
                            <img src={collection3} width="250px" alt="" />
                            <img src={collection4} width="250px" alt="" />
                            <img src={collection5} width="250px" alt="" />
                            <img src={collection6} width="250px" alt="" />
                        </div>

                        <div className="scrollimg2">
                            <img src={collection7} width="250px" alt="" />
                            <img src={collection8} width="250px" alt="" />
                            <img src={collection9} width="250px" alt="" />
                            <img src={collection10} width="250px" alt="" />
                            <img src={collection14} width="250px" alt="" />
                            <img src={collection12} width="250px" alt="" />
                        </div>

                    </div>


                </div>
                <br />
                <br />
                <div className="parnterHeading container ">
                    <h1>Wallets supported
                        <br />
                        <br />

                        <div className="walletLogo">
                            <a href={solfare} download> <img src={solfare} id="wallet" width="120px" alt="" /> </a>
                            <a href={solfare} download><img src={phantomlogo} id="phantom" width="80px" alt="" /></a>
                            <br />
                            <br />
                            <p id="click">Haga clic en el logotipo para descargar</p>
                        </div>

                    </h1>
                </div>
                <div className="solandCity">

                    <br />
                    <br />

                    <h1>Soland City in: </h1>


                    <br />
                    <br />
                    <div className="cityCard">

                        <div className="nftScrooing">

                            <a href="https://nftscoring.com/upcoming/Soland-City"><h5> NFT Scooring </h5></a>
                        </div>
                        <div className="nftclander">

                            <a href="https://nftcalendar.io/event/soland-city/"><h5>NFT Calendar</h5></a>
                            <a href="UpcomingNFT.art">UpcomingNFT</a>
                            <br />
                            <a href="https://upcomingnft.art/soland-city/">Soland-city UpcomingNFT</a>
                        </div>
                        <div className="nftFeed">
                            <a href="https://www.nftfeed.app/solana/projects/solandcity"> <h5>NFTFeed</h5></a>

                        </div>
                        <div className="solScan">
                            <a href="https://solscan.io/token/soLDKcxDXu7Z1iCZxdbYLMup6szxCWsUJKZkVwbv4n2"> <h5>SolScan</h5></a>
                        </div>
                    </div>
                </div>

                <br />
                <br />
            </div>

            <div id="carouselExampleSlidesOnly" className="carousel slide" data-interval="false" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">

                        <div id="citysection" className="videos">
                            <video width="100%" controls>
                                < source poster={nftpster} src={nftVideo} />
                            </video>
                        </div>
                    </div>

                </div>
            </div>




            <div className="roadmap">


                <br />
                <br />


                <div className="roadmapHeading">



                    <br />
                    <br />
                    <h1>Roadmap</h1>
                </div>

                {/* <!-- <div className="roadContent"> --> */}

                <div className="wrapper">
                    <div className="center-line">
                        <a href="#" className="scroll-icon"><i className="fas "></i></a>
                    </div>
                    <div className="row row-1">
                        <section>
                            <i className="icon fas "></i>
                            <div className="details">
                                <span className="title">Marketing</span>

                            </div>
                            <p>Calendarios de NFT <br />
                                Twitter <br />
                                YouTube
                            </p>

                        </section>
                    </div>
                    <div className="row row-2">
                        <section>
                            <i className="icon fas "></i>
                            <div className="details">
                                <span className="title">4 de abr /il </span>

                            </div>
                            <p>Minting de la Colecci??n Soland en directo</p>

                        </section>
                    </div>
                    <div className="row row-1">
                        <section>
                            <i className="icon fas "></i>
                            <div className="details">
                                <span className="title">Principios de abr /il</span>

                            </div>
                            <p>Venta privada Intercambio DINT a Soland </p>


                        </section>
                    </div>
                    <div className="row row-2">
                        <section>
                            <i className="icon fas "></i>
                            <div className="details">
                                <span className="title">finales de abr /il</span>

                            </div>
                            <p>Preventa de SolandToken IEO <br />
                                Listado CEX
                            </p>

                        </section>
                    </div>
                    <div className="row row-1">
                        <section>
                            <i className="icon fas "></i>
                            <div className="details">
                                <span className="title">Lanzamiento de la Dapp  Staking</span>

                            </div>

                        </section>
                    </div>
                    <br />


                    <br />
                    <div className="row row-2">
                        <section>
                            <i className="icon fas "></i>
                            <div className="details">
                                <span className="title">3D SolandDeFi City </span>

                            </div>
                            <p>Visuales y planificaci??n de paisajes en 3D Soland Edificios y dise??o de ciudades Planificaci??n de
                                pisos y dise??o Opciones de decoraci??n
                            </p>

                        </section>
                    </div>
                    <div className="row row-1">
                        <section>
                            <i className="icon fas"></i>
                            <div className="details">
                                <span className="title">Listado DEX </span>

                            </div>
                            <p>Raydium.io</p>
                        </section>
                    </div>
                </div>
                {/* <!-- </div> --> */}

            </div>

            <div className="partnerplacholder">
                <br />
                <br />
                <br />

                <div className="blogheading">
                    <h1>Soland Blog </h1>
                    <br />
                    <br />
                    <br />
                </div>
                <div className="fa-content">

                    <div className="FAQS container ">
                        <div className="accordion  " id="accordionExample">



                            <div className="card question">
                                <div className="card-header" id="headingeighteen">
                                    <h2 className="mb-0">
                                        <button className="btn  btn-block text-left collapsed questionbtn" type="button"
                                            data-toggle="collapse" data-target="#collapseeighteen" aria-expanded="false"
                                            aria-controls="collapseeighteen">
                                            <h2>Soland aparece en</h2>
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseeighteen" className="collapse" aria-labelledby="headingeighteen"
                                    data-parent="#accordionExample">
                                    <div className="card-body questionbtn">

                                        <p>
                                            <li>Pr??ximamenteNFT.art</li>
                                            <li>Alimentaci??n NFT </li>
                                            <li> SolScan </li>
                                        </p>
                                    </div>
                                </div>
                            </div>




                            <div className="card question">
                                <div className="card-header" id="headingFour">
                                    <h2 className="mb-0">
                                        <button className="btn  btn-block text-left collapsed questionbtn" type="button"
                                            data-toggle="collapse" data-target="#collapseFour" aria-expanded="false"
                                            aria-controls="collapseFour">
                                            <h2> Cambio de marca de ETH a solana</h2>
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseFour" className="collapse" aria-labelledby="headingFour"
                                    data-parent="#accordionExample">
                                    <div className="card-body questionbtn">
                                        <p>En el a??o 2021, muchos desarrolladores dejaronEthereum y se dirigieron hacia
                                            blockchains alternativas. Esto dado a que los altos precios de la gasolina y la
                                            congesti??n todav??a plagan la red de Ethereum. Solana fue una de las redes que
                                            cosech?? los mayores beneficios de esta situaci??n. Su r??pido ascenso desde 2021 la ha
                                            consolidado como uno de los principales </p>
                                        <p>competidores de Ethereum. Solana puede hacer m??s transacciones y ofrece tarifas m??s
                                            bajas que Ethereum. Estamos cambiando la marca de Solana y llev??ndola al siguiente
                                            nivel con el Metaverso 3D Soland City y utilizando el mismo enfoque DeFi que
                                            Ethereum.</p>
                                        <p>Aun cuandoEthereum es m??s antiguo y m??s conocido, Solana es un aut??ntico competidor.
                                            Una de las preocupaciones es que el potencial de Ethereum para las aplicaciones a
                                            escala global est?? muy limitado por el n??meroespecifico de transacciones por segundo
                                            que puede permitir. </p>
                                        <p>Solana puede procesar decenas de miles de transacciones por segundo, mientras que
                                            Ethereum s??lo puede procesar unas 13 transacciones por segundo en promedio. Adem??s,
                                            Solana ofrece costos significativamente menores. Una de las cr??ticas m??s destacadas
                                            a Ethereum es su elevado costo en las transacciones.</p>
                                    </div>
                                </div>
                            </div>



                            <div className="card question">
                                <div className="card-header" id="headingFive">
                                    <h2 className="mb-0">
                                        <button className="btn  btn-block text-left collapsed questionbtn" type="button"
                                            data-toggle="collapse" data-target="#collapseFive" aria-expanded="false"
                                            aria-controls="collapseFive">
                                            <h2> ??Qu?? diferencia a Solana de la competencia? </h2>
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseFive" className="collapse" aria-labelledby="headingFive"
                                    data-parent="#accordionExample">
                                    <div className="card-body questionbtn">
                                        <p>Solana se diferencia de otros Blockchain por la forma en que se logra el consenso
                                            entre los nodos. Mientras que la prueba de la historia tiene sus ventajas, a otros
                                            les preocupa el procedimiento de votaci??n de Solana y si podr??a llevar a la
                                            centralizaci??n.</p>
                                        <p>Antes de unirse a blockchain en Solana, todos los nodos deben votar sobr /e la
                                            legitimidad de los bloques y las transacciones. Los nodos env??an sus votos al l??der,
                                            que a continuaci??n suma los votos y firma el bloque.</p>
                                    </div>
                                </div>
                            </div>



                            <div className="card question">
                                <div className="card-header" id="headingSix">
                                    <h2 className="mb-0">
                                        <button className="btn  btn-block text-left collapsed questionbtn" type="button"
                                            data-toggle="collapse" data-target="#collapseSix" aria-expanded="false"
                                            aria-controls="collapseSix">
                                            <h2> Datos sobr /e la red Solana</h2>
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseSix" className="collapse" aria-labelledby="headingSix"
                                    data-parent="#accordionExample">
                                    <div className="card-body questionbtn">
                                        <p>tarifas m??s bajas que Ethereum. Estamos cambiando la marca de Solana y llev??ndola al
                                            siguiente nivel con el Metaverso 3D Soland City y utilizando el mismo enfoque DeFi
                                            que Ethereum.
                                            Aun cuandoEthereum es m??s antiguo y m??s conocido, Solana es un aut??ntico competidor.
                                            Una de las preocupaciones es que el potencial de Ethereum para las aplicaciones a
                                            escala global est?? muy limitado por el n??meroespecifico de transacciones por segundo
                                            que puede permitir. Solana puede procesar decenas de miles de transacciones por
                                            segundo, mientras que Ethereum s??lo puede procesar unas 13 transacciones por segundo
                                            en promedio. Adem??s, Solana ofrece costos significativamente menores. Una de las
                                            cr??ticas m??s destacadas a Ethereum es su elevado costo en las transacciones.
                                            ??Qu?? diferencia a Solana de la competencia?
                                            Solana se diferencia de otros Blockchain por la forma en que se logra el consenso
                                            entre los nodos. Mientras que la prueba de la historia tiene sus ventajas, a otros
                                            les preocupa el procedimiento de votaci??n de Solana y si podr??a llevar a la
                                            centralizaci??n.
                                            Antes de unirse a blockchain en Solana, todos los nodos deben votar sobr /e la
                                            legitimidad de los bloques y las transacciones. Los nodos env??an sus votos al l??der,
                                            que a continuaci??n suma los votos y firma el bloque.
                                            Datos sobr /e la red Solana
                                            La red de Solana tiene la capacidad de realizar 65.000 transacciones por segundo,
                                            muy por encima de las siete transacciones por segundo de Bitcoin y las quince de
                                            Ethereum. (TPS). Cuando se combina con los elevados costes de gas de la blockchain
                                            de ETH, Solana presenta una barrera de entrada mucho m??s baja, lo que le permite
                                            construir su base de usuarios r??pidamente.
                                        </p>
                                        <p>Es por ello que las transacciones de Solana tienen una fracci??n del costo de otras
                                            blockchains. Esto dado a que cada transacci??n cuesta 0,00025 d??lares. Solana atrae a
                                            clientes de todo el mundo debido a su bajo costo y a su excelente capacidad de
                                            rendimiento.</p>
                                        <p>Solana tiene 1.469 nodos en su ecosistema, con m??s del 74% de todos los tokens en
                                            circulaci??n en la red y proporcionando recompensas.</p>

                                    </div>
                                </div>
                            </div>


                            <div className="card question">
                                <div className="card-header" id="headingSeven">
                                    <h2 className="mb-0">
                                        <button className="btn  btn-block text-left collapsed questionbtn" type="button"
                                            data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false"
                                            aria-controls="collapseSeven">
                                            <h2>
                                                DeFi de Solana </h2>
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven"
                                    data-parent="#accordionExample">
                                    <div className="card-body questionbtn">
                                        <p>El ecosistema DeFi de Solana tiene actualmente 8.600 millones de d??lares en sus
                                            numerosas plataformas. Solana ocupa el sexto lugar en la clasificaci??n, despu??s de
                                            Ethereum, Terra, Avalanche y Fantom.
                                        </p>
                                        <p>Las tres plataformasprincipales de Solana son el intercambio descentralizado Serum,
                                            la plataforma minera de liquidez disponible Quarry, y la plataforma de apuestas de
                                            Solana MarinadeFinance. </p>


                                    </div>
                                </div>
                            </div>


                            <div className="card question">
                                <div className="card-header" id="headingEight">
                                    <h2 className="mb-0">
                                        <button className="btn  btn-block text-left collapsed questionbtn" type="button"
                                            data-toggle="collapse" data-target="#collapseEight" aria-expanded="false"
                                            aria-controls="collapseEight">
                                            <h2>Metaverso 3D Soland City</h2>
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseEight" className="collapse" aria-labelledby="headingEight"
                                    data-parent="#accordionExample">
                                    <div className="card-body questionbtn">
                                        <p>El metaverso es un fen??meno digital que combina la realidad f??sica, la aumentada y la
                                            virtual en el espacio online. El modelo de ciudad metaversoSoland tendr?? un
                                            edificio.
                                        </p>
                                        <p>Todos los serviciosDeFi tienen su edificio. Por ejemplo, el estacionamiento tiene su
                                            edificio, la agricultura tiene su edificio y los pr??stamos tienen su edificio. Los
                                            nuevos proyectos tendr??n su nivel cuando se unan, permitiendo que las estructuras se
                                            eleven m??s alto de lo imaginable en la vida real.</p>
                                        <p>Quienes tengan DINT podr??n cambiar sus fichas por fichas Soland y recibir una
                                            bonificaci??n.
                                        </p>

                                    </div>
                                </div>
                            </div>

                            <div className="card question">
                                <div className="card-header" id="headingNine">
                                    <h2 className="mb-0">
                                        <button className="btn  btn-block text-left collapsed questionbtn" type="button"
                                            data-toggle="collapse" data-target="#collapseNine" aria-expanded="false"
                                            aria-controls="collapseNine">
                                            <h2> Colecci??n Soland City</h2>
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseNine" className="collapse" aria-labelledby="headingNine"
                                    data-parent="#accordionExample">
                                    <div className="card-body questionbtn">
                                        <p>El primer proyecto de NFT entr?? en el mercado en 2017. El est??ndar de tokens ERC721
                                            entr?? en vigor a principios de 2018. En los ??ltimos tres o cuatro a??os, la llegada
                                            de los tokens no fungibles como paradigma tecnol??gico ha atra??do a inversores y
                                            entusiastas de las criptomonedas. La industria general de las criptomonedas tuvo un
                                            gran auge en 2020, lo que provoc?? que el subdominio de los NFT aumentara a??n m??s
                                            r??pido, casi exponencialmente.</p>

                                    </div>
                                </div>
                            </div>

                            <div className="card question">
                                <div className="card-header" id="headingTen">
                                    <h2 className="mb-0">
                                        <button className="btn  btn-block text-left collapsed questionbtn" type="button"
                                            data-toggle="collapse" data-target="#collapseTen" aria-expanded="false"
                                            aria-controls="collapseTen">
                                            <h2> ??? Propiedad del arte </h2>
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseTen" className="collapse" aria-labelledby="headingTen"
                                    data-parent="#accordionExample">
                                    <div className="card-body questionbtn">

                                        <p>Los NFT son certificados digitales basados en blockchain que est??n vinculados a un
                                            ??nico activo digital. En la colecci??n de la ciudad de Soland, los NFTs
                                            probar??n su propiedad de arte y su propiedad en los edificios y pisos del Metaverso
                                            y calcular??n estos beneficios.
                                        </p>
                                        <h6>??? Expansi??n de Defi</h6>

                                        <p>A causa del aumento de la popularidad de las plataformas DeFi y a la demanda de NFT,y
                                            ajustes fundamentales en la forma de pagar el trabajo creativo, las redes
                                            descentralizadas han recibido mucha atenci??n en los ??ltimos dos a??os. Los activos
                                            digitales siempre han sido una clase de activos dif??cil, pero las NFT elevan
                                            considerablemente las apuestas. Baking, nuestra extensi??n de DeFi que comprende el
                                            cross-staking y el farming de NFTs, Tokens y Liquidity Pool Tokens, es una
                                            combinaci??n pura en la que el inversionista puede beneficiarse al m??ximo.</p>

                                        <h6>??? Cantidad</h6>
                                        <p>Las NFT basadas en Solana ganaron mucha importancia despu??s de que Ethereum, la
                                            blockchain m??s popular para las NFT, tuviera unas tasas de transacci??n
                                            extremadamente altas a mediados del 2021. Cada NFT tiene una cantidad determinada de
                                            SolandTokens (100, 150, 200, 250, 500 o 1000 Tokens)</p>
                                        <h6>??? Pixel gems</h6>
                                        <p>Las Pixel Gemsincrementar??n el APY y le permitir??n recibir recompensas al apostar sus
                                            tokensSoland. Puedes apostar tus tokens deleg??ndolos a los validadores, quienes
                                            procesan las transacciones y operan la red.
                                        </p>
                                        <p>La delegaci??n de participaci??n es un concepto financiero de riesgo compartido y
                                            recompensa compartida que puede generar beneficios a largo plazo para los titulares
                                            de los tokens. Esto se consigue coordinando los incentivos financieros de los
                                            titulares de los tokens y los validadores en los que delegan.</p>
                                        <h6>??? Miner??a de liquidez</h6>
                                        <p>La miner??a de liquidez es un mecanismo financiero descentralizado que permite a los
                                            que participan donar un porcentaje de sus activos decriptodivisas a numerosos pools
                                            de liquidez a cambio de tokens y comisiones. Al cultivar SolandTokens, la capa de
                                            miner??a de liquidez aumentar?? el APY.</p>
                                        <h6>??? El pr??stamo de NFT's</h6>
                                        <p>??Se puede pedir dinero prestado utilizando tus NFTs como garant??a? Esto abr /ir??a la
                                            puerta a una serie de nuevas oportunidades, como pedir dinero prestado para pagar el
                                            almuerzo o los impuestos. Adem??s, ??podr??as utilizar tus NFTs prestados para comprar
                                            a??n m??s NFTs! Al prestar tus NFTs, puedestambi??n obtener fichas.
                                        </p>
                                        <h6>??? Liquidez no fungible</h6>
                                        <p>La palabr /a "liquidez" es muy comun en el mercado de valores. Especifica la rapidez
                                            con la que los activos de una empresa pueden convertirse en efectivo. Se trata de
                                            una cuesti??n cr??tica cuando se trata del valor de unaempresa. Es dado que permite a
                                            los inversionistas poner dinero en una empresa, sabiendo que podr??n vender sus
                                            acciones por dinero en efectivo r??pidamente. Al utilizar nuestra plataforma de
                                            liquidez, pueden comprar, vender o ganar de sus NFT de forma instant??nea. </p>
                                        <h6>??? Votar en beneficio de la comunidad.</h6>
                                        <h6>??? Acceso VIP al Metaverso.</h6>
                                        <p>La tokenomica debe ser recompensada. La segunda venta paga al primer titular de NFT.
                                            A continuaci??n, elige un titular para obtener el 10% de cada venta. Cuando la
                                            recaudaci??n se finalice, el 10% de la recaudaci??n total se distribuir?? entre diez
                                            personas. </p>


                                    </div>
                                </div>
                            </div>




                            <div className="card question">
                                <div className="card-header" id="headingEleven">
                                    <h2 className="mb-0">
                                        <button className="btn  btn-block text-left collapsed questionbtn" type="button"
                                            data-toggle="collapse" data-target="#collapseEleven" aria-expanded="false"
                                            aria-controls="collapseEleven">
                                            <h2> Cobr /os de NFTs de mayor rendimiento para Solana para 2022 </h2>
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseEleven" className="collapse" aria-labelledby="headingEleven"
                                    data-parent="#accordionExample">
                                    <div className="card-body questionbtn">
                                        <p>El t??rmino "ficha no fungible" es cada vez m??s frecuente. Las regiones procesan miles
                                            de millones de transacciones al mes.</p>
                                        <p>El ecosistema en su totalidad de Solana est?? siendo testigo de un gran aumento de la
                                            demanda a medida que aumenta la carga de gas en Ethereum. El ecosistema NFT de
                                            Solana se expande y ejecuta miles de millones de transacciones cada d??a. Los
                                            proyectos est??n aumentando gracias al mercado especializado de Solana y a la NFT
                                            basada en Solana.</p>

                                    </div>
                                </div>
                            </div>


                            <div className="card question">
                                <div className="card-header" id="headingTel">
                                    <h2 className="mb-0">
                                        <button className="btn  btn-block text-left collapsed questionbtn" type="button"
                                            data-toggle="collapse" data-target="#collapseTel" aria-expanded="false"
                                            aria-controls="collapseTel">
                                            <h2> ???Academia de losDegenerateApes </h2>
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseTel" className="collapse" aria-labelledby="headingTel"
                                    data-parent="#accordionExample">
                                    <div className="card-body questionbtn">
                                        <p>Seg??n Solanalysis, DegenerateApeAcademy es la colecci??n de NFT m??s valiosa de Solana.
                                            En la actualidad, la empresa tiene una valoraci??n de mercado de casi 503 millones de
                                            d??lares (en el momento de escribir este art??culo). La exposici??n cuenta con 10.000
                                            simios de "cerebr /o ??gil" que muestran un "comportamiento degenerado". La NFT tambi??n
                                            ofrece a sus portadores utilidad y acceso exclusivo a la "Academia" </p>
                                        <p>Como muchas otras empresas conocidas, DegenApe cuenta con el apoyo de una gran
                                            comunidad. Tiene m??s de 82.000 seguidores en Twitter, pero s??lo 18.000 miembr /os en
                                            Discord. Las cualidades de la colecci??n, su car??cter ??nico y sus incre??bles
                                            ilustraciones en 3D han contribuido a su popularidad entre los coleccionistas.</p>

                                    </div>
                                </div>
                            </div>


                            <div className="card question">
                                <div className="card-header" id="headingTherteen">
                                    <h2 className="mb-0">
                                        <button className="btn  btn-block text-left collapsed questionbtn" type="button"
                                            data-toggle="collapse" data-target="#collapseTherteen" aria-expanded="false"
                                            aria-controls="collapseTherteen">
                                            <h2> ???Monkey Business en Solana </h2>
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseTherteen" className="collapse" aria-labelledby="headingTherteen"
                                    data-parent="#accordionExample">
                                    <div className="card-body questionbtn">
                                        <p>La otra colecci??n de NFT de primer orden es Solana Monkey Business. La colecci??n SMB
                                            se compone de 5.000 monos producidos al azar y con diversos rasgos. Al proporcionar
                                            privilegios especiales y una cartera com??n a los titulares, "Los Monos" esperan
                                            crear una gran comunidad en torno a Solana.</p>
                                        <p>Con una capitalizaci??n de mercado de 60 millones de d??lares, el precio m??nimo actual
                                            es de 59 SOL.</p>

                                    </div>
                                </div>
                            </div>


                            <div className="card question">
                                <div className="card-header" id="headingFourteen">
                                    <h2 className="mb-0">
                                        <button className="btn  btn-block text-left collapsed questionbtn" type="button"
                                            data-toggle="collapse" data-target="#collapseFourteen" aria-expanded="false"
                                            aria-controls="collapseFourteen">
                                            <h2> ??? Aurory</h2>
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseFourteen" className="collapse" aria-labelledby="headingFourteen"
                                    data-parent="#accordionExample">
                                    <div className="card-body questionbtn">
                                        <p>Aurory es un free to play gratuito que permite a los jugadores comerciar con m??s de
                                            10.000 objetos NFT. El programa Aurory ha recibido financiaci??n de la Fundaci??n
                                            Solana, Alameda Research y CMS.</p>
                                        <p>El equipo de Aurory est?? formado por expertos de los sectores del juego y la
                                            criptomoneda. Con experiencia laboral previa en Ubisoft, EA y otras empresas de
                                            renombr /e en el mundo de los video juegos.</p>

                                    </div>
                                </div>
                            </div>



                            <div className="card question">
                                <div className="card-header" id="headingFiveteen">
                                    <h2 className="mb-0">
                                        <button className="btn  btn-block text-left collapsed questionbtn" type="button"
                                            data-toggle="collapse" data-target="#collapseFiveteen" aria-expanded="false"
                                            aria-controls="collapseFiveteen">
                                            <h2> ??? Frakt</h2>
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseFiveteen" className="collapse" aria-labelledby="headingFiveteen"
                                    data-parent="#accordionExample">
                                    <div className="card-body questionbtn">
                                        <p>Frakt, de muchas formas se diferencia de los otros proyectos de PFP al utilizarNFTs
                                            de arte fractal ??nicos y creados al azar. Est?? disponible en cinco formas diferentes
                                            y cuatro paletas de colores distintas. La colecci??n, que tambi??n incluye a los monos
                                            Degen y a los monos Solana, cuenta con un total de 10.000 NFT. Los titulares de
                                            tokensFrakt pueden apostar sus tokens para obtener derechos de voto en el DAO de
                                            Frakt. Al apostar tambi??n pueden obtener el token de utilidad y gobierno $FRKT. </p>
                                        <p>De igual forma, al jugar a los numerosos modos del juego, los usuarios pueden ganar
                                            tokens de $AURY. Estos tokens se pueden intercambiar en las bolsas y en el mercado
                                            de Aurory. En el futuro, el juego a??adir?? funciones de gobierno al token. Aunque no
                                            ha tenido el mismo ??xito que AxieInfinity en el espacio, ha logrado numerosas
                                            haza??as dignas de menci??n</p>

                                    </div>
                                </div>
                            </div>

                            <div className="card question">
                                <div className="card-header" id="headingSixteen">
                                    <h2 className="mb-0">
                                        <button className="btn  btn-block text-left collapsed questionbtn" type="button"
                                            data-toggle="collapse" data-target="#collapseSixteen" aria-expanded="false"
                                            aria-controls="collapseSixteen">
                                            <h2> ???SolPunks </h2>
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseSixteen" className="collapse" aria-labelledby="headingSixteen"
                                    data-parent="#accordionExample">
                                    <div className="card-body questionbtn">
                                        <p>SolPunks permite a los coleccionistas a??adir arte de perfil generativo a sus
                                            colecciones a un menor costo. Aunque la calidad no es igual, SolPunks es una
                                            experiencia ??nica. El precio m??nimo, o precio medio de venta, est?? actualmente en
                                            12,6 SOL, y la capitalizaci??n del mercado est?? disminuyendo desde que super?? los 50
                                            millones de d??lares. Tambi??n vale la pena mencionar que SolPunks no tiene ninguna
                                            afiliaci??n con Larva Labs.</p>
                                        <p>Los que se perdieron de los Crypto Punks est??n ahora interesadas en a??adir un SolPunk
                                            a su colecci??n. La comunidad es fuerte para los Punks, y con una mayor aceptaci??n,
                                            ver?? una apreciaci??n significativa del precio en el futuro.</p>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>



                <br />
                <br />
                <br />

            </div>


            <section className="faqs">

                <div className="farHeading">
                    <h1>FAQS</h1>
                </div>


                <div className="FAQS container ">
                    <div className="accordion  " id="accordionExample">
                        <div className="card question">
                            <div className="card-header" id="headingOne">
                                <h2 className="mb-0  ">
                                    <button className="btn btn-link  btn-block text-left questionbtn" type="button"
                                        data-toggle="collapse" data-target="#collapseOne" aria-expanded="true"
                                        aria-controls="collapseOne">
                                        ??Qu?? es el metaverso?
                                    </button>
                                </h2>
                            </div>

                            <div id="collapseOne" className="collapse " aria-labelledby="headingOne"
                                data-parent="#accordionExample">
                                <div className="card-body questionbtn">
                                    <p>El metaverso es altamente complejo, pero es muy sencillo si se quiere explicar en pocas
                                        palabr /as. Es una versi??n m??s completa de un mundo virtual que incluye todas las
                                        actividades que realizamos en el mundo tradicional offline. Podr??s hacer negocios,
                                        socializar y explorar este vasto mundo. </p>

                                </div>
                            </div>
                        </div>
                        <div className="card question">
                            <div className="card-header" id="headingTwo">
                                <h2 className="mb-0">
                                    <button className="btn btn-link btn-block text-left collapsed questionbtn" type="button"
                                        data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false"
                                        aria-controls="collapseTwo">
                                        ??Qu?? es un NFT?
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <div className="card-body questionbtn">
                                    La NFT no es algo tan dif??cil de explicar, pero tambi??n bastante compleja cuando se entra en
                                    los detalles. Se trata b??sicamente de una prueba digital que permite demostrar la propiedad
                                    de una compra digital de cualquier tipo.

                                </div>
                            </div>
                        </div>
                        <div className="card question">
                            <div className="card-header" id="headingThree">
                                <h2 className="mb-0">
                                    <button className="btn btn-link btn-block text-left collapsed questionbtn" type="button"
                                        data-toggle="collapse" data-target="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree">
                                        ??Qu?? hace que la NFT aumente de valor?
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                                data-parent="#accordionExample">
                                <div className="card-body questionbtn">

                                    Las NFT crecen en valor debido a la exposici??n y a la fuerza que logra obtener la comunidad.
                                    Si una NFT est?? respaldada por una comunidad fuerte, ya tiene m??s valor si se quiere vender.
                                    Cuanto m??s tiempo mantenga su NFT a medida que la comunidad crezca, m??s valor ganar?? a lo
                                    largo de los a??os simplemente por el valor de la comunidad que la respalda. Dicho esto,
                                    haymuchos otros factores que alterar??n el valor de tus NFT, pero este es el principio mas
                                    sencillo.
                                </div>
                            </div>
                        </div>



                        <div className="card question">
                            <div className="card-header" id="headingtwenty">
                                <h2 className="mb-0">
                                    <button className="btn btn-link btn-block text-left collapsed questionbtn" type="button"
                                        data-toggle="collapse" data-target="#collapsetwenty" aria-expanded="false"
                                        aria-controls="collapsetwenty">
                                        ??De cu??nto es la recaudaci??n?
                                    </button>
                                </h2>
                            </div>
                            <div id="collapsetwenty" className="collapse" aria-labelledby="headingtwenty"
                                data-parent="#accordionExample">
                                <div className="card-body questionbtn">

                                    8000
                                </div>
                            </div>
                        </div>

                        <div className="card question">
                            <div className="card-header" id="headingtwentyOne">
                                <h2 className="mb-0">
                                    <button className="btn btn-link btn-block text-left collapsed questionbtn" type="button"
                                        data-toggle="collapse" data-target="#collapsetwentyOne" aria-expanded="false"
                                        aria-controls="collapsetwentyOne">
                                        ??En qu?? cadena de bloques funciona este proyecto?
                                    </button>
                                </h2>
                            </div>
                            <div id="collapsetwentyOne" className="collapse" aria-labelledby="headingtwentyOne"
                                data-parent="#accordionExample">
                                <div className="card-body questionbtn">

                                    Solana
                                </div>
                            </div>
                        </div>


                        <div className="card question">
                            <div className="card-header" id="headingtwentyTwo">
                                <h2 className="mb-0">
                                    <button className="btn btn-link btn-block text-left collapsed questionbtn" type="button"
                                        data-toggle="collapse" data-target="#collapsetwentyTwo" aria-expanded="false"
                                        aria-controls="collapsetwentyTwo">
                                        ??Cu??nto precio por menta?
                                    </button>
                                </h2>
                            </div>
                            <div id="collapsetwentyTwo" className="collapse" aria-labelledby="headingtwentyTwo"
                                data-parent="#accordionExample">
                                <div className="card-body questionbtn">

                                    0.8 sol
                                </div>
                            </div>
                        </div>





                    </div>
                </div>

            </section>



            <div id="connect" className="footer">
                <br />
                <br />
                <br />
                <div className="footercontent container">
                    <div className="footerlogo">
                        <img src={logo} width="120px" alt="" />

                        <p>connect@soland.live </p>
                    </div>
                    <div className="blog">
                        <h4>Blog</h4>

                    </div>
                    <div className="blog">
                        <h4>Follow us! </h4>
                        <a href="https://www.instagram.com/soland.live/">
                            <img src={insta} width="30px" alt="" />
                        </a>

                        <a href="https://vm.tiktok.com/ZMLabwwQp/">
                            <img src={tiktok} width="30px" alt="" />
                        </a>




                        <a href="https://discord.gg/3rNUnCbW3V">
                            <img src={dscord} width="30px" alt="" />
                        </a>
                        <a href="https://twitter.com/SolandCity">
                            <img src={twitter} width="30px" alt="" />
                        </a>
                        <a href="">

                            <img src={youtube} width="30px" alt="" />

                        </a>
                    </div>
                </div>


                <div className="copyright">
                    <p>Copyright 2022 &copy; </p>
                </div>
            </div>

        </>
    )
}

export default Spanish