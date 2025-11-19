import { BookOpen, Music, Heart } from 'lucide-react';

export default function Oriki() {
  const orikiLines = [
    { yoruba: "Omo Aja(i)yeoba jeje,", english: "Child of the one famous and gentle" },
    { yoruba: "Omo Ekun,", english: "Child of the Leopard (brave and strong)" },
    { yoruba: "Omo Alade,", english: "Child of the Crown owner" },
    { yoruba: "Omo Orangun ile ila Ajo,", english: "Child of the king of Ila-Orangun" },
    { yoruba: "Omo aripere pon omi odi,", english: "Child of one who fetches water from the moat" },
    { yoruba: "Amontaide,", english: "One who is well-connected" },
    { yoruba: "Omo olowo yalumo,", english: "Child of the wealthy and wise" },
    { yoruba: "Yemoja Pele yeju baba mhi,", english: "Gentle Yemoja, respectful and honorable" },
    { yoruba: "Omo oloye,", english: "Child of the titled one" },
    { yoruba: "Ire mogun.", english: "Goodness/blessing from Igun" },
    { yoruba: "Omo Ekun, Omo Alade,", english: "Child of the Leopard, Child of the Crown" },
    { yoruba: "Omo olodo kan olere re,", english: "Child of one who has singular honor" },
    { yoruba: "Omo olodo kan otaarara,", english: "Child of one person of distinction" },
    { yoruba: "Omo pelejeju,", english: "Child who is gentle and respectful" },
    { yoruba: "Ijesa mogun onire.", english: "Ijesa person, bringer of blessings" },
    { yoruba: "Omo Owa,", english: "Child of the Owa (King of Ilesa)" },
    { yoruba: "Omo olobi wonwo tiriwo,", english: "Child of one who gave birth to twins" },
    { yoruba: "Omo Bale nile momo re,", english: "Child of the compound head at home" },
    { yoruba: "Nibiti won ti nfi ila keke dabira,", english: "Where they use okra to cover the body" },
    { yoruba: "Baba re ni Ijesa,", english: "Your father is from Ijesa" },
    { yoruba: "Ijesa Abeni,", english: "Ijesa, the well-born" },
    { yoruba: "Omo olobi wonwo tiriwo,", english: "Child of one who gave birth to twins" },
    { yoruba: "Eyi to bo si iju eranko a muje,", english: "The one who arrives where animals are will eat meat" },
    { yoruba: "Ijesa omo eleni ewele,", english: "Ijesa child with slender legs" },
    { yoruba: "Omo eleni ateka,", english: "Child with tall/elegant stature" },
    { yoruba: "Ijesa modu apanada,", english: "Ijesa, black and beautiful" },
    { yoruba: "Ijesa o ridi isana,", english: "Ijesa who is straightforward" },
    { yoruba: "Ile lomo ti muna roko.", english: "It is from home that the child learns to farm" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="py-16 bg-gradient-to-r from-rose-900 via-rose-800 to-amber-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6069103/pexels-photo-6069103.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-4">
            <BookOpen size={48} />
            <h1 className="text-5xl font-bold">Oriki Ajaiyeoba</h1>
          </div>
          <p className="text-xl text-rose-100 max-w-3xl">
            The praise poetry and eulogy of our ancestors - a rhythmic celebration of heritage, character, and legacy
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="bg-gradient-to-br from-amber-50 to-rose-50 rounded-xl p-8 shadow-lg">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Music className="text-white" size={28} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-3">Understanding Oriki</h2>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    Oriki is a traditional Yoruba form of praise poetry that celebrates lineage, accomplishments,
                    and character. It is often chanted during ceremonies, celebrations, and important family gatherings.
                    Each line carries deep meaning, connecting us to our ancestors and their virtues.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-2xl overflow-hidden mb-12">
            <div className="bg-gradient-to-r from-amber-600 to-rose-600 px-8 py-6">
              <h3 className="text-2xl font-bold text-white flex items-center space-x-3">
                <Heart size={28} />
                <span>ORIKI AJA(I)YEOBA</span>
              </h3>
            </div>

            <div className="p-8">
              <div className="space-y-6">
                {orikiLines.map((line, idx) => (
                  <div
                    key={idx}
                    className="group hover:bg-gradient-to-r hover:from-amber-50 hover:to-rose-50 p-4 rounded-lg transition-all duration-300"
                  >
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start space-x-3">
                        <span className="font-bold text-amber-600 text-lg">{idx + 1}.</span>
                        <p className="text-lg font-semibold text-slate-900 italic">{line.yoruba}</p>
                      </div>
                      <div className="md:border-l-2 md:border-amber-200 md:pl-4">
                        <p className="text-slate-700">{line.english}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-xl shadow-lg p-8">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Themes in Our Oriki</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start space-x-3">
                  <span className="text-amber-600 font-bold">•</span>
                  <span><span className="font-semibold">Royal Heritage:</span> References to crowns, kings (Owa, Orangun), and nobility</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-amber-600 font-bold">•</span>
                  <span><span className="font-semibold">Strength & Bravery:</span> Leopard symbolism, warrior qualities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-amber-600 font-bold">•</span>
                  <span><span className="font-semibold">Gentleness:</span> Balance of power with humility and respect</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-amber-600 font-bold">•</span>
                  <span><span className="font-semibold">Ijesa Identity:</span> Pride in homeland and cultural roots</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-white rounded-xl shadow-lg p-8">
              <div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-rose-600 rounded-full flex items-center justify-center mb-6">
                <Heart className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Living the Oriki</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                The Oriki is not merely words to recite, but a code of conduct to embody. Each generation
                is called to:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start space-x-3">
                  <span className="text-rose-600 font-bold">•</span>
                  <span>Honor the legacy of strength and gentleness</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-rose-600 font-bold">•</span>
                  <span>Maintain connections to our Ijesa heritage</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-rose-600 font-bold">•</span>
                  <span>Demonstrate wisdom and good character</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-rose-600 font-bold">•</span>
                  <span>Pass these values to future generations</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-900 to-rose-900 text-white rounded-xl shadow-2xl p-8 text-center">
            <Music className="mx-auto mb-6" size={48} />
            <h3 className="text-3xl font-bold mb-4">The Rhythm of Heritage</h3>
            <p className="text-lg text-amber-100 leading-relaxed max-w-3xl mx-auto">
              When the Oriki is chanted at family gatherings, it awakens the spirit of our ancestors.
              It reminds us that we are part of an unbroken chain stretching from Esa-Oke through centuries,
              carrying forward the values of integrity, honor, and strength that define the Farinto Ajaiyeoba family.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-slate-50 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Preserving Our Voice</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              The Oriki is more than historical record - it is the living voice of our family.
              By learning, reciting, and teaching it to our children, we ensure that the legacy
              of Farinto Ajaiyeoba Jejeniwa continues to inspire and guide future generations.
            </p>
            <div className="inline-block bg-white rounded-lg shadow-lg p-6">
              <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-600">
                Omo Aja(i)yeoba jeje
              </p>
              <p className="text-slate-600 mt-2">Child of the one famous and gentle</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
