import React from 'react';
import './AstroCard.css';
import anonAstro from './anon_astro.webp';

const AstroCard = ( {astros} ) => {

const truncateWithLink = (bio, maxLength, wikiUrl) => {
  if (!bio) return 'No biography available.';
  
  const isTruncated = bio.length > maxLength;
  const shortBio = isTruncated
    ? bio.slice(0, bio.lastIndexOf(' ', maxLength)) + '...'
    : bio;

  if (isTruncated && wikiUrl) {
    return (
      <>
        {shortBio}
        {' '}
        <a href={wikiUrl} target="_blank" rel="noreferrer" className="astro astro_readmore">
          <strong>Read more</strong>
        </a>
      </>
    );
  }

  return shortBio;
};

return (
  <div className="container astro_container grid">
    {astros.map((astro, index) => {
      const astro_img = astro?.profile_image ?? anonAstro;

      return (
        <div className="astro astro_card" key={index}>
          <div className="astro astro_cover">
            <img className="astro astro_image" src={astro_img} alt={astro.name} />
          </div>
          <a href={astro.wiki} target="_blank" rel="noreferrer">
            <h3 className="astro astro_name">{astro.name}</h3>
          </a>
          <h6 className="astro astro_bio">{truncateWithLink(astro.bio, 360, astro.wiki)}</h6>
        </div>
      );
    })}
  </div>
);
};

export default AstroCard;
