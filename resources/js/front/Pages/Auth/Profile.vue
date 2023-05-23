<template>
    <div>
        <div class="navbar navbar-expand bg-white">
            <div class="container-fluid">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link logo" href="">
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

        <div class="container my-4">
            <div class="row">
                <div class="col-md-6 mb-3">
                    <form action="" method="post">
                        <div class="position-relative">
                            <input type="search" name="" class="form-control shadow-none ps-5" placeholder="Search Here">
                            <div class="position-absolute position-absolute top-50 start-0 ps-1 translate-middle-y">
                                <button type="submit" name="" class="btn btn-link text-decoration-none text-secondary">
                                    <i class="bi bi-search"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-md-6 mb-3 d-flex justify-content-md-end">
                    <a href="" class="btn btn-dark">Check In</a>
                </div>
            </div>
        </div>

            <div class="container-fluid mb-3 d-lg-none d-block">
                <a class="btn btn-light shadow rounded-0 w-100" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                    menu
                </a>
                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Redishketch</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <div>
                            <div class="p-3">
                                <a class="nav-link" href="">
                                    <i class="bi bi-graph-up"></i>
                                    Overview
                                </a>
                            </div>
                            <div class="p-3">
                                <a class="nav-link" href="">
                                    <i class="bi bi-calendar2-event"></i>
                                    Invitations
                                </a>
                            </div>
                            <div class="p-3">
                                <a class="nav-link" href="">
                                    <i class="bi bi-gear"></i>
                                    Settings
                                </a>
                            </div>
                            <div class="p-3">
                                <a class="nav-link" href="">
                                    <i class="bi bi-printer"></i>
                                    Departments
                                </a>
                            </div>
                            <div class="p-3">
                                <a class="nav-link" href="">
                                    <i class="bi bi-person"></i>
                                    Hosts
                                </a>
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
                </div>
            </div>

        <div class="container-fluid">
            <div class="row">
                <div class="col-md-2 d-lg-block d-none">
                    <div class="bg-white h-100 p-3">
                    <div class="p-3">
                        <a class="nav-link" href="">
                            <i class="bi bi-graph-up"></i>
                            Overview
                        </a>
                    </div>
                    <div class="p-3">
                        <a class="nav-link" href="">
                            <i class="bi bi-calendar2-event"></i>
                            Invitations
                        </a>
                    </div>
                    <div class="p-3">
                        <a class="nav-link" href="">
                            <i class="bi bi-gear"></i>
                            Settings
                        </a>
                    </div>
                    <div class="p-3">
                        <a class="nav-link" href="">
                            <i class="bi bi-printer"></i>
                            Departments
                        </a>
                    </div>
                    <div class="p-3">
                        <a class="nav-link" href="">
                            <i class="bi bi-person"></i>
                            Hosts
                        </a>
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
                <div class="col-md-5 bg-white rounded-3">
                    <div class="px-3">
                        <div class="row align-items-center py-3">
                            <div class="col-8 h3">Checked in Overview</div>
                            <div class="col-4">
                                <a class="btn bg-danger bg-opacity-25 text-danger px-md-5 border-0" href="">Broadcast</a>
                            </div>
                        </div>
                        <table class="table table-borderless">
                            <thead>
                            <tr class="row">
                                <th class="col-3"> Name </th>
                                <th class="col-3"> Type </th>
                                <th class="col-3"> Visiting </th>
                                <th class="col-3"> Check in Time </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr class="row align-items-center mb-3">
                                <td class="col-3 d-flex align-items-center">
                                    <img :src="`${core.filepath}images/cus-1.jpeg`" class="img-fluid customer-image me-2" alt="">
                                    John Smith
                                </td>
                                <td class="col-3">
                                <span class="badge p-2 px-4 border border-primary bg-primary-subtle text-primary">
                                    Visitor
                                </span>
                                </td>
                                <td class="col-3">
                                <span class="text-secondary text-opacity-50">
                                    Sam Khalif
                                </span>
                                </td>
                                <td class="col-3">
                                    10:30 AM
                                </td>
                            </tr>
                            <tr class="row align-items-center mb-3">
                                <td class="col-3 d-flex align-items-center">
                                    <img :src="`${core.filepath}images/cus-2.jpg`" class="img-fluid customer-image me-2" alt="">
                                    John Smith
                                </td>
                                <td class="col-3">
                                <span class="badge p-2 px-4 border border-primary bg-primary-subtle text-primary">
                                    Visitor
                                </span>
                                </td>
                                <td class="col-3">
                                <span class="text-secondary text-opacity-50">
                                    Sam Khalif
                                </span>
                                </td>
                                <td class="col-3">
                                    10:30 AM
                                </td>
                            </tr>
                            <tr class="row align-items-center mb-3">
                                <td class="col-3 d-flex align-items-center">
                                    <img :src="`${core.filepath}images/cus-3.png`" class="img-fluid customer-image me-2" alt="">
                                    John Smith
                                </td>
                                <td class="col-3">
                                <span class="badge p-2 px-4 border border-danger bg-danger-subtle text-danger">
                                    Constractor
                                </span>
                                </td>
                                <td class="col-3">
                                <span class="text-secondary text-opacity-50">
                                    Sam Khalif
                                </span>
                                </td>
                                <td class="col-3">
                                    10:30 AM
                                </td>
                            </tr>
                            <tr class="row align-items-center mb-3">
                                <td class="col-3 d-flex align-items-center">
                                    <img :src="`${core.filepath}images/cus-4.jpg`" class="img-fluid customer-image me-2" alt="">
                                    John Smith
                                </td>
                                <td class="col-3">
                                <span class="badge p-2 px-4 border border-primary bg-primary-subtle text-primary">
                                    Visitor
                                </span>
                                </td>
                                <td class="col-3">
                                <span class="text-secondary text-opacity-50">
                                    Sam Khalif
                                </span>
                                </td>
                                <td class="col-3">
                                    10:30 AM
                                </td>
                            </tr>
                            <tr class="row align-items-center mb-3">
                                <td class="col-3 d-flex align-items-center">
                                    <img :src="`${core.filepath}images/cus-5.png`" class="img-fluid customer-image me-2" alt="">
                                    John Smith
                                </td>
                                <td class="col-3">
                                <span class="badge p-2 px-4 border border-primary bg-primary-subtle text-primary">
                                    Visitor
                                </span>
                                </td>
                                <td class="col-3">
                                <span class="text-secondary text-opacity-50">
                                    Sam Khalif
                                </span>
                                </td>
                                <td class="col-3">
                                    10:30 AM
                                </td>
                            </tr>
                            <tr class="row align-items-center mb-3">
                                <td class="col-3 d-flex align-items-center">
                                    <img :src="`${core.filepath}images/cus-6.jpg`" class="img-fluid customer-image me-2" alt="">
                                    John Smith
                                </td>
                                <td class="col-3">
                                <span class="badge p-2 px-4 border border-primary bg-primary-subtle text-primary">
                                    Visitor
                                </span>
                                </td>
                                <td class="col-3">
                                <span class="text-secondary text-opacity-50">
                                    Sam Khalif
                                </span>
                                </td>
                                <td class="col-3">
                                    10:30 AM
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="col-md-5">

                    <div class="h3 fw-bold py-3">Today's Overview</div>
                    <div class="row row-cols-md-3 row-cols-2">
                        <div class="p-3">
                            <div class="rounded-4 bg-white p-3">
                                <div class="h4 pb-5">13</div>

                                <div class="pt-3 text-secondary text-opacity-50">Visitors Onsite</div>
                            </div>
                        </div>
                        <div class="p-3">
                            <div class="rounded-4 bg-white p-3">
                                <div class="h4 pb-5">7</div>

                                <div class="pt-3 text-secondary text-opacity-50">Constractor Onsite</div>
                            </div>
                        </div>
                        <div class="p-3">
                            <div class="rounded-4 bg-white p-3">
                                <div class="h4 pb-5">2</div>

                                <div class="pt-3 text-secondary text-opacity-50">Constractor Onsite</div>
                            </div>
                        </div>
                    </div>

                    <div class="p-3">

                        <div class="d-flex align-items-center">
                            <div class="col-10">
                                <div class="progress bg-white shadow-sm" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar bg-info" style="width: 60%"></div>
                                </div>
                            </div>
                            <div class="col-2 text-end">
                                <span class="text-secondary text-opacity-50"> 60% </span>
                            </div>
                        </div>
                        <div class="p-3 text-secondary text-opacity-50">
                            visitors
                        </div>

                        <div class="d-flex align-items-center">
                            <div class="col-10">
                                <div class="progress bg-white shadow-sm" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar bg-warning" style="width: 30%"></div>
                                </div>
                            </div>
                            <div class="col-2 text-end">
                                <span class="text-secondary text-opacity-50"> 30% </span>
                            </div>
                        </div>

                        <div class="p-3">
                            Constractors
                        </div>

                        <div class="d-flex align-items-center">
                            <div class="col-10">
                                <div class="progress bg-white shadow-sm" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar bg-success" style="width: 10%"></div>
                                </div>
                            </div>
                            <div class="col-2 text-end">
                                <span class="text-secondary text-opacity-50"> 10% </span>
                            </div>
                        </div>

                        <div class="p-3">
                            Deliveries
                        </div>

                    </div>

                        <div class="row row-cols-md-2 row-cols-1">

                            <div class="p-3">
                                <div class="p-3 bg-white rounded-3">
                                    <div class="pb-3">
                                        <div class="h5">Checkout</div>
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <img :src="`${core.filepath}images/cus-1.jpeg`" class="img-fluid customer-image border-3 border-white border" alt="">
                                        <img :src="`${core.filepath}images/cus-2.jpg`" class="img-fluid customer-image border-3 border-white border" alt="">
                                        <img :src="`${core.filepath}images/cus-3.png`" class="img-fluid customer-image border-3 border-white border" alt="">
                                        <img :src="`${core.filepath}images/cus-4.jpg`" class="img-fluid customer-image border-3 border-white border" alt="">
                                        <img :src="`${core.filepath}images/cus-5.png`" class="img-fluid customer-image border-3 border-white border" alt="">
                                    </div>
                                    <div class="pt-4">
                                        <a href="" class="text-decoration-none text-secondary text-opacity-50">View All</a>
                                    </div>
                                </div>
                            </div>

                            <div class="p-3">
                                <div class="p-3 bg-white rounded-3">
                                    <div class="pb-3">
                                        <div class="h5">Upcoming Visitation</div>
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <img :src="`${core.filepath}images/cus-1.jpeg`" class="img-fluid customer-image border-3 border-white border" alt="">
                                        <img :src="`${core.filepath}images/cus-2.jpg`" class="img-fluid customer-image border-3 border-white border" alt="">
                                        <img :src="`${core.filepath}images/cus-3.png`" class="img-fluid customer-image border-3 border-white border" alt="">
                                        <img :src="`${core.filepath}images/cus-4.jpg`" class="img-fluid customer-image border-3 border-white border" alt="">
                                        <img :src="`${core.filepath}images/cus-5.png`" class="img-fluid customer-image border-3 border-white border" alt="">
                                    </div>
                                    <div class="pt-4">
                                        <a href="" class="text-decoration-none text-secondary text-opacity-50">View All</a>
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
export default {
    data(){

        return{
            core: window.core,
        }

    }
}
</script>
