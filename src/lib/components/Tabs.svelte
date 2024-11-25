<script>
import { activeTab } from '../stores/tabs.js';

const tabs = [
    { id: 'playground', label: '🔮 API Playground' },
    { id: 'keys', label: '🔑 API Keys' },
    { id: 'analytics', label: '📊 Usage Analytics' },
    { id: 'profile', label: '👤 Profile' }
];
</script>

<div class="tabs">
    {#each tabs as tab}
        <button
            class="tab-button {$activeTab === tab.id ? 'active' : ''}"
            on:click={() => activeTab.set(tab.id)}
        >
            {tab.label}
        </button>
    {/each}
</div>

<style>
.tabs {
    display: flex;
    gap: 0.5rem;
    padding: 1rem 0;
    border-bottom: 1px solid var(--border-color);
    margin-bottom: 2rem;
    overflow-x: auto;
}

.tab-button {
    padding: 0.75rem 1.5rem;
    border: none;
    background: none;
    color: var(--text-secondary);
    cursor: pointer;
    font-size: 1rem;
    border-radius: 8px;
    white-space: nowrap;
    transition: all 0.2s ease;
}

.tab-button:hover {
    background-color: var(--bg-secondary);
    color: var(--text-primary);
}

.tab-button.active {
    background-color: var(--accent-primary);
    color: white;
}
</style>
