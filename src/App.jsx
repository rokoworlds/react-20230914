import { MainPage } from "./pages/Main/component";
import { Provider } from "react-redux";
import { store } from "./redux";

export const App = () => {
    return (
        <Provider store={store}>
            <MainPage />
        </Provider>
    );
};