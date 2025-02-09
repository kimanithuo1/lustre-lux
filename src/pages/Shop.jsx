import { Link } from "react-router-dom"

const ShopItem = ({ name, price, image }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
    <img src={image || "/placeholder.svg"} alt={name} className="w-full h-64 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-royal-gold font-bold">${price}</p>
      <Link
        to={`/product/${name.toLowerCase().replace(/ /g, "-")}`}
        className="mt-2 inline-block bg-royal-gold text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition duration-300"
      >
        View Details
      </Link>
    </div>
  </div>
)

const Shop = () => {
  const collections = [
    {
      name: "Timeless Elegance",
      items: [
        {
          name: "Diamond Eternity Ring",
          price: 2999,
          image:
            "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        },
        {
          name: "Pearl Strand Necklace",
          price: 1299,
          image:
            "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        },
        {
          name: "Sapphire Stud Earrings",
          price: 899,
          image:
            "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        },
      ],
    },
    {
      name: "Modern Luxe",
      items: [
        {
          name: "Rose Gold Bangle",
          price: 1499,
          image:
            "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        },
        {
          name: "Geometric Pendant",
          price: 799,
          image:
            "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        },
        {
          name: "Minimalist Watch",
          price: 2499,
          image:
            "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=799&q=80",
        },
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Explore Our Collections</h1>
      {collections.map((collection, index) => (
        <div key={index} className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">{collection.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collection.items.map((item, itemIndex) => (
              <ShopItem key={itemIndex} {...item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Shop

