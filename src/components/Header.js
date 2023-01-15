const Headers = () => (
  <div
    style={{
      justifyContent: "space-between",
      display: "flex",
    }}
  >
    <img
      src="https://cdn.logo.com/hotlink-ok/logo-social.png"
      alt="logo"
      style={{ height: 40, width: 40 }}
    />
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        onChange={(e, value) => {
          console.log(e.target.value);
        }}
      />
      <button
        onClick={() => {
          console.log("click");
        }}
      >
        Search
      </button>
    </div>
    <img
      src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars.png"
      alt="logo"
      style={{ height: 40, width: 40 }}
    />
  </div>
);

export default Headers;
