

const addEntries = (req, res) => {
  const { name, email } = req.body;

  const insertQuery = "INSERT INTO Students (name, email) VALUES (?, ?)";

  connection.execute(insertQuery, [name, email], (err) => {
    if (err) {
      console.error("Error adding entry:", err);
      res.status(500).send("Error adding entry");
      connection.end();
      return;
    }

    console.log("Entry added successfully");
    res.status(201).send("Entry added successfully");
  });
};

const updateEntries = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

    const updateQuery = "UPDATE Students SET name = ? WHERE id = ?";

    connection.execute(updateQuery, [name, id], (err) => {
        if (err) {
            console.error("Error updating entry:", err);
            res.status(500).send("Error updating entry");
            connection.end();
            return;
        }

        if (connection.affectedRows === 0) {
            res.status(404).send("Student not found");
            connection.end();
            return;
        }

        console.log("Entry updated successfully");
        res.status(200).send("Entry updated successfully");
    });
}

const deleteEntries = (req, res) => {
  const { id } = req.params;

  const deleteQuery = "DELETE FROM Students WHERE id = ?";

  connection.execute(deleteQuery, [id], (err) => {
    if (err) {
      console.error("Error deleting entry:", err);
      res.status(500).send("Error deleting entry");
      connection.end();
      return;
    }

    if (connection.affectedRows === 0) {
      res.status(404).send("Student not found");
      connection.end();
      return;
    }

    console.log("Entry deleted successfully");
    res.status(200).send("Entry deleted successfully");
  });
};

module.exports = {
  addEntries,
  updateEntries,
  deleteEntries,
};
