import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Home from './components/Home';
import ArticlePage from './components/ArticlePage';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <main role="main">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/article/:id" element={<ArticlePage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}


export default App;
