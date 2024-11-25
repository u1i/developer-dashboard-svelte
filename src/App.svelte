<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
  import Navbar from './lib/components/Navbar.svelte';
  import PasswordChange from './lib/components/PasswordChange.svelte';
  import ApiToken from './lib/components/ApiToken.svelte';
  import Analytics from './lib/components/Analytics.svelte';
  import ApiPlayground from './lib/components/ApiPlayground.svelte';
  import Profile from './lib/components/Profile.svelte';
  import Tabs from './lib/components/Tabs.svelte';
  import { theme } from './lib/stores/theme.js';
  import { activeTab } from './lib/stores/tabs.js';

  // Initialize theme
  $: {
      document.documentElement.setAttribute('data-theme', $theme);
  }
</script>

<Navbar />

<main class="container">
    <Tabs />
    
    <div class="tab-content">
        {#if $activeTab === 'playground'}
            <ApiPlayground />
        {:else if $activeTab === 'keys'}
            <ApiToken />
        {:else if $activeTab === 'analytics'}
            <Analytics />
        {:else if $activeTab === 'profile'}
            <Profile />
        {:else if $activeTab === 'password'}
            <PasswordChange />
        {/if}
    </div>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }

  main {
    padding: 2rem 0;
  }

  .dashboard-grid {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(2, 1fr);
  }

  .section-analytics {
    grid-column: 1 / -1;
  }

  @media (max-width: 768px) {
    .dashboard-grid {
      grid-template-columns: 1fr;
    }
  }

  .tab-content {
    min-height: 500px;
  }
</style>
