<template>
    <div class="bg container-fluid  ">

        <div class="row ">
            <div class="col-md-3 ">
                <button type="button" class="btn btn-success " data-toggle="modal" data-target="#registerModal">Registrarse</button>
                <div id="registerModal" class="modal fade" role="dialog">
                    <div class="modal-dialog">


                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #9BE137">
                                <h5 class="modal-title text-center" style="color:black">REGISTRO</h5>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>

                            </div>
                            <div class="modal-body" style="background-color: #9BE137">
                                <form class=" rounded form-inline" @submit="signUp">


                                    <div class="form-group col-12">
                                        <label class="custom-label col-md-3" for="names">Nombres</label>
                                        <input id="names" class="form-control col-12 col-sm-10 col-md-7 offset-sm-1" type="text"
                                               placeholder="Nombres" v-model="names" required/>
                                    </div>

                                    <div class="form-group col-12">
                                        <label class="custom-label col-md-3 display" for="surnames">Apellidos</label>
                                        <input id="surnames" class="form-control col-12 col-sm-10 col-md-7 offset-sm-1" type="text"
                                               placeholder="Apellidos" v-model="surnames" required/>
                                    </div>

                                    <div class="form-group col-12">
                                        <label class="custom-label col-md-3" for="username">Nombre de Usuario</label>
                                        <input id="username" class="form-control col-12 col-sm-10 col-md-7 offset-sm-1" type="text"
                                               placeholder="Nombre de Usuario" v-model="username" required/>
                                    </div>

                                    <div class="form-group col-12">
                                        <label class="custom-label col-md-3" for="username">Correo Electronico</label>
                                        <input id="email" class="form-control col-12 col-sm-10 col-md-7 offset-sm-1" type="text"
                                               placeholder="Correo" v-model="email" required/>
                                    </div>

                                    <div class="form-group col-12">
                                        <label class="custom-label col-md-3 display" for="password">Contrase&ntilde;a</label>
                                        <input id="password" class="form-control col-12 col-sm-10 col-md-7 offset-sm-1" type="password"
                                               placeholder="Contraseña" v-model="password" required/>
                                    </div>

                                    <div class="form-group col-12">
                                        <label class="custom-label col-md-3 display" for="cPassword">Confirmar Contrase&ntilde;a</label>
                                        <input id="cPassword" class="form-control col-12 col-sm-10 col-md-7 offset-sm-1" type="password"
                                               placeholder="Confirmar Contraseña" v-model="cPassword" required
                                               :class="{ 'is-invalid': cPassword !== '' && cPassword !== password,
                                 'is-valid': cPassword !== '' && cPassword === password }"/>
                                    </div>

                                    <div class="col-12 col-sm-6 col-md-5 offset-md-2 text-center mb-3">
                                        <span class="text-primary">
                                          <small>
                                            <a href="#" class="text-decoration-none text-center" style="color:white;">&iquest;Ya tienes cuenta? Inicia Sesi&oacute;n</a>
                                          </small>
                                        </span>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer" style="background-color: #9BE137">
                                <button type="button" class="btn btn-success" data-dismiss="modal">Registrarse</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="col-md-6 " >
                <img class="img-fluid mx-auto d-block" src="../assets/meetUlogo.png" alt="MeetULogo" align="middle" >

                <a href="#" class="text-decoration-none text-center" style="color:white;">¿Necesitas Ayuda?</a>

            </div>
            <div class="col-md-3 ">
                <button type="button" class="btn btn-success mx-auto" data-toggle="modal" data-target="#loginModal">Iniciar Sesión</button>
                <div id="loginModal" class="modal fade" role="dialog">
                    <div class="modal-dialog">


                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #9BE137">
                                <h5 class="modal-title text-center" style="color:black">REGISTRO</h5>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>

                            </div>
                            <div class="modal-body" style="background-color: #9BE137">
                                <form class=" rounded form-inline" @submit="signUp">

                                    <div class="form-group col-12">
                                        <label class="custom-label col-md-3" for="username">Correo Electronico</label>
                                        <input id="emailLogin" class="form-control col-12 col-sm-10 col-md-7 offset-sm-1" type="text"
                                               placeholder="Correo" v-model="email" required/>
                                    </div>

                                    <div class="form-group col-12">
                                        <label class="custom-label col-md-3 display" for="password">Contrase&ntilde;a</label>
                                        <input id="passwordLogin" class="form-control col-12 col-sm-10 col-md-7 offset-sm-1" type="password"
                                               placeholder="Contraseña" v-model="password" required/>
                                    </div>

                                    <div class="col-12 col-sm-6 col-md-5 offset-md-2 text-center mb-3">
                                        <span class="text-primary">
                                          <small>
                                            <a href="#" class="text-decoration-none text-center" style="color:white;">Olvide mi Contraseña</a>
                                          </small>
                                        </span>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer" style="background-color: #9BE137">
                                <button type="button" class="btn btn-success" data-dismiss="modal">Iniciar Sesión</button>
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

    const path = '/init/';
    export default {
        name: "initPage"
    }
</script>

<style scoped>
    .bg {
        /* The image used */
        background-image: url("../assets/landscapeW.jpg");

        /* Full height */
        height: 100%;
        width: 100%;
        /* Center and scale the image nicely */
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }


</style>