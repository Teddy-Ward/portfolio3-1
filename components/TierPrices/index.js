import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const TierPrices = ({ title, bullets, description, price }) => {
    
  const [bulletsLocal, setBulletsLocal] = React.useState(bullets.split(","));
const theme = useTheme();
const [mount, setMount] = useState(false);
useEffect(() => {
    setMount(true);

  }, []);
  return (
    <div className={`${
        mount && theme.theme === "dark" ? "bg-slate-800" : "bg-gray-50"
      } mt-0 w-full p-3 flex mob:flex-col desktop:flex-col justify-between rounded-lg shadow-sm`}>
      <div className="text-lg w-11/12">
        <h2>{title}</h2>
        <h3 className="text-sm opacity-50 h-12 mt-1">{description}</h3>
      </div>
      <div className="w-3/5 mb-auto">
        {bulletsLocal && bulletsLocal.length > 0 && (
          <ul className="list-disc pl-5 mb-6 mt-2">
            {bulletsLocal.map((bullet, index) => (
              <li key={index} className="text-sm my-1 opacity-70">
                {bullet}
              </li>
            ))}
          </ul>
        )}
        </div>
        <div>
        <h2 className="text-lg font-bold pl-1">£ {price}</h2>
      </div> 
    </div>
  );
};

export default TierPrices;