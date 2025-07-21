"use client";

import React, { useState } from "react";
import {
  BarChart3,
  Satellite,
  MapPin,
  Users,
  Leaf,
  TrendingUp,
  FileCheck,
  Bell,
  Settings,
  Search,
  Filter,
  Download,
  Eye,
  Edit,
  MoreVertical,
  Calendar,
  DollarSign,
  Shield,
  Activity,
  Globe,
  Zap,
  Target,
  CheckCircle,
  AlertTriangle,
  Plus,
  Menu,
  X,
} from "lucide-react";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  const projects = [
    {
      id: 1,
      name: "Arusha Reforestation Project",
      type: "Forestry",
      status: "Active",
      hectares: 250,
      carbonCredits: 1250,
      verification: "Verified",
      location: "Arusha, Tanzania",
      lastUpdate: "2024-01-15",
    },
    {
      id: 2,
      name: "Smallholder Agroforestry Initiative",
      type: "Agriculture",
      status: "In Progress",
      hectares: 180,
      carbonCredits: 720,
      verification: "Pending",
      location: "Moshi, Tanzania",
      lastUpdate: "2024-01-18",
    },
    {
      id: 3,
      name: "Sustainable Farming Cooperative",
      type: "Agriculture",
      status: "Planning",
      hectares: 320,
      carbonCredits: 0,
      verification: "Not Started",
      location: "Karatu, Tanzania",
      lastUpdate: "2024-01-20",
    },
  ];

  const stats = [
    {
      title: "Total Projects",
      value: "24",
      change: "+12%",
      icon: <Leaf className="w-6 h-6 text-green-600" />,
      color: "green",
    },
    {
      title: "Carbon Credits Generated",
      value: "15,420",
      change: "+8%",
      icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
      color: "blue",
    },
    {
      title: "Total Hectares",
      value: "2,840",
      change: "+15%",
      icon: <MapPin className="w-6 h-6 text-purple-600" />,
      color: "purple",
    },
    {
      title: "Active Clients",
      value: "8",
      change: "+2",
      icon: <Users className="w-6 h-6 text-orange-600" />,
      color: "orange",
    },
  ];

  const notifications = [
    {
      id: 1,
      title: "Verification Complete",
      message: "Arusha Reforestation Project has been successfully verified",
      time: "2 hours ago",
      type: "success",
    },
    {
      id: 2,
      title: "New Data Available",
      message: "Satellite imagery updated for 3 projects",
      time: "4 hours ago",
      type: "info",
    },
    {
      id: 3,
      title: "Action Required",
      message: "Field validation needed for Moshi project",
      time: "1 day ago",
      type: "warning",
    },
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold text-gray-900 mt-2">
                  {stat.value}
                </p>
                <p
                  className={`text-sm mt-2 ${
                    stat.change.startsWith("+")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {stat.change} from last month
                </p>
              </div>
              <div className={`p-3 rounded-lg bg-${stat.color}-50`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Carbon Credits Generated
          </h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">
                Chart visualization would be rendered here
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Project Distribution
          </h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">GIS map would be rendered here</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Recent Activity
        </h3>
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg"
            >
              <div
                className={`p-2 rounded-full ${
                  notification.type === "success"
                    ? "bg-green-100"
                    : notification.type === "warning"
                    ? "bg-yellow-100"
                    : "bg-blue-100"
                }`}
              >
                {notification.type === "success" ? (
                  <CheckCircle className="w-4 h-4 text-green-600" />
                ) : notification.type === "warning" ? (
                  <AlertTriangle className="w-4 h-4 text-yellow-600" />
                ) : (
                  <Activity className="w-4 h-4 text-blue-600" />
                )}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {notification.title}
                </p>
                <p className="text-sm text-gray-600">{notification.message}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {notification.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProjects = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Carbon Projects</h2>
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          New Project
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <button className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-50">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </button>
            <button className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-50">
              <Download className="w-4 h-4 mr-2" />
              Export
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Project
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Hectares
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Credits
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Verification
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {projects.map((project) => (
                <tr key={project.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {project.name}
                      </div>
                      <div className="text-sm text-gray-500 flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {project.location}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        project.type === "Forestry"
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {project.type}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        project.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : project.status === "In Progress"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {project.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {project.hectares}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {project.carbonCredits}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        project.verification === "Verified"
                          ? "bg-green-100 text-green-800"
                          : project.verification === "Pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {project.verification}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-2 hover:bg-gray-100 rounded">
                        <Eye className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded">
                        <Edit className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded">
                        <MoreVertical className="w-4 h-4 text-gray-600" />
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

  const renderVerification = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">MRV & Verification</h2>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Verification Pipeline
            </h3>
            <div className="space-y-4">
              {[
                "Data Collection",
                "AI Analysis",
                "Field Validation",
                "Report Generation",
                "Certification",
              ].map((step, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      index < 3
                        ? "bg-green-100 text-green-600"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {index < 3 ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <div className="w-3 h-3 bg-gray-400 rounded-full" />
                    )}
                  </div>
                  <span
                    className={`font-medium ${
                      index < 3 ? "text-gray-900" : "text-gray-500"
                    }`}
                  >
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const sidebarItems = [
    {
      id: "overview",
      name: "Overview",
      icon: <BarChart3 className="w-5 h-5" />,
    },
    { id: "projects", name: "Projects", icon: <Leaf className="w-5 h-5" /> },
    {
      id: "verification",
      name: "MRV & Verification",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      id: "mapping",
      name: "GIS Mapping",
      icon: <MapPin className="w-5 h-5" />,
    },
    { id: "clients", name: "Clients", icon: <Users className="w-5 h-5" /> },
    {
      id: "analytics",
      name: "Analytics",
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      id: "marketplace",
      name: "Carbon Marketplace",
      icon: <DollarSign className="w-5 h-5" />,
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              Carbon Bloom
            </span>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <nav className="mt-6 px-3">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg mb-1 text-left transition-colors ${
                activeTab === item.id
                  ? "bg-green-50 text-green-700 border-r-2 border-green-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {item.icon}
              <span className="font-medium">{item.name}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6">
          <div className="flex items-center space-x-4">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden">
              <Menu className="w-6 h-6 text-gray-500" />
            </button>
            <h1 className="text-2xl font-bold text-gray-900 capitalize">
              {activeTab}
            </h1>
          </div>

          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <Settings className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <span className="font-medium text-gray-900">Dennis Ruhinda</span>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          {activeTab === "overview" && renderOverview()}
          {activeTab === "projects" && renderProjects()}
          {activeTab === "verification" && renderVerification()}
          {activeTab === "mapping" && (
            <div className="text-center py-20">
              <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900">GIS Mapping</h3>
              <p className="text-gray-500">
                Interactive mapping interface would be implemented here
              </p>
            </div>
          )}
          {activeTab === "clients" && (
            <div className="text-center py-20">
              <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900">
                Client Management
              </h3>
              <p className="text-gray-500">
                Client management interface would be implemented here
              </p>
            </div>
          )}
          {activeTab === "analytics" && (
            <div className="text-center py-20">
              <TrendingUp className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900">
                Advanced Analytics
              </h3>
              <p className="text-gray-500">
                Advanced analytics dashboard would be implemented here
              </p>
            </div>
          )}
          {activeTab === "marketplace" && (
            <div className="text-center py-20">
              <DollarSign className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900">
                Carbon Marketplace
              </h3>
              <p className="text-gray-500">
                Carbon credit marketplace would be implemented here
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
