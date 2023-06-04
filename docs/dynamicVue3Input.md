<div align="center">
  <h1>Vue Dynamic Input Component</h1>
  <p>A Vue component library for building interactive UI elements.</p>
  
  ![npm](https://img.shields.io/npm/v/volki-components-three)
  ## License  

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).<br>
Npm link under the [Npm Link](https://www.npmjs.com/package/vue-dynamic-input-component).


</div>

## Probs

- modelValue (required): The v-model binding for the input value.
- type: The type of the input field (e.g., "text", "number", "password").
- placeholder: The placeholder text for the input field.
- background-color: The background color of the input field.
- border-radius: The border radius of the input field.
- color: The text color of the input field.
- border-color: The border color of the input field.
- min-length: The minimum length of the input value.
- max-length: The maximum length of the input value.
- pattern: A regular expression pattern for input validation.
- width: Width of design input.
- height: Height of design input
- min-width: Min width of design input
- max-width: Max width of design input
- min-height: Min height of design input
- max-height: Max height of design input

## Installation

```
npm i vue-dynamic-input-component

or

yarn add vue-dynamic-input-component
```

## Usage

You can use the Customizable Input Field component by importing it and adding it to your Vue templates.


### Props

The following table describes the props that can be passed to the component for customization:

| Prop                 | Type             | Description                                                           |
|----------------------|------------------|-----------------------------------------------------------------------|
| `modelValue`         | String/Number    | The v-model binding for the input value.                               |
| `typeValue`          | String           | The type of the input field. Possible values: "string", "number", "password".   |
| `placeValue`         | String           | The placeholder text for the input field.                              |
| `backgroundColor`    | String           | The background color of the input field.                               |
| `borderRadius`       | String           | The border radius of the input field.                                  |
| `color`              | String           | The text color of the input field.                                     |
| `borderColor`        | String           | The border color of the input field.                                   |
| `focusBorderColor`   | String           | The border color of the input field when it is focused.                |
| `focusBackgroundColor` | String         | The background color of the input field when it is focused.            |
| `minLength`          | String           | The minimum length of the input value.                                 |
| `maxLength`          | String           | The maximum length of the input value.                                 |
| `pattern`            | String           | A regular expression pattern for input validation.                     |
| `minWidth`           | String           | The minimum width of the input field.                                  |
| `maxWidth`           | String           | The maximum width of the input field.                                  |
| `width`              | String           | The width of the input field.                                          |
| `height`             | String           | The height of the input field.                                         |
| `minHeight`          | String           | The minimum height of the input field.                                 |
| `maxHeight`          | String           | The maximum height of the input field.                                 |

### Example

```
<template>
  <VInput
    v-model="inputValue"
    typeValue="text"
    placeValue="Enter your name"
    backgroundColor="#f2f2f2"
    borderRadius="5px"
    color="#333"
    borderColor="#ccc"
    focusBorderColor="red"
    focusBackgroundColor="#fff"
    minLength="2"
    maxLength="20"
    pattern="[a-zA-Z]+"
    minWidth="200px"
    maxWidth="500px"
    width="100%"
    height="40px"
    minHeight="40px"
    maxHeight="60px"
  </VInput>
</template>

<script>
import { VInput } from 'vue-dynamic-input-component';
## Props


```
## License

This project is licensed under the [MIT](LICENSE) License.

---

<div align="center">
  <sub>Built with ❤️ by Volkan Filazi</sub><br>
  <sub>https://github.com/volkanfilazi</sub><br>
  <sub>https://www.volkanfilazi.at/</sub>
</div>
