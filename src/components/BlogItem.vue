<template>
    <div>
        <div class="blog-item mt-4">
            <div class="blog-item-img">
                <img src="../assets/images/blog-img.jpg" alt="" width="300" height="200">
            </div>
            <div class="blog-item-content">
                <div class="blog-item-info">
                    <h3>Some blog title</h3>
                    <p class="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, magnam. Nemo quasi amet odio reprehenderit soluta consequatur, suscipit quidem dignissimos reiciendis eaque consequuntur quibusdam veritatis culpa doloremque dolorum numquam maiores, possimus aperiam temporibus aliquam quas. Esse in consectetur cum rem officia necessitatibus labore aut quaerat. Tenetur totam error molestiae minus.</p>
                </div>
                <div class="blog-item-action">
                    <button class="btn btn-light-outline mt-5">Show more</button>
                </div>
            </div>
        </div>
        <div class="blog-item mt-4">
            <div class="blog-item-img">
                <img src="../assets/images/blog-img.jpg" alt="" width="300" height="200">
            </div>
            <div class="blog-item-content">
                <div class="blog-item-info">
                    <h3>Some blog title</h3>
                    <p class="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, magnam. Nemo quasi amet odio reprehenderit soluta consequatur, suscipit quidem dignissimos reiciendis eaque consequuntur quibusdam veritatis culpa doloremque dolorum numquam maiores, possimus aperiam temporibus aliquam quas. Esse in consectetur cum rem officia necessitatibus labore aut quaerat. Tenetur totam error molestiae minus.</p>
                </div>
                <div class="blog-item-action">
                    <button class="btn btn-light-outline mt-5">Show more</button>
                </div>
            </div>
        </div>
        <div class="blog-item mt-4">
            <div class="blog-item-img">
                <img src="../assets/images/blog-img.jpg" alt="" width="300" height="200">
            </div>
            <div class="blog-item-content">
                <div class="blog-item-info">
                    <h3>Some blog title</h3>
                    <p class="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, magnam. Nemo quasi amet odio reprehenderit soluta consequatur, suscipit quidem dignissimos reiciendis eaque consequuntur quibusdam veritatis culpa doloremque dolorum numquam maiores, possimus aperiam temporibus aliquam quas. Esse in consectetur cum rem officia necessitatibus labore aut quaerat. Tenetur totam error molestiae minus.</p>
                </div>
                <div class="blog-item-action">
                    <button class="btn btn-light-outline mt-5">Show more</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.blog-item {
    display: flex;
    /* border: 1px solid rgba(0, 0, 0, 0.3); */
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    border-left: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    padding: 20px 0 20px 20px;
    transition: all 0.4s;
}
.blog-item:hover {
    -webkit-box-shadow: 0px 7px 40px -3px rgba(61,60,61,1);
    -moz-box-shadow: 0px 7px 40px -3px rgba(61,60,61,1);
    box-shadow: 0px 7px 40px -3px rgba(61,60,61,1);
}
.blog-item-img img{
    border-radius: 4px;
}
.blog-item-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 1rem;
}
</style>