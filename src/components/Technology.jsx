import React, { Suspense, useEffect, useState } from "react";
import { X } from "lucide-react";

import TechnologyCard from "./TechnologyCard";
const Technology = () => {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch data from public/data.json
  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        setLoading(true);

        const response = await fetch("/data.json");

        if (!response.ok) {
          throw new Error("Failed to load technologies");
        }

        const data = await response.json();

        setTechnologies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  // Add technology to stack
  const handleAddToStack = (technology) => {
    setStack((previousStack) => {
      // Prevent duplicates
      const alreadyExists = previousStack.some(
        (item) => item.id === technology.id,
      );

      if (alreadyExists) {
        return previousStack;
      }

      return [...previousStack, technology];
    });
  };

  // Remove one technology
  const handleRemove = (id) => {
    setStack((previousStack) => previousStack.filter((item) => item.id !== id));
  };

  // Remove everything
  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <section className="min-h-screen bg-white px-6 py-6 sm:px-4">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Explore the <span className="text-[#06b6d4]">Technologies</span>
          </h1>

          <p className="mt-1 text-[9px] text-slate-500">
            Pick one technology category to build your ideal stack.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_150px]">
          {/* Technologies */}
          <div>
            {loading ? (
              <h1 className="text-sm text-slate-500">Loading...</h1>
            ) : error ? (
              <div className="rounded-lg border border-red-100 bg-red-50 p-5 text-sm text-red-500">
                {error}
              </div>
            ) : (
              <Suspense
                fallback={
                  <h1 className="text-sm text-slate-500">Loading...</h1>
                }
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 xl:grid-cols-3">
                  {technologies.map((technology) => (
                    <TechnologyCard
                      key={technology.id}
                      technology={technology}
                      onAdd={handleAddToStack}
                    />
                  ))}
                </div>
              </Suspense>
            )}
          </div>

          {/* Your Stack */}
          <aside className="h-fit rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <h2 className="text-[10px] font-bold text-slate-900">Your Stack</h2>

            <p className="mt-1 text-[7px] text-slate-400">
              {stack.length} Technologies Selected
            </p>

            {/* Stack Items */}
            <div className="mt-3 space-y-2">
              {stack.length === 0 ? (
                <div className="rounded-md border border-dashed border-slate-200 px-2 py-4 text-center">
                  <p className="text-[8px] text-slate-400">
                    No technologies selected
                  </p>
                </div>
              ) : (
                stack.map((technology) => (
                  <div
                    key={technology.id}
                    className="flex items-center justify-between rounded-md border border-slate-100 p-2"
                  >
                    <div className="flex min-w-0 items-center gap-2">
                      <img
                        src={technology.icon}
                        alt={technology.name}
                        className="h-4 w-4 object-contain"
                      />

                      <span className="truncate text-[8px] font-medium text-slate-700">
                        {technology.name}
                      </span>
                    </div>

                    <button
                      onClick={() => handleRemove(technology.id)}
                      className="text-slate-300 transition hover:text-red-500"
                      aria-label={`Remove ${technology.name}`}
                    >
                      <X size={10} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Remove All */}
            {stack.length > 0 && (
              <button
                onClick={handleRemoveAll}
                className="mt-4 h-7 w-full rounded-md border border-red-200 text-[8px] font-medium text-red-400 transition hover:bg-red-50"
              >
                Remove All
              </button>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Technology;
