window.addEventListener("DOMContentLoaded", function() {

// mask 	

	function setCursorPosition(pos, elem) {
		elem.focus();
		if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
		else if (elem.createTextRange) {
			let range = elem.createTextRange();
			range.collapse(true);
			range.moveEnd("character", pos);
			range.moveStart("character", pos);
			range.select();
		}
	}
	
	function mask(event) {
		let matrix = "+7 (___) ___ __ __",
			i = 0,
			def = matrix.replace(/\D/g, ""),
			val = this.value.replace(/\D/g, "");
		if (def.length >= val.length) val = def;
		this.value = matrix.replace(/./g, function(a) {
			return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
		});
		if (event.type == "blur") {
			if (this.value.length == 2) this.value = "";
		} else setCursorPosition(this.value.length, this);
    }

	function maskBel(event) {
		let matrix = "+375(___) ___ __ __",
			i = 0,
			def = matrix.replace(/\D/g, ""),
			val = this.value.replace(/\D/g, "");
		if (def.length >= val.length) val = def;
		this.value = matrix.replace(/./g, function(a) {
			return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
		});
		if (event.type == "blur") {
			if (this.value.length == 2) this.value = "";
		} else setCursorPosition(this.value.length, this);
    }
    


        let inputRus = document.querySelector("#telrus");
        let inputBel = document.querySelector('#telbel');
		inputRus.addEventListener("input", mask, false);
		inputRus.addEventListener("focus", mask, false);
        inputRus.addEventListener("blur", mask, false);

		inputBel.addEventListener("input", maskBel, false);
		inputBel.addEventListener("focus", maskBel, false);
        inputBel.addEventListener("blur", maskBel, false);

// end mask 

// changeblocks 
		
let arrows = document.querySelectorAll('.popup__call-svg');
let phoneBlock = document.querySelectorAll('.popup__call-phone');
let parentBlock = document.querySelector('.popup__call-phoneblock');



for (let index = 0; index < arrows.length; index++) {
	arrows[index].addEventListener('click', function () {
        this.classList.toggle('popup__call-svg-active');
        for (let i = 0; i < phoneBlock.length; i++) {
			if (phoneBlock[i].classList.contains('popup__call-phone-hidden')) {
				phoneBlock[i].classList.toggle('none');
			}
        }
    });

}

for (let i = 0; i < phoneBlock.length; i++) {
	phoneBlock[i].addEventListener('click',function (e) { 
		if (this.classList.contains('popup__call-phone-hidden')) {
			parentBlock.insertBefore(this, this.previousElementSibling);
			this.classList.remove('popup__call-phone-hidden');
			this.nextElementSibling.classList.add('popup__call-phone-hidden');
			this.nextElementSibling.classList.toggle('none');
			for (let index = 0; index < arrows.length; index++) {
				arrows[index].classList.remove('popup__call-svg-active');
			}
		}


	 });
	
}

// end change blocks 

	});