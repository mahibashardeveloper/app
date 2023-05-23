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
                            Sign Up
                        </div>
                        <form action="" method="post">
                            <div class="mb-3">
                                <input id="first_name" type="text" name="" class="form-control shadow-none" placeholder="First Name" required>
                            </div>
                            <div class="mb-3">
                                <input id="last_name" type="text" name="" class="form-control shadow-none" placeholder="Last Name" required>
                            </div>
                            <div class="mb-3">
                                <input id="phone_number" type="text" name="" class="form-control shadow-none" placeholder="Phone Number" required>
                            </div>
                            <div class="mb-3">
                                <input id="email_address" type="text" name="" class="form-control shadow-none" placeholder="Email Address" required>
                            </div>
                            <div class="mb-3">
                                <input id="password" type="text" name="" class="form-control shadow-none" placeholder="password" required>
                            </div>
                            <div class="mb-3">
                                <input id="company_name" type="text" name="" class="form-control shadow-none" placeholder="Company Name" required>
                            </div>
                            <div class="mb-3">
                                <button type="submit" name="" class="btn btn-dark w-100">Sign Up</button>
                            </div>
                        </form>
                        <div class="mb-3">
                            <p class="text-align-center text-secondary">Already Have An Account? <router-link :to="{name:'Login'}" class="text-dark">Sign In</router-link> </p>
                        </div>
                    </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
