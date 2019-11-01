

const initState = {
    items: [
        {
            id: 1, model: 'Lenovo A6000 plus', brand: 'lenovo',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            specifications: {
                size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
                camera: "8mp (3264x2448)", cpu: "1.3GHz Apple A6", memory: "16GB, 32GB and RAM 1 GB",
                battery: "1480 mAh"
            },
            price: 110,
            img: ["https://images-na.ssl-images-amazon.com/images/I/71EvOK7BhuL._AC_SL1500_.jpg",
                'https://images-na.ssl-images-amazon.com/images/I/81eQWccMY1L._AC_SL1500_.jpg',
                "https://images-na.ssl-images-amazon.com/images/I/81Xpn-TDy-L._AC_SL1500_.jpg"]
        },
        {
            id: 2, model: 'moto E5 plus', brand: 'moto',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            specifications: {
                size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
                camera: "12mp (3264x2448)", cpu: "1.4GHz Apple A6", memory: "16GB, 32GB and RAM 1 GB",
                battery: "2180 mAh"
            },
            price: 80, img: ["https://images-na.ssl-images-amazon.com/images/I/81eQWccMY1L._AC_SL1500_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/81lA8XZe2mL._AC_SL1500_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/81Kq7nBPApL._AC_SL1500_.jpg"]
        },
        {
            id: 3, model: 'samsung S3 plus', brand: 'samsung',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            specifications: {
                size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
                camera: "12mp (3264x2448)", cpu: "1.3GHz A6", memory: "16GB, 32GB and RAM 1 GB",
                battery: "1880 mAh"
            },
            price: 120, img: ["https://images-na.ssl-images-amazon.com/images/I/81lA8XZe2mL._AC_SL1500_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/81Kq7nBPApL._AC_SL1500_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/81bjpVu5s5L._AC_SL1500_.jpg"]
        },
        {
            id: 4, model: 'micromax Karboon A100 plus',
            specifications: {
                size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
                camera: "8mp (3264x2448)", cpu: "1.3GHz Apple A6", memory: "16GB, 32GB and RAM 1 GB",
                battery: "1480 mAh"
            },
            brand: 'micromax', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 260, img: ["https://images-na.ssl-images-amazon.com/images/I/81Kq7nBPApL._AC_SL1500_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/81bjpVu5s5L._AC_SL1500_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/718FBBTV0IL._AC_SL1500_.jpg"]
        },
        {
            id: 5, model: 'redmi mi 6a ',
            brand: 'redmi ', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            specifications: {
                size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
                camera: "8mp (3264x2448)", cpu: "1.3GHz Apple A6", memory: "16GB, 32GB and RAM 1 GB",
                battery: "1480 mAh"
            },
            price: 160, img: ["https://images-na.ssl-images-amazon.com/images/I/81bjpVu5s5L._AC_SL1500_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/718FBBTV0IL._AC_SL1500_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/81Xpn-TDy-L._AC_SL1500_.jpg"]
        },
        {
            id: 6, model: 'Huwaei Nova 3', brand: 'huwaei',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            specifications: {
                size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
                camera: "8mp (3264x2448)", cpu: "1.3GHz Apple A6", memory: "16GB, 32GB and RAM 1 GB",
                battery: "1480 mAh"
            },
            price: 190, img: ["https://images-na.ssl-images-amazon.com/images/I/718FBBTV0IL._AC_SL1500_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/81Xpn-TDy-L._AC_SL1500_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/81duLAWicbL._AC_SL1500_.jpg"]
        },
        {
            id: 7, model: 'Lenovo K3 note', brand: 'lenovo',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            specifications: {
                size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
                camera: "8mp (3264x2448)", cpu: "1.3GHz Apple A6", memory: "16GB, 32GB and RAM 1 GB",
                battery: "1480 mAh"
            },
            price: 950, img: ["https://images-na.ssl-images-amazon.com/images/I/81duLAWicbL._AC_SL1500_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/81duLAWicbL._AC_SL1500_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/81lA8XZe2mL._AC_SL1500_.jpg"]
        },
        {
            id: 8, model: 'Apple mac 10x', brand: 'apple',
            specifications: {
                size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
                camera: "8mp (3264x2448)", cpu: "1.3GHz Apple A6", memory: "16GB, 32GB and RAM 1 GB",
                battery: "1480 mAh"
            },
            desc: "Lorem ipsum dolor sit aamet consectetur adipisicing elit. Minima, ex.",
            price: 390, img: ["https://images-na.ssl-images-amazon.com/images/I/81Xpn-TDy-L._AC_SL1500_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/81lA8XZe2mL._AC_SL1500_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/81lA8XZe2mL._AC_SL1500_.jpg"]
        }

    ],
    addedItems: [],
    filteredItems:[],
    total: 0
}
const cartReducer = (state = initState, action) => {
    // console.log("reducer runs",action)   

    // return state;
    switch (action.type) {
        case "SHOW_PRODUCTS":
        return{
            ...state,
            filteredItems:state.items
        }
        case "ADD_CART":
            let addedItem = action.payload
            let itemExist = state.addedItems.find(item => item.id === addedItem.id)
            if (itemExist) {
                console.log("item existes")
                addedItem.quantity += 1;
                return {
                    ...state,
                    total: state.total + addedItem.price
                }
            }
            else {
                console.log("item existes not")
                addedItem.quantity = 1;
                //calculating the total
                let newTotal = state.total + addedItem.price

                return {
                    ...state,
                    addedItems: [...state.addedItems, addedItem],
                    total: newTotal
                }
            }
        case "REMOVE_ITEM":
            let removedItem = state.addedItems.find(item => item.id === action.payload)
            let newTotal = state.total - removedItem.price
            return {
                ...state,
                addedItems: state.addedItems.filter(item => item.id !== action.payload),
                total: newTotal
            }
        case "ADD_QUANTITY":
            let addItem = state.addedItems.find(item => item.id === action.payload)
            addItem.quantity += 1
            return {
                ...state,
                total: state.total + addItem.price
            }
        case "REMOVE_QUANTITY":
            let removeItemQuantity = state.addedItems.find(item => item.id === action.payload)
            removeItemQuantity.quantity -= 1
            return {
                ...state,
                total: state.total - removeItemQuantity.price
            }
        case "BRAND_FILTER":
            console.log("filtering...")
            let filterProducts=state.items.filter(data =>{ 
                if(action.payload.length>0){
                    return action.payload.includes(data.brand)
                    }else{
                    return !action.payload.includes(data.brand)
                    }
            })
            return{
                ...state,
                filteredItems:filterProducts
            }
        default:
            return state;
    }
}
export default cartReducer;