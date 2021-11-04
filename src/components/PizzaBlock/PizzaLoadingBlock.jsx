import React from 'react';
import ContentLoader from 'react-content-loader';
const PizzaLoadingBlock = () => {
    return (
      <ContentLoader 
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f7f3f3"
      foregroundColor="#ecebeb"
      >
      <circle cx="130" cy="138" r="118" /> 
      <rect x="14" y="271" rx="10" ry="10" width="249" height="41" /> 
      <rect x="6" y="328" rx="9" ry="9" width="266" height="75" /> 
      <rect x="9" y="413" rx="0" ry="0" width="101" height="71" /> 
      <rect x="139" y="414" rx="22" ry="22" width="130" height="45" />
      </ContentLoader>
    )
};

export default PizzaLoadingBlock;