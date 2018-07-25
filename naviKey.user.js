// ==UserScript==
// @name         naviKey
// @namespace    https://github.com/Dove6/naviKey
// @version      1.4
// @description  Keyboard navigation for prawojazdy.com.pl tests
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
	if (document.getElementById('navigatePrev') != null || document.getElementById('navigateNext') != null) {
		if (keyCode == 'ArrowRight') {
			Testexam.reviewNavigate('+');
		} else if (keyCode == 'ArrowLeft') {
			Testexam.reviewNavigate('-');
		}
	} else if (document.getElementById('endExamBtn') != null) {
		if (document.getElementById('yesNo').display != 'none') {
			if (keyCode == 'KeyT' || keyCode == 'KeyY') {
				document.getElementById('answerYes').click();
			} else if (keyCode == 'KeyN') {
				document.getElementById('answerNo').click();
			}
		} else if (document.getElementById('abc').display != 'none') {
			if (keyCode == 'KeyA') {
				document.getElementById('answerAText').click();
			} else if (keyCode == 'KeyB') {
				document.getElementById('answerBText').click();
			} else if (keyCode == 'KeyC') {
				document.getElementById('answerCText').click();
			}
		}
		if (keyCode == 'ArrowRight') {
			if (document.getElementById('nextQuestionBtn').disabled != 'disabled') {
				Testexam.nextQuestion();
			}
		} else if (keyCode == 'Space' || keyCode == 'Enter') {
			if (document.getElementById('startQuestionBtn').style.display == 'none') {
				if (document.getElementById('nextQuestionBtn').disabled != 'disabled') {
					Testexam.nextQuestion();
				}
			} else {
				Testexam.showMultimediaFile();
			}
		}
	}
};
