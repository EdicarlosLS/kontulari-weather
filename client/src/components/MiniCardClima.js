import React from "react";

class MiniCardClima extends React.Component {

  constructor(props) {
    super(props);
  }

  click() {
    this.props.onClick(this.props.id);
  }

  render() {
    return (<div onClick={()=> { this.click(); }}>
        {this.props.clima.data} <br />
        {this.props.clima.temp_max} <br />
        {this.props.clima.temp_min}
    </div>
    );
  }
}

export default MiniCardClima;