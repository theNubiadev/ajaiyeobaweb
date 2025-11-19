import { Users } from 'lucide-react';

export default function FamilyTree() {
  const relations = [
    {
      name: "Fatuase",
      children: [
        { name: "Adediran", children: [] }
      ]
    },
    {
      name: "Adesola (female)",
      children: []
    },
    {
      name: "Farinto Ajaiyeoba (male)",
      isFounder: true,
      children: [
        {
          name: "Adeogun",
          children: [
            "Durodola", "Adunola", "Oladeji", "Onaolapo", "Adeniyi", "Felix Oduwole"
          ]
        },
        {
          name: "Adeniyi",
          children: [
            "Ajitoni (F)", "Olajimi", "Samson Adekola", "Tunbosun", "Akintade",
            "Laoye Williams", "Idowu", "Kehinde (F)"
          ]
        },
        {
          name: "Ogundepo",
          children: [
            "Oladimeji", "Comfort (F)", "Thomas", "Adeyoola", "Rebecca", "Titilade"
          ]
        },
        {
          name: "Ogunkanmi",
          children: [
            "Ephraim", "Modupe Akinfenwa (F)", "Ruth", "Isaac Oladokun", "Matthew Alagbe",
            "Hannah (F)", "Keke (F)", "Taiwo (F)", "Mary (F)"
          ]
        },
        {
          name: "Omoboade (girl)",
          children: []
        },
        {
          name: "Ogunjinmi (girl)",
          children: []
        },
        {
          name: "Adetoun (girl - Iya Alate)",
          children: []
        },
        {
          name: "Olajumoke (girl)",
          children: []
        },
        {
          name: "Adediran (boy)",
          children: []
        },
        {
          name: "Ogunjinmi",
          children: [
            "Kehinde Olabisi (F)", "Taiye Bolarinwa", "Caleb", "Simeon Ajaiyeoba"
          ]
        }
      ]
    },
    {
      name: "Ajayi (male)",
      children: [
        {
          name: "Adeleke (girl)",
          children: []
        },
        {
          name: "Subuloa (girl)",
          note: "Grandmother of Ololade",
          children: []
        }
      ]
    },
    {
      name: "Ojo (male)",
      children: [
        { name: "Aina (girl)", children: [] },
        { name: "Adekunle (boy)", children: [] }
      ]
    },
    {
      name: "Aiyelagbe (female)",
      children: [
        {
          name: "Adediran",
          children: [
            "Makanjuola Lawrence (Dr.)", "Kayode", "Oluwagbemisola", "Dada",
            "Eniola Adeniran (F)", "Iyabo (F)", "Moberesola (F)"
          ]
        },
        { name: "Aderele", children: [] }
      ]
    }
  ];

  const landOwners = [
    {
      name: "ADEOGUN",
      descendants: ["Durodola", "Adunola", "Oladeji", "Onaolapo", "Adeniyi", "Felix Oduwole"]
    },
    {
      name: "ADENIJI",
      descendants: ["Ajitoni (F)", "Olajimi", "Samson Adekola", "Tunbosun", "Akintade", "Laoye Williams", "Idowu", "Kehinde (F)"]
    },
    {
      name: "OGUNDIPE",
      descendants: ["Oladimeji", "Comfort (F)", "Thomas", "Adeyoola", "Rebecca", "Titilade"]
    },
    {
      name: "OGUNKANMI",
      descendants: ["Ephraim", "Modupe Akinfenwa (F)", "Ruth", "Isaac Oladokun", "Matthew Alagbe", "Hannah (F)", "Keke (F)", "Taiwo (F)", "Mary (F)"]
    },
    {
      name: "OGUNJINMI",
      descendants: ["Kehinde Olabisi (F)", "Taiye Bolarinwa", "Caleb", "Simeon Ajaiyeoba"]
    },
    {
      name: "ADEDIRAN",
      descendants: ["Makanjuola Lawrence (Dr.)", "Kayode", "Oluwagbemisola", "Dada", "Eniola Adeniran (F)", "Iyabo (F)", "Moberesola (F)"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="py-16 bg-gradient-to-r from-emerald-900 to-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-4">
            <Users size={48} />
            <h1 className="text-5xl font-bold">Family Tree</h1>
          </div>
          <p className="text-xl text-emerald-100 max-w-3xl">
            The descendants of Farinto Ajaiyeoba, spanning multiple generations from Esa-Oke to Oloba.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">The Founding Generation</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Farinto Ajaiyeoba and his siblings formed the foundation of our family legacy
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {relations.map((person, idx) => (
              <div key={idx} className={`bg-white rounded-xl shadow-lg p-8 ${person.isFounder ? 'ring-4 ring-amber-400 lg:col-span-2' : ''}`}>
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 ${person.isFounder ? 'bg-gradient-to-br from-amber-500 to-amber-600' : 'bg-gradient-to-br from-emerald-500 to-emerald-600'} rounded-full flex items-center justify-center`}>
                    <Users className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold ${person.isFounder ? 'text-amber-900' : 'text-slate-900'}`}>
                      {person.name}
                    </h3>
                    {person.isFounder && (
                      <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider">
                        Founder - From Esa-Oke
                      </span>
                    )}
                  </div>
                </div>

                {person.children && person.children.length > 0 && (
                  <div className="space-y-4">
                    <h4 className="font-semibold text-slate-700 text-lg border-b pb-2">
                      Children:
                    </h4>
                    <div className="grid gap-4">
                      {person.children.map((child, childIdx) => (
                        <div key={childIdx} className="bg-gradient-to-r from-slate-50 to-white p-4 rounded-lg border border-slate-200">
                          <p className="font-semibold text-slate-900 mb-2">
                            {typeof child === 'string' ? child : child.name}
                          </p>
                          {typeof child === 'object' && child.children && child.children.length > 0 && (
                            <div className="mt-3 pl-4 border-l-2 border-amber-300">
                              <p className="text-sm text-slate-600 mb-2">Grandchildren:</p>
                              <div className="flex flex-wrap gap-2">
                                {child.children.map((grandchild, gcIdx) => (
                                  <span key={gcIdx} className="text-xs px-3 py-1 bg-amber-100 text-amber-800 rounded-full">
                                    {grandchild}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                          {typeof child === 'object' && child.note && (
                            <p className="text-sm text-emerald-700 mt-2 italic">* {child.note}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-amber-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Land Stewards at Oloba</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              The children of Farinto Ajaiyeoba who possessed their father's land commonly among them at Oloba.
              The farmland is common property belonging to grandfather Farinto Ajaiyeoba - no one can claim total ownership.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {landOwners.map((branch, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
                <div className="flex items-center space-x-3 mb-4 pb-4 border-b-2 border-emerald-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                    <Users className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{branch.name}</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-slate-600 mb-3">Current Generation:</p>
                  <div className="space-y-2">
                    {branch.descendants.map((desc, descIdx) => (
                      <div key={descIdx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className="text-sm text-slate-700">{desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-amber-900 mb-4 text-center">Important Note on Land Inheritance</h3>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                <span className="font-semibold">No direct child is alive.</span> The current occupants are grandchildren
                of Farinto Ajaiyeoba. Each late father's children (the grandchildren) share portions of developed land
                on the common grandfather's property.
              </p>
              <p>
                <span className="font-semibold">The farmland at Oloba is common property.</span> All descendants share
                in the inheritance based on the portion each could develop. No land at Oloba is bonafide individual
                property - all land belongs collectively to the family as inheritance from Farinto Ajaiyeoba.
              </p>
              <p className="text-center font-semibold text-emerald-800 pt-4 border-t">
                Unity in Heritage • Strength in Community • Honor in Sharing
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
