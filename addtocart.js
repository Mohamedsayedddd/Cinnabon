const product = [
    {
        id: 0,
        image: 'image/aa-1.jpg',
        title: '  بوكس السعادة   ',
        price: 60,
    },
    {
        id: 1,
        image: 'image/423161913_374273075216853_2038072751713313730_n.jpg',
        title: 'وافل',
        price: 45,
    },
    {
        id: 2,
        image: 'image/aa-1.jpg',
        title: 'سينابون',
        price: 45,
    },
    {
        id: 3,
        image: 'image/aa-1.jpg',
        title: 'مولتن كيك',
        price: 45,
    },
    {
        id: 4,
        image: 'image/aa-1.jpg',
        title: 'دونات ',
        price: 20,
    },
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>ج ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>اضافة</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "فارغ";
        document.getElementById("total").innerHTML = "ج "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "ج "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}