const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");
const e = require("express");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

//privet- 1c978893-8f32-4acf-9abd-d6a3e2af518a

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "1c978893-8f32-4acf-9abd-d6a3e2af518a" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }

});

app.listen(3001);
