import { Shield, Heart, Award } from "lucide-react"

export default function HomePage() {
    return (
        <>
            <div className="min-h-screen">
                <section className="relative h-[600px]  bg-linear-to-br from-amber-900 via-amber-800 to-slate-900 text-white overflow-hidden">
                    <div className="absolute bg-cover bg-center inset-0 ">
                        {/* Image Background */}
                    </div>
                    <div>
                        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                            <div className="max-w-3xl animate-fade-in">
                                <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">Ajaiyeoba Family Dynasty</h1>
                                <p className="text-xl sm:text-2xl mb-4 text-amber-100 leading-relaxed">
                                    A Legacy of Honor, Strength, and Integrity
                                </p>
                                <p className="text-lg text-amber-200 leading-relaxed max-w-2xl">
                                    From the battlefields of the Yoruba inter-tribal wars to the peaceful farmlands of Oloba,
                                    our family's journey is one of resilience, courage, and unwavering values.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-white ">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Family Values</h2>
                            <p className="text-lg text-slate-600">The principles that have guided us through generations</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 ">
                        <div className="group p-8 bg-linear-to-br  from-amber-50 to-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-16 h-16 bg-linear-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Shield className="text-white" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Integrity</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Standing firm in truth and righteousness, our ancestors built a reputation of honor
                                that echoes through generations. The name Ajaiyeoba Jejeniwa speaks of one who enjoyed
                                royal patronage yet chose humility.
                            </p>
                        </div>
                        <div className="group p-8 bg-gradient-to-br from-rose-50 to-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-rose-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Heart className="text-white" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Honor</h3>
                            <p className="text-slate-600 leading-relaxed">
                                From seeking his captured relatives to building a thriving community, Farinto Ajaiyeoba
                                demonstrated unwavering loyalty to family and commitment to doing what is right.
                            </p>
                        </div>
                        <div className="group p-8 bg-gradient-to-br from-emerald-50 to-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Award className="text-white" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Strength</h3>
                            <p className="text-slate-600 leading-relaxed">
                                A fearless soldier who transitioned to peaceful farming, our ancestor showed that
                                true strength lies not just in warfare but in building, nurturing, and protecting family legacy.
                            </p>
                        </div>
                    </div>
                </section >



                <section className="py-16 bg-gradient-to-br from-slate-50 to-amber-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-4xl font-bold text-slate-900 mb-6">The Meaning of Ajaiyeoba Jejeniwa</h2>
                                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                                    <span className="font-semibold text-amber-700">Ajaiyeoba Jejeniwa</span> is an oriki (praise name)
                                    with profound meaning:
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                                        <p className="text-slate-700">
                                            <span className="font-semibold">Somebody who was great in fame</span> - Recognized and celebrated
                                            for exceptional deeds and character
                                        </p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                                        <p className="text-slate-700">
                                            <span className="font-semibold">Enjoyed the patronage of the king</span> - Held in high esteem
                                            by royalty and leadership
                                        </p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                                        <p className="text-slate-700">
                                            <span className="font-semibold">Had the advantage of going scot-free</span> - Possessed influence
                                            and respect that commanded authority
                                        </p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                                        <p className="text-slate-700">
                                            <span className="font-semibold">Chose to be humble, peaceful, and gentle</span> - Despite power
                                            and position, remained grounded in virtue
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="rounded-xl overflow-hidden shadow-2xl">
                                    <img
                                        src="https://images.pexels.com/photos/8553840/pexels-photo-8553840.jpeg?auto=compress&cs=tinysrgb&w=800"
                                        alt="African heritage"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-amber-200 rounded-full -z-10 opacity-50"></div>
                                <div className="absolute -top-6 -right-6 w-32 h-32 bg-rose-200 rounded-full -z-10 opacity-50"></div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Journey</h2>
                        <p className="text-lg text-slate-700 leading-relaxed mb-8">
                            From Esa-Oke near Ilesa to the vibrant city of Ibadan, through Itutaba, Apaso, and Ore,
                            finally settling in the fertile lands of Oloba - our family's migration tells a story
                            of perseverance, friendship, and the relentless pursuit of a better life.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold">
                            {['Esa-Oke', 'Ibadan (Itutaba)', 'Apaso', 'Ore', 'Oloba'].map((place, index) => (
                                <div key={place} className="flex items-center">
                                    <div className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full shadow-lg">
                                        {place}
                                    </div>
                                    {index < 4 && (
                                        <div className="mx-2 text-amber-600">→</div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


            </div >
        </>
    )
}