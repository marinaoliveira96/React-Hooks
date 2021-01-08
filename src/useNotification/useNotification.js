import React from 'react';
import './styles.css';

const useNotification = (title, options) => {
    if (!('Notification' in window)) {
        return;
    }

    const fireNotif = () => {
        if (Notification.permission !== 'granted') {
            Notification.requestPermission().then((permission) => {
                if (permission === 'granted') {
                    new Notification(title, options);
                } else {
                    return;
                }
            });
        } else {
            new Notification(title, options);
        }
    };
    return fireNotif;
};

export default function App() {
    const triggerNotif = useNotification('Can I steal your chocolate?', {
        body: 'I love chocolate',
    });

    return (
        <div className="App">
            <button onClick={triggerNotif}>Click me</button>
        </div>
    );
}
