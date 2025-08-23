import SocialIcons from '../../../../components/socialIcons';
import ProjectCarousel from '../../../../components/ProjectCarousel';

const App = () => {
  return (
    <main className="min-h-screen bg-gray-100 font-sans">
      <div className="flex flex-col md:flex-row w-full min-h-screen">
        {/* Left Pane */}
        <div className="w-full md:w-2/5 lg:w-1/3 bg-white flex flex-col items-center justify-center p-8 sm:p-12 text-center space-y-6">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQGtHMpTYdjWwA/profile-displayphoto-shrink_400_400/B56ZTRxPe1HwAg-/0/1738686135680?e=1757548800&v=beta&t=tBNXXL-tZJpxY4qpZ05BeLNd7Gcd-JiRr-NlGcrg8Bo"
            alt="Edun Rilwan"
            className="w-40 h-40 md:w-48 md:h-48 rounded-md object-cover shadow-lg"
          />

          <div className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-mono tracking-widest text-gray-800">
              &lt;EDUN RILWAN&gt;
            </h1>
            <p className="text-gray-600">Software Engineer</p>
          </div>

          <button
            className="w-full max-w-xs px-8 py-3 bg-violet-500 text-white font-bold rounded-lg hover:bg-violet-600 transition-colors duration-300 transform hover:scale-105"
          >
            PORTFOLIO
          </button>

          <SocialIcons />
        </div>

        {/* Right Pane */}
        <div className="w-full md:w-3/5 lg:w-2/3 bg-violet-600 flex flex-col items-center justify-center p-8 sm:p-12 text-white text-center md:text-left space-y-8">
          <div className="max-w-md">
            <h2 className="text-4xl md:text-5xl font-mono mb-6">
              &lt;/About Me&gt;
            </h2>
            <p className="text-violet-100 leading-relaxed">
              I am a diligent senior software engineer with 10 years of
              experience in business applications. I am eager to join a
              tech company that builds out-of-the-box solutions for
              regional clients. I am skilled in developing plans,
              managing projects, and user documentation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center md:justify-start max-w-md">
            <ProjectCarousel/>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
