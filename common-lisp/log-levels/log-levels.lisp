(defpackage :log-levels
  (:use :cl)
  (:export :log-message :log-severity :log-format))

(in-package :log-levels)

; message format "[ohno]: message"
(defun log-message (log-string)
  (subseq log-string 8))

(defun log-severity (log-string)
  (let ((level (string-downcase (subseq log-string 1 5))))
    (cond ((string= level "info") :everything-ok)
          ((string= level "warn") :getting-worried)
          ((string= level "ohno") :run-for-cover))))

(defun log-format (log-string)
  (let ((message (log-message log-string))
       (severity (log-severity log-string)))
    (case severity
      (:everything-ok (string-downcase message))
      (:getting-worried (string-capitalize message))
      (:run-for-cover (string-upcase message)))))
