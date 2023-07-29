// src/services/tmdb.ts

import axios from 'axios';

const TMDB_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjZmN2IwNTkzMWE3M2EyOWZhYTU4NGU4OTcxMWJiMyIsInN1YiI6IjY0YmE4ZTRmNmFhOGUwMDEwZWM4ZTcwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xii6Di6F40IKdjmgEx3N9rX6PflLbroCmyJzI0xHkYM';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
});

instance.defaults.headers.common['Authorization'] = `Bearer ${TMDB_KEY}`;

export default instance;
