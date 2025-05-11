import sql from "../../backend/config/db";
//, ${userId}
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, userId } = req.body;

    try {
      const result = await sql`
        INSERT INTO playlists (name, user_id)
        VALUES (${name})
        RETURNING *
      `;
      res.status(201).json(result[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to create playlist" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
