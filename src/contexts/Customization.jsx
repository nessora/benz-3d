import { createContext, useContext, useState } from "react";

const CustomizationContext = createContext({});

export const carColors = [
    {
      color: "#683434",
      name: "brown",
    },
    {
      color: "#1a5e1a",
      name: "green",
    },
    {
      color: "#659994",
      name: "blue",
    },
    {
      color: "#896599",
      name: "mauve",
    },
    {
      color: "#ffa500",
      name: "orange",
    },
    {
      color: "#59555b",
      name: "grey",
    },
    {
      color: "#222222",
      name: "black",
    },
    {
      color: "#ececec",
      name: "white",
    },
  ];
  

export const CustomizationProvider = (props) => {
    const [carColor, setCarColor] = useState('');
    

    return (
        <CustomizationContext.Provider value={{
            carColor,
            setCarColor
        }}>
            {props.children}
        </CustomizationContext.Provider>
    )
}

export const useCustomization = () => {
    return useContext(CustomizationContext);
}