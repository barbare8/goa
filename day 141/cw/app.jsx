import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Valid email required");
      return;
    }

    setError("");
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-5">
        <div className="bg-white rounded-3xl p-10 max-w-md w-full">
          <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-3xl">
            ✓
          </div>

          <h1 className="text-5xl font-bold mt-8">
            Thanks for subscribing!
          </h1>

          <p className="mt-6 text-gray-600 leading-7">
            A confirmation email has been sent to
            <span className="font-bold"> {email}</span>.
            Please open it and click the button inside to confirm your subscription.
          </p>

          <button
            onClick={() => setSuccess(false)}
            className="mt-8 w-full bg-slate-900 text-white py-4 rounded-xl hover:bg-orange-500 duration-300"
          >
            Dismiss message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl flex flex-col-reverse lg:flex-row p-6 max-w-5xl w-full gap-8">

        {/* LEFT */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-6xl font-bold text-slate-800">
            Stay updated!
          </h1>

          <p className="mt-6 text-gray-600">
            Join 60,000+ product managers receiving monthly updates on:
          </p>

          <div className="mt-8 space-y-4">

            <div className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center">
                ✓
              </div>
              <p>Product discovery and building what matters</p>
            </div>

            <div className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center">
                ✓
              </div>
              <p>Measuring to ensure updates are a success</p>
            </div>

            <div className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center">
                ✓
              </div>
              <p>And much more!</p>
            </div>

          </div>

          <form onSubmit={handleSubmit} className="mt-10">

            <div className="flex justify-between mb-2">
              <label className="font-bold text-sm">
                Email address
              </label>

              {error && (
                <span className="text-red-500 text-sm">
                  {error}
                </span>
              )}
            </div>

            <input
              type="email"
              placeholder="email@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full border rounded-xl p-4 outline-none ${
                error
                  ? "border-red-500 bg-red-100"
                  : "border-gray-300"
              }`}
            />

            <button className="w-full mt-6 bg-slate-900 hover:bg-orange-500 duration-300 text-white py-4 rounded-xl font-semibold">
              Subscribe to monthly newsletter
            </button>

          </form>
        </div>

        {/* RIGHT */}
        <div className="flex-1">
          <div className="rounded-3xl h-full min-h-[500px] bg-gradient-to-b from-orange-400 via-pink-500 to-red-500 flex items-center justify-center">
            <div className="bg-white/20 backdrop-blur-md rounded-3xl p-10 text-center">
              <h2 className="text-white text-4xl font-bold">
                Newsletter
              </h2>

              <p className="text-white mt-4">
                Monthly updates for product managers.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}













import React from "react";
const data = [
  {
    name: "Reaction",
    score: 80,
    icon: "⚡",
    color: "text-red-500",
    bg: "bg-red-100",
  },
  {
    name: "Memory",
    score: 92,
    icon: "🧠",
    color: "text-yellow-500",
    bg: "bg-yellow-100",
  },
  {
    name: "Verbal",
    score: 61,
    icon: "💬",
    color: "text-green-500",
    bg: "bg-green-100",
  },
  {
    name: "Visual",
    score: 72,
    icon: "👁️",
    color: "text-blue-500",
    bg: "bg-blue-100",
  },
];


function App() {
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-5">

      <div className="
      bg-white 
      rounded-3xl 
      shadow-xl 
      overflow-hidden
      flex flex-col md:flex-row
      max-w-[700px]
      w-full
      ">


       

        <div className="
        md:w-1/2
        bg-gradient-to-b
        from-indigo-500
        to-purple-700
        text-white
        p-10
        flex flex-col
        items-center
        rounded-3xl
        ">


          <h2 className="text-lg opacity-80">
            Your Result
          </h2>


          <div className="
          w-40 h-40
          rounded-full
          bg-indigo-700
          flex flex-col
          items-center
          justify-center
          my-8
          ">

            <span className="text-6xl font-bold">
              76
            </span>

            <span className="opacity-60">
              of 100
            </span>

          </div>


          <h1 className="text-3xl font-bold">
            Great
          </h1>


          <p className="
          text-center
          mt-4
          opacity-80
          ">
            You scored higher than 65% of the people
            who have taken these tests.
          </p>


        </div>




        


        <div className="
        md:w-1/2
        p-10
        ">


          <h2 className="
          text-2xl
          font-bold
          mb-6
          ">
            Summary
          </h2>



          <div className="space-y-4">


            {data.map((item) => (

              <div
                key={item.name}
                className={`
                ${item.bg}
                rounded-xl
                p-4
                flex
                justify-between
                items-center
                `}
              >


                <div className="flex gap-3">

                  <span>
                    {item.icon}
                  </span>

                  <span className={item.color}>
                    {item.name}
                  </span>

                </div>



                <span className="font-bold">

                  {item.score}

                  <span className="text-gray-400">
                    /100
                  </span>

                </span>


              </div>

            ))}


          </div>




          <button className="
          mt-8
          w-full
          bg-slate-800
          text-white
          py-3
          rounded-full
          hover:bg-slate-700
          transition
          ">

            Continue

          </button>


        </div>


      </div>


    </main>
  );
}


export default App;