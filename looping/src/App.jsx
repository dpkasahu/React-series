import React, { useState } from 'react';

const App = () => {
    const [colors, setColors] =
        useState(['red', 'green', 'blue']);

    const approach2Fn = () => {
        const newColor = prompt('Enter a color:');
        if (newColor) {
            setColors([...colors, newColor]);
        }
    };
    const colorItems = [];
    for (let i = 0; i < colors.length; i++) {
        colorItems.push(
            <div key={i}
                style={{
                    backgroundColor: colors[i],
                    padding: '10px', margin: '5px',
                    borderRadius: '2px', width: '100px'
                }}>
                {colors[i]}
            </div>
        );
    }
    return (
        <div>
            <h1 style={{ color: 'green' }}>
            </h1>
            <h3>Welcome to my WORLD</h3>
            <div>{colorItems}</div>
            <button onClick={approach2Fn}>
                Add Color
            </button>
        </div>
    );
};

export default App;
