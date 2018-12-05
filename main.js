const config = {
	apiKey: "AIzaSyBmKwsxDy0PNrZsTQUfHGQCM6BUADF90LI",
	authDomain: "tr-db-24f7e.firebaseapp.com",
	databaseURL: "https://tr-db-24f7e.firebaseio.com/",
	projectId: "tr-db-24f7e",
	storageBucket: "tr-db-24f7e.appspot.com",
};
firebase.initializeApp(config);

const database = firebase.database();

const ref_on_value = (r, f) => {
	database.ref(r).on("value", f, (err) => {console.err(err);});
}

ref_on_value("temp", (data) => {
	document.getElementById("temp").innerHTML = data;
});

