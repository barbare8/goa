import { Menu } from "lucide-react";

const news = [
  {
    title: "Hydrogen VS Electric Cars",
    text: "Will hydrogen-powered vehicles ever catch up to EVs?",
  },
  {
    title: "The Downsides of AI Artistry",
    text: "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    title: "Is VC Funding Drying Up?",
    text: "Private funding by VC firms is down 50% YOY.",
  },
];

const articles = [
  {
    id: 1,
    title: "Reviving Retro PCs",
    text: "What happens when old PCs are given modern upgrades?",
    image: "https://picsum.photos/120/120?1",
  },
  {
    id: 2,
    title: "Top 10 Laptops",
    text: "Our best picks for productivity and gaming.",
    image: "https://picsum.photos/120/120?2",
  },
  {
    id: 3,
    title: "Growth of Gaming",
    text: "How the gaming industry continues to expand.",
    image: "https://picsum.photos/120/120?3",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Navbar */}
        <nav className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-black">News.</h1>

          <ul className="hidden md:flex gap-8 text-gray-600">
            <li className="hover:text-orange-500 cursor-pointer">Home</li>
            <li className="hover:text-orange-500 cursor-pointer">New</li>
            <li className="hover:text-orange-500 cursor-pointer">Popular</li>
            <li className="hover:text-orange-500 cursor-pointer">Trending</li>
            <li className="hover:text-orange-500 cursor-pointer">Categories</li>
          </ul>

          <Menu className="md:hidden" size={32} />
        </nav>

        
        <div className="grid lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2">
            <img
              src="https://picsum.photos/900/400"
              alt=""
              className="rounded-xl w-full"
            />

            <div className="grid md:grid-cols-2 gap-8 mt-8">

              <h2 className="text-5xl font-extrabold leading-tight">
                The Bright Future of Web 3.0?
              </h2>

              <div>
                <p className="text-gray-600 mb-6">
                  Explore the next evolution of the web that promises more
                  decentralization, security and user ownership.
                </p>

                <button className="bg-red-500 hover:bg-black transition text-white px-8 py-3 uppercase tracking-widest font-bold">
                  Read More
                </button>
              </div>

            </div>
          </div>

          
          <aside className="bg-slate-900 text-white p-6 rounded-xl">

            <h3 className="text-4xl text-orange-400 font-bold mb-6">
              New
            </h3>

            {news.map((item, index) => (
              <div
                key={index}
                className="py-5 border-b border-slate-700 last:border-none"
              >
                <h4 className="font-bold hover:text-orange-400 cursor-pointer">
                  {item.title}
                </h4>

                <p className="text-slate-400 mt-2 text-sm">
                  {item.text}
                </p>
              </div>
            ))}

          </aside>

        </div>

        

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {articles.map((item) => (
            <div key={item.id} className="flex gap-5">

              <img
                src={item.image}
                className="w-28 h-28 rounded-lg object-cover"
              />

              <div>

                <span className="text-3xl font-bold text-red-400">
                  0{item.id}
                </span>

                <h3 className="font-bold text-lg mt-2 hover:text-red-500 cursor-pointer">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm mt-2">
                  {item.text}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}