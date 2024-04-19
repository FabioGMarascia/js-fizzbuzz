const ul = document.querySelector("ul");

for (let i = 1; i <= 100; i++) {
	const li = document.createElement("li");
	li.classList.add("list-group-item");
	li.classList.add("col-3");

	if (i % 3 == 0 && i % 5 == 0) {
		li.append(`FizzBuzz`);
		li.style.color = "red";
		ul.append(li);
	} else if (i % 3 == 0) {
		li.append(`Fizz`);
		li.style.color = "green";
		ul.append(li);
	} else if (i % 5 == 0) {
		li.append(`Buzz`);
		li.style.color = "orange";
		ul.append(li);
	} else {
		li.append(i);
		li.style.color = "blue";
		ul.append(li);
	}
}
