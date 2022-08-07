interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description: "Pendiente: Terminar el cuso de Node",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      description: "En progreso: Terminar el cuso de Next",
      status: "in-progress",
      createdAt: Date.now() - 1,
    },
    {
      description: "Finalizado: Terminar el cuso de React",
      status: "finished",
      createdAt: Date.now() - 2,
    },
  ],
};
