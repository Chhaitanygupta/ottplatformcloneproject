// const api_key="2aa39bf44ce464c93ed4e739dd39081e";

const requests = {
    fetchTrending:`/trending/all/week?api_key=2aa39bf44ce464c93ed4e739dd39081e&language=en-US`,
    fetchNetflixOrignals:`/discover/tv?api_key=2aa39bf44ce464c93ed4e739dd39081e&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=2aa39bf44ce464c93ed4e739dd39081e&language=en-us`,
    fetchActionMovies:`/discover/movie?api_key=2aa39bf44ce464c93ed4e739dd39081e&with_genres=28`, 
    fetchComedyMovies:`/discover/movie?api_key=2aa39bf44ce464c93ed4e739dd39081e&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=2aa39bf44ce464c93ed4e739dd39081e&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=2aa39bf44ce464c93ed4e739dd39081e&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=2aa39bf44ce464c93ed4e739dd39081e&with_genres=99`,    
}

export default requests;