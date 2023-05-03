import React, { useContext, createContext, useMemo, useState} from 'react';

// I want to have the dark/light theme available from every part of my application. So I will use context to achieve this (allowing me to share state with the entire app), a reducer to store the initial colour theme state as well as the dispatch methods used to modify the state, and local storage to ensure that user preferences can be stored and persist after page reloads

// Here, I have created an AppContext.js file which will hold the context as well as a wrapper that I can use to share this state:

// Then the AppContext variable  which creates the context

const AppContext = createContext();

// The AppWrapper which will pass the context to the rest of the app and will be exported from this file. 

export function AppWrapper ({ children }) {

    const [appTheme, setAppTheme] = useState("dark"); // Define an appTheme variable, and initialise it with the useState hook

    // const contextValue = useMemo(() => { // The useMemo hook allows me to memoise the state value for better performance
    //     return [appTheme, setAppTheme];
    // }, [appTheme, setAppTheme]);

    // The toggleAppTheme method will toggle the theme between light and dark

    const toggleAppTheme = (event) => {
        event.preventDefault();
        setAppTheme(appTheme === "dark" ? "light" : "dark")
    };

    // Then we want to return a provider that can be used to output the context value to the rest of the app. This will be imported within the _app.js file

  return (
    <AppContext.Provider value={{appTheme: appTheme, toggleAppTheme: toggleAppTheme}}>
        {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {

    return useContext(AppContext);
    
}