import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";
import { setCurrentUser } from "./redux/user/user.actions";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import HomePage from "./pages/homepage/homepage.component";
import Navbar from "./components/navbar/navbar.component";
import Shop from "./pages/shop/shop.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Checkout from "./pages/checkout/checkout.component";

class App extends React.Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
        const { setCurrentUser } = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    });
                });
            } else {
                setCurrentUser(userAuth);
            }
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/shop" component={Shop} />
                    <Route exact path="/checkout" component={Checkout} />
                    <Route
                        exact
                        path="/sign"
                        render={() =>
                            this.props.currentUser ? (
                                <Redirect to="/" />
                            ) : (
                                <SignInAndSignUp />
                            )
                        }
                    />
                </Switch>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

const mapStateToProps = ({ user: { currentUser } }) => ({
    currentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
