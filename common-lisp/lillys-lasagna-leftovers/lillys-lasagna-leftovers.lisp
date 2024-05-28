(defpackage :lillys-lasagna-leftovers
  (:use :cl)
  (:export
   :preparation-time
   :remaining-minutes-in-oven
   :split-leftovers))

(in-package :lillys-lasagna-leftovers)

;; Define function preparation-time
(defun preparation-time (&rest layers)
  (* 19 (length layers)))

;; Define function remaining-minutes-in-oven
(defun remaining-minutes-in-oven (&optional (cook-time nil cook-time-supplied-p))
  (if cook-time-supplied-p 
    (case cook-time
      (:very-short (- 337 200))
      (:shorter (- 337 100))
      ((nil) 0)
      (:normal 337)
      (:longer (+ 337 100))
      (:very-long (+ 337 200)))
    '337))

;; Define function split-leftovers
(defun split-leftovers (&key (weight :just-split-it weight-supplied-p) (human 10) (alien 10))
  (cond ((and weight-supplied-p (null weight))
          :looks-like-someone-was-hungry)
        (weight-supplied-p
          (- weight (+ human alien)))
        (t weight)))
