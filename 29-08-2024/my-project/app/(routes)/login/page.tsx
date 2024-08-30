import NavBar from "@/app/(components)/NavBar";

export default function Login() {
  return (
    <>
      {/* <NavBar /> */}
      <main>
        <form className="login-form">
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Password:
            <input type="password" name="password" required />
          </label>
          <button type="submit">Login</button>
        </form>
      </main>
    </>
  );
}
