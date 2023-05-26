<template>
    <div class="col-md-8 rounded bg-white p-4">
        <div class="row">
            <div class="col-3">
                <div class="h3">Invitations</div>
            </div>
            <div class="col-9 text-end">
                <button type="button" class="btn bg-success bg-opacity-25 text-success mx-2">
                    Today
                </button>
                <button type="button" class="btn bg-secondary bg-opacity-25 text-secondary mx-2">
                    Tomorrow
                </button>
                <button type="button" class="btn bg-secondary bg-opacity-25 text-secondary mx-2">
                    Next 7 Days
                </button>
                <button type="button" class="btn bg-secondary bg-opacity-25 text-secondary mx-2">
                    Till End of Month
                </button>
                <button type="button" class="btn bg-secondary bg-opacity-25 text-secondary mx-2">
                    All
                </button>
            </div>
        </div>
        <div class="table-responsive">
            <table class="table table-borderless table-hover">
                <thead>
                    <tr>
                        <th class="text-capitalize min-130px">Name</th>
                        <th class="text-capitalize min-130px">Company</th>
                        <th class="text-capitalize min-130px">Type</th>
                        <th class="text-capitalize min-130px">Visiting</th>
                        <th class="text-capitalize min-130px">Schedule Start</th>
                        <th class="text-capitalize min-130px">Schedule End</th>
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
                            Wishlit Group
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
                        <td class="text-capitalize">
                            10:30 AM
                        </td>
                        <td class="text-capitalize">

                        </td>
                    </tr>
                    <tr>
                        <td class="text-capitalize min-130px">
                            <img :src="`${core.filepath}images/cus-2.jpg`" class="img-fluid customer-image me-2" alt="">
                            John Smith
                        </td>
                        <td class="text-capitalize min-130px">
                            Wishlit Group
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
                        <td class="text-capitalize">
                            10:30 AM
                        </td>
                        <td class="text-capitalize">
                            <div class="d-flex justify-content-end">
                                <button type="button" class="btn bg-warning bg-opacity-25 text-warning">
                                    Pending
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
                            Wishlit Group
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
                        <td class="text-capitalize">
                            10:30 AM
                        </td>
                        <td class="text-capitalize">

                        </td>
                    </tr>
                    <tr>
                        <td class="text-capitalize min-130px">
                            <img :src="`${core.filepath}images/cus-4.jpg`" class="img-fluid customer-image me-2" alt="">
                            John Smith
                        </td>
                        <td class="text-capitalize min-130px">
                            Wishlit Group
                        </td>
                        <td class="text-capitalize min-130px">
                            <span class="badge p-2 px-4 border border-danger bg-danger-subtle text-danger">
                                Constructor
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
                        <td class="text-capitalize">
                            10:30 AM
                        </td>
                        <td class="text-capitalize">
                            <div class="d-flex justify-content-end">
                                <button type="button" class="btn bg-warning bg-opacity-25 text-warning">
                                    Pending
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-capitalize min-130px">
                            <img :src="`${core.filepath}images/cus-5.png`" class="img-fluid customer-image me-2" alt="">
                            John Smith
                        </td>
                        <td class="text-capitalize min-130px">
                            Wishlit Group
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
                        <td class="text-capitalize">
                            10:30 AM
                        </td>
                        <td class="text-capitalize">
                            <div class="d-flex justify-content-end">
                                <button type="button" class="btn bg-warning bg-opacity-25 text-warning">
                                    Pending
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-capitalize min-130px">
                            <img :src="`${core.filepath}images/cus-1.jpeg`" class="img-fluid customer-image me-2" alt="">
                            John Smith
                        </td>
                        <td class="text-capitalize min-130px">
                            Wishlit Group
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
                        <td class="text-capitalize">
                            10:30 AM
                        </td>
                        <td class="text-capitalize">

                        </td>
                    </tr>
                    <tr>
                        <td class="text-capitalize min-130px">
                            <img :src="`${core.filepath}images/cus-2.jpg`" class="img-fluid customer-image me-2" alt="">
                            John Smith
                        </td>
                        <td class="text-capitalize min-130px">
                            Wishlit Group
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
                        <td class="text-capitalize">
                            10:30 AM
                        </td>
                        <td class="text-capitalize">

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

        return{

            core: window.core,

        }

    }

}

</script>
