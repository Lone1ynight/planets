export const filteredMoons = (planets, moons) =>
    planets?.map(planet => (
        {
            planet,
            moons: moons?.filter(moon => moon.planetId === planet.id)
        }
    ))
