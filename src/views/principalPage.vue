<template>
    <div class="bg container-fluid  ">

        <div class="row ">

            <div class="col-md-6 " >


            </div>
            <div class="col-md-6 ">

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

        /* Full height */
        height: 100%;
        width: 100%;
        /* Center and scale the image nicely */
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }


</style>