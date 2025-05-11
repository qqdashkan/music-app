import sql from "../../backend/config/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, avatar } = req.body;

    try {
      const result = await sql`
        INSERT INTO users (name, avatar)
        VALUES (${name}, ${avatar})
        RETURNING *
      `;
      res.status(201).json(result[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to create user" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
