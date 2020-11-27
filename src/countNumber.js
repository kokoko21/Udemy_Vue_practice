export const countNumber = {
    data() {
        return {
            title: "Welcome to Osaka",
            subTitle: "Osaka is a big city",
            number: 0
        };
    },
    filters: {
        lower(value) {
            return value.toLowerCase();
        }
    }
};