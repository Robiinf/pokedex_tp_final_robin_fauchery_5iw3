const PokemonCard = ({ pokemon, onClick }) => {
  return (
    <div
      className="bg-surface shadow-md rounded-md overflow-hidden"
      onClick={onClick}
    >
      <img
        src={pokemon.image}
        alt={pokemon.name}
        className="w-full h-32 object-contain bg-gray-100"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-textPrimary">{pokemon.name}</h2>
        <p className="text-sm text-textSecondary">
          Pokedex ID: {pokemon.pokedexId}
        </p>
        <div className="text-sm text-textSecondary flex justify-center gap-2">
          {pokemon.types.map((type) => (
            <p key={type.name} className="py-1">
              <img
                src={type.image}
                alt={type.name}
                className="mx-auto h-8 w-8 object-contain"
              />
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
