import style from './style.module.css';
import treeOne from './treeOne.jpg';
import treeTwo from './treeTwo.jpg'
import treeThree from './treeThree.jpg'

function WinterTreePage() {
    return (
      <>
        <div class={style.winterTreeContainer}>

          <div class={style.articleBlock}>
            <div class={style.articleImg}>
              <img src={treeOne} alt="winterTree"/>
            </div>
            <div class={style.articleDescription}>
              <p>
                In the growing season, hardwoods (a.k.a. deciduous trees) and softwoods (a.k.a. conifers or evergreens), move water from their roots up to the leaves through the simple process of suction. Water evaporation from small pores on the undersides of leaves slowly pulls additional water up through microscopic vessels in the wood of the roots, trunk, and branches. But as the days grow shorter, colder, and drier in the fall, hardwoods respond by dropping their leaves. This ends the upward movement of water in preparation for the winter, effectually draining their pipes before freezing temperatures would otherwise cause cell-damaging ice crystals. Even though most softwoods retain their leaves (needles) for several years, those growing in cold regions stop water flow for the winter by closing their leaf pores. Softwood needles contain fewer pores than hardwood leaves and are also coated with wax which prevents them from drying out in the cold.
              </p>
            </div>
          </div>

          <div class={style.articleBlock}>
            <div class={style.articleImg}>
              <img src={treeTwo} alt="winterTree"/>
            </div>
            <div class={style.articleDescription}>
              <p>
                Additionally, both hardwoods and softwoods osmotically move water out of their living cells into their intercellular (non-living) zones to confine water freezing in this area. This increases the sugar content in their cells which lowers each cell's internal freezing point. Tree cells also produce proteins that function like antifreeze too. Interestingly, this entire process of restricting freezing to certain areas and employing antifreeze compounds is like that used by hibernating frogs to survive the winter season partially frozen. Northern spring peepers, eastern gray treefrogs, and wood frogs are good examples that use this strategy.
              </p>
            </div>
          </div>

          <div class={style.articleBlock}>
            <div class={style.articleImg}>
              <img src={treeThree} alt="winterTree"/>
            </div>
            <div class={style.articleDescription}>
              <p>
              The important protection that bark provides trees in winter cannot be discounted. Bark is largely waterproof and prevents trees from drying out. Air pockets in bark also insulate tree trunks and branches. Generally, the older a tree, the thicker its layer of bark protection. Branch architecture is also important during the winter. The strong, upward reaching, and flexible nature of most trees' branches allows them to easily sway and bend down to shed snow. Similarly, the young flexible branches and fine needles of softwoods have minimal surface area and shed most types of snow quickly. Occasionally wet, early, or late winter storms catch hardwood trees with their leaves on – making snow shedding difficult – and can result in serious tree branch and trunk damage.
              </p>
            </div>
          </div>


        </div>
      </>
    );
  }
  
  export default WinterTreePage;