<template>
    <div class="bg container-fluid ">

    <div class="row ">
        <div class="col-md-3 ">
            <button type="button" class="btn btn-success " data-toggle="modal" data-target="#registerModal">Registrarse</button>
            <div id="registerModal" class="modal fade" role="dialog">
                <div class="modal-dialog">


                    <div class="modal-content">
                        <div class="modal-header" style="background-color: #BEDB66">
                            <h5 class="modal-title text-center" style="color:black">REGISTRO</h5>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>

                        </div>
                        <div class="modal-body" style="background-color: #BEDB66">
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
                        <div class="modal-footer" style="background-color: #BEDB66">
                            <button type="button submit" class="btn btn-success" >Registrarse</button>
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
                        <div class="modal-header" style="background-color: #BEDB66">
                            <h5 class="modal-title text-center" style="color:black">INICIO SESIÓN</h5>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>

                        </div>
                        <div class="modal-body" style="background-color: #BEDB66">
                            <form class=" rounded form-inline" @submit="logIn">

                                <div class="form-group col-12">
                                    <label class="custom-label col-md-3" for="username">Correo Electronico</label>
                                    <input id="emailL" class="form-control col-12 col-sm-10 col-md-7 offset-sm-1" type="text"
                                           placeholder="Correo" v-model="emailL" required/>
                                </div>

                                <div class="form-group col-12">
                                    <label class="custom-label col-md-3 display" for="password">Contrase&ntilde;a</label>
                                    <input id="passwordL" class="form-control col-12 col-sm-10 col-md-7 offset-sm-1" type="password"
                                           placeholder="Contraseña" v-model="passwordL" required/>
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
                        <div class="modal-footer" style="background-color: #BEDB66">
                            <button type="button submit" class="btn btn-success" >Iniciar Sesión</button>
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
        name: "initPage",
        data( ){
            return{
                names: '',
                surnames: '',
                username: '',
                email: '',
                password: '',
                cPassword: '',
                response: null,
                emailL: '',
                passwordL: ''
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
            signUp( event ){
                if( this.password !== this.cPassword ){
                    event.preventDefault( );
                    return;
                }
                axios
                    .post( this.$store.state.backURL + path + this.role,
                        {
                            names: this.names.trim( ),
                            surnames: this.surnames.trim( ),
                            username: this.username.trim( ),
                            email: this.email.trim(),
                            password: this.password
                        }
                    ).then( response => {
                    if( response.status !== 201 ){
                        alert( "Error en el almacenamiento del usuario" )
                    }else{
                        alert( "Usuario registrado correctamente" )
                    }
                }).catch( error =>{
                    if( error.response.status === 400 ){
                        alert( "Parece que ya existe un usuario con el nombre de usuario \"" + this.username + "\"" );
                    }else{
                        alert( "Error en la aplicación" );
                    }
                    console.log( error );
                });
                event.preventDefault( );
                return true;
            },

            logIn( event ){

                axios
                    .get( this.$store.state.backURL + path + this.role,
                        {

                            emailL: this.emailL.trim(),
                            passwordL: this.passwordL
                        }
                    ).then( response => {
                    if( response.status !== 201 ){
                        alert( "Error en el inicio de sesión" )
                    }else{
                        alert( "Inicio de Sesión Exitoso" )
                    }
                }).catch( error =>{
                    if( error.response.status === 400 ){
                        alert( "Parece que el ususario y/o contraseña son incorrectos \"" + this.username + "\"" );
                    }else{
                        alert( "Error en la aplicación" );
                    }
                    console.log( error );
                });
                event.preventDefault( );
                return true;
            }
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

</style>