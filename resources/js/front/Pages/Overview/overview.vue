<template>
    <div class="col-md-10 p-4">
        <div class="pe-md-5">
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

            <div class="row">
                <div class="col-md-6 bg-white rounded-3">
                <div class="px-3">
                    <div class="row align-items-center py-3">
                        <div class="col-8">
                            <div class="h4">
                                Checked in Overview
                            </div>
                        </div>
                        <div class="col-4">
                            <a class="btn bg-danger bg-opacity-25 text-danger px-md-5 border-0" href="">Broadcast</a>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table class="w-100 table table-borderless table-hover">
                            <thead>
                            <tr>
                                <th class="text-capitalize min-130px"> Name </th>
                                <th class="text-capitalize min-130px"> Type </th>
                                <th class="text-capitalize min-130px"> Visiting </th>
                                <th class="text-capitalize min-130px"> Check in Time </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td class="text-capitalize min-130px">
                                    <img :src="`${core.filepath}images/cus-1.jpeg`" class="img-fluid customer-image me-2" alt="">
                                    John Smith
                                </td>
                                <td class="text-capitalize min-130px">
                                <span class="badge p-2 px-4 border border-primary bg-primary-subtle text-primary">
                                    Visitor
                                </span>
                                </td>
                                <td class="text-capitalize min-130px">
                                <span class="text-secondary text-opacity-50">
                                    Sam Khalif
                                </span>
                                </td>
                                <td class="text-capitalize min-130px">
                                    10:30 AM
                                </td>
                            </tr>
                            <tr>
                                <td class="text-capitalize min-130px">
                                    <img :src="`${core.filepath}images/cus-2.jpg`" class="img-fluid customer-image me-2" alt="">
                                    John Smith
                                </td>
                                <td class="text-capitalize min-130px">
                                <span class="badge p-2 px-4 border border-primary bg-primary-subtle text-primary">
                                    Visitor
                                </span>
                                </td>
                                <td class="text-capitalize min-130px">
                                <span class="text-secondary text-opacity-50">
                                    Sam Khalif
                                </span>
                                </td>
                                <td class="text-capitalize min-130px">
                                    10:30 AM
                                </td>
                            </tr>
                            <tr>
                                <td class="text-capitalize min-130px">
                                    <img :src="`${core.filepath}images/cus-3.png`" class="img-fluid customer-image me-2" alt="">
                                    John Smith
                                </td>
                                <td class="text-capitalize min-130px">
                                <span class="badge p-2 px-4 border border-danger bg-danger-subtle text-danger">
                                    Constractor
                                </span>
                                </td>
                                <td class="text-capitalize min-130px">
                                <span class="text-secondary text-opacity-50">
                                    Sam Khalif
                                </span>
                                </td>
                                <td class="text-capitalize min-130px">
                                    10:30 AM
                                </td>
                            </tr>
                            <tr>
                                <td class="text-capitalize min-130px">
                                    <img :src="`${core.filepath}images/cus-4.jpg`" class="img-fluid customer-image me-2" alt="">
                                    John Smith
                                </td>
                                <td class="text-capitalize min-130px">
                                <span class="badge p-2 px-4 border border-primary bg-primary-subtle text-primary">
                                    Visitor
                                </span>
                                </td>
                                <td class="text-capitalize min-130px">
                                <span class="text-secondary text-opacity-50">
                                    Sam Khalif
                                </span>
                                </td>
                                <td class="text-capitalize min-130px">
                                    10:30 AM
                                </td>
                            </tr>
                            <tr>
                                <td class="text-capitalize min-130px">
                                    <img :src="`${core.filepath}images/cus-5.png`" class="img-fluid customer-image me-2" alt="">
                                    John Smith
                                </td>
                                <td class="text-capitalize min-130px">
                                <span class="badge p-2 px-4 border border-primary bg-primary-subtle text-primary">
                                    Visitor
                                </span>
                                </td>
                                <td class="text-capitalize min-130px">
                                <span class="text-secondary text-opacity-50">
                                    Sam Khalif
                                </span>
                                </td>
                                <td class="text-capitalize min-130px">
                                    10:30 AM
                                </td>
                            </tr>
                            <tr>
                                <td class="text-capitalize min-130px">
                                    <img :src="`${core.filepath}images/cus-6.jpg`" class="img-fluid customer-image me-2" alt="">
                                    John Smith
                                </td>
                                <td class="text-capitalize min-130px">
                                <span class="badge p-2 px-4 border border-primary bg-primary-subtle text-primary">
                                    Visitor
                                </span>
                                </td>
                                <td class="text-capitalize min-130px">
                                <span class="text-secondary text-opacity-50">
                                    Sam Khalif
                                </span>
                                </td>
                                <td class="text-capitalize min-130px">
                                    10:30 AM
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
                <div class="col-md-6">
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
