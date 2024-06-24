<template>
    <div class="search">
        <div class="search_wrapper">
            <p>{{ $t("checkAddress.1") }}</p>
            <div class="search_wrapper__form">
                <input type="text" :placeholder="$t('checkAddress.2')" name="" id="">
                <button>{{ $t("checkAddress.3") }}</button>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.search {
    width: 100%;
    padding-bottom: 2rem;

    &_wrapper {
        width: 100%;
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
        background-color: var(--bgcolor-white);
        padding: 1rem;
        border-radius: 12px;
        border: 1px solid var(--color-border);

        p {
            font-size: 16px;
            color: var(--fontColor-black);
        }

        &__form {
            display: flex;
            justify-content: start;
            align-items: center;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 1rem;
            flex-grow: 1;
            height: 100%;

            input {
                min-width: 250px;
                flex-grow: 1;
                height: 100%;
                font-size: 16px;
                padding-left: 1rem;
                padding-block: .8rem;
                padding-right: 1.2rem;
                border: 1px solid var(--color-border);
                border-radius: 7px;
                color: var(--fontColor-black);
                background-color: var(--bgcolor-white);
                &:focus{
                    border-color: var(--color-red);
                }
            }

            button {
                padding: .8rem 1.2rem;
                background-color: var(--color-orange);
                color: white;
                font-size: 16px;
                color: white;
                border-radius: 7px;
                cursor: pointer;
            }
        }
    }
}
</style>