import React, {useState} from 'react'
import Card from './Card'

const CardGrid = () => {

    const [products, setProducts] = useState([
        { id: 1, title: "Sneekers", text: "black/pure silver", imageUrl: "https://img01.ztat.net/article/spp-media-p1/b6058ee1f7b244039f412bbff2bd7e4b/50fa6570b3b743a8884da442b77cc3fe.jpg?imwidth=156&filter=packshot" },
        { id: 2, title: "GEL - Sneakers", text: "white/polar shade", imageUrl: "https://img01.ztat.net/article/spp-media-p1/bfdd801c9ad9454cb2f136a84b3e4f1b/aa21b28c52674d17964ef732c19ba959.jpg?imwidth=156&filter=packshot"},
        { id: 3, title: "33 - Höga sneakers", text: "white/highrise/black", imageUrl: "https://img01.ztat.net/article/spp-media-p1/8c86aa7b9fff4a2b83b9f0bac1ec4f9a/a44afd56036c48ca8e9a62950baf9256.jpg?imwidth=156"},
        { id: 4, title: "CHUCK TAYLOR ALL STAR HI - Höga sneakers", text: "black", imageUrl: "https://img01.ztat.net/article/spp-media-p1/0849c4c5da043339905ba2a4f90805d1/9575de1482054b9fa7b43a87563cfb90.jpg?imwidth=156"}
    ])

    return (
        <div className="row row-cols-1 row-cols-md-4 g-4">
            
                {
                    products.map(product => ( 
                        <div className="col">
                            <Card key={product.id} title={product.title} text={product.text} imageUrl={product.imageUrl} /> 
                        </div>
                    ))
                }
            
        </div>
    )
}

export default CardGrid