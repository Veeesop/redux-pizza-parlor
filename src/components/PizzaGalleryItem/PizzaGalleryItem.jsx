import './PizzaGalleryItem.css'


export default function PizzaGalleryItem({pizzaGalleryItem}){



    return(
        <div>
            <div className='PizzaGalleryItem' >
                    <h3>{pizzaGalleryItem.name}</h3>
                    <p>{pizzaGalleryItem.description}</p>
                    <button>Add</button>
            </div>
        </div>
    )
}