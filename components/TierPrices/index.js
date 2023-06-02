import React from "react";

const TierPrices = ({ title, bullets, description, price }) => {
  const [bulletsLocal, setBulletsLocal] = React.useState(bullets.split(","));

  return (
    <div className="mt-5 w-2/5 flex mob:flex-col desktop:flex-col justify-between">
      <div className="text-lg w-2/5">
        <h2>{title}</h2>
        <h3 className="text-sm opacity-50">{description}</h3>
      </div>
      <div className="w-3/5">
        {bulletsLocal && bulletsLocal.length > 0 && (
          <ul className="list-disc">
            {bulletsLocal.map((bullet, index) => (
              <li key={index} className="text-sm my-1 opacity-70">
                {bullet}
              </li>
            ))}
          </ul>
        )}
        <h2 className="text-lg font-bold">{price}</h2>
      </div> 
    </div>
  );
};

export default TierPrices;