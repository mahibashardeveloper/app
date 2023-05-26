<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6 vh-100 bg-white">

                </div>
                <div class="col-md-6">

                    <div class="row justify-content-center align-items-center  bg-cyan vh-100">

                        <div class="col-md-6 m-3">
                        <div class="h3 mb-5 text-center">
                            Sign In
                        </div>
                        <form action="" method="post">
                            <div class="mb-3">
                                <input id="email_address" type="text" class="form-control" placeholder="Email Address" required>
                            </div>
                            <div class="mb-3">
                                <input id="password" type="password" class="form-control" placeholder="password" required>
                            </div>
                            <div class="mb-3">
                                <label for="checkbox" class="form-check-label text-secondary">
                                    <input id="checkbox" type="checkbox" class="form-check-input"> Remember Me
                                </label>
                            </div>
                            <div class="mb-3">
                                <button type="submit" name="" class="btn btn-dark w-100">Sign In</button>
                            </div>
                        </form>
                        <div class="mb-3">
                            <p class="text-center text-secondary">Not a member? <router-link :to="{name:'Register'}" class="text-dark">Create New Account</router-link> </p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
