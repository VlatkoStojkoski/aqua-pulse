import Link from "next/link";

export default function GetStarted() {
	return (
		<div className="flex items-center justify-center mx-auto h-screen bg-neutral-900">
      <div className="px-7 py-7 bg-neutral-200 rounded">
        <h2 className="text-2xl font-extrabold text-center">Sign Up</h2>
        <div className="mb-8 text-center">
          <span className="text-md font-normal">
						Already a member?&nbsp;
            <a href="log-in.html" className="underline text-primary">Log in</a>
					</span>
        </div>
        <form className="flex flex-col gap-4">
          <div>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-3 py-2 border rounded"
              placeholder="Username"
              required
            />
          </div>
          <div>
            <input
              type="text"
              id="country"
              name="country"
              className="w-full px-3 py-2 border rounded"
              placeholder="Country"
              required
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded"
              placeholder="Password"
              required
            />
          </div>
          <div>
            <textarea
              id="bio"
              name="bio"
              className="w-full px-3 py-2 border rounded"
              placeholder="Bio"
            ></textarea>
          </div>
          <Link
            href="/profile"
            className="bg-primary text-white font-bold py-2 px-4 mt-8 rounded hover:bg-blue-700 text-center"
          >
            Sign Up
          </Link>
        </form>
      </div>
    </div>
	)
}