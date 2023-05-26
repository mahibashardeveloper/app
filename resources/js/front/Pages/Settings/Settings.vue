<template>
    <div class="col-md-8 p-4">

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
        </div>

        <div class="bg-white rounded border-3 border border-primary p-4">
            <div class="row pe-md-4">
                <div class="col-md-3 p-3">
                    <a class="nav-link p-2 bg-info bg-opacity-25" href="">Site Information</a>
                    <a class="nav-link p-2" href="">Visitor Types</a>
                    <a class="nav-link p-2" href="">Branding</a>
                    <a class="nav-link p-2" href="">Auto-Expiry</a>
                    <a class="nav-link p-2" href="">Check in Requirements</a>
                    <a class="nav-link p-2" href="">Notifications</a>
                    <a class="nav-link p-2" href="">Pricing</a>
                    <a class="nav-link p-2" href="">Information</a>
                </div>
                <div class="col-md-6 p-3">
                    <div class="h4">Location</div>
                    <form action="" method="post" class="py-3">
                        <div class="mb-3">
                            <label for="" class="form-label">Company Name</label>
                            <input type="text" name="" placeholder="Name" class="form-control shadow-none">
                        </div>
                        <div class="mb-3">
                            <input type="text" name="" placeholder="Address" class="form-control shadow-none">
                        </div>
                    </form>
                </div>
                <div class="col-md-3">
                    <iframe width="300" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=300&amp;height=500&amp;hl=en&amp;q=jessore%20+(bangladesh)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
            </div>
        </div>
    </div>
</template>
