import React from 'react';

// This file will contain an initialTheme variable (to store the initial theme) and an AppReducer arrow function (to store the dispatch method used to modify the theme).

export const initialTheme = {
    value: "dark"
};

export const AppReducer = (theme, action) => {

    switch (action.type) {
        case "toggle_theme": {
            return {
                ...theme,
                value: "dark"
            }
        }
    }
  return (
    <div>AppReducer</div>
  )
}

