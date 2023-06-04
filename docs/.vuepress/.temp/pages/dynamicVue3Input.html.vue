<template><div><div align="center">
  <h1>Vue Dynamic Input Component</h1>
  <p>A Vue component library for building interactive UI elements.</p>
<p><img src="https://img.shields.io/npm/v/volki-components-three" alt="npm"></p>
<h2 id="license" tabindex="-1"><a class="header-anchor" href="#license" aria-hidden="true">#</a> License</h2>
<p>This project is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer">MIT License<ExternalLinkIcon/></a>.<br>
Npm link under the <a href="https://www.npmjs.com/package/vue-dynamic-input-component" target="_blank" rel="noopener noreferrer">Npm Link<ExternalLinkIcon/></a>.</p>
</div>
<h2 id="probs" tabindex="-1"><a class="header-anchor" href="#probs" aria-hidden="true">#</a> Probs</h2>
<ul>
<li>modelValue (required): The v-model binding for the input value.</li>
<li>type: The type of the input field (e.g., &quot;text&quot;, &quot;number&quot;, &quot;password&quot;).</li>
<li>placeholder: The placeholder text for the input field.</li>
<li>background-color: The background color of the input field.</li>
<li>border-radius: The border radius of the input field.</li>
<li>color: The text color of the input field.</li>
<li>border-color: The border color of the input field.</li>
<li>min-length: The minimum length of the input value.</li>
<li>max-length: The maximum length of the input value.</li>
<li>pattern: A regular expression pattern for input validation.</li>
<li>width: Width of design input.</li>
<li>height: Height of design input</li>
<li>min-width: Min width of design input</li>
<li>max-width: Max width of design input</li>
<li>min-height: Min height of design input</li>
<li>max-height: Max height of design input</li>
</ul>
<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>npm i vue-dynamic-input-component

or

yarn add vue-dynamic-input-component
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2>
<p>You can use the Customizable Input Field component by importing it and adding it to your Vue templates.</p>
<h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3>
<p>The following table describes the props that can be passed to the component for customization:</p>
<table>
<thead>
<tr>
<th>Prop</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>modelValue</code></td>
<td>String/Number</td>
<td>The v-model binding for the input value.</td>
</tr>
<tr>
<td><code v-pre>typeValue</code></td>
<td>String</td>
<td>The type of the input field. Possible values: &quot;string&quot;, &quot;number&quot;, &quot;password&quot;.</td>
</tr>
<tr>
<td><code v-pre>placeValue</code></td>
<td>String</td>
<td>The placeholder text for the input field.</td>
</tr>
<tr>
<td><code v-pre>backgroundColor</code></td>
<td>String</td>
<td>The background color of the input field.</td>
</tr>
<tr>
<td><code v-pre>borderRadius</code></td>
<td>String</td>
<td>The border radius of the input field.</td>
</tr>
<tr>
<td><code v-pre>color</code></td>
<td>String</td>
<td>The text color of the input field.</td>
</tr>
<tr>
<td><code v-pre>borderColor</code></td>
<td>String</td>
<td>The border color of the input field.</td>
</tr>
<tr>
<td><code v-pre>focusBorderColor</code></td>
<td>String</td>
<td>The border color of the input field when it is focused.</td>
</tr>
<tr>
<td><code v-pre>focusBackgroundColor</code></td>
<td>String</td>
<td>The background color of the input field when it is focused.</td>
</tr>
<tr>
<td><code v-pre>minLength</code></td>
<td>String</td>
<td>The minimum length of the input value.</td>
</tr>
<tr>
<td><code v-pre>maxLength</code></td>
<td>String</td>
<td>The maximum length of the input value.</td>
</tr>
<tr>
<td><code v-pre>pattern</code></td>
<td>String</td>
<td>A regular expression pattern for input validation.</td>
</tr>
<tr>
<td><code v-pre>minWidth</code></td>
<td>String</td>
<td>The minimum width of the input field.</td>
</tr>
<tr>
<td><code v-pre>maxWidth</code></td>
<td>String</td>
<td>The maximum width of the input field.</td>
</tr>
<tr>
<td><code v-pre>width</code></td>
<td>String</td>
<td>The width of the input field.</td>
</tr>
<tr>
<td><code v-pre>height</code></td>
<td>String</td>
<td>The height of the input field.</td>
</tr>
<tr>
<td><code v-pre>minHeight</code></td>
<td>String</td>
<td>The minimum height of the input field.</td>
</tr>
<tr>
<td><code v-pre>maxHeight</code></td>
<td>String</td>
<td>The maximum height of the input field.</td>
</tr>
</tbody>
</table>
<h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;template>
  &lt;VInput
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
  &lt;/VInput>
&lt;/template>

&lt;script>
import { VInput } from 'vue-dynamic-input-component';
## Props


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="license-1" tabindex="-1"><a class="header-anchor" href="#license-1" aria-hidden="true">#</a> License</h2>
<p>This project is licensed under the <a href="LICENSE">MIT</a> License.</p>
<hr>
<div align="center">
  <sub>Built with ❤️ by Volkan Filazi</sub><br>
  <sub>https://github.com/volkanfilazi</sub><br>
  <sub>https://www.volkanfilazi.at/</sub>
</div>
</div></template>


