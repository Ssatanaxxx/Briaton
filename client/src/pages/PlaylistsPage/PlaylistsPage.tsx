import { ChangeEvent } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { PLAYLISTS } from "../../data";
import "./PlaylistsPage.css";

export function PlaylistsPage() {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.value;
        const genre = searchParams.get("genre") || "";
        setSearchParams({ name, genre });
    };

    const handleGenreChange = (e: ChangeEvent<HTMLInputElement>) => {
        const genre = e.target.value;
        const name = searchParams.get("name") || "";
        setSearchParams({ name, genre });
    };

    const nameFilter = searchParams.get("name")?.toLowerCase() || "";
    const genreFilter = searchParams.get("genre")?.toLowerCase() || "";

    const filteredPlaylists = PLAYLISTS.filter(
        (playlist) =>
            playlist.genre !== "Non Music" &&
            playlist.name.toLowerCase().includes(nameFilter) &&
            playlist.genre.toLowerCase().includes(genreFilter)
    );

    return (
        <div className="playlistsPage">
            <h2>Playlists Page</h2>

            <div className="filters">
                <input
                    type="text"
                    placeholder="Filter by name"
                    value={nameFilter}
                    onChange={handleNameChange}
                />
                <input
                    type="text"
                    placeholder="Filter by genre"
                    value={genreFilter}
                    onChange={handleGenreChange}
                />
            </div>

            <div className="playlists">
                {filteredPlaylists.length > 0 ? (
                    filteredPlaylists.map((playlist) => (
                        <div key={playlist.id} className="playlistCard">
                            <Link to={`/playlists/${playlist.id}`}>
                                <h3>{playlist.name}</h3>
                                <p>Genre: {playlist.genre}</p>
                                <p>Songs: {playlist.songs.length}</p>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p>No playlists found</p>
                )}
            </div>
        </div>
    );
}