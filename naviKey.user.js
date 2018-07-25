// ==UserScript==
// @name         naviKey
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Keyboard navigation for prawojazdy.com.pl exams
// @author       Dawid Sygocki
// @match        https://ekurs.prawojazdy.com.pl/prawojazdy/egzamin/148
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener('keydown', naviKey, false);
})();

function naviKey(e) {
    var keyCode = e.code;
	if (document.getElementById('endExamBtn').innerHTML == 'Powrót') {
		if (document.getElementById('examScreen').style.display != 'none') {
			if (keyCode == 'ArrowRight') {
				Testexam.reviewNavigate('+');
			} else if (keyCode == 'ArrowLeft') {
				Testexam.reviewNavigate('-');
			}
		}
	} else if (document.getElementById('navigateContainer').style.display == 'none') {
		if (document.getElementById('yesNo').style.display != 'none') {
			if (keyCode == 'KeyT' || keyCode == 'KeyY' || keyCode == 'Numpad1') {
				document.getElementById('answerYes').click();
			} else if (keyCode == 'KeyN' || keyCode == 'Numpad3') {
				document.getElementById('answerNo').click();
			}
		} else if (document.getElementById('abc').style.display != 'none') {
			if (keyCode == 'KeyA' || keyCode == 'Digit1' || keyCode == 'Numpad1') {
				document.getElementById('answerAText').click();
			} else if (keyCode == 'KeyB' || keyCode == 'Digit2' || keyCode == 'Numpad2') {
				document.getElementById('answerBText').click();
			} else if (keyCode == 'KeyC' || keyCode == 'Digit3' || keyCode == 'Numpad3') {
				document.getElementById('answerCText').click();
			}
		}
		if (keyCode == 'ArrowRight') {
			if (typeof(document.getElementById('nextQuestionBtn').disabled) != 'undefined') {
				if (!document.getElementById('nextQuestionBtn').disabled) {
					Testexam.nextQuestion();
				}
			}
		} else if (keyCode == 'Space' || keyCode == 'Enter' || keyCode == 'NumpadEnter') {
			if (document.getElementById('startQuestionBtn').style.display == 'none') {
				if (typeof(document.getElementById('nextQuestionBtn').disabled) != 'undefined') {
					if (!document.getElementById('nextQuestionBtn').disabled) {
						Testexam.nextQuestion();
					}
				}
			} else {
				Testexam.showMultimediaFile();
			}
		}
	}
};
