import React from "react";
import { stats } from "../utils/stats";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card } from "flowbite-react";

const TotalStats = () => {
  return (
    <>
      {stats.map((stat) => (
        <Card key= {stat.id} className="flex-1">
          <div className="flex flex-row justify-between">
            <FontAwesomeIcon className={stat.iconStyle}  icon={stat.icon} size="xl"/>
            <h5 className="">{stat.growth}</h5>
          </div>
          <div className="flex flex-col">
            <p className="justify-self-center font-bold">{stat.amount}</p>
            <h3 className="text-slate-500 text-sm font-light">{stat.title}</h3>
          </div>
        </Card>
      ))}
    </>
  );
};

export default TotalStats;
