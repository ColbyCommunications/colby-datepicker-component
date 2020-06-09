# colby-datepicker

A react component to show a date picker field.

## Props

| Name                       | Description                                                                                                                                         | Type     | Default Value  |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | -------------- |
| className                  | Class name for the input field                                                                                                                      | string   | "form-control" |
| dateFormat                 | Date format                                                                                                                                         | string   | "MM/dd/yyyy"   |
| onChange                   | Callback when date is selected                                                                                                                      | function | () => {}       |
| placeholderText            | Placeholder text                                                                                                                                    | string   | " "            |
| selected                   | Selected value. It has to be momentjs object                                                                                                        | object   | null           |
| useDateFormatAsPlaceholder | Should we use the date format as the placeholder (in the absence of specified placeholderText)? NOTE: this is only used if date format is a string. | bool     | false          |

## Usage

### Simple Date Picker

```javascript
import React from 'react';
import DatePicker from '@colbycommunications/colby-datepicker';

export default class extends React.Component {
    state = {
        selected: null,
    };

    onSelect = value => {
        this.setState({ selected: value });
    };

    render() {
        return (
            <DatePicker
                selected={this.state.selected}
                onChange={this.onSelect}
                placeholderText="Enter date"
            />
        );
    }
}
```
