import * as React from 'react'
import cx from 'classnames'
import { TeamsSvgIconSpec } from '../types'
import { teamsIconClassNames } from '../teamsIconClassNames'

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <g className={cx(teamsIconClassNames.outline, classes.outlinePart)}>
        <path d="M16 9.5v5c0 .136.05.253.148.352A.48.48 0 0 0 16.5 15h5a.48.48 0 0 0 .352-.148A.481.481 0 0 0 22 14.5v-4c0-.203-.04-.395-.121-.574a1.611 1.611 0 0 0-.805-.805A1.387 1.387 0 0 0 20.5 9h-4a.481.481 0 0 0-.352.148A.483.483 0 0 0 16 9.5zm1 .5h3.5c.136 0 .253.05.352.148.098.1.148.217.148.352V14h-4v-4zM9.45 9.45c-.138.137-.248.296-.329.476S9 10.296 9 10.5v4c0 .136.05.253.148.352A.48.48 0 0 0 9.5 15h5a.48.48 0 0 0 .352-.148A.481.481 0 0 0 15 14.5v-5a.483.483 0 0 0-.148-.352A.481.481 0 0 0 14.5 9h-4c-.203 0-.395.04-.574.121-.18.081-.34.19-.477.328zM10 10.5c0-.135.05-.252.148-.352A.481.481 0 0 1 10.5 10H14v4h-4v-3.5zM16.5 22h4c.203 0 .395-.04.574-.121a1.596 1.596 0 0 0 .805-.805A1.38 1.38 0 0 0 22 20.5v-4a.483.483 0 0 0-.148-.352A.481.481 0 0 0 21.5 16h-5a.481.481 0 0 0-.352.148.483.483 0 0 0-.148.352v5c0 .136.05.253.148.352.1.1.216.148.352.148zm.5-5h4v3.5c0 .136-.05.253-.148.352A.477.477 0 0 1 20.5 21H17v-4zM9.45 21.55c.137.14.296.249.476.329.18.081.37.121.574.121h4a.477.477 0 0 0 .352-.148A.481.481 0 0 0 15 21.5v-5a.483.483 0 0 0-.148-.352A.481.481 0 0 0 14.5 16h-5a.481.481 0 0 0-.352.148A.483.483 0 0 0 9 16.5v4c0 .203.04.395.121.574s.19.34.328.477zM10 17h4v4h-3.5a.477.477 0 0 1-.352-.148A.481.481 0 0 1 10 20.5V17z" />
      </g>
      <g className={cx(teamsIconClassNames.filled, classes.filledPart)}>
        <path d="M22 15v-4.5c0-.203-.04-.396-.121-.578a1.569 1.569 0 0 0-.324-.477 1.566 1.566 0 0 0-.477-.324A1.415 1.415 0 0 0 20.5 9H16v6h6zM9.445 21.555c.136.135.294.244.477.324.182.081.375.121.578.121H15v-6H9v4.5c0 .203.04.397.121.578.081.183.189.342.324.477zM9.445 9.445a1.565 1.565 0 0 0-.324.477A1.407 1.407 0 0 0 9 10.5V15h6V9h-4.5c-.203 0-.396.04-.578.121a1.57 1.57 0 0 0-.477.324zM21.078 21.879a1.545 1.545 0 0 0 .8-.8c.082-.183.122-.376.122-.579V16h-6v6h4.5c.203 0 .395-.04.578-.121z" />
      </g>
    </svg>
  ),
  styles: {},
} as TeamsSvgIconSpec
