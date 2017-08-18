<template>
    <div >
        <div id="particles-js">
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    <div class="panel panel-default">
                        <div class="panel-heading">Login</div>
                        <div class="panel-body">
                            <form class="form-horizontal" method="POST" action="">
                                <!--{{ csrf_field() }}-->

                                <div class="form-group">
                                    <label for="email" class="col-md-4 control-label">E-Mail Address</label>

                                    <div class="col-md-6">
                                        <input id="email" type="email" class="form-control" name="email" value="" required autofocus>

                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="password" class="col-md-4 control-label">Password</label>

                                    <div class="col-md-6">
                                        <input id="password" type="password" class="form-control" name="password" required>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="col-md-6 col-md-offset-4">
                                        <div class="checkbox">
                                            <label>
                                                <!--<input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}> Remember Me-->
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="col-md-8 col-md-offset-4">
                                        <button type="submit" class="btn btn-primary">
                                            Login
                                        </button>

                                        <a class="btn btn-link" href="">
                                            Forgot Your Password?
                                        </a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    created(){
      particlesJS.load('particles-js', 'static/js/particlesjs-config.json', function() {
        console.log('callback - particles.js config loaded');
      });
    }
  }
</script>

<style scoped>
    /* ---- reset ---- */

    body {
        margin: 0;
        font:normal 75% Arial, Helvetica, sans-serif;
    }

    canvas {
        display: block;
        vertical-align: bottom;
    }

    /* ---- particles.js container ---- */

    #particles-js {
        position: absolute;
        /*position: absolute;*/
        /*left: 30px;*/
        /*top: 20px;*/
        width: 100%;
        height: 100%;
        background-color: #ffffff;
        background-image: url("");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50% 50%;
    }

    /* ---- stats.js ---- */

    .count-particles{
        background: #000022;
        position: absolute;
        top: 48px;
        left: 0;
        width: 80px;
        color: #13E8E9;
        font-size: .8em;
        text-align: left;
        text-indent: 4px;
        line-height: 14px;
        padding-bottom: 2px;
        font-family: Helvetica, Arial, sans-serif;
        font-weight: bold;
    }

    .js-count-particles{
        font-size: 1.1em;
    }

    #stats,
    .count-particles{
        -webkit-user-select: none;
    }

    #stats{
        border-radius: 3px 3px 0 0;
        overflow: hidden;
    }

    .count-particles{
        border-radius: 0 0 3px 3px;
    }
</style>