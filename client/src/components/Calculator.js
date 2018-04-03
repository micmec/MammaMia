import React from 'react';
import '../assets/css/main.css'
import '../assets/css/ie8.css'
import '../assets/css/font-awesome.min.css'
import Pranzo from './Pranzo'
import Cena from './Cena'
import Profile from './Profile'
import Extra from './Extra'
import Amatriciana from '../images/pictures/Amatriciana.jpeg'
import ChickenPotato from '../images/pictures/PatatePollo.jpeg'
import Parmigiana from '../images/pictures/Parmigiana.jpeg'
import Lasagna from '../images/pictures/Lasagna.jpeg'
import Carbonara from '../images/pictures/Carbonara.jpeg'
import SaffronRisotto from '../images/pictures/RisottoZafferano.jpeg'
import Cotoletta from '../images/pictures/Cotoletta.jpeg'
import Meatball from '../images/pictures/PolpetteUovo.jpeg'
import CreamyPeas from '../images/pictures/Vellutata.jpeg'
import VealRoast from '../images/pictures/VealRoast.jpeg'
import ZucchiniTuna from '../images/pictures/ZucchiniWrap.jpeg'
import Sushi from '../images/pictures/SushiBurrito.png'
import Salmon from '../images/pictures/Salmon.jpeg'
import Gnocchi from '../images/pictures/Gnocchi.jpeg'
import Linguini from '../images/pictures/Linguine.jpeg'
import BeanSoup from '../images/pictures/ZuppaRavioli.jpeg'
import CousCous from '../images/pictures/Cous.jpeg'
import TurkeyWraps from '../images/pictures/TurkeyWrap.jpeg'
import Norma from '../images/pictures/Norma.jpeg'
import SwordFish from '../images/pictures/SwordFish.jpeg'
import Strawberry from '../images/pictures/StrawberryRisotto.jpeg'
import Aubergine from '../images/pictures/AuberginePasta.jpeg'
import Meatballs from '../images/pictures/Meatballs.jpeg'
import Veal from '../images/pictures/Veal.jpeg'
import Almond from '../images/pictures/ChickenAlmonds.jpeg'
import SalmonPotato from '../images/pictures/SalmonPotato.jpeg'
import TunaCroq from '../images/pictures/TunaCroquettes.jpeg'
import Milky from '../images/pictures/MilkyChicken.jpeg'
import PotatoOmelette from '../images/pictures/PotatoOmelette.jpeg'
import CrispySalmon from '../images/pictures/CrispySalmon.jpeg'
import SweetAlert from 'sweetalert-react'
import '../assets/css/sweetalert.min.css'

// TODO gentle scroll down
// TODO build API for retrieval of info
// TODO change piatto

const recepies = [
    {
        name: "Amatriciana",
        pasto: "Pranzo",
        categoria: "carbo",
        ratio: [250.0, 150.0, 50.0],
        calories: 550.0,
        ingredienti: ["Pasta", "Tomato Sauce", "Bacon"],
        picture: Amatriciana,
        desc: "If you use fresh tomatoes, first boil them for a few moments in boiling salted water, drain and cool them under running water. After peeling them, remove the seeds and cut them into fillets.\n" +
        "In a pan (preferably iron) heat the oil and add the guanciale cut into strips about a couple of centimeters long. When it starts to melt, add the pepper. Brown the pork cheek until it has browned, then blend with the white wine. Let it evaporate, drain the pork cheek and keep warm.\n" +
        "In the same pan put the peeled tomatoes (or freshly prepared previously prepared), salt and cook for the time of cooking pasta, which in the meantime you have thrown into a saucepan with salted boiling water.\n" +
        "When it is almost cooked, add the bacon to the sauce and remove the pepper. Drain the pasta al dente and transfer it to the pan with the sauce. Remove the grated pecorino from the heat and add fresh whirled pepper to taste.\n" +
        "Mix well and serve immediately, completing with other pecorino."
    }, {
        name: "Chicken and potatoes",
        pasto: "Cena",
        categoria: "meat",
        ratio: [250.0, 150.0, -1],
        calories: 500.0,
        ingredienti: ["Chicken", "Potatoes", "Rosemary"],
        picture: ChickenPotato,
        desc: "At least an hour before cooking the chicken, rinse all the cuts with cold water and dry them carefully using absorbent paper. Put the chicken to marinate in a sauce made with extra virgin olive oil and spices. Keep aside a little 'flavor to season potatoes.\n" +
        "Turn on the 190 ° fan oven\n" +
        "\n" +
        "Wash the potatoes, peel and cut into large pieces. Place the chicken in a pan, arrange around it, the potatoes seasoned with chopped herbs.\n" +
        "Place the pan in the oven without covering it and cook the chicken for about 30 minutes. After this time, lower the temperature to 180 ° and cook for another 30 minutes. When the chicken is well browned, turn it over so that it also colors on the other side.\n" +
        "Serve immediately\n"
    }, {
        name: "Parmigiana",
        pasto: "Pranzo",
        categoria: "veggie",
        ratio: [550.0, 350.0, 50.0, -1],
        calories: 600.0,
        ingredienti: ["Aubergine", "Tomato Sauce", "Mozzarella", "Eggs"],
        picture: Parmigiana,
        desc: "1.     Heat the oil in a large frying pan (or wide saucepan), add the garlic, thyme and sage, and cook gently for a few mins. Tip in the tomatoes, vinegar and sugar, and gently simmer for 20-25 mins until thickened a little.\n" +
        "\n" +
        "2.     Meanwhile, heat a griddle (or frying) pan. Brush the aubergine slices on both sides with olive oil, then griddle in batches. You want each slice softened and slightly charred, so don’t have the heat too high or the aubergine will char before softening. Remove to a plate as you go.\n" +
        "\n" +
        "3.     In a large baking dish, spread a little of the tomato sauce over the base. Mix 25g of the Parmesan with the breadcrumbs and pine nuts, and set aside. Top the sauce with a layer or two of aubergine slices, then season well. Spoon over a bit more sauce, then scatter over some mozzarella, Parmesan and basil leaves. Repeat, layering up – and finish with the last of the tomato sauce. Scatter over the cheesy breadcrumbs and chill for up to 24 hrs, or bake straight away."
    }, {
        name: "Lasagna",
        pasto: "Pranzo",
        categoria: "carbo",
        ratio: [200.0, 300.0, 150.0, 40.0, -1, -1, -1, 30.0],
        calories: 750.0,
        ingredienti: ["Lasagne", "Besciamella", "Minced beef", "Butter", "Carrot", "Celery", "Onion", "Bacon"],
        picture: Lasagna,
        desc: "1) In order to make lasagne with mixed meat sauce you must firstly fry the chopped vegetables in a saucepan with very hot extra virgin olive oil. Then you have to add the different types of meat and sausage (without skin) and sauté over a low heat, stirring with a wooden spoon.\n" +
        "2) Once mixed, wet with white wine, so as to evaporate over high heat. Pour the tomato sauce and a ladle of not too hot water, salt and pepper and continue cooking for 40 minutes, over low heat, stirring often with a wooden spoon.\n" +
        "3) At this point prepare the béchamel: melt 30 g of butter in a saucepan, add the flour to thicken the mixture, making sure that it does not take color; at this point dilute the milk a little at a time, which must be very hot and cook for 10 minutes. Once cooked, add salt and pepper and grated nutmeg and turn off the heat.\n" +
        "4) Next, read the lasagna in boiling salted water, al dente and on a tea towel to remove excess water. Grease a rectangular baking pan with butto and a first layer of lasagna, a mixture of meat sauce, parmesan and béchamel.\n" +
        "5) Cover with a layer of lasagna and then until all the ingredients are used up. Once these steps have been completed, the lasagne can be placed in a hot oven at 180 ° for 30 minutes, let it cool before serving at the table.\n"

    }
    , {
        name: "Carbonara",
        pasto: "Pranzo",
        categoria: "carbo",
        ratio: [160.0, 50.0, -2, 15.0],
        calories: 550.0,
        ingredienti: ["Pasta", "Bacon", "Eggs", "Pecorino"],
        picture: Carbonara,
        desc: "Cook the spaghetti in boiling salted water.\n" +
        "Meanwhile, cut the guanciale into strips and fry in a pan without adding oil.\n" +
        "Simultaneously beat the egg yolks with the pecorino cheese in a bowl: add two tablespoons of spaghetti cooking water and a mince of black pepper.\n" +
        "Drain the spaghetti al dente.\n" +
        "Pour the spaghetti into the pan with the bacon and mix well. Remove the pan from heat and add the beaten egg yolks: mix well and add a spoonful of the cooking water for a creamy result.\n" +
        "Sprinkle with grated Pecorino cheese and a mince of black pepper.\n" +
        "Serve immediately.\n"
    }, {
        name: "Saffron risotto",
        pasto: "Pranzo",
        categoria: "carbo",
        ratio: [80.0, 10.0, -0.2, 500.0, 20.0],
        calories: 450.0,
        ingredienti: ["Rice", "Saffron", "Onion", "Meat broth", "Parmesan"],
        picture: SaffronRisotto,
        desc: "Put a saucepan over low heat, add half the butter and, when it is melted, the finely chopped onion and the previously minced marrow and cook slowly without letting it get color. Then add the rice and toast it for a minute or until it is transparent.\n" +
        "Add the white wine, and as soon as it has evaporated, cover the rice with hot meat broth and continue cooking, stirring occasionally adding more broth as it is absorbed by the rice. after about 12 minutes, add the saffron dissolved in a little stock and season with salt and pepper.\n" +
        "When the rice is cooked (al dente), remove from heat and mix it with the remaining butter and Parmigiano Reggiano, stirring until a creamy consistency is obtained.\n" +
        "Serve immediately.\n"
    }
    , {
        name: "Milanese cotoletta",
        pasto: "Cena",
        categoria: "meat",
        ratio: [250.0, -1, 25.0, 50.0, -1, 100.0],
        calories: 550.0,
        ingredienti: ["Veal", "Eggs", "Butter", "Lemon", "Bread"],
        picture: Cotoletta,
        desc: "Do not beat the meat, remove only any side bones.\n" +
        "Beat the eggs inside a holster, salt them and grate the dried bread coarsely.\n" +
        "Pass each side first in the flour, then in the egg and finally in the breadcrumbs.\n" +
        "Press the meat into the breadcrumbs well, making sure to adhere completely.\n" +
        "Put some butter in a small pan and check the temperature: when it is 169 ° add the chops and brown them on both sides.\n" +
        "Drain on absorbent paper and add a little salt."
    }, {
        name: "Meatball with peas and eggs",
        pasto: "Cena",
        categoria: "veggie",
        ratio: [100.0, 100.0, 50.0, -4, 20.0],
        calories: 600.0,
        ingredienti: ["Peas", "Minced veal", "Bread", "Eggs", "Pecorino"],
        picture: Meatball,
        desc: "1) Put 8 quail eggs in a saucepan, cover with cold water and cook for 3 minutes from boiling; cool them a little below the tap, then peel them and keep them aside.\n" +
        "2) Boil 200 g of shelled broad beans for about 30 minutes, remove the skin, transfer them to the mixer and blend them. Add a handful of parsley leaves and 1/2 clove of garlic and blend again for a few moments. Transfer the mixture into a bowl and add 150 g of minced veal, 1 whole chicken egg, 30 g of grated pecorino cheese, salt and pepper.\n" +
        "3) With the moistened hands form many round meatballs, inserting a hard quail egg into each one. Pass the meatballs in the beaten egg, then in the breadcrumbs mixed with 1 teaspoon of paprika.\n" +
        "4) Fry the meatballs and beans with the egg in a pan with plenty of hot seed oil and let it dry on paper towels. Serve on the table still warm.\n"
    }
    , {
        name: "Creamy peas and lettuce soup",
        pasto: "Cena",
        categoria: "veggie",
        ratio: [200.0, 100.0, 20.0, -0.5, -0.5, 100.0, 100.0],
        calories: 400.0,
        ingredienti: ["Peas", "Potatoes", "Butter", "Lettuce", "Onion", "Greek yogurt", "Bread crumble"],
        picture: CreamyPeas,
        desc: "1) Remove the outer leaves of 1 cup of lettuce, cut into strips and wash; peeled 200 g of potatoes and cut into chunks. Peel 1 onion and slice it.\n" +
        "2) Put the onion in a pot with the prepared vegetables, 300 g of peas already shelled, a pinch of salt and 30 g of butter. Briefly add flavor then add 1 liter of boiling water, cover and cook for about 20 minutes. When cooked, blend everything with an immersion blender.\n" +
        "3) Garnish and bring to the table. Cut 4 slices of homemade bread into cubes and toast them under the oven grill (if necessary replace the toasted bread with croutons ready). Divide the pour the pea and lettuce cream in the bowls, add a spoonful of Greek yogurt and season with a generous ground of pepper, chives or mint. Serve with croutons."
    }
    ,
    {
        name: "Veal roast",
        pasto: "Cena",
        categoria: "meat",
        ratio: [250.0, 20.0, 50.0, -1, -1],
        calories: 500.0,
        ingredienti: ["Veal", "Butter", "Flour", "Sage", "Rosmary"],
        picture: VealRoast,
        desc: "If you want to cook your roast veal in the oven instead of in a saucepan, pass the meat first in a hot oven at 200 ° C for 30 minutes; after 15 minutes turn it with 2 pallets. Remove from the oven, sprinkle with 1 dl of dry white wine then lower the oven to 180 ° C, bake again your baking pan covered with aluminum and cook for 45 minutes, sprinkling with a little broth. Discover the roast and cook for another 45 minutes, soaking it with its bottom.\n" +
        "\n" +
        "Remember: once cooked, before cutting it, let the roast rest in aluminum for at least ten minutes. In this way the juices will redistribute in the fibers.\n" +
        "\n" +
        "1) Have the piece of veal tied with string by the butcher, or put it yourself in a slightly elastic cotton net, which you can also find in the pharmacy. Spread 3 tablespoons of flour in a large dish, sprinkle with a ground of pepper and let \"roll\" the piece of meat.\n" +
        "2) On low heat, melt in a saucepan, which contains the piece of meat, 40 g of butter with 3 tablespoons of oil. Add the veal and brown it, turning it several times and using two pallets or two wooden spoons. Then add the sage leaves and rosemary.\n"
    }, {
        name: "Zucchini tuna wraps",
        pasto: "Cena",
        categoria: "fish",
        ratio: [-2, -1, -1, 150.0, 50.0, 50.0],
        calories: 450.0,
        ingredienti: ["Zucchini", "Anchovies", "Eggs", "Tuna", "Parmesan", "Bread crumble"],
        picture: ZucchiniTuna,
        desc: "Start to prepare the stuffed zucchini of tuna by cutting the ends of the vegetables. Cut the zucchini in half and with a potato peeler (or a mandolin) made of thin and regular slices from the central parts. Keep the leftovers and chop them with a knife. In a non-stick pan, melt the anchovy in the oil with the garlic clove.\n" +
        "Remove the garlic, add the chopped zucchini leftovers and cook for 5 minutes, adding salt and pepper to taste. Withdraw and allow to cool. Transfer everything to the mixer jar together with the drained tuna, capers, almonds, parmesan, egg, mint and parsley and add as much breadcrumbs as will serve to obtain a soft, but not too moist mixture. Season with salt and pepper.\n" +
        "Place a walnut of the filling at the beginning of a courgette ribbon and roll up to form a small cylinder. Proceed in this way until the ingredients are used up and place them inside a pan lined with parchment paper. Sprinkle with oil, sprinkle with a little 'Parmesan and cook in the oven already hot at 190 degrees for 30 minutes or until golden brown.\n" +
        "Remove from the oven and serve the stuffed zucchini with warm tuna or at room temperature"
    }
    ,
    {
        name: "Sushi salmon burrito",
        pasto: "Cena",
        categoria: "fish",
        ratio: [200.0, 300.0, 50.0, 200.0, -1, 50.0, 30.0],
        calories: 400.0,
        ingredienti: ["Rice", "Water", "Vinegar", "Salmon", "Avocado", "Salad", "Mayo"],
        picture: Sushi,
        desc: "To prepare your burrito sushi, start from the basic ingredient: rice. Rinse it 2/3 times, then pour the rice and water into a bowl and let stand for 30 minutes. Proceed pouring rice and water into a pot, bring to a boil, lower the heat and cook everything with the lid for 30 minutes. When cooked, add the rice vinegar to the rice and mix everything. Let the rice cool and put it aside. Once cold, the rice is ready to be seasoned. Or rather, you can start stuffing your burrito sushi. First of all, carefully spread the rice (about 150g) on ​​the nori alga, taking care to leave the upper edge of the seaweed free.\n" +
        "At this point you can season the rice. We advise you to concentrate the filling in the center of the alga, leaving the internal contours free. Now touch the sauces: start spreading the teriyaki, which you can prepare by following our recipe, ready in 10 minutes. Continue with guacamole, the typical Mexican avocado sauce, of which we give you the recipe.\n" +
        "Then add mayonnaise and a tablespoon of fresh spreadable cheese. At this point you can add the ingredients already washed: the fish eggs, 2 leaves of a kind salad, 3 slices of avocado, 100g of salmon cubes and the daikon cut into julienne.\n" +
        "When the filling is complete, you can roll the seaweed on itself until the two ends are closed. To compact the burrito sushi you can gently press it with a sushi mat, preferably made of bamboo.\n"
    }, {
        name: "Salmon with salad",
        pasto: "Cena",
        categoria: "fish",
        ratio: [300.0, 150.0, 10.0],
        calories: 300.0,
        ingredienti: ["Salmon", "Salad", "Vinegar"],
        picture: Salmon,
        desc: "Preparing the vinaigrette for the fresh salmon salad is quick and easy. In a bowl emulsified with a fork, or a whisk, six tablespoons of oil, two tablespoons of apple vinegar, a pinch of fior di sale and some pink peppercorns.\n" +
        "Arrange the slices of salmon in a pan, sprinkle with the vinaigrette and bake for 5 minutes.\n" +
        "Withdraw and divide the pieces into smaller pieces, or chop them up. Arrange the mixture on a serving dish and spread the salmon over it, season everything by pouring the cooking sauce into it. Fresh salmon salad is ready to be served.\n"
    }, {
        name: "Double pepper gnocchi",
        pasto: "Pranzo",
        categoria: "carbo",
        ratio: [200.0, 100.0, 5.0, 5.0],
        calories: 400.0,
        ingredienti: ["Gnocchi", "Smoked salmon", "Black pepper", "Pink pepper"],
        picture: Gnocchi,
        desc: "In a pan let the butter melt and let the two types of pepper flavor. Meanwhile, cut the salmon into strips.\n" +
        "Add the salmon and after five minutes sprinkle a glass of brandy, let it evaporate, salt sparingly given the presence of the two peppers. Boil the gnocchi in slightly salted water.\n" +
        "Once afloat, drain the gnocchi and pass them in the pan with the sauce, leaving them to flavor for half a minute. Sprinkle with parsley and serve."
    },
    {
        name: "Linguini zucchini and mussels",
        pasto: "Pranzo",
        categoria: "carbo",
        ratio: [150.0, 100.0, 100.0, 50.0],
        calories: 450.0,
        ingredienti: ["Linguini", "Mussel", "Zucchini", "Cherry tomatoes"],
        picture: Linguini,
        desc: "The preparation of the bavette with clams and zucchini begins with the opening of the clams. In a pan, without any seasoning, let the clams open on high heat. It will take 10-15 minutes. Withdraw, remove the clams that have not opened, remove the molluscs from the others and keep them aside. In a pan, heat three tablespoons of oil, add the chopped shallot, the whole garlic and half a chilli pepper.\n" +
        "Remove the garlic, place the molluscs, the sliced ​​zucchini and the minced parsley. Cook for 5 minutes. Sprinkle the wine, let it evaporate.\n" +
        "Add the diced tomatoes, salted, cooked. Boil the bavette and flavor it in the pan with zucchini and clams.\n" +
        "Transfer the bavette to the clams, well seasoned, on the serving plate and serve at the table.\n"
    }, {
        name: "Beans soup and shrimp ravioli",
        pasto: "Pranzo",
        categoria: "carbo",
        ratio: [100.0, 150.0, 100.0, -1, 5.0],
        calories: 400.0,
        ingredienti: ["Beans", "Ravioli", "Shrimp", "Onion", "Black pepper"],
        picture: BeanSoup,
        desc: "So free from any hesitation and, if possible, come across a game of delicate and delicious red shrimp of Sicily: shell and beat them with a heavy knife in a coarse tartare: the filling is already beautiful and ready.\n" +
        "For the dough: you will get the best with a mixture of only egg yolks, flour type 0 with nothing of raw semolina that reduces it wrinkled and porous. The measure is very dependent on the generosity of the egg, but has the basis of calculation: 3 egg yolks for 100g of flour, with a spoonful of semolina.\n" +
        "The dough will remain soft and you will feel it ripen in your hands: manipulate it with moderate energy that does not warm too much, and when you have it homogeneous leave it to rest not more than half an hour.\n" +
        "Pass the dough with a rolling pin and get a fairly thin sheet, keeping it well-floured. Take 5cm square squares and place a teaspoon of shrimp stuffing in the center of each of them. Close the opposite corners of the square two by two as a handkerchief, tightening the knot between thumb and forefinger: also take care to pinch the edges to seal the ravioli in good shape.\n"
    }
    , {
        name: "Cous cous and vegetables",
        pasto: "Pranzo",
        categoria: "veggie",
        ratio: [150.0, -0.5, 100.0, 100.0, 100.0, 80.0, -1],
        calories: 350.0,
        ingredienti: ["Cous cous", "Onion", "Brocoli", "Mushrooms", "Vegetables broth", "Peas", "Carrot"],
        picture: CousCous,
        desc: "To make the vegetable cous cous with the Thermomix, start with the chopped onion and carrot. Put it in the bowl of the Thermomix cut into four quarters and chop for 5 seconds at speed 7. Using the spatula bring it back to the bottom, add the olive oil and brown for 3 minutes at 100 °, speed 2. Unite below the carrot with washers and chopped for 5 seconds at speed 5.\n" +
        "Then add peas, the artichoke and cut into strips, the sliced ​​mushrooms and the tops of broccoli. Cook for 15 minutes at 100 ° anticlockwise speed 1. When the vegetables are cooked, collect them in a bowl and pour the vegetable stock into the jug of the clean Thermomix. Add 20 g of olive oil and cook for 5 minutes at 100 ° speed 1: the broth will come to a boil. Drop the cous cous from the hole on the cap while the blades are running at speed 1. Let stand for 5 minutes.\n" +
        "Add the vegetables and cous cous, mix gently and serve your vegetable cous cous with the Thermomix garnished with plenty of fresh parsley.\n"
    },
    {
        name: "Turkey wraps",
        pasto: "Cena",
        categoria: "meat",
        ratio: [150.0, 100.0, 70.0, -10, -1, 50.0],
        calories: 450.0,
        ingredienti: ["Turkey", "Minced veal", "Sausage", "Olives", "Eggs", "Salad"],
        picture: TurkeyWraps,
        desc: "Start preparing the stuffed turkey rolls, adding minced meat, crumbled sausage, egg yolk, parmesan and chopped olives in a large bowl. Mix well with the help of a wooden spoon until a homogeneous mixture is obtained. Season with salt.\n" +
        "Place the turkey slices on a cutting board and place on each of them two tablespoons of the freshly prepared filling. Distribute the mixture well leaving a small border around the slice free from the filling and form a tight roll: roll each slice on itself up to about half, fold the edges of meat on the sides inward and continue to roll. Strip each roulade with the slices of bacon, tie them together using a piece of kitchen string and place a sprig of rosemary on each one.\n" +
        "Heat a couple of tablespoons of oil with the garlic clove in a pan and brown the bundles, on all sides, for about 5 minutes.\n" +
        "When they are golden, transfer them to a pan and cook in a preheated oven at 180 degrees for about 20 minutes.\n" +
        "When cooked, remove the string, add salt and serve the warm turkey rolls with a fresh Valerian salad.\n"
    }, {
        name: "Pasta “alla norma”",
        pasto: "pranzo",
        categoria: "carbo",
        ratio: [150.0, 100.0, 100.0, 200.0, 50.0],
        calories: 550.0,
        ingredienti: ["Pasta", "Aubergine", "Ricotta", "Tomato Sauce", "Onion"],
        picture: Norma,
        desc: "Cut the aubergine into small cubes, salt lightly and leave to stand for about 20 minutes, so that the water inside it can come out.\n" +
        "Then brown the chopped onion and garlic in a pan in which you have previously heated a drop of extra virgin olive oil.\n" +
        "Add the aubergine, the tomato pulp, salt, pepper and cook for about 15-20 minutes.\n" +
        "Meanwhile cook the penne in plenty of salted water, drain and season with the sauce prepared by adding the basil and grated salted ricotta.\n" +
        "Serve hot."
    }, {
        name: "Swordfish capers and lemon",
        pasto: "Cena",
        categoria: "fish",
        ratio: [150.0, -2, 30.0, -1, 5.0],
        calories: 350.0,
        ingredienti: ["Swordfish ", "Garlic", "Capers", "Lemon", "Parsley"],
        picture: SwordFish,
        desc: "Place a pan on a medium-high heat with the oil and, as soon as it is hot, the peeled garlic, then add the salted and peppery fish with the capers previously desalted and cut roughly. When, after 5 minutes, you have colored the fish on both sides, soak it with lemon juice, cook a couple of minutes, season the oregano and the minced parsley and serve."
    }, {
        name: "Strawberry risotto",
        pasto: "Pranzo",
        categoria: "carbo",
        ratio: [150.0, -1, 30.0, -1, 50.0, 100.0],
        calories: 450.0,
        ingredienti: ["Rice ", "Onion", "Celery", " Butter", "Strawberry"],
        picture: Strawberry,
        desc: "PREPARE THE VEGETABLE BROTH:\n" +
        "Wash and peel the carrot, celery and half onion, place them in a pot immersed in cold water and put on the fire.\n" +
        "Cook the broth for 20 or 30 minutes from the moment it begins to boil and add salt only at the end of cooking.\n" +
        "WHEN THE BRODO WILL BE READY YOU CAN PREPARE THE RISOTTO:\n" +
        "Carefully wash the strawberries, remove the leaves and cut them into cubes, leaving aside 2 or 3 for the decoration.\n" +
        "On a medium-high heat, melt 1/3 of the butter in a saucepan, then add the remaining half chopped onion rather finely and stir.\n" +
        "When this has taken a nice golden color, but before it starts to darken, add the rice and, stirring, toast it until the beans, absorbing the butter, have become almost transparent.\n" +
        "Pour the wine into the saucepan, stir and let it evaporate. As soon as it is completely evaporated, add the stock to the rice, pouring it a little at a time, waiting for the one added previously to evaporate almost completely before adding more.\n" + +
            "At the time of serving the risotto, if you want to present it in an original way, you can garnish it with the remaining strawberries cut into very small cubes or strips.\n"
    }, {
        name: "Pasta with aubergine cream",
        pasto: "Pranzo",
        categoria: "carbo",
        ratio: [150.0, 700.0, 10.0, 50.0],
        calories: 400.0,
        ingredienti: ["Pasta", "Aubergine", "Basil", "Parmesan"],
        picture: Aubergine,
        desc: "Boil the basil for a few seconds in a pot full of boiling and salted water.\n" +
        "Drain it with a perforated spoon and immerse it immediately in a bowl full of ice water so as to make it keep a bright green color.\n" +
        "Clean the aubergines, peel them and cut them into rather coarse pieces, then dip them in a pot full of boiling salted water and cook for about ten minutes or until they are softened.\n" +
        "Drain the basil, dry it with a sheet of kitchen paper, place it in a bowl with 50 ml of oil and pass it with the mixer until a smooth sauce is obtained.\n" +
        "Drain the aubergines with a slotted spoon and pass them with a blender with a pinch of salt and pepper until a sauce is not too liquid.\n" +
        "Then cook the pasta in a pot of boiling salted water for the cooking time indicated on the package.\n" +
        "Meanwhile, pour the aubergine sauce in a pan, add salt and pepper, add a little of the previously prepared basil sauce, stir and let it heat over a moderate heat.\n" +
        "Once the pasta is cooked al dente, drain it, pour it immediately into the pan with the sauce, let it jump and add half of the grated Parmigiano Reggiano and the remaining oil.\n" +
        "Stir the pasta again, serve it in the dishes garnished with a little Parmesan and the remaining basil sauce and serve immediately.\n"
    }, {
        name: "Meatballs",
        pasto: "Cena",
        categoria: "meat",
        ratio: [350.0, -2, 50.0, 20.0, 50.0],
        calories: 350.0,
        ingredienti: ["Minced beef ", "Eggs", "Bread crumble", " Parmesan", "Mozzarella"],
        picture: Meatballs,
        desc: "To prepare meatballs, start slicing the stale bread. Remove the crust and cut the crumb into cubes, then place it in a mixer together with the minced parsley and the thyme leaves: operate the mixer until you obtain a smooth and homogeneous mixture. Slice and chop the provola coarsely.\n" +
        "In a large pan place the meat, chopped bread and provola, add the grated Parmesan and finally the slightly beaten eggs.\n" +
        "Season with salt and pepper then start kneading with your hands until you get a compact dough, which you must leave to rest in the refrigerator for 30 minutes covered with plastic wrap.\n" +
        "After the necessary time, remove the dough from the refrigerator, moisten your hands and begin to divide the dough into portions of about 20 g: each modeled on the palm of your hand to get 44 balls of the same size and then put them on a tray lined with transparent film. Put in a large bowl breadcrumbs and pass each meatball, turning it with the help of a fork for a uniform breading. Let them rest all on the tray, trying to distance them slightly from each other. Meanwhile, bring the oil to fry at a temperature that does not exceed 170-180 ° (to be measured with a kitchen thermometer).\n" +
        "When it will be hot at the right point, dip 2-3 meatballs at a time with a slotted spoon so as not to lower the temperature of the oil too much, cook a few minutes (2-3 minutes will be enough) until you get a nice browning, then transfer the cooked meatballs onto absorbent paper just long enough to remove the excess oil.\n" +
        "Meatballs are ready, serve them hot!"
    }, {
        name: "Veal au lemon",
        pasto: "Cena",
        categoria: "meat",
        ratio: [200.0, 50.0, -1],
        calories: 350.0,
        ingredienti: ["Veal ", "Flour", "Lemon"],
        picture: Veal,
        desc: "To prepare the lemon escalopes, start by squeezing the juice to obtain the juice (1). Then beat the slices with the help of a meat hammer, covering them with baking paper so as not to break the fibers (2). Hit them with a firm hand but without too much violence, so the fabrics will soften without shredding the pulp (3).\n" +
        "Flour the veal slices (4) and remove the excess flour; in a large pan melt the butter over low heat, then add the slices, raise the heat and brown for a couple of minutes before on one side (5) and then on the other (6).\n" +
        "Season with salt and black pepper (7), pour the lemon juice into the pan and cook over a gentle flame for 2-3 minutes (8). As soon as you notice that the sauce starts to thicken and becomes creamy, you can turn off and serve immediately the lemon escalopes (9)!"
    }, {
        name: "Chicken with almonds",
        pasto: "Cena",
        categoria: "meat",
        ratio: [250.0, 50.0, 70.0, 30.0, 30.0, -1],
        calories: 450.0,
        ingredienti: ["Chicken ", "Flour", "Almonds", "Soy sauce", "Onion", "Garlic"],
        picture: Almond,
        desc: "To prepare the chicken with almonds, start by preparing the aromas; peel the garlic clove and slice it thinly (1), then peel the ginger and grate it (2), then peel and slice the onion (3).\n" +
        "Private the chicken breasts of the most obvious fat parts with a small knife. Then cut the breast into morsels of 1-2 centimeters (4). Place a colander over a bowl, pour the chicken nuggets inside and flour them (5), shake the strainer to remove the excess flour. In a Wok pan, or a non-stick frying pan with high sides, heat the seed oil,then add the garlic (7), the grated ginger (8) and the sliced ​​onion (9).\n" +
        "Let the ingredients brown for a few minutes over medium heat, stirring often. Add the floured chicken nuggets (10) to the sauté, then brown them, stirring often. Only when they show a light crust, pour the soy sauce (11) and stir. In the same jug you used for soy, pour 20 g of water, to sprinkle the chicken (in this way do not dirty two containers) (12) and mix with a spoon to mix everything. If the chicken tends to stick, turn down to heat and add a little more hot water.\n" +
        "Cook the chicken for about 10 minutes, at the end of the cooking salt the chicken (13) as required, taking into consideration that the soy sauce is already quite tasty. While the chicken is cooking, place the peeled almonds (14) in a non-stick pan and toast for 2-3 minutes (15). Alternatively you can toast the almonds in the oven: place them on a baking sheet lined with baking paper and toast them for a few minutes at 180 ° to brown them.\n" +
        "At this point, add the toasted almonds to the chicken (16) and mix gently with a wooden spoon for a few moments. Turn off the heat (17) and your almond chicken will be ready to be served hot (18)."
    }, {
        name: "Salmon and potato chips",
        pasto: "Cena",
        categoria: "fish",
        ratio: [250.0, 200.0, 10.0, 5.0],
        calories: 400.0,
        ingredienti: ["Salmon ", "Potatoes", "Parsley", "Black pepper"],
        picture: SalmonPotato,
        desc: "To prepare the baked salmon, start by removing the bones (1) and the spine (2) from the slices creating a medallion (3).\n" +
        "Place the salmon medallions on a baking sheet lined with baking paper and sprinkle with salt (4) and parsley, add the oil (5) and sprinkle with white wine (6).\n" +
        "With the help of a mandolin, slice the well-washed potatoes without peeling them, so as to obtain thin slices (7). Cover the medallions with the potato slices (8), pepper, salt and finally sprinkle with oil and white wine again. Bake in preheated oven at 180 degrees for 20/25 minutes. The salmon will be ready when it has taken a uniform pink color and opaque."
    }, {
        name: "Tuna croquettes",
        pasto: "Cena",
        categoria: "fish",
        ratio: [250.0, 50.0, 70.0, 30.0, -1, 30.0, 20.0, 15.0],
        calories: 450.0,
        ingredienti: ["Tuna ", "Capers", "Ricotta", "Bread crumble", "Eggs", "Parmesan", "Anchovies", "Parsley"],
        picture: TunaCroq,
        desc: "To prepare the tuna and ricotta meatballs starting from the preparation of the dough. Add the ricotta, grated Parmesan cheese (1), the previously crumbled tuna (2) and the drained anchovies in a bowl (3).\n" +
        "Add the capers (previously rinsed), the minced parsley, the grated bread (4) and finally the lightly beaten eggs (5), then start mixing the mixture with a fork (6).\n" +
        "Mix all the ingredients together (7), add salt and pepper and finish kneading with your hands until you have a compact and homogeneous mixture (8). At this point take some small portions of dough, about 30 grams and give it the classic round and slightly squashed meatball shape (9).\n" +
        "So complete all the meatballs (10) and pass them in breadcrumbs (11). Then fry your tuna and ricotta meatballs in plenty of seed oil at 180 ° C (12).\n" +
        "Continue to fry until golden brown (13). Let them drain on absorbent kitchen paper (14) and serve the still warm tuna and ricotta balls (15)"
    }, {
        name: "Milky chicken",
        pasto: "Cena",
        categoria: "meat",
        ratio: [250.0, 50.0, 70.0, 30.0, 5.0],
        calories: 350.0,
        ingredienti: ["Chicken", "Butter", "Milk", "Flour", "Black pepper"],
        picture: Milky,
        desc: "To prepare the milk chicken breasts, start to clean the meat from pieces of cartilage (1) and excess fat. At this point separate the two breasts (2) and made 4 slices each (3).\n" +
        "Arrange them on a chopping board (4) and use a beatet to beat them (5) so as to obtain thin slices (6).\n" +
        "Arrange the oil and butter in a pan (7), let it melt gently and in the meantime flour the chicken slices (8). As you move them inside the pan (9), lightly raise the flame and wait about 2 minutes until a nice crust is created.\n" +
        "Then turn the slices (10) wait a couple of minutes again and pour the milk (11) and then the thyme leaves (12) inside the pan.\n" +
        "Add salt and pepper, cover with a lid (13) and cook for another 4-5 minutes until the milk has thickened (14). At this point you just have to serve your still warm chicken breast (15)"
    }, {
        name: "Potato omelette",
        pasto: "Cena",
        categoria: "veggie",
        ratio: [-3, 250.0, 30.0, 10.0, 5.0],
        calories: 450.0,
        ingredienti: ["Eggs", "Potatoes", "Parmesan", "Parsley", "Black pepper"],
        picture: PotatoOmelette,
        desc: "To prepare the potato omelette, start peeling the potatoes (1) and cutting them into slices about 1 cm thick (2). Meanwhile, place a saucepan with salted water on the stove, when the water is boiling pour the potatoes (3) in it and leave to cook for about ten minutes. Be careful that the potatoes do not break or shatter during cooking. Then drain and leave to cool.\n" +
        "Meanwhile, in a large bowl beat the eggs, add the Parmesan cheese (4), the nutmeg, the chopped parsley (5), add salt and pepper, then add the well-drained and warmed potatoes (6). Mix everything.\n" +
        "Heat the oil in a pan that has a diameter of about 24-26 cm, once the oil is hot pour the mixture, cook the omelette with potatoes for 10-15 minutes over medium heat covering it with a lid . Sway the pan from time to time, when the omelette comes off the bottom is ready to be turned, do this operation cautiously helping with the lid. Cook for 10-15 minutes on the other side, but this time without lid. Once the omelet with the potatoes is cooked, serve it on a serving dish.\n" +
        "The omelette with potatoes will be excellent eaten both hot and cold."
    }, {
        name: "Crispy salmon",
        pasto: "Cena",
        categoria: "fish",
        ratio: [250.0, 100.0, 20.0, 10.0, -1],
        calories: 400.0,
        ingredienti: ["Salmon", "Bread", "Rosemary", "Parsley", "Lemon"],
        picture: CrispySalmon,
        desc: "To prepare the crispy salmon, start by washing and drying the salmon, then place it on a baking sheet lined with baking paper. Cut the slices of bread into cubes (1) and put them in a mixer together with the aromatic herbs (2), the peel of half a lemon (3), the oil, salt and pepper.\n" +
        "Chop the whole coarsely (4), obtaining not too fine crumbs. Cover with this pan the salmon (5) crushing well so as to compact it (6). Put in hot oven at 180 degrees for 20/25 minutes (depending on the size of the pieces). Serve the salmon immediately."
    }];

const categories = ["carbo", "meat", "fish", "veggie", "fruit", "legumes"];

let url = new URL(window.location.href);

let name = url.searchParams.get("name");
let bodyweight = parseInt(url.searchParams.get("bodyWeight"));
let height = parseInt(url.searchParams.get("height"));
let age = parseInt(url.searchParams.get("age"));
let sex = url.searchParams.get("name");

let calories1, calories2;

class SignUp extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            pranzo: {
                name: "",
                pasto: "",
                categoria: "",
                ratio: [],
                calories: 0,
                ingredienti: [],
            },
            cena: {
                name: "",
                pasto: "",
                categoria: "",
                ratio: [],
                calories: 0,
                ingredienti: []
            },
            domani_p: {
                name: "",
                pasto: "",
                categoria: "",
                ratio: [],
                calories: 0,
                ingredienti: []
            },
            domani_c: {
                name: "",
                pasto: "",
                categoria: "",
                ratio: [],
                calories: 0,
                ingredienti: []
            },
            mainIngredient1: [],
            mainIngredient2: [],
            show1: false,
            show2: false,
            show3: false,
            show4: false
        }
        this.scegli_ricetta = this.scegli_ricetta.bind(this)

        this.calculateCalories = this.calculateCalories.bind(this)

        this.shuffle = this.shuffle.bind(this)

        this.buildUnits = this.buildUnits.bind(this)

    }

    componentWillMount() {
        let template = this.calculateCalories(bodyweight, height, age, sex);
        calories1 = template[0];
        calories2 = template[1];
        if (template !== null) {
            let cat1 = categories[Math.floor((categories.length - 1) * Math.random())];
            let cat2 = categories[Math.floor((categories.length - 1) * Math.random())]; // TODO make them pick properly from a good set of categories
            let rec1 = this.scegli_ricetta(template, "Pranzo", cat1);
            let rec2 = this.scegli_ricetta(template, "Cena", cat2);
            let new_recipes = recepies.slice();
            new_recipes.splice(new_recipes.indexOf(rec1), 1);
            new_recipes.splice(new_recipes.indexOf(rec2), 1);
            let rec3 = this.makeExtra(rec1, new_recipes);
            new_recipes.splice(new_recipes.indexOf(rec3), 1);
            let rec4 = this.makeExtra(rec2, new_recipes);
            this.setState({
                pranzo: rec1,
                cena: rec2,
                domani_p: rec3,
                domani_c: rec4
            });
        }
    }

    makeExtra(rec, recs) {
        let scores = [];
        for (let i = 0; i < recs.length; i++) {
            scores.push(0)
        }
        rec.ingredienti.forEach(function (each, _unused, _unused2) {
            for (let j = 0; j < recs.length; j++) {
                if (recs[j].ingredienti.includes(each)) scores[j]++
            }
        })
        let result = this.buildUnits(recs[this.maxArrayIndex(scores)])
        if (this.state.mainIngredient1 === []) {

            this.setState({
                mainIngredient1: rec.ingredienti.filter(function (n) {
                    return result.ingredienti.indexOf(n) !== -1;
                })
            })
        }
        else {
            this.setState({
                mainIngredient2: rec.ingredienti.filter(function (n) {
                    return result.ingredienti.indexOf(n) !== -1;
                })
            })
        }
        return result
    }

    //Assumes non-empty array
    maxArrayIndex(array) {
        let max = array[0];
        let max_i = 0;
        for (let i = 1; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
                max_i = i;
            }
        }
        return max_i
    }

    scegli_ricetta(template, pasto, categoria) {
        let index = 0;
        let goodRecipes = [];
        // this.shuffle(recepies);
        while (index < recepies.length) {
            if (recepies[index].pasto === pasto && recepies[index].categoria !== categoria) {
                goodRecipes.push(recepies[index])
            }
            index++;
        }
        index = 0;
        if (pasto === "Pranzo") {
            while (index < goodRecipes.length) {
                if (goodRecipes[index].calories <= template[0]) return this.buildUnits(goodRecipes[index], template[0]);
                index++;
            }
        }
        else {
            while (index < goodRecipes.length) {
                if (goodRecipes[index].calories <= template[1]) return this.buildUnits(goodRecipes[index], template[1]);
                index++;
            }
        }
    }

    buildUnits(recipe, template) {
        console.log(recipe.calories, template)
        let diff = template - recipe.calories
        console.log(diff > 0.2 * template)
        if (diff > 0.2 * template) {
            recipe.ratio.forEach(function (each, index, theArray) {
                if (each > 0) {
                    theArray[index] = Math.ceil(each * 1.5)
                }
            })
        }
        recipe.ratio.forEach(function (each, index, theArray) {
            if (each > 0) {
                theArray[index] = each + "g"
            }
            else {
                theArray[index] = each * (-1)
            }
        })
        return recipe
    }

    calculateCalories(weight, height, age, sex) {
        let BMR, cal_tot, template;
        switch (sex) {
            case "Male":
                BMR = (10 * weight) + (6.25 * height) - (5 * age) + 5;
                break;
            case "Female":
                BMR = (10 * weight) + (6.25 * height) - (5 * age) - 161;
                break;
            default:
                BMR = (10 * weight) + (6.25 * height) - (5 * age) + 5;
                break;
        }
        cal_tot = 1.53 * 0.7 * BMR;
        template = [0.40 * cal_tot, 0.35 * cal_tot];
        return template;
    }

     shuffle(a) {
        let j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
    }

    render() {

        return <div>
            <body>
            <Profile name={name} cal1={calories1} cal2={calories2}/>
            <Pranzo onClick={() => this.setState({show1: true})} name={this.state.pranzo.name}
                    ingredienti={this.state.pranzo.ingredienti}
                    image={this.state.pranzo.picture} ratio={this.state.pranzo.ratio}/>
            <SweetAlert
                show={this.state.show1}
                title={this.state.pranzo.name}
                text={this.state.pranzo.desc}
                onConfirm={() => this.setState({show1: false})}
            />
            <Cena onClick={() => this.setState({show2: true})} name={this.state.cena.name}
                  ingredienti={this.state.cena.ingredienti} image={this.state.cena.picture}
                  ratio={this.state.cena.ratio}/>
            <SweetAlert
                show={this.state.show2}
                title={this.state.cena.name}
                text={this.state.cena.desc}
                onConfirm={() => this.setState({show2: false})}
            />
            <Extra mainIngredient1={this.state.mainIngredient1} mainIngredient2={this.state.mainIngredient2}/>
            <Pranzo onClick={() => this.setState({show3: true})} name={this.state.domani_p.name}
                    ingredienti={this.state.domani_p.ingredienti}
                    image={this.state.domani_p.picture} ratio={this.state.domani_p.ratio}/>
            <SweetAlert
                show={this.state.show3}
                title={this.state.domani_p.name}
                text={this.state.domani_p.desc}
                onConfirm={() => this.setState({show3: false})}
            />
            <Cena onClick={() => this.setState({show4: true})} name={this.state.domani_c.name}
                  ingredienti={this.state.domani_c.ingredienti}
                  image={this.state.domani_c.picture} ratio={this.state.domani_c.ratio}/>
            <SweetAlert
                show={this.state.show4}
                title={this.state.domani_c.name}
                text={this.state.domani_c.desc}
                onConfirm={() => this.setState({show4: false})}
            />
            <section id={"footer"}>
                <footer>
                    <a href="https://www.tesco.com/groceries/en-GB/shop/fresh-food/all" className="button scrolly">Go
                        shop</a>
                </footer>
            </section>
            <section id="footer">
                <ul className="icons">
                    <li><a href="https://twitter.com" className="icon fa-twitter"><span className="label">Twitter</span></a>
                    </li>
                    <li><a href="https://facebook.com" className="icon fa-facebook"><span
                        className="label">Facebook</span></a></li>
                    <li><a href="https://google.com" className="icon fa-google-plus"><span
                        className="label">Google+</span></a></li>
                </ul>
                <div className="copyright">
                    <ul className="menu">
                        <li>&copy; TeamSix. All rights reserved.</li>
                    </ul>
                </div>
            </section>
            </body>
        </div>
    }
}

export default SignUp;