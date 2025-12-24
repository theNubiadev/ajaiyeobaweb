export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-2">Farinto (Ajaiyeoba Jejeniwa) Family</h3>
          <p className="text-slate-300 text-sm mb-4">
            Preserving our heritage from Esa-Oke to Ibadan, Apaso, Ore, and Oloba
                  </p>
                    <p className="text-slate-300 text-sm mb-4">
                {new Date().getFullYear}
          </p>
          <div className="flex justify-center items-center space-x-2 text-slate-400 text-sm">
            <span>Legacy of</span>
            <span className="text-amber-400 font-semibold">Integrity</span>
            <span>•</span>
            <span className="text-amber-400 font-semibold">Honor</span>
            <span>•</span>
            <span className="text-amber-400 font-semibold">Strength</span>
                  </div>
                 
        </div>
      </div>
    </footer>
  );
}
