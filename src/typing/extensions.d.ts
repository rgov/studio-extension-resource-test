// Tell TypeScript that when we import a .png, we get a string constant, namely
// the URL of the resource.
declare module "*.png" {
    const content: string;
    export default content;
}
