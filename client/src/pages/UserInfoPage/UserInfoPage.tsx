import { Link, useParams } from "react-router-dom";
import { USERS } from "../../data";
import "./UserInfoPage.css";

export function UserInfoPage() {
	const { userId } = useParams();
	const user = USERS[Number(userId)];

	if (!user) {
		return (
			<div className="userInfoPage">
				<h2>UserInfoPage</h2>
				<div className="users">
					<p>User with this ID not found</p>
				</div>
			</div>
		);
	}

	return (
		<div className="userInfoPage">
			<h2>UserInfoPage</h2>

			<div className="users">
				<p>{user.jobTitle}</p>
				<p>{user.email}</p>
				<img src={user.avatar} alt="" width={200} height={200} />
				<p>{user.fullName}</p>
				<p>{user.bio}</p>

				{user.playlist && user.playlist.genre !== "Non Music" && (
					<div className="userPlaylist">
						<h3>User's Playlist:</h3>
						<Link to={`/playlists/${user.playlist.id}`}>
							{user.playlist.name} ({user.playlist.genre})
						</Link>
					</div>
				)}
			</div>
		</div>
	);
}