# next-blurhash-blurdataurl

Easily convert image from url to both - blurhash and blurDataURL required in Next Image component

## Installation

Install next-blurhash-blurdataurl with npm

```bash
  npm install next-blurhash-blurdataurl
```

## Usage/Examples

`generateBlurhash(imageUrl: string, encoderOptions?: jpegOptions) => Promise<BlurData>`

`BlurData {
    blurHash: string;
    blurDataURL: string;
}`

`jpegOptions = {
  mimeType: "image/jpeg";
  quality?: number; // 0-1, defaults to 0.75
};
`

```javascript
import generateBlurhash from 'next-blurhash-blurdataurl'

// Run inside your async function
const blurhash = await generateBlurhash("https://example-image.png")
// Generated blurhash will be a type of image/png with default settings

console.log(blurhash)
// blurHash: L9BWSr.A0KxbIVRPD*E20g_3_3tQ
// blurDataURL: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAA...

const jpegConfig = {
  mimeType: "image/jpeg",
  quality: 0.9
}

const blurhashJpg = await generateBlurhash("https://example-image.png", jpegConfig)

console.log(blurhashJpg)
// blurHash: L9BWSr.A0KxbIVRPD*E20g_3_3tQ
// blurDataURL: data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAADoAA...

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

#### BlurDataURL is very long and heavy?

Blurhash and blurDataURL generated with default settings will not be compressed to jpeg with lower quality, if you want to reduce blurDataURL size - make use of jpeg config

- [Examples](https://www.npmjs.com/package/next-blurhash-blurdataurl#Usage/Examples)

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
