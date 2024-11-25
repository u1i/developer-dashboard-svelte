<script>
let currentPassword = '';
let newPassword = '';
let confirmPassword = '';
let message = '';
let messageType = '';

async function handlePasswordChange() {
    if (newPassword !== confirmPassword) {
        message = 'New passwords do not match';
        messageType = 'error';
        return;
    }

    try {
        // Here you would integrate with your backend API
        // For demo purposes, we'll just show a success message
        message = 'Password updated successfully';
        messageType = 'success';
        currentPassword = '';
        newPassword = '';
        confirmPassword = '';
    } catch (error) {
        message = 'Failed to update password';
        messageType = 'error';
    }
}
</script>

<div class="card">
    <h2>Change Password</h2>
    <form on:submit|preventDefault={handlePasswordChange}>
        <div class="form-group">
            <label for="currentPassword">Current Password</label>
            <input
                type="password"
                id="currentPassword"
                bind:value={currentPassword}
                required
            />
        </div>
        <div class="form-group">
            <label for="newPassword">New Password</label>
            <input
                type="password"
                id="newPassword"
                bind:value={newPassword}
                required
            />
        </div>
        <div class="form-group">
            <label for="confirmPassword">Confirm New Password</label>
            <input
                type="password"
                id="confirmPassword"
                bind:value={confirmPassword}
                required
            />
        </div>
        {#if message}
            <p class={messageType}>{message}</p>
        {/if}
        <button type="submit" class="btn btn-primary">Update Password</button>
    </form>
</div>

<style>
.form-group {
    margin-bottom: 1rem;
}

label {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--text-secondary);
}

button {
    margin-top: 1rem;
}

p {
    margin: 1rem 0;
}
</style>
