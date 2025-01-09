"use client";

import { useState, useEffect } from "react";
import { fetchPokemons, fetchTypes } from "../../services/pokemonService";
import PokemonCard from "../../components/PokemonCard";
import PokemonModal from "../../components/PokemonModal";

const PokemonsPage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);
  const [filters, setFilters] = useState({
    name: "",
    typeId: "",
    page: 1,
    limit: 50,
  });
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    const loadTypes = async () => {
      try {
        const data = await fetchTypes();
        setTypes(data);
      } catch (error) {
        console.error("Failed to fetch types:", error);
      }
    };

    loadTypes();
  }, []);

  const loadPokemons = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const data = await fetchPokemons(
        filters.page,
        filters.limit,
        filters.typeId,
        filters.name
      );

      if (data.length === 0) {
        setHasMore(false);
      } else {
        setPokemons((prev) => (filters.page === 1 ? data : [...prev, ...data]));
        if (data.length < filters.limit) {
          setHasMore(false);
        }
      }
    } catch (error) {
      console.error("Failed to fetch pokemons:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadPokemons();
  }, [filters]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 100 &&
        hasMore &&
        !loading
      ) {
        setFilters((prev) => ({ ...prev, page: prev.page + 1 }));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasMore, loading]);

  useEffect(() => {
    const checkContentHeight = () => {
      if (
        document.body.offsetHeight <= window.innerHeight &&
        hasMore &&
        !loading
      ) {
        setFilters((prev) => ({ ...prev, page: prev.page + 1 }));
      }
    };

    checkContentHeight();
  }, [pokemons, hasMore, loading]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
      page: 1,
    }));
    setPokemons([]);
    setHasMore(true);
  };

  const handleCardClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const closeModal = () => {
    setSelectedPokemon(null);
  };

  return (
    <div>
      <form className="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <input
          type="text"
          name="name"
          value={filters.name}
          onChange={handleFilterChange}
          placeholder="Search by name"
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-primary/50"
        />
        <select
          name="typeId"
          value={filters.typeId}
          onChange={handleFilterChange}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-primary/50"
        >
          <option value="">All Types</option>
          {types.map((type) => (
            <option key={type.id} value={type.id}>
              {type.name}
            </option>
          ))}
        </select>
        <select
          name="limit"
          value={filters.limit}
          onChange={handleFilterChange}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-primary/50"
        >
          <option value="10">Show 10</option>
          <option value="20">Show 20</option>
          <option value="50">Show 50</option>
        </select>
      </form>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onClick={() => handleCardClick(pokemon)}
          />
        ))}
      </div>

      {loading && <p className="text-center mt-4">Loading...</p>}

      {!hasMore && <p className="text-center mt-4">No more Pokémon to load.</p>}

      {selectedPokemon && (
        <PokemonModal pokemon={selectedPokemon} onClose={closeModal} />
      )}
    </div>
  );
};

export default PokemonsPage;
