<template>
    <div class="bg container-fluid  ">

        <div class="row ">


            <div class="col-md-12 ">
                <div class="sidebar-container">
                    <div class="sidebar-logo">

                    </div>
                    <ul class="sidebar-navigation">

                        <li>
                            <a href="#plans" data-toggle="tab">
                                <i class="icon-plans" ></i> Mis Planes
                            </a>
                        </li>
                        <li>
                            <a href="#profile" data-toggle="tab">
                                <i class="icon-profile" aria-hidden="true"></i> Mi Perfil
                            </a>
                        </li>

                        <li>
                            <a href="#program" data-toggle="tab">
                                <i class="icon-prog" aria-hidden="true"></i> Programación
                            </a>
                        </li>
                        <li>
                            <a href="#friends" data-toggle="tab">
                                <i class="icon-friends" aria-hidden="true"></i> Amigos
                            </a>
                        </li>
                        <li>
                            <a href="#configuration" data-toggle="tab">
                                <i class="icon-config" aria-hidden="true"></i> Configuración
                            </a>
                        </li>
                        <li>
                            <a href="#help" data-toggle="tab">
                                <i class="icon-help" aria-hidden="true"></i> Ayuda
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="container ">
                    <div class="d-flex justify-content-end ">
                        <div class="searchbar">
                            <input class="search_input" type="text" name="" placeholder="Search...">
                            <a href="#" class="search_icon"><i class="fa fa-search"></i></a>
                        </div>
                    </div>
                </div>
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="plans" role="tabpanel" aria-labelledby="nav-home-tab">

                        <div class="content-container">

                            <div class="container-fluid" >

                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="card planCard">
                                            <div class="card-body">
                                                <h5 class="card-title">EL MEJOR PLAN</h5>
                                                <p class="card-text">Pendiente Contenido.</p>
                                                <a href="#" class="btn btn-success">ENTER</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="card planCard">
                                            <div class="card-body">
                                                <h5 class="card-title">NOVENA</h5>
                                                <p class="card-text">Pendiente Contenido.</p>
                                                <a href="#" class="btn btn-success">ENTER</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
                    <div class="tab-pane fade" id="program" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
                    <div class="tab-pane fade" id="friends" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
                    <div class="tab-pane fade" id="configuration" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
                    <div class="tab-pane fade" id="help" role="tabpanel" aria-labelledby="nav-contact-tab">

                        <div class="content-container">

                            <div class="container-fluid" >

                                <!-- Main component for a primary marketing message or call to action -->
                                <div class="jumbotron" style="background-color: #71B64B;">
                                    <h5>PREGUNTAS FRECUENTES</h5>
                                    <div id="accordion">
                                        <div class="card acordStyle">
                                            <div class="card-header" id="headingOne">
                                                <h5 class="mb-0">
                                                    <button class="btn btn-link collapsed acordStyle" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                        <i class="fa fa-caret-right arowHelp" ></i>¿Cómo empiezo a crear un nuevo plan?
                                                    </button>
                                                </h5>
                                            </div>

                                            <div id="collapseOne" class="collapse " aria-labelledby="headingOne" data-parent="#accordion">
                                                <div class="card-body">
                                                    La respuesta esta en tu corazón
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card acordStyle">
                                            <div class="card-header" id="headingTwo">
                                                <h5 class="mb-0">
                                                    <button class="btn btn-link collapsed acordStyle" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                        <i class="fa fa-caret-right arowHelp" ></i>¿Cómo agregar o eliminar a alguien de mi lista de amigos?
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                                <div class="card-body">
                                                    La respuesta esta en tu corazón
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card acordStyle">
                                            <div class="card-header" id="headingThree">
                                                <h5 class="mb-0">
                                                    <button class="btn btn-link collapsed acordStyle" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                        <i class="fa fa-caret-right arowHelp" ></i> No quiero ver notificaciones de un plan ¿Qué hago?
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                                <div class="card-body">
                                                    La respuesta esta en tu corazón
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card acordStyle">
                                            <div class="card-header" id="headingFour">
                                                <h5 class="mb-0">
                                                    <button class="btn btn-link collapsed acordStyle" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                        <i class="fa fa-caret-right arowHelp" ></i>¿Cómo cambio mis preferencias personales?
                                                    </button>
                                                </h5>
                                            </div>

                                            <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                                                <div class="card-body">
                                                    La respuesta esta en tu corazón
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>


    </div>

</template>

<script>
    import axios from 'axios'

    const path = '/mainPage/';

    export default {
        name: "mainPage",
        data( ){
            return{

            }
        },
        beforeCreate( ){
            const rolesPath = '/roles';
            axios
                .get( this.$store.state.backURL + rolesPath )
                .then( response => {
                    if( response.status !== 200 ){
                        alert( "Error en la petición. Intente nuevamente" )
                    }else{
                        this.roles = response.data;
                        console.log( this.roles );
                    }
                }).catch( response => {
                alert( "No es posible conectar con el backend en este momento" );
                console.log( response );
            });
        },
        methods:{

        }
    }
</script>

<style scoped>
    .bg {
        /* The image used */
        background-image: url("../assets/landscapeW.jpg");
        position: fixed;
        /* Full height */
        height: 100%;
        width: 100%;
        /* Center and scale the image nicely */
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        overflow-x: hidden;
        overflow-y: auto;
    }
    .sidebar-container {
        position: fixed;
        width: 220px;
        height: 100%;
        left: 0;
        overflow-x: hidden;
        overflow-y: auto;
        background: #BEDB66;
        color: #111;
    }

    .content-container {
        padding-top: 20px;
    }

    .sidebar-logo {
        padding: 30px 30px 30px 30px;
        font-size: 20px;
        background-color: #BEDB66;
        background-image: url("../assets/profile1.png");
        height: 200px;
        width: 200px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .sidebar-navigation {
        padding: 0;
        margin: 0;
        list-style-type: none;
        position: relative;
    }

    .sidebar-navigation li {
        background-color: transparent;
        position: relative;
        display: inline-block;
        width: 100%;
        line-height: 20px;
    }

    .sidebar-navigation li a {
        padding: 10px 15px 10px 30px;
        display: block;
        color: #111;
    }

    .sidebar-navigation li .fa {
        margin-right: 10px;
    }

    .sidebar-navigation li a:active,
    .sidebar-navigation li a:hover,
    .sidebar-navigation li a:focus {
        text-decoration: none;
        outline: none;
    }

    .sidebar-navigation li::before {
        background-color: #71B64B;
        position: absolute;
        content: '';
        height: 100%;
        left: 0;
        top: 0;
        -webkit-transition: width 0.2s ease-in;
        transition: width 0.2s ease-in;
        width: 3px;
        z-index: -1;
    }

    .sidebar-navigation li:hover::before {
        width: 100%;
    }

    .sidebar-navigation .header {
        font-size: 12px;
        text-transform: uppercase;
        background-color: #BEDB66;
        padding: 10px 15px 10px 30px;
    }

    .sidebar-navigation .header::before {
        background-color: transparent;
    }

    .content-container {
        padding-left: 220px;
    }
    .icon-plans{
        background-image : url(../assets/sketch.png);
        background-size: cover;
        display: inline-block;
        height: 32px;
        width: 32px;
    }
    .icon-profile{
        background-image : url(../assets/user.png);
        background-size: cover;
        display: inline-block;
        height: 32px;
        width: 32px;
    }
    .icon-prog{
        background-image : url(../assets/calendar.png);
        background-size: cover;
        display: inline-block;
        height: 32px;
        width: 32px;
    }
    .icon-friends{
        background-image : url(../assets/friendship.png);
        background-size: cover;
        display: inline-block;
        height: 32px;
        width: 32px;
    }
    .icon-config{
        background-image : url(../assets/settings.png);
        background-size: cover;
        display: inline-block;
        height: 32px;
        width: 32px;
    }
    .icon-help{
        background-image : url(../assets/question.png);
        background-size: cover;
        display: inline-block;
        height: 32px;
        width: 32px;
    }
.acordStyle{
    background-color: transparent;
    border: none;
    color: black;
    text-decoration: none;
    outline: none;

}
    .arowHelp{
        color: #BEDB66;
        height: 150%;

    }
    .planCard{
        background-color: #71B64B;

    }

    .searchbar{
        margin-bottom: auto;
        margin-top: auto;
        height: 60px;
        background-color: white;
        border-radius: 30px;
        padding: 10px;
    }

    .search_input{
        color: black;
        border: 0;
        outline: 0;
        background: none;
        width: 0;
        caret-color:transparent;
        line-height: 40px;
        transition: width 0.4s linear;
    }

    .searchbar:hover > .search_input{
        padding: 0 10px;
        width: 450px;
        caret-color:black;
        transition: width 0.4s linear;
    }

    .searchbar:hover > .search_icon{
        background: #BEDB66;
        color: black;
    }

    .search_icon{
        height: 40px;
        width: 40px;
        float: right;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        color:#BEDB66;
        text-decoration:none;
    }
</style>