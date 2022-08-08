const API_KEY = process.env.API_KEY

export default{
    fetchTrending:{
        title: "Trending",
        url: `tending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated:{
        title: "Top rated",
        url: `movie/top_rated?api_key=${API_KEY}&language=en-US`
    }
}
