(ns exe1)

(defn contem?
  [s1 s2]
  (let [s1 (frequencies s1)
        s2 (frequencies s2)]
    (if (>= (count s2) (count s1))
      (every? (fn [[key value]]
                (>= (get s2 key 0) value))
              s1)
      false)))