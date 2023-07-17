<script>
    import { onMount } from 'svelte'
    import { themeChange } from 'theme-change'
    import Header from "$lib/components/Header.svelte";
    import { userData } from "$lib/firebase";

    onMount(() => {
        themeChange(false)
        // 👆 false parameter is required for svelte
    })

</script>

<div class="navbar bg-base-100 flex flex-col sm:flex-row">
    <div class="flex-1 pb-3 sm:pb-0">
        <a class="btn btn-ghost normal-case text-xl" href="/">LinkYou</a>
    </div>
    <div class="flex-none">
        <ul class="menu flex flex-col sm:menu-horizontal px-1 gap-5">
            {#if $userData?.username}
                <a href="/{$userData.username}" class="btn btn-primary text-center h-[100%]">Open Your Profile</a>
            {:else}
                <a href="/login" class="btn btn-primary">Get Started</a>
                <a href="/yurii" class="btn btn-secondary">Example Profile</a>
            {/if}
            <li>
                <select class="h-[100%] select select-ghost w-full max-w-xs" data-choose-theme>
                    <option disabled value="">
                        Pick a theme
                    </option>
                    <option value="cyberpunk">Cyberpunk</option>
                    <option value="">Default</option>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="coffee">Coffee</option>
                    <option value="fantasy">Fantasy</option>
                </select>
            </li>
        </ul>
    </div>
</div>
