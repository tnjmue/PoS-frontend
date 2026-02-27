import API from "./api";

export const deleteUserGame = (userGameId, token, onSuccess) => {
  if (!window.confirm("Are you sure you want to delete this game?")) return;

  API.delete(`/api/userGames/${userGameId}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
    .then(() => {
      console.log("Game deleted:", userGameId);
      if (onSuccess) onSuccess();
    })
    .catch((err) => console.error(err));
};