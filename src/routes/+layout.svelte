<script lang="ts">
   import { user, userData } from "$lib/firebase";
    import "../app.css";
   import Header from "$lib/components/Header.svelte";
   $user;
   $userData; 
</script>

<div class="min-h-screen flex flex-col">
    <Header />
    <slot />
</div>
