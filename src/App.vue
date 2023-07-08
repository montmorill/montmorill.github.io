<script setup lang="ts">
const toggleTheme = () => {
  let app = document.getElementById("app");
  if (app) app.className = app.className === "dark" ? "light" : "dark";
};
</script>

<template>
  <nav>
    <div class="left">
      <a href="https://montmorill.github.io/">
        <div class="montmorillonite icon"></div>
        <span>montmorillonite's</span>
      </a>
      <a href="https://github.com/montmorill">
        <div class="github icon"></div>
        <span>GitHub</span>
      </a>
      <a href="https://space.bilibili.com/648265393">
        <div class="bilibili icon"></div>
        <span>bilibili</span>
      </a>
    </div>
    <div class="right">
      <input @click="toggleTheme" type="checkbox" class="switch" />
    </div>
  </nav>

  <header>
    <h1>Index</h1>
    <h2>The Index for <code>montmorillonite</code>'s Personal Blog Website</h2>
  </header>

  <main>
    <div class="main">
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quasi
        voluptas vitae! Doloribus omnis, fuga dignissimos recusandae natus
        ratione laudantium ducimus. Cum eveniet quae nulla molestias quo
        provident est dignissimos!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        tenetur accusamus obcaecati voluptates maxime aliquid repellendus
        provident fugiat quos, exercitationrem alias, magni dolore voluptas eum
        non assumenda est dolor aperiam.
      </p>
      <h3>Lorem ipsum dolor sit amet.</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eum
        fugiat accusantium mollitia veritatis quas quis cum vel iste dolorem
        error, distinctio obcaecati ducimus eveniet dicta numquam minus
        consequuntur dignissimos!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nremo
        repudiandae dolor blanditiis doloremque, accusamus, odit dolorem ducimus
        recusandae enim totam quasi neque ipsum facilis eos veniam iure.
        Temporibus molestias voluptate quisquam, eligendi sapiente totam ab
        aliquam dolor odit possimus architecto obcaecati voluptatem placeat? Non
        unde illum asperiores tempora nesciunt blanditiis odio officiis? Magni
        incidunt laudantium modi tempore laboriosam. Expedita fugiat dignissimos
        similique quo quasi atque, odio non pariatur placeat expedita distinctio
        nulla facere? Mollitia!
      </p>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro.</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae maiores
        deserunt optio quae, mollitia harum cum voluptate ipsa architecto,
        excepturi est laborum, sequi eos dolor! Itaque quae suscipit deleniti
        laborum?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sapiente
        esse harum, accusantium nobis, sunt animi reiciendis voluptas eligendi
        autem tempore numquam sint officia. Quos unde soluta tenetur, sequi
        ducimus recusandae enim totam quasi neque ipsum facilis eos veniam iure.
        Temporibus molestias voluptate quisquam, eligendi sapiente totam ab
        aliquam dolor odit possimus architecto obcaecati voluptatem placeat? Non
        unde illum asperiores tempora nesciunt blanditiis odio officiis? Magni
        incidunt laudantium modi tempore laboriosam. Expedita fugiat dignissimos
        quasi animi ex ad quisquam necessitatibus dolores minima doloremque
        optio iure sunt, repellendus numquam illum in illo harum? Asperiores
        cupiditate magnam possimus vero explicabo eos soluta qui at voluptates
        beatae perferendis consequuntur ullam error eius nisi nobis labore autem
        reprehenderit, suscipit, modi nulla ea sint. Quos veritatis omnis
        eligendi totam voluptas consequatur itaque tenetur velit laborum hic
        voluptatum sit sed repudiandae numquam, dolor et natus accusantium eius
        odit iusto! Dignissimos facere reiciendis, est modi quae quisquam.
      </p>
    </div>
    <aside>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi optio
        dignissimos et aspernatur numquam, corrupti id eligendi sequi at
        similique quae, sint minus eos vero quibusdam quo voluptates? Assumenda,
        quasi?
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
        aspernatur at obcaecati unde sint qui, magni impedit est molestiae.
        Facere provident, tempore optio quo quidem, impedit, nostrum aperiam
        consequatur blanditiis ratione sapiente molestiae soluta. Ducimus, quo.
        Explicabo aperiam dolores cupiditate autem numquam possimus enim quod
        laboriosam molestiae aliquam, dicta ipsa itaque. Rerum blanditiis
        architecto facilis quas rem, velit magni.
      </p>
    </aside>
  </main>

  <footer>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur nam
      provident quos quas culpa eum nesciunt non quasi libero laboriosam
      quibusdam, ducimus facilis odit cumque inventore aliquid animi corrupti
      laudantium!
    </p>
    <p style="text-align: right">Made with 💖 in China</p>
  </footer>
</template>

<style lang="scss">
template * {
  width: 100vw;
  color: var(--color-text);
  background: var(--color-background);
}

p {
  margin: 1em 0em;
  text-indent: 2em;
}

a {
  text-decoration: none;
  color: unset;
}

code {
  padding: 0.2em 0.4em;
  margin: 0;
  font-size: 85%;
  white-space: break-spaces;
  background-color: #afb8c133;
  border-radius: 6px;
}

nav {
  width: 100%;
  position: fixed;
  display: flex;
  box-shadow: 0 0 1em 0 var(--color-border);
  user-select: none;
  justify-content: space-between;
  color: var(--color-text);
  background: var(--color-background-mute);
  transition: all 0.3s ease-in-out;
  top: 0;
}

nav .left,
nav .right {
  display: flex;
  align-items: center;
  justify-content: center;
}

nav a {
  height: 100%;
  padding: 0.5em 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  gap: 0.4em;

  &:hover {
    background-color: var(--color-background-soft);
  }
}

nav .icon {
  width: 2em;
  height: 2em;
  background-size: 98%;
  background-repeat: no-repeat;
  background-position: center;
  padding: 0.5em;
}

.montmorillonite {
  background-image: url(./montmorillonite.svg);
}

.bilibili {
  background-image: url(./bilibili.svg);
}

.light .github {
  background-image: url(https://github.githubassets.com/favicons/favicon.svg);
}

.dark .github {
  background-image: url(https://github.githubassets.com/favicons/favicon-dark.svg);
}

input[type="checkbox"].switch {
  margin-right: 1em;
  border-radius: 1em;
  height: 2em;
  width: 4em;
  appearance: none;
  position: relative;
  box-sizing: content-box;
  background: linear-gradient(135deg, #2afadf, #4c83ff);

  &::before {
    transition: all 0.3s linear;
    content: "";
    width: 1.6em;
    height: 1.6em;
    background: linear-gradient(135deg, #fdeb71, #f8d800);
    border-radius: 0.8em;
    position: absolute;
    left: 0.2em;
    top: 0.2em;
    box-shadow: inset 0 0 5px 0 lightyellow, 0 0 3px 0 lightyellow;
  }

  &:checked {
    background: linear-gradient(135deg, #232526, #414345);
  }

  &:checked::before {
    left: 2.2em;
    background: linear-gradient(135deg, #334d50, #cbcaa5);
  }
}

header {
  margin-top: 3em;
  height: 40vw;
  max-height: 60vh;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 2em;
  background: url(https://api.yimian.xyz/img?type=wallpaper);
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: var(--color-text);
  background: var(--color-background-soft);
  transition: all 0.3s linear;
}

header h1 {
  font-size: 5em;
}

main {
  display: flex;
  padding: 4em 6em;
  gap: 3em;
  color: var(--color-text);
  background: var(--color-background);
  transition: all 0.3s linear;
}

.main h3::before,
.main h4::before,
.main h5::before,
.main h6::before {
  content: "# ";
}

.main h3 {
  font-size: 150%;
  padding-left: 0em;
}

.main h4 {
  font-size: 140%;
  padding-left: 1em;
}

.main h5 {
  font-size: 130%;
  padding-left: 2em;
}

.main h6 {
  font-size: 120%;
  padding-left: 3em;
}

.main p {
  padding-left: 4em;
}

aside {
  min-width: 20%;
  max-width: 30%;
}

footer {
  padding: 2em 3em;
  color: var(--color-text);
  background: var(--color-background-mute);
  transition: all 0.3s linear;
}

@media screen and (max-width: 1024px) {
  main {
    padding: 3em 4em;
    gap: 2em;
  }
  footer {
    padding: 1em 2em;
  }
}

@media screen and (max-width: 600px) {
  main {
    padding: 2em;
    gap: 1em;
  }

  header h2,
  aside {
    display: none;
  }

  nav a span {
    display: none;
  }
}
</style>
