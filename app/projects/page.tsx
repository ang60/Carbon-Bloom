"use client";

import React from "react";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-6xl mx-auto p-8 space-y-16">
        {/* Header Section */}
        <section className="text-center py-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Carbon Project Management
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Carbon Bloom is a technology-driven climate platform enabling
              tracking, verification, and monetization of agricultural-based
              carbon projects using GIS, AI, drone imagery, and more.
            </p>
          </div>
        </section>

        {/* Project Operations */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Project Operations
            </h2>
            <p className="text-gray-600">
              Manage all aspects of your carbon project operations
            </p>
          </div>

          <div className="grid gap-8">
            {/* Boundary & Plot Management */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Boundary & Plot Management
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    GIS-based plot creation (draw/upload polygons on map), link
                    plots to farmers or groups, and manage all plots in a
                    project.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Draw boundaries on interactive map
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Upload existing plot data
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Link plots to farmers
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7"
                        />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-800">
                      GIS Map Interface
                    </h4>
                    <p className="text-sm text-gray-600 mt-2">
                      Interactive mapping tools
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Activity Planning & Logging */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Activity Planning & Logging
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Schedule and record field activities (planting, monitoring,
                    harvest, etc.), upload supporting evidence (photos, notes,
                    geotags).
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Schedule field activities
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Record activity logs
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Upload photos and evidence
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-800">
                      Activity Planner
                    </h4>
                    <p className="text-sm text-gray-600 mt-2">
                      Schedule and track activities
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Task Assignment & Tracking */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Task Assignment & Tracking
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Assign, accept, and track tasks for field staff with
                    real-time updates and progress monitoring.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      Assign tasks to field staff
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      Track task progress
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      Monitor completion rates
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-800">
                      Task Management
                    </h4>
                    <p className="text-sm text-gray-600 mt-2">
                      Team coordination dashboard
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
