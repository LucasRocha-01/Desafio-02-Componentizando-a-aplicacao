export default interface IMoviesProps {
    Title: string;
    Poster: string;
    Ratings: Array<{
        source: string;
        Value: string;
    }>;
    Runtime: string;
}