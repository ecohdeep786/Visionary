import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export default function PersonaGrid() {
  const roles = ["Student", "Teacher", "Parent", "Professional", "Organization"];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <blockquote className="text-2xl italic text-gray-700 max-w-4xl mx-auto mb-20">
          "Visionary provides visual explanations, guided support, and simple creation tools for every stage of learning..."
        </blockquote>

        <h2 className="text-3xl font-bold mb-10">Visionary solves real learning problems for every category</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {roles.map((role) => (
            <button
              key={role}
              className={`px-6 py-2 rounded-full border ${role === 'Student' ? 'bg-black text-white' : 'bg-white text-gray-600'}`}>
              {role}
            </button>
          ))}
        </div>

        <div className="bg-white p-12 rounded-3xl shadow-sm flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 text-left">
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded text-sm font-bold">Student</span>
            <h3 className="text-4xl font-bold mt-4 mb-4">Learning for Students</h3>
            <p className="text-gray-600 mb-6">Learn with clear 3D visuals, instant doubt help, and guided practice for every class and exam.</p>
            <Link to={createPageUrl('students')} className="inline-flex items-center gap-2 text-black font-bold">
              Explore Students <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="md:w-1/2">
            <img src="/api/placeholder/600/400" alt="Student learning" className="rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}