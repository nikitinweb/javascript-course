let str = "урок-3-был слишком легким",
		text = "легким",
		arr = [20, 33, 1, "Человек", 2, 3],
		total;

	str = str.charAt(0).toUpperCase() + str.substr(1);

	str = str.replace(/-/g, " ");

	str = str.replace(text, "");
	text = text.substring(0, text.length - 2) + "оо";

	total = 0;
	arr.forEach(function (item) {
		let number = parseFloat(item);
		if (!isNaN(number)) {
			total += number ** 3;
			console.log(total);
		}
	});

	total = Math.sqrt(total);

	function isString(str) {
		if (typeof (str) !== 'string') {
			return "Не строка";
		} else {
			while (str[0] == " ") {
				str = str.substring(1, str.length);
			}

			while (str.slice(-1) == " ") {
				str = str.substring(0, str.length - 1);
			}

			if (str.length > 50) {
				str = str.substring(0, 50) + "...";
				return str;
			} else {
				return str;
			}
		}
	}

	console.log(isString('      Большой текст с пробелам в начале и конце много слов чтобы сделать длинное предложение более 50 слов     '));