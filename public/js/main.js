firebase.initializeApp(config);

const database = firebase.database();

const ref_on_value = (r, f) => {
	database.ref(r).on("value", f, (err) => {console.log(err);});
}

ref_on_value("temp", (data) => {
	const val = data.node_.value_;
	console.log(val);
	document.getElementById("temp").innerHTML = val;
});

ref_on_value("height", (data) => {
	const val = data.node_.value_;
	console.log(val);
	document.getElementById("height").innerHTML = val;
});

ref_on_value("hum", (data) => {
	const val = data.node_.value_;
	console.log(val);
	document.getElementById("hum").innerHTML = val;
});

ref_on_value("pres", (data) => {
	const val = data.node_.value_;
	console.log(val);
	document.getElementById("pres").innerHTML = val;
});

ref_on_value("air", (data) => {
	const val = data.node_.value_;
	console.log(val);
	document.getElementById("ppm").innerHTML = val;
});
