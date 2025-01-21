const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center">
      {/* Glassmorphic Container */}
      <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg p-6 w-full max-w-md">
        <h1 className="text-3xl font-semibold text-center text-gray-200">
          Login <span className="text-blue-400">ChatApp</span>
        </h1>
        <form className="mt-6">
          {/* Username Field */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-300"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter username"
              className="input input-bordered w-full mt-1 bg-gray-800 bg-opacity-50 text-gray-200 placeholder-gray-400"
            />
          </div>
          {/* Password Field */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              className="input input-bordered w-full mt-1 bg-gray-800 bg-opacity-50 text-gray-200 placeholder-gray-400"
            />
          </div>
          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="btn btn-primary w-full bg-gray-800 hover:bg-gray-900 bg-opacity-50 border-none text-white"
            >
              Login
            </button>
          </div>
        </form>
        {/* Additional Links */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-300">
            {"Don’t"} have an account? {' '}
            <a href="/signup" className="text-blue-400 hover:underline">
             Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
