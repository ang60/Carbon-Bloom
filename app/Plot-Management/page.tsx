"use client";
import React, { useState } from "react";
import {
  Search,
  Filter,
  User,
  CheckCircle2,
  AlertCircle,
  Eye,
  Edit3,
  Trash2,
} from "lucide-react";

// Dummy data for demonstration
const initialPlots = [
  {
    id: "PLOT-001",
    name: "Plot 1",
    farmer: "John Doe",
    group: "Group A",
    area: "2.5 ha",
    status: "active",
    crops: "Maize, Beans",
  },
  {
    id: "PLOT-002",
    name: "Plot 2",
    farmer: "Jane Smith",
    group: "Group B",
    area: "1.8 ha",
    status: "pending",
    crops: "Wheat",
  },
  // Add more plots as needed
];

export default function PlotManagementPage() {
  const [activeTab, setActiveTab] = useState("plots");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedPlots, setSelectedPlots] = useState<string[]>([]);
  const [plots, setPlots] = useState(initialPlots);

  const filteredPlots = plots.filter((plot) => {
    const matchesSearch =
      plot.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plot.farmer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plot.group.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === "all" || plot.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handlePlotSelect = (id) => {
    setSelectedPlots((prev) =>
      prev.includes(id) ? prev.filter((plotId) => plotId !== id) : [...prev, id]
    );
  };

  return (
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
                      <div className="text-sm text-gray-500">{plot.id}</div>
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
                    <span className="text-sm text-gray-900">{plot.group}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-900">{plot.area}</span>
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
                    <span className="text-sm text-gray-900">{plot.crops}</span>
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
  );
}
