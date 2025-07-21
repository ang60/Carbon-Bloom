// "use client";

// import React from "react";

// export default function BoundaryPlotManagementPage() {
//   return (
//     <div className="min-h-screen bg-white">
//       <main className="max-w-4xl mx-auto p-8 space-y-12">
//         <section className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-4">
//             Boundary & Plot Management
//           </h1>
//           <p className="text-gray-700 mb-6">
//             Manage your project's boundaries and plots using GIS tools. Draw or
//             upload polygons, link plots to farmers or groups, and view/manage
//             all plots in your project.
//           </p>
//         </section>

//         {/* GIS-based plot creation */}
//         <section className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-8">
//           <h2 className="text-2xl font-semibold text-gray-900 mb-3">
//             GIS-based Plot Creation
//           </h2>
//           <p className="text-gray-600 mb-4">
//             Draw boundaries directly on the map or upload existing polygon data
//             (GeoJSON, KML, etc.).
//           </p>
//           <div className="border border-dashed rounded p-6 text-center text-gray-500 bg-gray-50 mb-4">
//             [GIS Map Drawing/Upload Component Placeholder]
//           </div>
//         </section>

//         {/* Link plots to farmers or groups */}
//         <section className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-8">
//           <h2 className="text-2xl font-semibold text-gray-900 mb-3">
//             Link Plots to Farmers or Groups
//           </h2>
//           <p className="text-gray-600 mb-4">
//             Assign each plot to a farmer or group for better tracking and
//             management.
//           </p>
//           <div className="border border-dashed rounded p-6 text-center text-gray-500 bg-gray-50 mb-4">
//             [Plot-to-Farmer/Group Linking Component Placeholder]
//           </div>
//         </section>

//         {/* View/manage all plots */}
//         <section className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
//           <h2 className="text-2xl font-semibold text-gray-900 mb-3">
//             View & Manage All Plots
//           </h2>
//           <p className="text-gray-600 mb-4">
//             See a list of all plots in this project, edit details, or remove
//             plots as needed.
//           </p>
//           <div className="border border-dashed rounded p-6 text-center text-gray-500 bg-gray-50">
//             [Plots Table/List Component Placeholder]
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

"use client";
import React, { useState } from "react";
import {
  MapPin,
  Upload,
  Users,
  Grid3x3,
  Plus,
  Search,
  Filter,
  Download,
  Edit3,
  Trash2,
  Eye,
  Map,
  Layers,
  Settings,
  MoreHorizontal,
  User,
  UserCheck,
  Calendar,
  BarChart3,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

export default function BoundaryPlotManagementPage() {
  const [activeTab, setActiveTab] = useState("map");
  const [selectedPlots, setSelectedPlots] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  // Mock data for demonstration
  const plots = [
    {
      id: "P001",
      name: "Kilimanjaro Slopes",
      area: "12.5 ha",
      farmer: "Mwalimu Kamau",
      group: "Chagga Cooperative",
      status: "active",
      crops: "Coffee, Bananas",
      lastUpdated: "2024-01-15",
      coordinates: "3.0674°S, 37.3556°E",
    },
    {
      id: "P002",
      name: "Mbeya Highlands",
      area: "8.2 ha",
      farmer: "Mama Neema",
      group: "Highland Farmers Union",
      status: "pending",
      crops: "Tea, Maize",
      lastUpdated: "2024-01-10",
      coordinates: "8.9094°S, 33.4607°E",
    },
    {
      id: "P003",
      name: "Arusha Plains",
      area: "15.8 ha",
      farmer: "Baba Juma",
      group: "Maasai Cooperative",
      status: "active",
      crops: "Wheat, Sunflower",
      lastUpdated: "2024-01-12",
      coordinates: "3.3669°S, 36.6830°E",
    },
  ];

  const filteredPlots = plots.filter((plot) => {
    const matchesSearch =
      plot.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plot.farmer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterStatus === "all" || plot.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const handlePlotSelect = (plotId) => {
    setSelectedPlots((prev) =>
      prev.includes(plotId)
        ? prev.filter((id) => id !== plotId)
        : [...prev, plotId]
    );
  };

  const TabButton = ({ id, icon: Icon, label, isActive, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
        isActive
          ? "bg-blue-600 text-white shadow-lg"
          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
      }`}
    >
      <Icon size={18} />
      {label}
    </button>
  );

  const StatCard = ({ icon: Icon, title, value, trend, color = "blue" }) => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <div className="flex items-center justify-between">
        <div className={`p-3 rounded-lg bg-${color}-100`}>
          <Icon className={`text-${color}-600`} size={24} />
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>
      {trend && (
        <div className="mt-4 flex items-center gap-1">
          <span
            className={`text-sm ${
              trend.positive ? "text-green-600" : "text-red-600"
            }`}
          >
            {trend.value}
          </span>
          <span className="text-xs text-gray-500">vs last month</span>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Boundary & Plot Management
              </h1>
              <p className="text-gray-600 mt-1">
                Manage farm boundaries, plots, and farmer assignments
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                <Plus size={18} />
                New Plot
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Upload size={18} />
                Import Data
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={Grid3x3}
            title="Total Plots"
            value="248"
            trend={{ positive: true, value: "+12%" }}
            color="blue"
          />
          <StatCard
            icon={Users}
            title="Farmers Registered"
            value="156"
            trend={{ positive: true, value: "+8%" }}
            color="green"
          />
          <StatCard
            icon={MapPin}
            title="Total Area"
            value="2,450 ha"
            trend={{ positive: true, value: "+5%" }}
            color="purple"
          />
          <StatCard
            icon={BarChart3}
            title="Active Plots"
            value="198"
            trend={{ positive: false, value: "-2%" }}
            color="orange"
          />
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 mb-6">
          <TabButton
            id="map"
            icon={Map}
            label="Map View"
            isActive={activeTab === "map"}
            onClick={setActiveTab}
          />
          <TabButton
            id="plots"
            icon={Grid3x3}
            label="Plot Management"
            isActive={activeTab === "plots"}
            onClick={setActiveTab}
          />
          <TabButton
            id="farmers"
            icon={Users}
            label="Farmer Assignments"
            isActive={activeTab === "farmers"}
            onClick={setActiveTab}
          />
          <TabButton
            id="analytics"
            icon={BarChart3}
            label="Analytics"
            isActive={activeTab === "analytics"}
            onClick={setActiveTab}
          />
        </div>

        {/* Tab Content */}
        {activeTab === "map" && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Map Tools Panel */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-900">Drawing Tools</h3>
                </div>
                <div className="p-4 space-y-3">
                  <button className="w-full flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
                    <Edit3 size={18} />
                    Draw Polygon
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    <Upload size={18} />
                    Upload GeoJSON
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    <Upload size={18} />
                    Upload KML
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    <Download size={18} />
                    Export Data
                  </button>
                </div>

                <div className="p-4 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Map Layers
                  </h4>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="rounded text-blue-600"
                      />
                      <span className="text-sm text-gray-700">
                        Plot Boundaries
                      </span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="rounded text-blue-600"
                      />
                      <span className="text-sm text-gray-700">
                        Farmer Labels
                      </span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="rounded text-blue-600"
                      />
                      <span className="text-sm text-gray-700">Elevation</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="rounded text-blue-600"
                      />
                      <span className="text-sm text-gray-700">
                        Satellite View
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 h-96">
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">
                      Interactive Map
                    </h3>
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100">
                        <Layers size={18} />
                      </button>
                      <button className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100">
                        <Settings size={18} />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-8 flex items-center justify-center h-80 bg-gradient-to-br from-green-50 to-blue-50">
                  <div className="text-center">
                    <MapPin className="mx-auto text-gray-400 mb-4" size={48} />
                    <p className="text-gray-500 text-lg">
                      Interactive GIS Map Component
                    </p>
                    <p className="text-gray-400 text-sm mt-2">
                      Leaflet, Mapbox, or Google Maps integration
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "plots" && (
          <div className="space-y-6">
            {/* Search and Filter Bar */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
              <div className="flex items-center gap-4">
                <div className="flex-1 relative">
                  <Search
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <input
                    type="text"
                    placeholder="Search plots, farmers, or locations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="pending">Pending</option>
                  <option value="inactive">Inactive</option>
                </select>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Filter size={18} />
                  More Filters
                </button>
              </div>
            </div>

            {/* Plots Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">Plot Overview</h3>
                  {selectedPlots.length > 0 && (
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">
                        {selectedPlots.length} selected
                      </span>
                      <button className="px-3 py-1 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors">
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left">
                        <input
                          type="checkbox"
                          className="rounded text-blue-600"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedPlots(filteredPlots.map((p) => p.id));
                            } else {
                              setSelectedPlots([]);
                            }
                          }}
                        />
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Plot
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Farmer
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Group
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Area
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Crops
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredPlots.map((plot) => (
                      <tr key={plot.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <input
                            type="checkbox"
                            className="rounded text-blue-600"
                            checked={selectedPlots.includes(plot.id)}
                            onChange={() => handlePlotSelect(plot.id)}
                          />
                        </td>
                        <td className="px-6 py-4">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {plot.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {plot.id}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <User className="text-gray-400" size={16} />
                            <span className="text-sm text-gray-900">
                              {plot.farmer}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-900">
                            {plot.group}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-900">
                            {plot.area}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              plot.status === "active"
                                ? "bg-green-100 text-green-800"
                                : plot.status === "pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {plot.status === "active" ? (
                              <CheckCircle2 size={12} className="mr-1" />
                            ) : (
                              <AlertCircle size={12} className="mr-1" />
                            )}
                            {plot.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-900">
                            {plot.crops}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                              <Eye size={16} />
                            </button>
                            <button className="p-1 text-gray-600 hover:bg-gray-50 rounded">
                              <Edit3 size={16} />
                            </button>
                            <button className="p-1 text-red-600 hover:bg-red-50 rounded">
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === "farmers" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Farmer Assignment Interface */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900">
                  Assign Plots to Farmers
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Plot
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Kilimanjaro Slopes (P001)</option>
                      <option>Mbeya Highlands (P002)</option>
                      <option>Arusha Plains (P003)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Assign to Farmer
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Mwalimu Kamau</option>
                      <option>Mama Neema</option>
                      <option>Baba Juma</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Group Assignment
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Individual</option>
                      <option>Chagga Cooperative</option>
                      <option>Highland Farmers Union</option>
                      <option>Maasai Cooperative</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Assignment Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    Assign Plot
                  </button>
                </div>
              </div>
            </div>

            {/* Recent Assignments */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900">
                  Recent Assignments
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {plots.map((plot) => (
                    <div
                      key={plot.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <UserCheck className="text-blue-600" size={20} />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">
                            {plot.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            Assigned to {plot.farmer}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">
                          {plot.lastUpdated}
                        </p>
                        <span className="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                          Active
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "analytics" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Plot Distribution Chart */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900">
                  Plot Distribution by Status
                </h3>
              </div>
              <div className="p-8 flex items-center justify-center h-64">
                <div className="text-center">
                  <BarChart3 className="mx-auto text-gray-400 mb-4" size={48} />
                  <p className="text-gray-500">Chart Component</p>
                  <p className="text-gray-400 text-sm mt-2">
                    Recharts or Chart.js integration
                  </p>
                </div>
              </div>
            </div>

            {/* Area Analysis */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900">Area Analysis</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Mapped Area</span>
                    <span className="font-semibold text-gray-900">
                      2,450 ha
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Average Plot Size</span>
                    <span className="font-semibold text-gray-900">9.88 ha</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Largest Plot</span>
                    <span className="font-semibold text-gray-900">25.3 ha</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Smallest Plot</span>
                    <span className="font-semibold text-gray-900">2.1 ha</span>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Coverage Efficiency</span>
                      <span className="font-semibold text-green-600">92%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
