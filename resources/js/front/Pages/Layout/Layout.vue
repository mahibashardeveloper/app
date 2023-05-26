<template>
    <div>
        <div class="navbar navbar-expand bg-white">
            <div class="container-fluid">
                <ul class="navbar-nav align-items-center">
                    <a class="text-decoration-none text-dark d-lg-none d-block me-3" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                        <i class="bi bi-justify-left"></i>
                    </a>
                    <li class="nav-item">
                        <a class="nav-link logo" href="javascript:void(0)">
                            Redishketch
                        </a>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <div class="d-flex align-items-center">
                                <img :src="`${core.filepath}images/customer.jpg`" class="img-fluid logo-responsive" alt="">
                                <div class="ms-3">
                                    <div class="fw-bold">Mahi Bashar Akash</div>
                                    <div class="text-secondary">Admin</div>
                                </div>
                            </div>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end p-0 m-0 overflow-hidden">
                            <li>
                                <a class="dropdown-item py-2" href="#">
                                    <div class="d-flex align-items-center">
                                        <i class="bi bi-person-fill fs-3 me-3"></i>
                                        <div>
                                            <div class="fw-bold">Profile</div>
                                            <div class="badge bg-transparent text-secondary p-0 m-0">See Your Profile</div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item py-2" href="#">
                                    <div class="d-flex align-items-center">
                                        <i class="bi bi-person-fill-gear fs-3 me-3"></i>
                                        <div>
                                            <div class="fw-bold">Edit Account</div>
                                            <div class="badge bg-transparent text-secondary p-0 m-0">From Settings</div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item py-2" href="#">
                                    <div class="d-flex align-items-center">
                                        <i class="bi bi-shield-lock-fill fs-3 me-3"></i>
                                        <div>
                                            <div class="fw-bold">Change Password</div>
                                            <div class="badge bg-transparent text-secondary p-0 m-0">From Settings</div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item py-2" href="#">
                                    <div class="d-flex align-items-center">
                                        <i class="bi bi-box-arrow-in-right fs-3 me-3"></i>
                                        <div>
                                            <div class="fw-bold">Logout</div>
                                            <div class="badge bg-transparent text-secondary p-0 m-0">From Your Account</div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>

        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Redishketch</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div>
                    <div class="p-3">
                        <router-link :to="{name:'Overview'}" class="nav-link">
                            <i class="bi bi-graph-up"></i>
                            Overview
                        </router-link>
                    </div>
                    <div class="p-3">
                        <router-link :to="{name:'Invitation'}" class="nav-link">
                            <i class="bi bi-calendar2-event"></i>
                            Invitations
                        </router-link>
                    </div>
                    <div class="p-3">
                        <router-link :to="{name:'Settings'}" class="nav-link" href="">
                            <i class="bi bi-gear"></i>
                            Settings
                        </router-link>
                    </div>
                    <div class="p-3">
                        <router-link :to="{name:'Department'}" class="nav-link">
                            <i class="bi bi-printer"></i>
                            Departments
                        </router-link>
                    </div>
                    <div class="p-3">
                        <router-link :to="{name:'Staff'}" class="nav-link">
                            <i class="bi bi-person"></i>
                            Staff
                        </router-link>
                    </div>
                    <div class="p-3">
                        <a class="nav-link" href="javascript:void(0)">
                            <i class="bi bi-phone-landscape"></i>
                            Kiosk
                        </a>
                    </div>
                    <div class="p-3">
                        <a class="nav-link" href="">
                            <i class="bi bi-credit-card"></i>
                            Account
                        </a>
                    </div>
                    <div class="p-3">
                        <a class="nav-link" href="">
                            <i class="bi bi-person-video"></i>
                            Inductions
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid">
            <div class="row">
                <div class="col-md-2 d-lg-block d-none py-5">
                    <div class="h-100 p-3">
                        <div class="p-3">
                            <router-link :to="{name:'Overview'}" class="nav-link">
                                <i class="bi bi-graph-up"></i>
                                Overview
                            </router-link>
                        </div>
                        <div class="p-3">
                            <router-link :to="{name:'Invitation'}" class="nav-link">
                                <i class="bi bi-calendar2-event"></i>
                                Invitations
                            </router-link>
                        </div>
                        <div class="p-3">
                            <router-link :to="{name:'Settings'}" class="nav-link" href="">
                                <i class="bi bi-gear"></i>
                                Settings
                            </router-link>
                        </div>
                        <div class="p-3">
                            <router-link :to="{name:'Department'}" class="nav-link">
                                <i class="bi bi-printer"></i>
                                Departments
                            </router-link>
                        </div>
                        <div class="p-3">
                            <router-link :to="{name:'Staff'}" class="nav-link">
                                <i class="bi bi-person"></i>
                                Staff
                            </router-link>
                        </div>
                        <div class="p-3">
                            <a class="nav-link" href="">
                                <i class="bi bi-phone-landscape"></i>
                                Kiosk
                            </a>
                        </div>
                        <div class="p-3">
                            <a class="nav-link" href="">
                                <i class="bi bi-credit-card"></i>
                                Account
                            </a>
                        </div>
                        <div class="p-3">
                            <a class="nav-link" href="">
                                <i class="bi bi-person-video"></i>
                                Inductions
                            </a>
                        </div>
                    </div>
                </div>
                <RouterView></RouterView>
            </div>
        </div>
    </div>
</template>
<script>
export default {

    data(){

        return{
            core: window.core,
        }

    }
}

</script>
