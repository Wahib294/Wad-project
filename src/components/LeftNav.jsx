import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/contextAPI";
import LeftNavMenuItem from "./LeftNavMenuItem";
import { categories } from "../utils/constants";
import { hover } from "@testing-library/user-event/dist/hover";

const LeftNav = () => {
  const { selectedCategory, setSelectedCategory } = useContext(Context);
  return (
    <div className="md:block w-[240px] overflow-y-auto py-4 bg-black absolute md:relative z-10 translate-x-[-240] md:translate-x-[0] transition-all">
      <div className="flex px-5 flex-col">
        {categories.map((item) => {
          return (
            <>
              <LeftNavMenuItem
                text={item.name}
                icon={item.icon}
                action={() => {}}
                className={`${
                  selectedCategory === item.name ? "bg-white/[0.15]" : ""
                }`}
              />
              {item.divider && <hr className="my-5 border-white/[0.2]" />}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default LeftNav;
