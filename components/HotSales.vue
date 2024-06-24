<template>
    <section class="sales">
        <div class="sales_wrapper">
            <div class="sales_wrapper__sale">
                <img src="../assets/images/aksiya/1.png" alt="">
                <p>{{ $t('hotSales.1') }}</p>
            </div>
            <div class="sales_wrapper__sale">
                <img src="../assets/images/aksiya/2.png" alt="">
                <p>{{ $t('hotSales.2') }}</p>
            </div>
            <div class="sales_wrapper__sale">
                <img src="../assets/images/aksiya/1.png" alt="">
                <p>{{ $t('hotSales.1') }}</p>
            </div>
            <div class="sales_wrapper__sale">
                <img src="../assets/images/aksiya/2.png" alt="">
                <p>{{ $t('hotSales.2') }}</p>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.sales {
    width: 100%;

    &_wrapper {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        flex-direction: row;
        gap: 1rem;
        flex-wrap: wrap;
        padding-bottom: 3rem;

        &__sale {
            min-width: 200px;
            width: calc(100% / 4 - 2rem);
            display: flex;
            justify-content: end;
            align-items: center;
            flex-direction: column;
            flex-grow: 1;

            &:nth-child(odd) {
                background-color: var(--color-red);
            }

            &:nth-child(even) {
                background-color: var(--color-orange);
                gap: 2rem;
            }

            color: white;
            border-radius: 12px;
            overflow: hidden;

            p {
                padding: 1.5rem;
                font-size: 22px;
                font-weight: 600;
            }

            img {
                width: 100%;
                object-fit: contain;
            }
        }
    }
}
</style>