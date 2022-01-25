(ns teg-online.main)

(def continents {::asia {:name "Asia" :bonus 7}
                 ::europa {:name "Europa" :bonus 5}
                 ::north-america {:name "América del Norte" :bonus 5}
                 ::south-america {:name "América del Sur" :bonus 3}
                 ::africa {:name "África" :bonus 3}
                 ::oceania {:name "Oceanía" :bonus 2}})

(def countries {::argentina {:name "Argentina"
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
                            :neighbours #{::peru ::brasil}}})



(defn init []
  (print "RICHO!"))
