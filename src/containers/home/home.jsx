import React from 'react';
import './home.css';
import {connect} from 'react-redux';
import {getdata} from '../../store/actions/index';

class Home extends React.Component {
    // constructor(props) {
    //     super(props)
    // }
    render() {
        console.log(this.props);
        let user = {name: "haseeb", email: "kuchbhi@gmail.com"}
        return (
            <div>
            <h1>home</h1>
            <button onClick={getdata(user)}>get data</button>
            </div>
    )}
}

const mapStateToProps = (state) => ({
    app: state
})

const mapDispatchToProps = (dispatch) => ({
    dataget: (data) => dispatch(getdata(data))

})

export default connect(mapStateToProps, mapDispatchToProps) (Home);