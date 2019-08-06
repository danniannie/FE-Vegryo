//   Login = (email, password) => {
//     try {
//       firebase
//         .auth()
//         .signInWithEmailAndPassword(email, password)
//         .then(res => {
//           console.log("successfully logged in");
//         });
//     } catch (error) {
//       console.log(error.toString(error));
//     }
//   };
//   componentDidMount() {
//     firebase.auth().onAuthStateChanged(user => {
//       // this.props.navigation.navigate(user ? "CreateAccount" : "SignUp");
//     });
//   }
