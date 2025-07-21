import React from "react";
import { Navbar1 } from "../../components/navbar1";
import Footer from "../../components/footer2";

const Create = () => {
  return (
    <>
      <Navbar1 />
      <div className="min-h-screen bg-white">
        <main className="max-w-6xl mx-auto p-8 space-y-16">
          <section>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Project Setup
              </h2>
              <p className="text-gray-600">
                Create and configure your carbon project with all necessary
                details
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Form Section */}
                <div>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Project Name
                      </label>
                      <input
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        placeholder="e.g. Arusha Agroforestry 2025"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Type
                      </label>
                      <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all">
                        <option>Agroforestry</option>
                        <option>Reforestation</option>
                        <option>Afforestation</option>
                        <option>Soil Carbon</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Geography
                      </label>
                      <input
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        placeholder="e.g. Arusha, Tanzania"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Size (ha)
                      </label>
                      <input
                        type="number"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        placeholder="e.g. 100"
                      />
                    </div>

                    {/* <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Baseline Data
                    </label>
                    <textarea
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 h-24 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                      placeholder="Describe baseline carbon stock, land use, etc."
                    />
                  </div> */}

                    {/* <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Assign Project Managers & Field Officers
                    </label>
                    <input
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="Add emails or select users"
                    />
                  </div> */}

                    <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-md">
                      Create Project
                    </button>
                  </div>
                </div>

                {/* Image Section */}
                <div className="flex items-center justify-center">
                  <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl p-8 w-full h-96 flex flex-col items-center justify-center">
                    <div className="w-64 h-48 bg-white rounded-lg shadow-md flex items-center justify-center mb-4 overflow-hidden">
                      <img
                        src="/project-visualization-image.jpg"
                        alt="Project Visualization"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Create;
