<template>
    <div class="bg-gray-100 min-h-screen text-gray-900">
        <nav class="bg-white text-lg px-6 py-6">
            <div class="container mx-auto flex items-center justify-between px-6">
                <div>
                    <NuxtLink to="/">Logo</NuxtLink>
                </div>
                <div>
                    <ul class="flex space-x-12">
                        <li>
                            <NuxtLink to="/">Home</NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <slot />
    </div>
</template>