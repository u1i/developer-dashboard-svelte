<script>
import { theme } from '../stores/theme.js';

function toggleTheme() {
    theme.toggleTheme();
}
</script>

<nav>
    <div class="container nav-content">
        <div class="nav-brand">
            <h1>Dev Dashboard</h1>
        </div>
        <div class="nav-items">
            <button class="btn btn-secondary theme-toggle" on:click={toggleTheme}>
                {$theme === 'light' ? '🌙' : '☀️'}
            </button>
        </div>
    </div>
</nav>

<style>
nav {
    background-color: var(--bg-secondary);
    border-bottom: 1px solid var(--border-color);
    padding: 1rem 0;
    position: sticky;
    top: 0;
    z-index: 100;
}

.nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-brand h1 {
    font-size: 1.5rem;
    margin: 0;
}

.nav-items {
    display: flex;
    gap: 1rem;
    align-items: center;
}

.theme-toggle {
    font-size: 1.2rem;
    padding: 0.5rem;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
}
</style>
