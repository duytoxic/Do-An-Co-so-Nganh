import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function ArrowRightSvg(props) {
  return (
    <Svg width={18} height={18} viewBox="0 0 13 13" fill="none" {...props}>
      <Path
        d="M0 6.5c0-.449.364-.813.813-.813h9.059L5.91 1.728A.819.819 0 017.069.569l5.867 5.867a.09.09 0 010 .128L7.07 12.43a.806.806 0 01-1.143-1.137l3.945-3.98H.812A.813.813 0 010 6.5z"
        fill="#fff"
      />
    </Svg>
  );
}

export default ArrowRightSvg;
