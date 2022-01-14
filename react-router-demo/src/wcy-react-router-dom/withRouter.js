/**
 * create by wangchunyan1 on 2022/1/13
 */
import RouterContext from "./routerContext";

const withRouter = (WrappedComponent) => (props)=>{
    return (
        <RouterContext.Consumer>
            {(context) => {
                return <WrappedComponent {...props} {...context} />;
            }}
        </RouterContext.Consumer>
    );
}
export default withRouter;
