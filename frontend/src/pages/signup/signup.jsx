import GenderCheckbox from "./GenderCheckbox";

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center">
      {/* Glassmorphic Container */}
      <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg p-6 w-full max-w-sm">
        <h1 className="text-xl font-semibold text-center text-gray-200">
          Signup <span className="text-blue-400">ChatApp</span>
        </h1>
        <form className="mt-4">
          {/* Full Name Field */}
          <div className="mb-3">
            <label
              htmlFor="fullname"
              className="block text-sm font-medium text-gray-300"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              placeholder="Enter full name"
              className="input input-bordered w-full mt-1 bg-gray-800 bg-opacity-50 text-gray-200 placeholder-gray-400 text-sm"
            />
          </div>
          {/* Username Field */}
          <div className="mb-3">
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
              className="input input-bordered w-full mt-1 bg-gray-800 bg-opacity-50 text-gray-200 placeholder-gray-400 text-sm"
            />
          </div>
          {/* Password Field */}
          <div className="mb-3">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              className="input input-bordered w-full mt-1 bg-gray-800 bg-opacity-50 text-gray-200 placeholder-gray-400 text-sm"
            />
          </div>
          {/* Confirm Password Field */}
          <div className="mb-3">
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-300"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm password"
              className="input input-bordered w-full mt-1 bg-gray-800 bg-opacity-50 text-gray-200 placeholder-gray-400 text-sm"
            />
          </div>
          {/* Gender Field */}
          <div className="mb-3">
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-gray-300"
            >
              Gender
            </label>
            <GenderCheckbox />
          </div>

          {/* Submit Button */}
          <div className="mt-5">
            <button
              type="submit"
              className="btn w-full bg-gray-800 hover:bg-gray-900 border-none text-white text-sm py-2"
            >
              Signup
            </button>
          </div>
        </form>
        {/* Additional Links */}
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-300">
            Already have an account?{" "}
            <a href="/login" className="text-blue-400 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
