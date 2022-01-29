import React from "react";
import icon from '../img/icon.png';
import Snow from '../img/sn.png';
import Sleet from '../img/sl.png';
import Hail from '../img/h.png';
import Thunderstorm from '../img/t.png';
import HeavyRain from '../img/hr.png';
import LightRain from '../img/lr.png';
import Showers from '../img/s.png';
import HeavyCloud from '../img/hc.png';
import LightCloud from '../img/lc.png';
import Clear from '../img/c.png';

class IconClima extends React.Component {

  constructor(props) {
    super(props);

    this.icons = {
      Snow: Snow,
      Sleet: Sleet,
      Hail: Hail,
      Thunderstorm: Thunderstorm,
      HeavyRain: HeavyRain,
      LightRain: LightRain,
      Showers: Showers,
      HeavyCloud: HeavyCloud,
      LightCloud: LightCloud,
      Clear: Clear
    }
  }

  getIcon() {
    if (this.icons[this.props.estado.replace(/ /g, "")]) {
      return this.icons[this.props.estado.replace(/ /g, "")];
    } else {
      return icon;
    }
  }

  render() {
    return (
      <img src={this.getIcon()} />
    );
  }
}

export default IconClima;