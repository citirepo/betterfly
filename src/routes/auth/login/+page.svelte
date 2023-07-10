<script lang="ts">
    import { OAuthService, type TokenRequest, type OpenAPIConfig} from "../../../generated/index";

    let username = '';
    let password = '';
    
    let oauthService : OAuthService = new OAuthService();

    async function login()
    {
        var tokenRequest : TokenRequest = {
            Username: username,
            Password: password
        }
        var response = await OAuthService.postOAuthVGetToken('2.0', tokenRequest);

        console.log(response);
    }
</script>

<div class="card p-4 max-w-xs m-auto mt-10">
    
    <label class="label mb-3">
        <input bind:value={username} class="input" type="text" placeholder="Username" />
    </label>

    <label class="label mb-3">
        <input bind:value={password} class="input" type="password" placeholder="Password" />
    </label>
                  
    <button type="button" on:click={login} class="btn variant-filled">Login</button>
</div>