<script>
    import { userData } from "$lib/firebase";

  </script>
  
  <svelte:head>
    <title>LinkYou - your personal links organizer</title>
    <meta name="description" content="A personal links organizer" />
  </svelte:head>
  
  <main class="flex w-full min-h-screen">
  
    <div class="hero bg-base-200">
      <div class="hero-content text-center">
        <div class="w-full flex flex-col items-center">
          <img
                  src="/logo.png"
                  height="256"
                  width="256"
                  alt="Link-You Logo"
          />
          <h1 class="text-7xl font-bold">Link-You</h1>
          <p class="py-6 text-2xl">Share all your links here</p>
          {#if $userData?.username}
            <a href="/{$userData.username}/edit" class="btn btn-primary">Edit Profile</a>
          {:else}
            <a href="/login" class="btn btn-primary">Get Started</a>
            <a href="/yurii" class="btn btn-secondary">Example Profile</a>
          {/if}
        </div>
      </div>
    </div>
    
  </main>
  
  