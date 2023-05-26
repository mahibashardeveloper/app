<template>
    <div class="col-md-8 bg-white p-3 rounded">
        <div class="table-responsive">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th class="text-capitalize min-130px">Name</th>
                        <th class="text-capitalize min-130px">Department</th>
                        <th class="text-capitalize min-130px">Email</th>
                        <th class="text-capitalize min-130px">Mobile</th>
                        <th class="text-capitalize min-130px"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="text-capitalize min-130px">
                            <img :src="`${core.filepath}images/cus-1.jpeg`" class="img-fluid customer-image me-2" alt="">
                            John Smith
                        </td>
                        <td class="text-capitalize min-130px">
                            Accounting
                        </td>
                        <td class="text-capitalize min-130px">
                            johnsmith@gmail.com
                        </td>
                        <td class="text-capitalize min-130px">
                            0123123124234
                        </td>
                        <td class="text-capitalize min-130px">
                            <div class="d-flex justify-content-end">
                                <button type="button" class="btn bg-success bg-opacity-25 text-success">Active</button>
                                <button type="button" class="btn btn-link text-decoration-none text-secondary">
                                    <i class="bi bi-three-dots-vertical"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-capitalize min-130px">
                            <img :src="`${core.filepath}images/cus-2.jpg`" class="img-fluid customer-image me-2" alt="">
                            John Smith
                        </td>
                        <td class="text-capitalize min-130px">
                            Finance
                        </td>
                        <td class="text-capitalize min-130px">
                            johnsmith@gmail.com
                        </td>
                        <td class="text-capitalize min-130px">
                            0123123124234
                        </td>
                        <td class="text-capitalize min-130px">
                            <div class="d-flex justify-content-end">
                                <button type="button" class="btn bg-success bg-opacity-25 text-success">Active</button>
                                <button type="button" class="btn btn-link text-decoration-none text-secondary">
                                    <i class="bi bi-three-dots-vertical"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-capitalize min-130px">
                            <img :src="`${core.filepath}images/cus-3.png`" class="img-fluid customer-image me-2" alt="">
                            John Smith
                        </td>
                        <td class="text-capitalize min-130px">
                            Marketing
                        </td>
                        <td class="text-capitalize min-130px">
                            johnsmith@gmail.com
                        </td>
                        <td class="text-capitalize min-130px">
                            0123123124234
                        </td>
                        <td class="text-capitalize min-130px">
                            <div class="d-flex justify-content-end">
                                <button type="button" class="btn bg-success bg-opacity-25 text-success">Active</button>
                                <button type="button" class="btn btn-link text-decoration-none text-secondary">
                                    <i class="bi bi-three-dots-vertical"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-capitalize min-130px">
                            <img :src="`${core.filepath}images/cus-4.jpg`" class="img-fluid customer-image me-2" alt="">
                            John Smith
                        </td>
                        <td class="text-capitalize min-130px">
                            Management
                        </td>
                        <td class="text-capitalize min-130px">
                            johnsmith@gmail.com
                        </td>
                        <td class="text-capitalize min-130px">
                            0123123124234
                        </td>
                        <td class="text-capitalize min-130px">
                            <div class="d-flex justify-content-end">
                                <button type="button" class="btn btn-link text-primary">Resent Invitation</button>
                                <button type="button" class="btn bg-warning bg-opacity-25 text-warning">Pending</button>
                                <button type="button" class="btn btn-link text-decoration-none text-secondary">
                                    <i class="bi bi-three-dots-vertical"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>

    export default {

        data(){

            return {

                core: window.core,

            }

        }

    }

</script>
