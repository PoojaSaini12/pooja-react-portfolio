function ProductItems({pitems}) {
  return (
    
      
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300">
          <img
            src={pitems.img}
            alt="UI Design"
            className="w-full h-48 object-cover rounded-xl mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">{pitems.title}</h2>
          <p className="text-gray-600 mb-4">
            {pitems.body}
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700">
            Read More
          </button>
        </div>
  )
}

export default ProductItems;