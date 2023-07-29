// src/types/tmdb.ts

export interface TMDBItem {
  id: number;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  original_language: string;
  popularity: number;
  rating_average: number,
  rating_count: number,
}

export interface Movie extends TMDBItem {
  title: string;
  release_date: string;
  runtime: number;
  belongs_to_collection_id?: number;
  imdb_id: string;
}

export interface Show extends TMDBItem {
  name: string;
  first_air_date: string;
  last_air_date: string;
  years_aired: string;
  seasons: ShowSeason[];
}

export interface MovieCollection extends TMDBItem {
  name: string;
  movies: Movie[];
}

/*
  "seasons": [
    {
      "air_date": "2009-08-03",
      "episode_count": 6,
      "id": 3623,
      "name": "Specials",
      "overview": "",
      "poster_path": "/kvasNmTeZd6YwjhZASAHlijeVi9.jpg",
      "season_number": 0,
      "vote_average": 0
    },
*/
export interface ShowSeason extends TMDBItem {
  air_date: string;
  episode_count: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}



// Collections
// https://developer.themoviedb.org/reference/search-collection
// https://developer.themoviedb.org/reference/collection-details

// Movies
// https://developer.themoviedb.org/reference/search-movie
// https://developer.themoviedb.org/reference/movie-details


// Shows
// https://developer.themoviedb.org/reference/search-tv
// https://developer.themoviedb.org/reference/tv-series-details



// EXAMPLE API RESULTS:
// MOVIE DETAILS:
/*
{
  "adult": false,
  "backdrop_path": "/628Dep6AxEtDxjZoGP78TsOxYbK.jpg",
  "belongs_to_collection": {
    "id": 87359,
    "name": "Mission: Impossible Collection",
    "poster_path": "/geEjCGfdmRAA1skBPwojcdvnZ8A.jpg",
    "backdrop_path": "/jYl0UuJFcmhymv9ZNO14lPLDY1Z.jpg"
  },
  "budget": 291000000,
  "genres": [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 12,
      "name": "Adventure"
    }
  ],
  "homepage": "https://www.missionimpossible.com",
  "id": 575264,
  "imdb_id": "tt9603212",
  "original_language": "en",
  "original_title": "Mission: Impossible - Dead Reckoning Part One",
  "overview": "Ethan Hunt and his IMF team embark on their most dangerous mission yet: To track down a terrifying new weapon that threatens all of humanity before it falls into the wrong hands. With control of the future and the world's fate at stake and dark forces from Ethan's past closing in, a deadly race around the globe begins. Confronted by a mysterious, all-powerful enemy, Ethan must consider that nothing can matter more than his mission—not even the lives of those he cares about most.",
  "popularity": 717.787,
  "poster_path": "/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
  "production_companies": [
    {
      "id": 4,
      "logo_path": "/gz66EfNoYPqHTYI4q9UEN4CbHRc.png",
      "name": "Paramount",
      "origin_country": "US"
    },
    {
      "id": 82819,
      "logo_path": "/gXfFl9pRPaoaq14jybEn1pHeldr.png",
      "name": "Skydance",
      "origin_country": "US"
    },
    {
      "id": 21777,
      "logo_path": null,
      "name": "TC Productions",
      "origin_country": "US"
    }
  ],
  "production_countries": [
    {
      "iso_3166_1": "US",
      "name": "United States of America"
    }
  ],
  "release_date": "2023-07-08",
  "revenue": 259050381,
  "runtime": 164,
  "spoken_languages": [
    {
      "english_name": "French",
      "iso_639_1": "fr",
      "name": "Français"
    },
    {
      "english_name": "English",
      "iso_639_1": "en",
      "name": "English"
    },
    {
      "english_name": "Italian",
      "iso_639_1": "it",
      "name": "Italiano"
    },
    {
      "english_name": "Russian",
      "iso_639_1": "ru",
      "name": "Pусский"
    }
  ],
  "status": "Released",
  "tagline": "We all share the same fate.",
  "title": "Mission: Impossible - Dead Reckoning Part One",
  "video": false,
  "vote_average": 7.843,
  "vote_count": 527
}
*/



// TV SHOW DETAILS:
/*
{
  "adult": false,
  "backdrop_path": "/lNpkvX2s8LGB0mjGODMT4o6Up7j.jpg",
  "created_by": [
    {
      "id": 99898,
      "credit_id": "5256c88b19c2956ff6046812",
      "name": "David Chase",
      "gender": 2,
      "profile_path": "/pExs1OZaeBFQZbnnR3KayRI6Gw2.jpg"
    }
  ],
  "episode_run_time": [],
  "first_air_date": "1999-01-10",
  "genres": [
    {
      "id": 18,
      "name": "Drama"
    }
  ],
  "homepage": "https://www.hbo.com/the-sopranos",
  "id": 1398,
  "in_production": false,
  "languages": [
    "en"
  ],
  "last_air_date": "2007-06-10",
  "last_episode_to_air": {
    "id": 63055,
    "name": "Made in America",
    "overview": "Tony seeks to find a peace with the Leotardo crew while dealing with rumors a member of his own crew may have flipped. A.J. makes a decision regarding his future and Junior's slide into dementia continues.",
    "vote_average": 8.3,
    "vote_count": 25,
    "air_date": "2007-06-10",
    "episode_number": 21,
    "production_code": "621",
    "runtime": 60,
    "season_number": 6,
    "show_id": 1398,
    "still_path": "/7PnsVHIZEw5YB1qegg2leAIjKnx.jpg"
  },
  "name": "The Sopranos",
  "next_episode_to_air": null,
  "networks": [
    {
      "id": 49,
      "logo_path": "/tuomPhY2UtuPTqqFnKMVHvSb724.png",
      "name": "HBO",
      "origin_country": "US"
    }
  ],
  "number_of_episodes": 86,
  "number_of_seasons": 6,
  "origin_country": [
    "US"
  ],
  "original_language": "en",
  "original_name": "The Sopranos",
  "overview": "The story of New Jersey-based Italian-American mobster Tony Soprano and the difficulties he faces as he tries to balance the conflicting requirements of his home life and the criminal organization he heads. Those difficulties are often highlighted through his ongoing professional relationship with psychiatrist Jennifer Melfi. The show features Tony's family members and Mafia associates in prominent roles and story arcs, most notably his wife Carmela and his cousin and protégé Christopher Moltisanti.",
  "popularity": 188.048,
  "poster_path": "/57okJJUBK0AaijxLh3RjNUaMvFI.jpg",
  "production_companies": [
    {
      "id": 3268,
      "logo_path": "/tuomPhY2UtuPTqqFnKMVHvSb724.png",
      "name": "HBO",
      "origin_country": "US"
    }
  ],
  "production_countries": [
    {
      "iso_3166_1": "US",
      "name": "United States of America"
    }
  ],
  "seasons": [
    {
      "air_date": "2009-08-03",
      "episode_count": 6,
      "id": 3623,
      "name": "Specials",
      "overview": "",
      "poster_path": "/kvasNmTeZd6YwjhZASAHlijeVi9.jpg",
      "season_number": 0,
      "vote_average": 0
    },
    {
      "air_date": "1999-01-10",
      "episode_count": 13,
      "id": 3617,
      "name": "Season 1",
      "overview": "In Season 1, feeling his handle on his family and his business slipping away, mob boss Tony Soprano suffers a series of anxiety attacks that land him in the office of a psychiatrist. Opening up to his shrink, Tony relates the details of his life as a “waste-management consultant,” and tries to come to terms with the professional and private strains that have brought him to the brink of a breakdown.",
      "poster_path": "/3NsJzafk0Sp7yE9yShzQsybHw4x.jpg",
      "season_number": 1,
      "vote_average": 7.7
    },
    {
      "air_date": "2000-01-16",
      "episode_count": 13,
      "id": 3618,
      "name": "Season 2",
      "overview": "His uncle's in jail. His mother's in the hospital. His best friend's still missing. His sister's moving home. His panic attacks are back. And his shrink refuses to see him. Tony Soprano has recently been elevated to the status of mob boss following a federal bust and as the second season picks up, Tony is under more stress than ever as he deals with the demands of his new position. Making matters worse, his long-lost sister Janice has arrived to take care of their ailing mother.",
      "poster_path": "/wvCOKWM1abB5CfuWKqDYeMRV3lN.jpg",
      "season_number": 2,
      "vote_average": 7.7
    },
    {
      "air_date": "2001-03-04",
      "episode_count": 13,
      "id": 3619,
      "name": "Season 3",
      "overview": "In season three, the federal wiretap begins and Meadow goes to college. Tony faces challenges from some tough newcomers, such as hothead Ralph Cifaretto, New York crime boss Johnny Sack and a sexy car saleswoman.",
      "poster_path": "/zFuz2PgkHDr9Lx5YAEmiWbXKCio.jpg",
      "season_number": 3,
      "vote_average": 7.7
    },
    {
      "air_date": "2002-09-15",
      "episode_count": 13,
      "id": 3620,
      "name": "Season 4",
      "overview": "With Paulie in jail, Christopher becomes acting capo in season four. Junior faces a RICO trial while Tony finds that the recession affects his businesses. Meanwhile, Furio catches Carmela's eye, and Janice sets her sights on Bobby.",
      "poster_path": "/q01fVFY7rQEMMnexa9Urv7NOdKO.jpg",
      "season_number": 4,
      "vote_average": 7.7
    },
    {
      "air_date": "2004-03-07",
      "episode_count": 13,
      "id": 3621,
      "name": "Season 5",
      "overview": "In season five, a separated Tony and Carmela negotiate family and money issues. Meanwhile, Tony's reunion with paroled cousin Tony Blundetto may endanger his alliance with Johnny Sack; and Adriana gets in deeper with the Feds.",
      "poster_path": "/p651eYM0Vd0CWDvndbMyaS0lDeD.jpg",
      "season_number": 5,
      "vote_average": 7.9
    },
    {
      "air_date": "2006-03-11",
      "episode_count": 21,
      "id": 3622,
      "name": "Season 6",
      "overview": "As the final episodes take shape, Tony faces a myriad of stress-inducing crises at home, at work, and from the law. While his wife and children each make choices that promise to change the face of the Sopranos' domestic life, Tony also comes to doubt the allegiances of some of those closest to him at work . . . none of whom is above suspicion.",
      "poster_path": "/b1P9PAUI18mb62N0DtHOd71L3CT.jpg",
      "season_number": 6,
      "vote_average": 8
    }
  ],
  "spoken_languages": [
    {
      "english_name": "English",
      "iso_639_1": "en",
      "name": "English"
    }
  ],
  "status": "Ended",
  "tagline": "Family. Redefined.",
  "type": "Scripted",
  "vote_average": 8.6,
  "vote_count": 2219
}
*/
