export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg)]">
      <div className="bg-white p-6 rounded-xl w-80 shadow">
        <h2 className="text-lg font-semibold mb-4">Login</h2>
        <input
          placeholder="Email"
          className="w-full mb-3 px-3 py-2 border rounded"
        />
        <input
          placeholder="Password"
          type="password"
          className="w-full mb-4 px-3 py-2 border rounded"
        />
        <button className="w-full bg-[var(--primary)] text-white py-2 rounded">
          Login
        </button>
      </div>
    </div>
  );
}
