import { MapPin, Users, Home, Landmark } from 'lucide-react';

export default function History() {
  const timeline = [
    {
      period: "1830-1850s",
      location: "Esa-Oke",
      title: "Origins & The Warrior",
      icon: Landmark,
      description: "Farinto Ajaiyeoba served as a fearless soldier (Loogun kii) during the Yoruba inter-tribal wars. When the British ordered cessation of hostilities, he returned to Esa-Oke near Ilesa, only to discover his relatives had been captured as slaves.",
      image: "https://images.pexels.com/photos/3608056/pexels-photo-3608056.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      period: "Mid-1800s",
      location: "Ibadan (Itutaba)",
      title: "The Quest for Family",
      icon: Users,
      description: "Farinto journeyed to Ibadan, the great center of powerful war lords, to locate and ransom his captured relatives including his mother. At Itutaba, his fellow soldier Adebimpe Apaso recognized him and offered hospitality. Apaso became his adopted father and allocated land for him to build.",
      image: "https://images.pexels.com/photos/5706269/pexels-photo-5706269.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      period: "Late 1800s",
      location: "Apaso Village",
      title: "Transition to Farming",
      icon: Home,
      description: "Following the end of slave trade, Adebimpe Apaso invited Farinto to his farming village near Erunmu. However, the land at Apaso proved less fertile, with indigo plants overgrowing the crops. This prompted the search for better farmland.",
      image: "https://images.pexels.com/photos/2132171/pexels-photo-2132171.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      period: "Late 1800s",
      location: "Ore",
      title: "Growth & Expansion",
      icon: MapPin,
      description: "Farinto's friend Falowo invited him to Ore, offering larger and more fertile farmland. The great Falowo (father of Falade, grandfather of Fadare) became their landlord and compound head. Farinto lived here until his passing and was buried at Ore village.",
      image: "https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      period: "Early 1900s",
      location: "Oloba",
      title: "Permanent Settlement",
      icon: Home,
      description: "Farinto's sons and their families sought larger farmland for growing family needs and permanent ownership. Bankole of Erunmu (father of Bello Omosalewa who married Farinto's daughter Adetoun) offered vast fertile land. The family established permanent settlement at Oloba, cultivating both arable and cash crops including cocoa and palm trees.",
      image: "https://images.pexels.com/photos/1459495/pexels-photo-1459495.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="py-16 bg-gradient-to-r from-amber-900 to-amber-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Our Historical Journey</h1>
          <p className="text-xl text-amber-100 max-w-3xl">
            Tracing the remarkable path of the Farinto Ajaiyeoba family from warrior beginnings
            to peaceful agricultural prosperity across Yorubaland.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {timeline.map((event, index) => {
              const Icon = event.icon;
              return (
                <div
                  key={index}
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } gap-8 items-center`}
                >
                  <div className="md:w-1/2">
                    <div className="relative rounded-xl overflow-hidden shadow-2xl group">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <div className="flex items-center space-x-2 text-white">
                          <MapPin size={20} />
                          <span className="font-semibold text-lg">{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-1/2 space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                        <Icon className="text-white" size={28} />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider">
                          {event.period}
                        </span>
                        <h3 className="text-3xl font-bold text-slate-900">{event.title}</h3>
                      </div>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-amber-50 to-rose-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">Key Historical Notes</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">The Land Dispute Victory</h3>
              <p className="text-slate-700 leading-relaxed">
                The sons of Farinto Ajaiyeoba, led by Adeogun and Ogunkanmi, courageously defended
                their rights when the sons of Bankole attempted to claim half their crops. They won
                a landmark case establishing that after seven years of possession, no landlord could
                snatch crops grown by tenants. This victory secured the family's land rights at Oloba
                and inspired other villages.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">The Itutaba Truth</h3>
              <p className="text-slate-700 leading-relaxed">
                Contrary to false claims, Adebimpe Apaso was the true landlord who hosted both
                Farinto Ajaiyeoba and Odejobi at Itutaba. They were fellow guests and compatriots,
                not landlord and tenant. This historical fact was affirmed through testimony of
                Philips Oladeji (Baba Itutaba) in court proceedings.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">Friendships & Alliances</h3>
              <p className="text-slate-700 leading-relaxed">
                Throughout their journey, the Farinto family maintained strong bonds with hosts and
                neighbors including the families of Adebimpe Apaso, Falowo (Falade, Fadare), Bankole
                (Bello Omosalewa), and Osarinde (Adegunju). These relationships shaped the family's
                success and remain significant today.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">Common Land Heritage</h3>
              <p className="text-slate-700 leading-relaxed">
                The farmland at Oloba remains common property of all Farinto Ajaiyeoba descendants.
                No single branch can claim total ownership. Each family develops their portion while
                honoring the collective inheritance from their grandfather, maintaining unity through
                shared heritage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Legacy Locations</h2>
          <p className="text-lg text-slate-700 mb-8">
            Each place in our journey holds special significance in the family story
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Esa-Oke', significance: 'Ancestral homeland near Ilesa' },
              { name: 'Itutaba', significance: 'First settlement in Ibadan' },
              { name: 'Apaso Village', significance: 'Transition to farming life' },
              { name: 'Ore', significance: 'Growth and Farinto\'s final rest' },
              { name: 'Oloba', significance: 'Permanent family farmland' },
              { name: 'Erunmu', significance: 'Connection through Bankole' }
            ].map((location) => (
              <div key={location.name} className="p-6 bg-gradient-to-br from-amber-50 to-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{location.name}</h3>
                <p className="text-sm text-slate-600">{location.significance}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
