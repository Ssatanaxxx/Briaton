import { Link, useNavigate, useParams } from "react-router-dom";
import { PLAYLISTS } from "../../data";
import "./PlaylistInfoPage.css";

export function PlaylistInfoPage() {
    const { playlistId } = useParams();
    const navigate = useNavigate();
    const playlist = PLAYLISTS.find((p) => p.id === Number(playlistId));

    const handleGenreClick = (genre: string) => {
        navigate(`/playlists?genre=${genre}`);
    };

    if (!playlist || playlist.genre === "Non Music") {
        return (
            <div className="playlistInfoPage">
                <h2>Playlist Info</h2>
                <p>Playlist not found</p>
                <Link to="/playlists">Back to playlists</Link>
            </div>
        );
    }

    return (
        <div className="playlistInfoPage">
            <h2>{playlist.name}</h2>
            <p>
                Genre:{" "}
                <span
                    className="genreLink"
                    onClick={() => handleGenreClick(playlist.genre)}
                >
                    {playlist.genre}
                </span>
            </p>
            <h3>Songs:</h3>
            <ul>
                {playlist.songs.map((song, index) => (
                    <li key={index}>{song}</li>
                ))}
            </ul>
            <Link to="/playlists">Back to playlists</Link>
        </div>
    );
}