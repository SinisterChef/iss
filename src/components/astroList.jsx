

  return (
    <div>
        {astros && astros.map((astro) => (
            <div>
                <p>Name: {astro.name}</p>
                <p>Spaceship: {astro.craft}</p>
            </div>
        ))}
    </div>
  );

export default AstroList;