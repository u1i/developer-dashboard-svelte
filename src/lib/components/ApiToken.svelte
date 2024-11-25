<script>
let apiTokens = [];
let newTokenName = '';
let message = '';
let messageType = '';

async function generateToken() {
    if (!newTokenName.trim()) {
        message = 'Please enter a token name';
        messageType = 'error';
        return;
    }

    try {
        // Here you would integrate with your backend API
        // For demo, we'll create a mock token
        const mockToken = {
            id: Date.now(),
            name: newTokenName,
            token: 'tk_' + Math.random().toString(36).substr(2, 20),
            created: new Date().toISOString()
        };
        
        apiTokens = [...apiTokens, mockToken];
        newTokenName = '';
        message = 'Token generated successfully';
        messageType = 'success';
    } catch (error) {
        message = 'Failed to generate token';
        messageType = 'error';
    }
}

async function revokeToken(tokenId) {
    try {
        // Here you would integrate with your backend API
        apiTokens = apiTokens.filter(token => token.id !== tokenId);
        message = 'Token revoked successfully';
        messageType = 'success';
    } catch (error) {
        message = 'Failed to revoke token';
        messageType = 'error';
    }
}
</script>

<div class="card">
    <h2>API Tokens</h2>
    <div class="token-form">
        <input
            type="text"
            placeholder="Token name"
            bind:value={newTokenName}
        />
        <button class="btn btn-primary" on:click={generateToken}>
            Generate Token
        </button>
    </div>

    {#if message}
        <p class={messageType}>{message}</p>
    {/if}

    <div class="tokens-list">
        {#if apiTokens.length === 0}
            <p class="text-secondary">No API tokens generated yet.</p>
        {:else}
            {#each apiTokens as token}
                <div class="token-item">
                    <div class="token-info">
                        <h3>{token.name}</h3>
                        <p class="token-value">{token.token}</p>
                        <p class="token-date">Created: {new Date(token.created).toLocaleDateString()}</p>
                    </div>
                    <button
                        class="btn btn-secondary"
                        on:click={() => revokeToken(token.id)}
                    >
                        Revoke
                    </button>
                </div>
            {/each}
        {/if}
    </div>
</div>

<style>
.token-form {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.token-form input {
    flex: 1;
}

.tokens-list {
    margin-top: 1.5rem;
}

.token-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    margin-bottom: 1rem;
}

.token-info h3 {
    margin: 0;
    font-size: 1.1rem;
}

.token-value {
    font-family: monospace;
    background-color: var(--bg-primary);
    padding: 0.5rem;
    border-radius: 4px;
    margin: 0.5rem 0;
}

.token-date {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin: 0;
}

.text-secondary {
    color: var(--text-secondary);
}
</style>
