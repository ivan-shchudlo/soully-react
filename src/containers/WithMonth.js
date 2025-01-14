import { connect } from "react-redux";
import Month from "../components/recomendation-page/monthly-log/Calendar/Month"
import * as actions from "../actions";


const mapStateToProps = state => {
 console.log("state",state.changeMood);
  return {
    day: state.currentday,
    memos: state.data
  };
};

const mapDispatchToProps = dispatch => {

 
  return {
    onClickDay: (dateObj, memos) => {
      let day = dateObj.getDate();
      if (day < 10) {
        day = "0" + day;
      }
      const month = dateObj.getMonth() + 1;
      const year = dateObj.getFullYear();
      const fullDate = `${day}/${month}/${year}`;

      dispatch(actions.displayDetailsDays(fullDate));
    },
    onClickSeeAll: memos => {
      dispatch(actions.displayDetailsDays("All Memos"));
    }
  };
};

const WithMonth = connect(mapStateToProps, mapDispatchToProps)(Month);

export default WithMonth;