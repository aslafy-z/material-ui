import React, {Component, PropTypes} from 'react';
import {createStyleSheet} from 'stylishly';
import ClassNames from 'classnames';
import Input from '../internal/Input';

export const styleSheet = createStyleSheet('TextField', () => {
  return {
    root: {
    },
  };
});

/**
 * TextField
 *
 * @see https://material.google.com/components/text-fields.html
 *
 * ```js
 * import TextField from 'material-ui/TextField';
 *
 * const Component = () => <TextField value="Hello World">;
 * ```
 */
export default class TextField extends Component {
  static propTypes = {
    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,
    /**
     * Input type
     */
    type: PropTypes.string,
  };

  static defaultProps = {
    type: 'text',
  };

  static contextTypes = {
    styleManager: PropTypes.object.isRequired,
  };

  render() {
    const {
      className,
      ...other,
    } = this.props;

    const classes = this.context.styleManager.render(styleSheet, {group: 'mui'});

    const classNames = ClassNames({
      [classes.root]: true,
    }, className);

    return (
      <Input
        className={classNames}
        {...other}
      />
    );
  }
}