# next-blurhash-blurdataurl

Easily convert image from url to both - blurhash and blurDataURL required in Next Image component

## Installation

Install next-blurhash-blurdata with npm

```bash
  npm install next-blurhash-blurdataurl
```

## Usage/Examples

`generateBlurhash(imageUrl: string) => Promise<BlurData>`

`BlurData {
    blurHash: string;
    blurDataURL: string;
}`

```javascript
import generateBlurhash from 'next-blurhash-blurdataurl'

// Run inside your async function
const blurhash = await generateBlurhash("https://example-image.png")

console.log(blurhash)
// blurHash: L9BWSr.A0KxbIVRPD*E20g_3_3tQ
// blurDataURL: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAA...

// Next Image component
<Image
    src="https://example-image.png"
    alt="image"
    width={200}
    height={200}
    placeholder="blur"
    blurDataURL={blurhash.blurDataURL}
/>
```

## FAQ

#### Canvas installation problem?

Make sure you have installed required packages

- [Canvas installation guide](https://www.npmjs.com/package/canvas#Installation)

## Features

- Too easy to use
- Type-safe

## Feedback

If you have any feedback, feature requests or bugs, feel free to open an issue [@github](https://github.com/chrxmvtik/next-blurhash-blurdataurl/issues)

## Authors

- [@chrxmvtik](https://www.github.com/chrxmvtik)

## Related

Here are some related projects

[blurhash](https://www.npmjs.com/package/blurhash)
[canvas](https://www.npmjs.com/package/canvas)
