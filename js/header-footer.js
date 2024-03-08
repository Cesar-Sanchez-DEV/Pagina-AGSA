const header = document.getElementById('header');
const footer = document.getElementById('footer');

const newHeader = `
    <nav class="nav container">
        <div class="logo">
            <img src="img/Home/Logotipo1.png" alt="">
        </div>
        <div class="navbar">
            <ul>
                <li><a href ="#">INICIO</a></li>
                <li><a href ="#">PRODUCTOS</a></li>
                <li><a href ="#">NOSOTROS</a></li>
                <li><a href ="#">SERVICIOS</a></li>
                <li><a href ="#">BLOG</a></li>
            </ul>
        </div>
        <div class="btnContact">
            <a href="">CONTÁCTENOS</a>
        </div>
    </nav>
`;
const newFooter = `
    <div class="footer container">
        <section class="desciptionEmpresa">
            <img src="img/Home/Logotipo2.png" alt="">
            <p>Somos una empresa experta que contribuye en el crecimiento de los emprendedores del sector HORECA y comercial a través de la comercialización y asesoramiento de equipamiento gastronómico</p>
            <div class="iconosRedes">
                <ul>
                    <li><a href=""><i class="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
                </ul>
            </div>
        </section>
        <section class="contacto">
            <h3>Contacto</h3>
            <div class="contentContacto">
                <ul>
                    <li><i class="fa-brands fa-whatsapp"></i><p>Mándame un mensaje <br> <a href="">+51 960 638 359</a></p></li>
                    <li><i class="fa-regular fa-envelope"></i><p>Escríbenos al <br> <a href="">ventas@agsaequipment.pe</a></p></li>
                    <li><i class="fa-solid fa-location-dot"></i><p>Ven visitanos <br> <a href="">Ver mapa</a></p></li>
                </ul>    
            </div>
        </section>
        <section class="proyectos">
            <h3>Proyectos</h3>
            <div class="contentProyectos">
                <ul>
                    <li><i class="fa-solid fa-circle"></i><p>Chiclayo</p></li>
                    <li><i class="fa-solid fa-circle"></i><p>La Molina</p></li>
                    <li><i class="fa-solid fa-circle"></i><p>Salamanca</p></li>
                    <li><i class="fa-solid fa-circle"></i><p>San Miguel</p></li>
                    <li><i class="fa-solid fa-circle"></i><p>San Isidro</p></li>
                    <li><i class="fa-solid fa-circle"></i><p>Miraflores</p></li>
                </ul>
            </div>
        </section>
        <section class="productos">
            <h3>Productos</h3>
            <div class="contentProductos">
                <ul>
                    <li><i class="fa-solid fa-circle"></i><p>Refrigeración <br>Comercial</p></li>
                    <li><i class="fa-solid fa-circle"></i><p>Equipamientos <br>de Minimarkets</p></li>
                    <li><i class="fa-solid fa-circle"></i><p>Maquinaria para <br>pasteleria y <br> panaderia</p></li>
                    <li><i class="fa-solid fa-circle"></i><p>Equipamiento <br> Gatronómico</p></li>
                </ul>
            </div>
        </section>
    </div>
`;

header.insertAdjacentHTML('afterbegin', newHeader);
footer.insertAdjacentHTML('afterbegin', newFooter)