import React, { useState } from 'react';
import './styles.css';

const content = [
    {
        tab: 'Session 1',
        content: 'Im the content of section 1',
    },
    {
        tab: 'Session 2',
        content: 'Im the content of section 2',
    },
    {
        tab: 'Session 3',
        content: 'Im the content of section 3',
    },
];

const useTabs = (initialTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    return {
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentIndex,
    };
    if (!allTabs || !Array.isArray(allTabs)) {
        return;
    }
};

export default function App() {
    // currentItem, changeItem estão sendo retornadas de useTabs
    const { currentItem, changeItem } = useTabs(0, content);

    return (
        <div className="App">
            {content.map((section, index) => (
                <button onClick={() => changeItem(index)}>{section.tab}</button>
            ))}
            <div>{currentItem.content}</div>
        </div>
    );
}
