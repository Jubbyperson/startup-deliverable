import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { MealPlans } from './mealPlans/mealPlans';
import { Social } from './social/social';
import { Workouts } from './workouts/workouts';

export default function App() {
  return (
    <BrowserRouter>
        <div className="body bg-dark text-light">
            <header>
                <nav>
                    <menu>
                        <li class="title"><img src="https://t4.ftcdn.net/jpg/02/43/26/65/360_F_243266561_JPLUStDWwsBJ05qOZsWK3G1ARB6pU8Se.jpg" width="150" length="100"></img>GymShare</li>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="workouts.html">Workouts</a></li>
                        <li><a href="mealPlans.html">Meal Plans</a></li>
                        <li><a href="social.html">Social</a></li>
                    </menu>
                </nav>
                <hr />
                </header>

                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/workouts" element={<Workouts />} />
                    <Route path="/mealPlans" element={<MealPlans />} />
                    <Route path="/social" element={<Social />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>

                <footer>
                <hr />
                <span class="text-reset">Jackson Stephens</span>
                <br/>
                <a href="https://github.com/Jubbyperson/startup-deliverable.git">GitHub Repository</a>
                </footer></div>;
    </BrowserRouter>
    );
}