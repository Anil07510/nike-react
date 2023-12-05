

import Button from "../components/Button";
const Subscribe = () => {
  return (
    <div id="subscribe" className="max-container flex flex-col justify-between items-center">
      <h2 className="font-bold text-2xl">
        Sign Up For <span className="text-coral-red">Updates </span> &
        Newsletter
      </h2>
      <div className=" flex flex-end my-4 sm:min-w-fit">
        <form
          className="flex justify-between flex-col"
          action="https://formsubmit.co/aniraj07510@gmail.com"
          method="POST"
        >
          <input
            className="px-1 py-2 my-3 rounded input bg-state-800 bg-gray-100 text-black text-bold "
            type="textarea"
            name="message"
            placeholder="type your text here"
            required
          />
          <div className="flex flex-row">
            <input
              className="px-5 py-2  mr-2 rounded-l-lg border-none input bg-state-800 bg-slate-100 text-coral-red text-bold"
              type="email"
              name="email"
              placeholder="subscribe@gmail.com"
              required
            />
            {/* <input type="email" name="email" required /> */}
            <button
              type="submit"
              className="px-3 py-2 rounded-r-lg text-white bg-coral-red"
            >
              subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
