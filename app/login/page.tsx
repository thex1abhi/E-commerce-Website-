import { RiGithubFill, RiGoogleFill } from "@remixicon/react";

function Login() {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center    px-4">
      <div className="w-full max-w-md">

        {/* Card */}
        <div className="bg-white border border-neutral-200 rounded-2xl shadow-lg p-6 sm:p-8 space-y-6">
          
          {/* Heading */}
          <div className="text-center space-y-1">
            <h2 className="text-2xl font-semibold text-neutral-900">
              Welcome Back
            </h2>
            <p className="text-neutral-500 text-sm">
              Please login to continue shopping
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5">
            {/* Inputs */}
            <div className="space-y-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-neutral-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email id"
                  className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-neutral-700">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                />
              </div>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-neutral-600">
                <input type="checkbox" className="accent-amber-600" />
                Remember Me
              </label>

              <a
                href="#"
                className="text-amber-600 hover:underline font-medium"
              >
                Forgot Password?
              </a>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-amber-600 text-white py-2.5 rounded-lg font-medium hover:bg-amber-700 transition"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-neutral-200" />
            <span className="text-sm text-neutral-400">
              Or continue with
            </span>
            <div className="flex-1 h-px bg-neutral-200" />
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 border border-neutral-300 rounded-lg py-2.5 hover:bg-neutral-50 transition">
              <RiGoogleFill className="text-lg text-red-500" />
              Google
            </button>

            <button className="flex items-center justify-center gap-2 border border-neutral-300 rounded-lg py-2.5 hover:bg-neutral-50 transition">
              <RiGithubFill className="text-lg" />
              Github
            </button>
          </div>

          {/* Signup */}
          <div className="text-center text-sm text-neutral-600">
            Don&apos;t have an account?
            <a
              href="#"
              className="ml-1 text-amber-600 font-medium hover:underline"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;