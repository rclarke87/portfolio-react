export default function PortfolioGrid() {
  const items = [
    {
      id: 1,
      title: "RideFixr",
      description:
        "RideFixr is a cycling maintenance app for casual riders who need help maintaining and repairing bicycles. It encourages users with gamification and service reminders.",
      image: "/images/projects/ridefixr.jpg",
    },
    {
      id: 2,
      title: "Cycle Birstall",
      description:
        "Cycle Birstall is a community cycling advocacy campaign that aims to connect its audience with a shared vision for a greener, cleaner Birstall for everyone.",
      image: "/images/projects/cycle-birstall.jpg",
    },
    {
      id: 3,
      title: "Poké-search",
      description:
        "Poké-search, a React application, provides a practical demonstration of search and API query functionality. Effortlessly search and view statistics for your favourite Pokémon.",
      image: "/images/projects/pokedeck.jpg",
    },
    // Add more items as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8 mt-12" id="projects">
      <h2 className="text-3xl font-bold mb-6">My Recent Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] ">
        {items.map((item) => (
          <div key={item.id}>
            <div className="w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-xl/45 transform transition duration-300 hover:scale-103">
              <img
                src={item.image}
                alt={`My ${item.title} project`}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h3 class="text-xl font-bold mt-4 mb-2 text-center">
                {item.title}
              </h3>
              <p class="text-base text-center mb-5">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
