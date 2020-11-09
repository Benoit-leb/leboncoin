import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <div className="row center-xs middle-xs">
        <div>
          Ceci est la page Home
        </div>
      </div>
      <div className="row center-xs middle-xs">
        <div>
          <Link href="messagerie">
            <a>Aller sur la messagerie</a>
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
