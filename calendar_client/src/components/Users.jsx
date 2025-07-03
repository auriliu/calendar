export default function Users() {
  const users = [
    {
      name: "Maria",
      avatar: "",
      status: "active",
    },
    {
      name: "Li",
      avatar: "",
      status: "active",
    },
    {
      name: "Oliver",
      avatar: "",
      status: "active",
    },
    {
      name: "Amina",
      avatar: "",
      status: "active",
    },
    {
      name: "Dmitri",
      avatar: "",
      status: "inactive",
    },
    {
      name: "Sophia",
      avatar: "",
      status: "active",
    },
  ];

  function handleDelete(index) {
    if (confirm("are you sure?")) {
      console.log("user deleted: ", index + 1);
    }
  }

  return (
    <>
      <div>
        {users.map((user, index) => (
          <div key={index} className="users-inner">
            <span className="avatar"></span>
            <span
              style={
                user.status !== "active" ? { color: "red" } : { color: "green" }
              }
            >
              {user.name}
            </span>
            <button title="remove the user" onClick={() => handleDelete(index)}>
              {" "}
              -
            </button>
          </div>
        ))}
      </div>
      <br />
      <div className="users-inner">
        <span>add new user</span>
        <button title="add a new user">+</button>
      </div>
    </>
  );
}
