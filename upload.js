const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }))

   // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        var firebaseConfig = {
            apiKey: "AIzaSyC8Mrrfx_zZxPAWhtB4xfvDrG9EZpnruSU",
            authDomain: "gymwebfirebase.firebaseapp.com",
            projectId: "gymwebfirebase",
            storageBucket: "gymwebfirebase.appspot.com",
            messagingSenderId: "1019476157862",
            appId: "1:1019476157862:web:4e80d631ff7fc280bd1b67",
            measurementId: "G-D2WG1GS65V"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        firebase.analytics();

    
    console.log(firebase);

    function uploadImage() {
      const ref = firebase.storage().ref();//refrenace to fire base storge bucket
      const file = document.querySelector("#photo").files[0];//file is the image file from the html FORM
      const name = +new Date() + "-" + file.name;//name is the name of the file/photo we upload
      console.log(ref)
      console.log(file)
      console.log(name)
      const metadata = {
        contentType: file.type
      };
      const task = ref.child(name).put(file, metadata);
      task
        .then(snapshot => snapshot.ref.getDownloadURL())
        .then(url => {
          console.log(url);
          alert("image upload sus")
         
         const image= document.getElementById("#image");
         image.src=url.src;
        })
        .catch(console.error);
    }