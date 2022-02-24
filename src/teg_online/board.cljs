(ns teg-online.board)

(def continents {::asia {:name "Asia" :bonus 7}
                 ::europa {:name "Europa" :bonus 5}
                 ::north-america {:name "América del Norte" :bonus 5}
                 ::south-america {:name "América del Sur" :bonus 3}
                 ::africa {:name "África" :bonus 3}
                 ::oceania {:name "Oceanía" :bonus 2}})

(def countries {; South America
                ::argentina {:name "Argentina"
                             :continent ::south-america
                             :neighbours #{::peru ::brasil ::uruguay ::chile}}
                ::chile {:name "Chile"
                         :continent ::south-america
                         :neighbours #{::peru ::argentina ::australia}}
                ::peru {:name "Perú"
                        :continent ::south-america
                        :neighbours #{::colombia ::brasil ::argentina ::chile}}
                ::brasil {:name "Brasil"
                          :continent ::south-america
                          :neighbours #{::colombia ::peru ::argentina ::uruguay ::sahara}}
                ::uruguay {:name "Uruguay"
                           :continent ::south-america
                           :neighbours #{::argentina ::brasil}}
                ::colombia {:name "Colombia"
                            :continent ::south-america
                            :neighbours #{::peru ::brasil ::mexico}}

                ; North America
                ::alaska {:name "Alaska"
                          :continent ::north-america
                          :neighbours #{::yukon ::oregon ::katchatka}}
                ::yukon {:name "Yukón"
                         :continent ::north-america
                         :neighbours #{::alaska ::canada ::oregon}}
                ::canada {:name "Canadá"
                          :continent ::north-america
                          :neighbours #{::yukon ::oregon ::nueva-york ::terranova}}
                ::oregon {:name "Oregon"
                          :continent ::north-america
                          :neighbours #{::alaska ::yukon ::canada ::nueva-york ::california}}
                ::nueva-york {:name "Nueva York"
                              :continent ::north-america
                              :neighbours #{::canada ::terranova ::groenlandia ::california ::oregon}}
                ::terranova {:name "Terranova"
                             :continent ::north-america
                             :neighbours #{::canada ::labrador ::nueva-york}}
                ::labrador {:name "Labrador"
                            :continent ::north-america
                            :neighbours #{::terranova ::groenlandia}}
                ::groenlandia {:name "Groenlandia"
                               :continent ::north-america
                               :neighbours #{::labrador ::nueva-york ::islandia}}
                ::california {:name "California"
                              :continent ::north-america
                              :neighbours #{::oregon ::nueva-york ::mexico}}
                ::mexico {:name "México"
                          :continent ::north-america
                          :neighbours #{::california ::colombia}}

                ; Africa
                ::sahara {:name "Sahara"
                          :continent ::africa
                          :neighbours #{::zaire ::etiopia ::egipto ::brasil ::españa}}
                ::zaire {:name "Zaire"
                         :continent ::africa
                         :neighbours #{::sahara ::etiopia ::sudafrica ::madagascar}}
                ::etiopia {:name "Etiopía"
                           :continent ::africa
                           :neighbours #{::sahara ::egipto ::sudafrica ::zaire}}
                ::sudafrica {:name "Sudáfrica"
                             :continent ::africa
                             :neighbours #{::zaire ::etiopia}}
                ::egipto {:name "Egipto"
                          :continent ::africa
                          :neighbours #{::sahara ::etiopia ::madagascar ::polonia ::israel ::turquia}}
                ::madagascar {:name "Madagascar"
                              :continent ::africa
                              :neighbours #{::egipto ::zaire}}

                ; Europa
                ::islandia {:name "Islandia"
                            :continent ::europa
                            :neighbours #{::groenlandia ::suecia ::gran-bretaña}}
                ::gran-bretaña {:name "Gran Bretaña"
                                :continent ::europa
                                :neighbours #{::islandia ::españa ::alemania}}
                ::suecia {:name "Suecia"
                          :continent ::europa
                          :neighbours #{::islandia ::rusia}}
                ::rusia {:name "Rusia"
                         :continent ::europa
                         :neighbours #{::suecia ::polonia ::aral ::iran ::turquia}}
                ::polonia {:name "Polonia"
                           :continent ::europa
                           :neighbours #{::alemania ::egipto ::rusia ::turquia}}
                ::alemania {:name "Alemania"
                            :continent ::europa
                            :neighbours #{::gran-bretaña ::francia ::italia ::polonia}}
                ::italia {:name "Italia"
                          :continent ::europa
                          :neighbours #{::francia ::alemania}}
                ::francia {:name "Francia"
                           :continent ::europa
                           :neighbours #{::españa ::alemania ::italia}}
                ::españa {:name "España"
                          :continent ::europa
                          :neighbours #{::gran-bretaña ::sahara ::francia}}

                ; Asia
                ::aral {:name "Aral"
                        :continent ::asia
                        :neighbours #{::rusia ::tartaria ::siberia ::iran ::mongolia}}
                ::tartaria {:name "Tartaria"
                            :continent ::asia
                            :neighbours #{::aral ::siberia ::taimir}}
                ::taimir {:name "Taimir"
                          :continent ::asia
                          :neighbours #{::tartaria ::siberia}}
                ::siberia {:name "Siberia"
                           :continent ::asia
                           :neighbours #{::aral ::tartaria ::taimir ::katchatka ::china ::mongolia}}
                ::katchatka {:name "Katchatka"
                             :continent ::asia
                             :neighbours #{::alaska ::japon ::china ::siberia}}
                ::iran {:name "Irán"
                        :continent ::asia
                        :neighbours #{::aral ::mongolia ::gobi ::china ::india ::turquia ::rusia}}
                ::mongolia {:name "Mongolia"
                            :continent ::asia
                            :neighbours #{::aral ::siberia ::china ::gobi ::iran}}
                ::china {:name "China"
                         :continent ::asia
                         :neighbours #{::siberia ::katchatka ::japon ::malasia ::india ::iran ::gobi ::mongolia}}
                ::japon {:name "Japón"
                         :continent ::asia
                         :neighbours #{::katchatka ::china}}
                ::gobi {:name "Gobi"
                        :continent ::asia
                        :neighbours #{::iran ::mongolia ::china}}
                ::india {:name "India"
                         :continent ::asia
                         :neighbours #{::iran ::china ::malasia ::sumatra}}
                ::malasia {:name "Malasia"
                           :continent ::asia
                           :neighbours #{::india ::china ::borneo}}
                ::turquia {:name "Turquía"
                           :continent ::asia
                           :neighbours #{::polonia ::rusia ::iran ::arabia ::israel ::egipto}}
                ::israel {:name "Israel"
                          :continent ::asia
                          :neighbours #{::turquia ::arabia ::egipto}}
                ::arabia {:name "Arabia"
                          :continent ::asia
                          :neighbours #{::israel ::turquia}}

                ; Oceanía
                ::sumatra {:name "Sumatra"
                           :continent ::oceania
                           :neighbours #{::india ::australia}}
                ::borneo {:name "Borneo"
                          :continent ::oceania
                          :neighbours #{::malasia ::australia}}
                ::java {:name "Java"
                        :continent ::oceania
                        :neighbours #{::australia}}
                ::australia {:name "Australia"
                             :continent ::oceania
                             :neighbours #{::sumatra ::borneo ::java ::chile}}})

(def card-symbols #{::balloon ::cannon ::ship ::all})

(def cards #{[::argentina ::all]
             [::chile ::balloon]
             [::peru ::ship]
             [::brasil ::ship]
             [::uruguay ::balloon]
             [::colombia ::balloon]})