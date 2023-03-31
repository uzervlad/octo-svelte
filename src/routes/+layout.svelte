<script>
  import sub from '../lib/sub';
  import main from '../lib/isMain';
</script>
<div class="bg"></div>
<div class="menu">
  <a href="/">Home</a>
  <a href="/projects">Projects</a>
</div>
<div class={`header ${$main ? '' : 'shift'}`}>
  <h1>octo</h1>
  <span class="sub">{$sub}</span>
</div>

<slot></slot>

<a href="https://twitter.com/ninomaeinanis/status/1501351699314741250" target="_blank" class="credit">
  Artwork credit
</a>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@400;600&display=swap');

  @mixin mobile() {
    @media screen and (max-width: 768px) {
      @content;
    }
  }

  @mixin desktop() {
    @media screen and (min-width: 1000px) {
      @content;
    }
  }

  $background: #110D17;
  $text: #665879;

  :global(*) {
    font-family: 'Baloo Bhai 2';
    box-sizing: border-box;
  }

  :global(body) {
    margin: 0;
    padding: 0;

    width: 100%;
    height: 100vh;

    background: $background;

    overflow: overlay;

    &::-webkit-scrollbar {
      width: .6em;
    }

    &::-webkit-scrollbar-track {
      background: lighten($background, 10%);
    }

    &::-webkit-scrollbar-thumb {
      background: lighten($background, 30%);
      margin: 2px;

      border: lighten($background, 10%) solid 2px;
      border-radius: 20px;
    }
  }

  .bg {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;

    background-image: url(/ninomae_inanis.jpg);
    background-position: 69% center;
    background-size: cover;

    mix-blend-mode: overlay;

    opacity: 50%;

    z-index: -1;
  }

  .menu {
    position: absolute;
    top: 0;
    right: 0;

    display: flex;

    @include mobile {
      flex-direction: column;
      align-items: end;
    }

    a {
      padding: 20px;
      @include mobile {
        padding: 8px 14px;
      }

      font-size: 22px;
      @include mobile {
        font-size: 19px;
      }
      color: darken($text, 10%);

      transition: color ease .3s;

      &:hover {
        color: $text;
      }
    }
  }

  .header {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    flex-direction: column;

    user-select: none;

    h1 {
      font-size: 120px;
      margin: -50px 0px;

      color: white;
      text-shadow: 0px 0px 20px #7A5EA1;
    }

    .sub {
      font-size: 40px;

      color: $text;
      opacity: 35%;
    }

    &.shift {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;

      user-select: none;

      h1 {
        margin: -40px 0px;

        font-size: 110px;
      }

      .sub {
        margin-top: -10px;
        margin-bottom: -20px;
      }
    }
  }
  
  .credit {
    display: flex;
    flex-direction: column-reverse;

    position: fixed;
    bottom: 4px;
    right: 16px;

    color: #fff3;
  }
</style>