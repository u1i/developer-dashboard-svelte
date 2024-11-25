<script>
let prompt = '';
let temperature = 0.7;
let maxTokens = 100;
let response = '';
let loading = false;
let generatedCode = '';

const models = [
    { id: 'gpt-4', name: 'GPT-4' },
    { id: 'gpt-3.5-turbo', name: 'GPT-3.5 Turbo' },
    { id: 'claude-2', name: 'Claude 2' }
];

let selectedModel = models[0].id;

async function generateResponse() {
    loading = true;
    try {
        // Mock API call - replace with actual API integration
        await new Promise(resolve => setTimeout(resolve, 1000));
        response = 'Here is a sample response from the AI model...';
        generatedCode = `import openai

def generate_text(prompt, temperature=${temperature}, max_tokens=${maxTokens}):
    response = openai.Completion.create(
        model="${selectedModel}",
        prompt=prompt,
        temperature=temperature,
        max_tokens=max_tokens
    )
    return response.choices[0].text.strip()

# Example usage
result = generate_text("${prompt}")
print(result)`;
    } catch (error) {
        response = 'Error: Failed to generate response';
    } finally {
        loading = false;
    }
}
</script>

<div class="playground">
    <div class="input-section">
        <div class="form-group">
            <label for="model">Model</label>
            <select id="model" bind:value={selectedModel} class="select-input">
                {#each models as model}
                    <option value={model.id}>{model.name}</option>
                {/each}
            </select>
        </div>

        <div class="form-group">
            <label for="prompt">Prompt</label>
            <textarea
                id="prompt"
                bind:value={prompt}
                placeholder="Enter your prompt here..."
                rows="4"
            ></textarea>
        </div>

        <div class="parameters">
            <div class="form-group">
                <label for="temperature">
                    Temperature: {temperature}
                </label>
                <input
                    type="range"
                    id="temperature"
                    bind:value={temperature}
                    min="0"
                    max="1"
                    step="0.1"
                />
            </div>

            <div class="form-group">
                <label for="maxTokens">
                    Max Tokens: {maxTokens}
                </label>
                <input
                    type="range"
                    id="maxTokens"
                    bind:value={maxTokens}
                    min="50"
                    max="500"
                    step="50"
                />
            </div>
        </div>

        <button
            class="btn btn-primary generate-btn"
            on:click={generateResponse}
            disabled={loading || !prompt}
        >
            {loading ? 'Generating...' : 'Generate Response'}
        </button>
    </div>

    {#if response}
        <div class="output-section">
            <div class="response card">
                <h3>Response</h3>
                <p>{response}</p>
            </div>

            <div class="code-section card">
                <h3>Generated Python Code</h3>
                <pre><code>{generatedCode}</code></pre>
                <button class="btn btn-secondary copy-btn">
                    Copy Code
                </button>
            </div>
        </div>
    {/if}
</div>

<style>
.playground {
    display: grid;
    gap: 2rem;
}

.parameters {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

.generate-btn {
    width: 100%;
    margin-top: 1rem;
}

.output-section {
    display: grid;
    gap: 1rem;
}

.response {
    background-color: var(--bg-secondary);
}

.code-section {
    background-color: var(--bg-secondary);
}

.code-section pre {
    background-color: var(--bg-primary);
    padding: 1rem;
    border-radius: 4px;
    overflow-x: auto;
}

.code-section code {
    font-family: monospace;
}

.copy-btn {
    margin-top: 1rem;
}

.select-input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    background-color: var(--bg-secondary);
    color: var(--text-primary);
}

input[type="range"] {
    width: 100%;
}
</style>
