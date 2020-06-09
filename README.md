<h1 align="center">Welcome to @glweems/usesearch 👋</h1>

![Node.js CI](https://github.com/glweems/useSearch/workflows/Node.js%20CI/badge.svg)
<img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
<a href="https://twitter.com/garrettlweems" target="_blank">
<img alt="Twitter: garrettlweems" src="https://img.shields.io/twitter/follow/garrettlweems.svg?style=social" />
</a>

> React hook for url searches

### 🏠 [Homepage](https://github.com/glweems/useSearch#readme)

### ✨ [Demo](https://codesandbox.io/s/github/glweems/useSearch)

## Install

```sh
npm install @glweems/usesearch
```

## Usage

```javascript
import useSearch from @glweems/useSearch";

function SearchInput() {
  const { inputProps, buttonProps } = useSearch();
  return (
    <div>
      <input {...inputProps} />
      <button {...buttonProps}>clear</button>
    </div>
  );
}
```

## Author

👤 **Garrett Weems <gwgraphicdesign@gmail.com> (https://glweems.com)**

- Website: https://glweems.com
- Twitter: [@garrettlweems](https://twitter.com/garrettlweems)
- Github: [@glweems](https://github.com/glweems)
- LinkedIn: [@glweems](https://linkedin.com/in/glweems)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/glweems/useSearch/issues). You can also take a look at the [contributing guide](https://github.com/glweems/useSearch/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [Garrett Weems <gwgraphicdesign@gmail.com> (https://glweems.com)](https://github.com/glweems).<br />
This project is [MIT](https://github.com/glweems/useSearch/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
