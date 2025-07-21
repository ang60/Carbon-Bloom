"use client";
import React, { useState } from "react";
import { Leaf, MapPin, Users, Calendar, CheckCircle } from "lucide-react";

const Assignment = () => {
  const [selectedPlot, setSelectedPlot] = useState("");
  const [selectedFarmer, setSelectedFarmer] = useState("");
  const [groupAssignment, setGroupAssignment] = useState("");
  const [assignmentDate, setAssignmentDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Assignment submitted");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <Leaf className="w-16 h-16 text-green-200" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Plot Assignment System
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Connecting farmers with fertile lands for sustainable agriculture
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Form Section */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border-t-4 border-green-500">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <MapPin className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  Assign Plots to Farmers
                </h2>
                <p className="text-gray-600">
                  Match the right farmer with the perfect plot
                </p>
              </div>

              <div className="space-y-6">
                {/* Plot Selection */}
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                    <MapPin className="w-5 h-5 mr-2 text-green-600" />
                    Select Plot
                  </label>
                  <select
                    value={selectedPlot}
                    onChange={(e) => setSelectedPlot(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-green-100 focus:border-green-500 transition-all duration-200 text-gray-800 bg-white"
                  >
                    <option value="">Choose a plot...</option>
                    <option value="kilimanjaro">
                      🏔️ Kilimanjaro Slopes (P001) - 5.2 acres
                    </option>
                    <option value="mbeya">
                      🌾 Mbeya Highlands (P002) - 3.8 acres
                    </option>
                    <option value="arusha">
                      🌱 Arusha Plains (P003) - 7.1 acres
                    </option>
                    <option value="dodoma">
                      🌿 Dodoma Valley (P004) - 4.5 acres
                    </option>
                  </select>
                </div>

                {/* Farmer Selection */}
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                    <Users className="w-5 h-5 mr-2 text-green-600" />
                    Assign to Farmer
                  </label>
                  <select
                    value={selectedFarmer}
                    onChange={(e) => setSelectedFarmer(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-green-100 focus:border-green-500 transition-all duration-200 text-gray-800 bg-white"
                  >
                    <option value="">Choose a farmer...</option>
                    <option value="kamau">
                      👨‍🌾 Mwalimu Kamau - Maize Specialist
                    </option>
                    <option value="neema">
                      👩‍🌾 Mama Neema - Vegetable Expert
                    </option>
                    <option value="juma">👨‍🌾 Baba Juma - Coffee Grower</option>
                    <option value="fatuma">
                      👩‍🌾 Bi Fatuma - Fruit Orchards
                    </option>
                  </select>
                </div>

                {/* Group Assignment */}
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                    <Users className="w-5 h-5 mr-2 text-green-600" />
                    Group Assignment
                  </label>
                  <select
                    value={groupAssignment}
                    onChange={(e) => setGroupAssignment(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-green-100 focus:border-green-500 transition-all duration-200 text-gray-800 bg-white"
                  >
                    <option value="">Select assignment type...</option>
                    <option value="individual">👤 Individual Farmer</option>
                    <option value="chagga">🤝 Chagga Cooperative</option>
                    <option value="highland">🏔️ Highland Farmers Union</option>
                    <option value="maasai">🐄 Maasai Cooperative</option>
                  </select>
                </div>

                {/* Assignment Date */}
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                    <Calendar className="w-5 h-5 mr-2 text-green-600" />
                    Assignment Date
                  </label>
                  <input
                    type="date"
                    value={assignmentDate}
                    onChange={(e) => setAssignmentDate(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-green-100 focus:border-green-500 transition-all duration-200 text-gray-800 bg-white"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Assign Plot to Farmer
                </button>
              </div>
            </div>
          </div>

          {/* Visual Section */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Background Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-200 rounded-full opacity-20"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-emerald-200 rounded-full opacity-20"></div>

              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-8 lg:p-12 shadow-xl">
                <div className="text-center space-y-8">
                  {/* Hero Icon */}
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full shadow-lg">
                    <Leaf className="w-12 h-12 text-white" />
                  </div>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-2xl p-6 shadow-md">
                      <div className="text-3xl font-bold text-green-600">
                        1,250
                      </div>
                      <div className="text-sm text-gray-600">Active Plots</div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-md">
                      <div className="text-3xl font-bold text-emerald-600">
                        890
                      </div>
                      <div className="text-sm text-gray-600">Farmers</div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-md">
                      <div className="text-3xl font-bold text-green-600">
                        45
                      </div>
                      <div className="text-sm text-gray-600">Cooperatives</div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-md">
                      <div className="text-3xl font-bold text-emerald-600">
                        98%
                      </div>
                      <div className="text-sm text-gray-600">Success Rate</div>
                    </div>
                  </div>

                  {/* Feature List */}
                  <div className="text-left space-y-3">
                    <div className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-sm">
                        Smart plot matching algorithm
                      </span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      <span className="text-sm">Soil quality assessment</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-sm">Cooperative integration</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      <span className="text-sm">Digital documentation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Growing Together, Harvesting Success
          </h3>
          {/* <p className="text-gray-600 leading-relaxed">
            Our advanced plot assignment system ensures optimal matching between
            farmers and agricultural lands, promoting sustainable farming
            practices and maximizing crop yields across Tanzania.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Assignment;
