<template>
    <div class="top_header">
        <div class="container">
            <div class="header">
                <div class="top_header__left">
                    <select name="" id="" @change="(e: any) => setLocale(e.target.value)">
                        <option value="uz">Uz</option>
                        <option value="ru">Ru</option>
                        <option value="en">Eng</option>
                    </select>
                    <p>{{ $t('topHeader.1') }}</p>
                    <p>{{ $t('topHeader.2') }}: <b>00:24:15</b></p>
                </div>
                <div class="top_header__right">
                    <p>{{ $t('topHeader.3') }}: <b>09:00 - 22:00</b></p>
                    <nuxt-icon name="sun" fill="red" filled @click="menuTrigger" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const { locale, setLocale } = useI18n()
const isMobileNavVisible = ref<boolean>(false);

const menuTrigger = (): void => {
    if (isMobileNavVisible.value) {
        isMobileNavVisible.value = false;
        console.log('false')
        return;
    }

    isMobileNavVisible.value = true;
    console.log('true')
};

useHead({
    bodyAttrs: {
        class: computed(() => {
            if (isMobileNavVisible.value) return 'dark';

            return '';
        }),
    },
});

const isDarkMode = ref<boolean>(false);
</script>

<style lang="scss" scoped>
.top_header {
    width: 100%;
    font-size: 14px;
    font-family: 'Mulish';
    border-bottom: 1px solid var(--color-border);
    padding-block: .5rem;
    background-color: var(--bgcolor-white);
    color: var(--fontColor-black);


    div.header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        flex-wrap: nowrap;

        .top_header__left {
            display: flex;
            align-items: center;
            gap: 1rem;

            select {
                border: none;
                background-color: transparent;
                color: var(--fontColor-black);
            }
        }

        .top_header__right {
            display: flex;
            align-items: center;
            gap: 1rem;

            .nuxt-icon {
                font-size: 20px;
                cursor: pointer;

                svg {
                    path {
                        fill: var(--color-orange) !important;
                    }
                }
            }
        }
    }
}
</style>