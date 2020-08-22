const INITIAL_STATE = {
    categories :[
        {
            title:"Groceries",
            imageUrl : "https://thumbs.dreamstime.com/b/young-girl-holds-full-paper-bag-groceries-white-wooden-background-above-top-view-flat-lay-young-girl-holds-full-paper-117080551.jpg",
            id :1,
            linkUrl: "shop/groceries"
        },
        {
            title:"Mobiles",
            imageUrl : "https://uswitch-mobiles-contentful.imgix.net/qhi9fkhtpbo3/3N5bH3FCJym48O6AOcM0wO/323220d01f30efd281c2a4a136dd2154/history-of-mobile-phones.jpg",
            id :2,
            linkUrl: "shop/mobiles"
        },
        {
            title:"Clothes",
            imageUrl : "https://image.freepik.com/free-vector/summer-clothes-set_74855-446.jpg",
            id :3,
            linkUrl: "shop/clothes"
        },
        {
            title:"Books",
            imageUrl : "https://images.indianexpress.com/2020/04/books_759.jpg",
            id :4,
            linkUrl: "shop/books"
        },
        {
            title:"Furniture",
            imageUrl : "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/amazon-rivet-furniture-1533048038.jpg",
            id :5,
            linkUrl: "shop/furniture"
        }
    ]
};

const categoryListReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        default : 
            return state;
    }
}

export default categoryListReducer;