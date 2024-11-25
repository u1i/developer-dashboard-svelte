<script>
const user = {
    name: 'John Doe',
    email: 'john@example.com',
    memberSince: '2023-01-15',
    plan: 'Pro',
    apiCalls: 15420,
    lastLogin: '2024-01-20'
};
</script>

<div class="profile-container">
    <div class="profile-header card">
        <div class="profile-info">
            <h2>{user.name}</h2>
            <p class="email">{user.email}</p>
            <p class="member-since">Member since {new Date(user.memberSince).toLocaleDateString()}</p>
        </div>
        <div class="profile-actions">
            <a href="/billing" class="btn btn-primary">Manage Billing</a>
        </div>
    </div>

    <div class="profile-details">
        <div class="card">
            <h3>Account Details</h3>
            <div class="details-grid">
                <div class="detail-item">
                    <span class="label">Current Plan</span>
                    <span class="value">{user.plan}</span>
                </div>
                <div class="detail-item">
                    <span class="label">API Calls</span>
                    <span class="value">{user.apiCalls.toLocaleString()}</span>
                </div>
                <div class="detail-item">
                    <span class="label">Last Login</span>
                    <span class="value">{new Date(user.lastLogin).toLocaleDateString()}</span>
                </div>
            </div>
        </div>

        <div class="card">
            <h3>Security</h3>
            <div class="security-section">
                <div class="form-group">
                    <label for="currentPassword">Current Password</label>
                    <input type="password" id="currentPassword" />
                </div>
                <div class="form-group">
                    <label for="newPassword">New Password</label>
                    <input type="password" id="newPassword" />
                </div>
                <div class="form-group">
                    <label for="confirmPassword">Confirm New Password</label>
                    <input type="password" id="confirmPassword" />
                </div>
                <button class="btn btn-primary">Update Password</button>
            </div>
        </div>

        <div class="card danger-zone">
            <h3>Danger Zone</h3>
            <div class="danger-actions">
                <button class="btn btn-secondary">Export Data</button>
                <button class="btn btn-danger">Delete Account</button>
            </div>
        </div>
    </div>
</div>

<style>
.profile-container {
    display: grid;
    gap: 2rem;
}

.profile-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
}

.profile-info h2 {
    margin: 0;
    font-size: 1.8rem;
}

.email {
    color: var(--text-secondary);
    margin: 0.5rem 0;
}

.member-since {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin: 0;
}

.profile-details {
    display: grid;
    gap: 2rem;
}

.details-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-top: 1rem;
}

.detail-item {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.label {
    color: var(--text-secondary);
    font-size: 0.9rem;
}

.value {
    font-size: 1.2rem;
    font-weight: 500;
}

.security-section {
    max-width: 400px;
}

.danger-zone {
    border: 1px solid var(--error);
}

.danger-actions {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
}

.btn-danger {
    background-color: var(--error);
    color: white;
}

.btn-danger:hover {
    opacity: 0.9;
}

@media (max-width: 768px) {
    .profile-header {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
    }

    .details-grid {
        grid-template-columns: 1fr;
    }
}
</style>
