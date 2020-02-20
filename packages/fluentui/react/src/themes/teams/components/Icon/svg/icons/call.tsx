import * as React from 'react'
import cx from 'classnames'
import { TeamsSvgIconSpec } from '../types'
import { teamsIconClassNames } from '../teamsIconClassNames'

export default {
  icon: ({ classes }) => (
    <svg viewBox="8 8 16 16" role="presentation" focusable="false" className={classes.svg}>
      <g className={cx(teamsIconClassNames.outline, classes.outlinePart)}>
        <path
          d="M19.5,23c-0.1,0-0.3,0-0.4-0.1c-2.6-0.8-4.8-2.4-6.4-4.6l0,0c-1.6-2.2-2.3-4.9-2.1-7.6c0-0.6,0.4-1.1,0.9-1.3l0.8-0.4
                        c0.9-0.4,1.9,0,2.3,0.8l0.3,0.7c0.5,1,0.8,2.5-0.1,3.4l-0.6,0.6c-0.2,0.2-0.2,0.5-0.1,0.7l1.9,2.8c0.1,0.2,0.4,0.3,0.6,0.2l0.7-0.3
                        c1.3-0.5,2.6,0.3,3.3,1.1l0.5,0.5c0.6,0.7,0.6,1.8,0,2.4l-0.6,0.7C20.3,22.9,19.9,23,19.5,23z M13.5,17.8c1.4,2,3.5,3.5,5.8,4.2
                        c0.2,0.1,0.4,0,0.5-0.1l0.6-0.7c0.3-0.3,0.3-0.8,0-1.1L20,19.6c-0.6-0.6-1.4-1.1-2.2-0.8l-0.7,0.3c-0.7,0.3-1.5,0.1-1.9-0.5
                        l-1.9-2.8c-0.4-0.6-0.4-1.4,0.2-1.9l0.5-0.6c0.5-0.6,0.3-1.6-0.1-2.3l-0.3-0.7c-0.2-0.4-0.6-0.5-1-0.4l-0.8,0.4
                        c-0.2,0.1-0.3,0.3-0.3,0.5C11.4,13.4,12.1,15.8,13.5,17.8L13.5,17.8z"
        />
      </g>
      <g className={cx(teamsIconClassNames.filled, classes.filledPart)}>
        <path
          d="M19.5,23c-0.1,0-0.3,0-0.4-0.1c-2.6-0.8-4.8-2.4-6.4-4.6l0,0c-1.6-2.2-2.3-4.9-2.1-7.6c0-0.6,0.4-1.1,0.9-1.3L12.3,9
                        c0.9-0.4,1.9,0,2.3,0.8l0.3,0.7c0.5,1,0.8,2.5-0.1,3.4l-0.6,0.6C14,14.7,14,15,14.1,15.2L16,18c0.1,0.2,0.4,0.3,0.6,0.2l0.7-0.3
                        c1.3-0.5,2.6,0.3,3.3,1.1l0.5,0.5c0.6,0.7,0.6,1.8,0,2.4l-0.6,0.7C20.3,22.9,19.9,23,19.5,23z"
        />
      </g>
    </svg>
  ),
  styles: {},
} as TeamsSvgIconSpec
