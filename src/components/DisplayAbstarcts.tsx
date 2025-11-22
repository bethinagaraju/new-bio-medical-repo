import React, { useEffect, useState } from "react";
import axios from "axios";
import { FileText, Globe, Phone, Mail, User, Building } from "lucide-react";

interface AbstractData {
  id: number;
  title: string;
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  organization: string;
  country: string;
  created_at: string;
  document_url: string | null;
}

const DisplayAbstracts: React.FC = () => {
  const [abstracts, setAbstracts] = useState<AbstractData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAbstracts = async () => {
      try {
        const response = await axios.get("https://robotics-backend-node.vercel.app/api/abstracts");
        // const response = await axios.get("http://localhost:5000/api/abstracts");
        setAbstracts(response.data);
      } catch (error) {
        console.error("Error fetching abstracts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAbstracts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-600 text-lg">
        Loading abstracts...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-10 px-6">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
        Submitted Abstracts
      </h1>

      {abstracts.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          No abstracts found.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {abstracts.map((abs) => (
            <div
              key={abs.id}
              className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <User className="w-5 h-5 text-blue-600" />
                {abs.title} {abs.fullName}
              </h2>

              <div className="text-gray-600 text-sm space-y-2">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-green-600" />
                  {abs.phoneNumber}
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-pink-600" />
                  {abs.emailAddress}
                </p>
                <p className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-purple-600" />
                  {abs.organization}
                </p>
                <p className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-orange-600" />
                  {abs.country}
                </p>
                <p className="text-xs text-gray-500">
                  Submitted on:{" "}
                  {new Date(abs.created_at).toLocaleString("en-US", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                </p>
              </div>

              {abs.document_url ? (
                <a
                  href={abs.document_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
                >
                  <FileText className="w-4 h-4" />
                  View Abstract
                </a>
              ) : (
                <p className="mt-4 text-sm text-gray-500 italic">
                  No document uploaded.
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DisplayAbstracts;
