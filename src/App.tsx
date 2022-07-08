import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import SeriesPage from 'pages/SeriesPage';
import SearchPage from 'pages/SearchPage';
import './App.css';
import MainLayout from 'layout/MainLayout';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="series" element={<SeriesPage />} />
                    <Route path="search" element={<SearchPage />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
