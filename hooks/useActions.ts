import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import ActionCreators from "../store/action-creators";
export function useActions(){
    const dispatch = useDispatch();
    bindActionCreators(ActionCreators, dispatch);
}