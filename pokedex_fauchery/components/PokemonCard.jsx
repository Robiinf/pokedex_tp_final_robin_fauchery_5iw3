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
        <p className="text-sm text-textSecondary">
          Generation: {pokemon.generation}
        </p>
      </div>
    </div>
  );
};

export default PokemonCard;
