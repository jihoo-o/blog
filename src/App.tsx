import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import SeriesPage from 'pages/SeriesPage';
import SearchPage from 'pages/SearchPage';
import './App.css';

function App() {
    return (
        <div className="App">
            <h1>Welcome to React Router!</h1>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="series" element={<SeriesPage />} />
                <Route path="search" element={<SearchPage />} />
            </Routes>
        </div>
    );
}

export default App;
