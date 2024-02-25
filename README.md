## Problems I encountered

1. Make two flex-items the same size: If you want to accomplish this simply use
   the `flex` property and set it to 1.

```css
flex: 1;
```

2. How to make Images act responsively in a flex-item:

   a. Wrapped the images in a container. And ensure the container behaves well as the flex-item

   ```css
   .services__web-dev-img-container {
     /* Layout */
     flex: 1;
     display: flex;
     justify-content: flex-end;

     /* Box Model */
     height: 300px;

     /* Position */
     position: relative;
   }
   ```

   b. Set the height of the images to be realtive to that of the container

   ```css
   .first__image {
     /* Box Model */
     width: 300px;
     height: 85%;

     /* Image */
     object-fit: cover; /*This maintains the aspect ratio of the image within the specified image width and height */
     object-position: top; /* Positions the mage and in so doing chooses what part of the image to show within the specified width and height */

     /* Position */
     position: absolute;
     top: 0px;
     left: 0px;
     z-index: -1;
   }
   ```

3. I just realised that my Container utility class and my Pre-defined media queries were
   mobile first. I designed the Website on Figma Desktop first.

## Things I learnt

1.  Using icons to your Astro project.

    - Dowload astro-icon package: It helps you optimize your icons
      ```bash
          npm install astro-icon
      ```
    - Integrate astro-icon into your astro project

    ```javascript
    import { defineConfig } from 'astro/config';
    import icon from 'astro-icon';
    // https://astro.build/config
    export default defineConfig({
      integrations: [
        icon({
          iconDir: 'src/assets/icons',
          include: {
            mdi: ['*'],
          },
        }),
      ],
    });
    ```

    - Install an icon-package of your choice
      ```terminal
          npm install @iconify-json/mdi
      ```
    - Use it in your project

      ```javascript
      ---
          import { Icon } from 'astro-icon/components'

      ---

      // Embed the `account` icon from `@iconify-json/mdi`
      <Icon name="mdi:account" />
      ```

2.  Plan out the Typography sizes and Colors for your website.

    - The Hero section demonstrates an interesting way to use colors: There is a visual heirarchy happening in the text. The majority of the text closely matches the color of the background. The key text are bold and have a dark color. The button however has a brighter color to really draw your attention and stand out. A good accent is warm and filled with bright energy. It is not cold and dark.

    ```c

    ```

3.  Images within a container will not respond to a text-align of center if the CSS reset has forced them to behave like block level elements.

<!-- # Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
````

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat). -->
