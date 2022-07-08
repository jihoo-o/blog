import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import SeriesPage from 'pages/SeriesPage';
import SearchPage from 'pages/SearchPage';
import './App.css';
import Layout from 'components/Layout';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="series" element={<SeriesPage />} />
                    <Route path="search" element={<SearchPage />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
