const PokemonModal = ({ pokemon, onClose }) => {
  if (!pokemon) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-surface p-6 rounded-lg shadow-lg w-full max-w-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-lg font-bold text-gray-700"
        >
          ✕
        </button>
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="mx-auto h-32 w-32 object-contain mb-4"
        />
        <h2 className="text-2xl font-bold text-center mb-4">{pokemon.name}</h2>
        <p className="text-center text-gray-600">
          Pokedex ID: {pokemon.pokedexId}
        </p>
        <div className="mt-4">
          <h3 className="font-semibold text-lg mb-2">Stats</h3>
          <ul className="grid grid-cols-2 gap-2 text-sm text-gray-700">
            {Object.entries(pokemon.stats).map(([key, value]) => (
              <li key={key} className="capitalize">
                {key}: <span className="font-bold">{value}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="font-semibold text-lg mb-2">Types</h3>
          <ul className="flex gap-2">
            {pokemon.types.map((type) => (
              <li key={type.name} className="bg-gray-200 px-2 py-1 rounded-md">
                <img
                  src={type.image}
                  alt={type.name}
                  className="mx-auto h-12 w-12 object-contain"
                />
              </li>
            ))}
          </ul>
        </div>
        {pokemon.evolutions && (
          <div className="mt-4">
            <h3 className="font-semibold text-lg mb-2">Evolutions</h3>
            <ul className="flex gap-2">
              {pokemon.evolutions.map((evo) => (
                <li key={evo.name} className="bg-gray-200 px-2 py-1 rounded-md">
                  {evo.name} (#{evo.pokedexId})
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default PokemonModal;
