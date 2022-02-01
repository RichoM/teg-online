(ns teg-online.board)

(def continents {::asia {:name "Asia" :bonus 7}
                 ::europa {:name "Europa" :bonus 5}
                 ::north-america {:name "América del Norte" :bonus 5}
                 ::south-america {:name "América del Sur" :bonus 3}
                 ::africa {:name "África" :bonus 3}
                 ::oceania {:name "Oceanía" :bonus 2}})

(def countries {; South América
                ::argentina {:name "Argentina"
                             :continent ::south-america
                             :neighbours #{::peru ::brasil ::uruguay ::chile}}
                ::chile {:name "Chile"
                         :continent ::south-america
                         :neighbours #{::peru ::argentina}}
                ::peru {:name "Perú"
                        :continent ::south-america
                        :neighbours #{::colombia ::brasil ::argentina ::chile}}
                ::brasil {:name "Brasil"
                          :continent ::south-america
                          :neighbours #{::colombia ::peru ::argentina ::uruguay}}
                ::uruguay {:name "Uruguay"
                           :continent ::south-america
                           :neighbours #{::argentina ::brasil}}
                ::colombia {:name "Colombia"
                            :continent ::south-america
                            :neighbours #{::peru ::brasil ::mexico}}

                ; North América
                ::alaska {:name "Alaska"
                          :continent ::north-america
                          :neighbours #{::yukon ::oregon}}
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
                               :neighbours #{::labrador ::nueva-york}}
                ::california {:name "California"
                              :continent ::north-america
                              :neighbours #{::oregon ::nueva-york ::mexico}}
                ::mexico {:name "México"
                          :continent ::north-america
                          :neighbours #{::california ::colombia}}})

(def card-symbols #{::balloon ::cannon ::ship ::all})

(def cards #{[::argentina ::all]
             [::chile ::balloon]
             [::peru ::ship]
             [::brasil ::ship]
             [::uruguay ::balloon]
             [::colombia ::balloon]})