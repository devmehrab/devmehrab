declare module "@sanity/image-url" {
  export interface ImageUrlBuilder {
    image(source: unknown): this;
    auto(mode: "format"): this;
    fit(mode: "clip" | "crop" | "fill" | "fillmax" | "max" | "scale" | "min" | string): this;
    width(width: number): this;
    height(height: number): this;
    rect(left: number, top: number, width: number, height: number): this;
    format(name: string): this;
    quality(quality: number): this;
    forceDownload(download: boolean | string): this;
    flipHorizontal(): this;
    flipVertical(): this;
    ignoreImageParams(): this;
    invert(): this;
    blur(amount: number): this;
    url(): string;
    [key: string]: unknown;
  }

  export interface ImageUrlBuilderOptions {
    projectId?: string;
    dataset?: string;
    baseUrl?: string;
    [key: string]: unknown;
  }

  export function createImageUrlBuilder(
    options?: ImageUrlBuilderOptions
  ): ImageUrlBuilder;

  const defaultBuilder: (
    options?: ImageUrlBuilderOptions
  ) => ImageUrlBuilder;

  export default defaultBuilder;
}
