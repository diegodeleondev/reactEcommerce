const products = [
    {
        id: "1",
        name: "Kawasaki Ninja 400",
        price: 11000,
        category: "Motos",
        img: "https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/23MY_Ninja_400_GN1_STU__2_.png",
        stock: 10,
        description: "Bicilindrica, 400cc, Velocidad máxima: 180km/h"
    },
    {
        id: "2",
        name: "Kawasaki Ninja 650",
        price: 15000,
        category: "Motos",
        img: "https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/23MY_Ninja_650_GN1_STU__1_.png",
        stock: 5,
        description: "Bicilindrica, 649cc, Velocidad máxima: 200km/h"
    },
    {
        id: "3",
        name: "Kawasaki Ninja zx6r",
        price: 19000,
        category: "Motos",
        img: "https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/19ZX636G_201BK1DRF3CG_A.png",
        stock: 12,
        description: "Tetracilindrica, 636cc, Velocidad máxima: 260km/h"
    },
    {
        id: "4",
        name: "Kawasaki Ninja zx10r",
        price: 28000,
        category: "Motos",
        img: "https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/22MY_Ninja%20ZX-10R_GN1_Performance_FR.002.png",
        stock: 3,
        description: "Tetracilindrica, 1000cc, Velocidad máxima: 290km/h"
    },
    {
        id: "5",
        name: "Casco Kawasaki Salvacabeza",
        price: 200,
        category: "Accesorios",
        img: "https://storage.googleapis.com/sspe-appv20-resources/kawasaki.com.pe/images/webp/RPHA_70_CARBON_ARTAN_MC4H_1-copie-1-182917.webp",
        stock: 50,
        description: "Casco deportivo, de carbón. Máxima resitencia"
    },
    {
        id: "6",
        name: "Chaqueta Kawasaki idealTemperature",
        price: 350,
        category: "Indumentaria",
        img: "https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/accessories/zoom_22MY-105WBM2210XX_WSBK_AllWeather_J_M_34.jpg",
        stock: 20,
        description: "Chaqueta con protecciones, 4 estaciones."
    },
    {
        id: "7",
        name: "Guantes Kawasaki Piel Ninja",
        price: 150,
        category: "Indumentaria",
        img: "https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/accessories/077RGM0181-S.jpg",
        stock: 30,
        description: "Guantes térmicos con protección"
    },
    {
        id: "8",
        name: "Botas Kawasaki Nantes",
        price: 200,
        category: "Indumentaria",
        img: "https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/accessories/Nantes_MC_M_1__Medium_.jpg",
        stock: 6,
        description: "Botas de competición"
    }
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (()=> {
            resolve(products)
        },1000)
    })
}