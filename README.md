# next-blurhash-blurdataurl

Easily convert image from url to both - blurhash and blurDataURL required in Next Image component

## Installation

Install next-blurhash-blurdata with npm

```bash
  npm install next-blurhash-blurdataurl
```

## Types

```javascript
BlurData {
    blurHash: string;
    blurDataURL: string;
}
```

```javascript
EncodingOptions {
    mimeType: "png" | "jpg" | "jpeg" | "pdf" | "svg";
    options: {
        // Page to export: Defaults to 1 (i.e., first page)
        page?: number

        // Background color to draw beneath transparent parts of the canvas
        matte?: string

        // Number of pixels per grid ‘point’ (defaults to 1)
        density?: number

        // Quality for lossy encodings like JPEG (0.0–1.0)
        quality?: number

        // Convert text to paths for SVG exports
        outline?: boolean
        };
}
```

## Usage/Examples

```javascript
generateBlurhash(imageUrl: string, encodingOptions?: EncodingOptions) => Promise<BlurData>
```

```javascript
import generateBlurhash from 'next-blurhash-blurdataurl'

/// Example using default settings (no options)

const blurhash = await generateBlurhash("https://example-image.png")

console.log(blurhash)
// blurHash: L9BWSr.A0KxbIVRPD*E20g_3_3tQ
// blurDataURL: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAA...

/// Example using options

const encodingOptions = {
    mimeType: "jpeg",
    options: {
        quality: 0.9
    }
}

const blurhashJpeg = await generateBlurhash("https://example-image.png", encodingOptions)

console.log(blurhash)
// blurHash: L9BWSr.A0KxbIVRPD*E20g_3_3tQ
// blurDataURL: data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAADoAA...

// Next Image component implementation
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
[skia-canvas](https://www.npmjs.com/package/skia-canvas)
