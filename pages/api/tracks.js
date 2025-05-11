import sql from "../../backend/config/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, artist, playlistId } = req.body;

    try {
      const result = await sql`
        INSERT INTO tracks (name, artist, playlist_id)
        VALUES (${name}, ${artist}, ${playlistId})
        RETURNING *
      `;
      res.status(201).json(result[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to add track" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
