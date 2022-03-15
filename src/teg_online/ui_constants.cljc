(ns teg-online.ui-constants
  (:require [teg-online.board :as b]))

(def player-colors ["#e41a1c"
                    "#377eb8"
                    "#4daf4a"
                    "#ff7f00"
                    "#ffff33"
                    "purple"
                    "#f781bf"
                    "black"])

(def dice-images ["imgs/Dice-1.svg"
                  "imgs/Dice-2.svg"
                  "imgs/Dice-3.svg"
                  "imgs/Dice-4.svg"
                  "imgs/Dice-5.svg"
                  "imgs/Dice-6a.svg"])

(def card-images {::b/all "imgs/all.png"
                  ::b/ship "imgs/ship.png"
                  ::b/cannon "imgs/cannon.png"
                  ::b/balloon "imgs/balloon.png"})

(def country-data
  {; South America
   ::b/colombia {:position [572 822]
                 :img "imgs/colombia.png"
                 :counter-offset [-12 -24]}
   ::b/peru {:position [598 922]
             :img "imgs/peru.png"
             :counter-offset [-20 -25]}
   ::b/argentina {:position [646 1023]
                  :img "imgs/argentina.png"
                  :counter-offset [22 -20]}
   ::b/chile {:position [630 1028]
              :img "imgs/chile.png"
              :counter-offset [-11 1]}
   ::b/uruguay {:position [758 1023]
                :img "imgs/uruguay.png"
                :counter-offset [-7 -26]}
   ::b/brasil {:position [711 835]
               :img "imgs/brasil.png"
               :counter-offset [-39 -31]}

   ; North America
   ::b/alaska {:position [16 438]
               :img "imgs/alaska.png"
               :counter-offset [-23 -37]}
   ::b/california {:position [208 618]
                   :img "imgs/california.png"
                   :counter-offset [-76 8]}
   ::b/canada {:position [229 213]
               :img "imgs/canada.png"
               :counter-offset [-40 -54]}
   ::b/groenlandia {:position [575 219]
                    :img "imgs/groenlandia.png"
                    :counter-offset [42 -66]}
   ::b/labrador {:position [492 378]
                 :img "imgs/labrador.png"
                 :counter-offset [-5 -12]}
   ::b/mexico {:position [341 693]
               :img "imgs/mexico.png"
               :counter-offset [-43 -48]}
   ::b/nueva-york {:position [317 447]
                   :img "imgs/nueva_york.png"
                   :counter-offset [39 51]}
   ::b/oregon {:position [54 549]
               :img "imgs/oregon.png"
               :counter-offset [-60 26]}
   ::b/terranova {:position [382 423]
                  :img "imgs/terranova.png"
                  :counter-offset [-60 -14]}
   ::b/yukon {:position [105 331]
              :img "imgs/yukon.png"
              :counter-offset [-23 8]}

   ; Africa
   ::b/egipto {:position [1393 948]
               :img "imgs/egipto.png"
               :counter-offset [78 21]}
   ::b/etiopia {:position [1380 1030]
                :img "imgs/etiopia.png"
                :counter-offset [80 26]}
   ::b/madagascar {:position [1647 1086]
                   :img "imgs/madagascar.png"
                   :counter-offset [-30 -31]}
   ::b/sahara {:position [1190 962]
               :img "imgs/sahara.png"
               :counter-offset [-9 -35]}
   ::b/sudafrica {:position [1441 1149]
                  :img "imgs/sudafrica.png"
                  :counter-offset [6 17]}
   ::b/zaire {:position [1301 1088]
              :img "imgs/zaire.png"
              :counter-offset [-9 -41]}

   ; Europa
   ::b/alemania {:position [1301 595]
                 :img "imgs/alemania.png"
                 :counter-offset [0 0]}
   ::b/españa {:position [1038 781]
               :img "imgs/españa.png"
               :counter-offset [-14 -25]}
   ::b/francia {:position [1158 648]
                :img "imgs/francia.png"
                :counter-offset [9 -22]}
   ::b/gran-bretaña {:position [1069 513]
                     :img "imgs/gran_bretaña.png"
                     :counter-offset [33 -28]}
   ::b/islandia {:position [854 489]
                 :img "imgs/islandia.png"
                 :counter-offset [-5 -27]}
   ::b/italia {:position [1311 770]
               :img "imgs/italia.png"
               :counter-offset [-21 -41]}
   ::b/polonia {:position [1358 577]
                :img "imgs/polonia.png"
                :counter-offset [24 -27]}
   ::b/rusia {:position [1364 297]
              :img "imgs/rusia.png"
              :counter-offset [-23 -26]}
   ::b/suecia {:position [1229 322]
               :img "imgs/suecia.png"
               :counter-offset [-22 -17]}

   ; Asia
   ::b/arabia {:position [1617 799]
               :img "imgs/arabia.png"
               :counter-offset [21 27]}
   ::b/aral {:position [1505 259]
             :img "imgs/aral.png"
             :counter-offset [6 -15]}
   ::b/china {:position [1778 364]
              :img "imgs/china.png"
              :counter-offset [-13 11]}
   ::b/gobi {:position [1719 505]
             :img "imgs/gobi.png"
             :counter-offset [-5 -32]}
   ::b/india {:position [1804 724]
              :img "imgs/india.png"
              :counter-offset [-1 -50]}
   ::b/iran {:position [1580 452]
             :img "imgs/iran.png"
             :counter-offset [-35 -41]}
   ::b/israel {:position [1535 772]
               :img "imgs/israel.png"
               :counter-offset [-11 29]}
   ::b/japon {:position [1965 323]
              :img "imgs/japon.png"
              :counter-offset [-5 25]}
   ::b/katchatka {:position [1794 247]
                  :img "imgs/katchatka.png"
                  :counter-offset [-14 -19]}
   ::b/malasia {:position [1940 654]
                :img "imgs/malasia.png"
                :counter-offset [12 14]}
   ::b/mongolia {:position [1626 412]
                 :img "imgs/mongolia.png"
                 :counter-offset [-5 -18]}
   ::b/siberia {:position [1615 280]
                :img "imgs/siberia.png"
                :counter-offset [65 20]}
   ::b/taimir {:position [1662 231]
               :img "imgs/taimir.png"
               :counter-offset [-5 -7]}
   ::b/tartaria {:position [1567 204]
                 :img "imgs/tartaria.png"
                 :counter-offset [-15 -19]}
   ::b/turquia {:position [1496 673]
                :img "imgs/turquia.png"
                :counter-offset [15 -41]}

   ; Oceanía
   ::b/australia {:position [1878 999]
                  :img "imgs/australia.png"
                  :counter-offset [17 -25]}
   ::b/borneo {:position [1921 825]
               :img "imgs/borneo.png"
               :counter-offset [-34 0]}
   ::b/java {:position [2023 824]
             :img "imgs/java.png"
             :counter-offset [-22 -28]}
   ::b/sumatra {:position [1754 938]
                :img "imgs/sumatra.png"
                :counter-offset [26 -17]}})
