// Data (example)
      const data = {
        mining: {
          steps: [
            "Exploration",
            "Site Preparation",
            "Mine excavation",
            "Drilling & blasting",
            "Loading & hauling",
            "Mine processing",
            "Dust & road management",
            "Hydrogeology & dewatering",
            "Tailings & waste management",
            "Geotechnical monitoring & slope stability",
            "Health, Safety & Emergency Response",
          ],
          stepImages: [
            "/assets/images/mining/steps/step1.jpg",
            "/assets/images/mining/steps/step-2.jpg",
            "/assets/images/mining/steps/step-3.jpg",
            "/assets/images/mining/steps/step-4.jpg",
            "/assets/images/mining/steps/step-5.jpg",
            "/assets/images/mining/steps/step-6.jpg",
            "/assets/images/mining/steps/step-7.jpg",
            "/assets/images/mining/steps/step-8.jpg",
            "/assets/images/mining/steps/step-9.jpg",
            "/assets/images/mining/steps/step-10.jpg",
            "/assets/images/mining/steps/step-11.jpg",
          ],
          machines: {
            Exploration: [
              {
                name: "Rotary Core Drill Rig",
                img: "/assets/images/mining/exploration/rotary_core_drill.jpg",
                details: {
                  Precision: "GPS-guided positioning for accurate drilling",
                  Efficiency:
                    "20-50m (65-164ft) drilled daily depending on rock hardness",
                  "Depth Capacity":
                    "Up to 1,000m (as deep as 3 Eiffel Towers stacked)",
                  Mobility:
                    "Track-mounted for rocky/desert terrain (e.g., Khouribga mines)",
                  Sustainability:
                    "Reduces unnecessary excavation by 70%vs. traditional methods",
                },
                paraBefore:
                  "This specialized drilling machine is designed to extract undisturbed rock samples from deep underground during mineral exploration. It plays a crucial role in confirming the location of phosphate deposits, assessing the quality of minerals before large-scale mining operations, and minimizing environmental disruption. The process involves deep earth probing, where a hollow diamond-tipped tube drills vertically, reaching depths of up to 1,000 meters (3,280 feet). Water or air cooling is used to prevent overheating during this phase. The machine then extracts intact cylindrical rock columns, known as cores, which preserve the geological layer sequences. These core samples are analyzed by geologists to map phosphate reserves accurately.", // nouveau paragraphe avant le tableau
                paraAfter:
                  "In Morocco, this technology has significant strategic importance. It is critical for mapping the country's vast phosphate reserves, which account for 72% of the global supply. The OCP Group utilizes this drilling technique in regions like Khouribga and Benguérir to identify high-yield zones, enabling more efficient mining. By preventing wasteful mining practices, it saves millions of dollars annually, offering substantial economic advantages.", // nouveau paragraphe après le tableau
                extra: [
                  "/assets/images/mining/exploration/extra/20160719_1146171.jpg",
                  "/assets/images/mining/exploration/extra/Screen-Shot-2020-01-31-at-1.46.24-pm.png",
                ],
              },
              {
                name: "Reverse Circulation (RC) Drill Rigs",
                img: "/assets/images/mining/exploration/Reverse Circulation (RC) Drill Rigs.jpg",
                details: {
                  "Drilling method": "Reverse circulation with compressed air",
                  "Typical depth": "Up to 300 m",
                  Advantage: "Dry, uncontaminated samples",
                  Productivity: "Faster than conventional core drilling",
                },
                paraBefore:
                  "Reverse Circulation (RC) Drill Rigs are used for phosphate exploration and sampling. They drill the ground while compressed air pushes rock fragments back up through an inner tube, providing clean, uncontaminated samples. In the phosphate sector, these rigs enable fast and precise drilling, crucial for assessing P₂O₅ content in Moroccan deposits.", // nouveau paragraphe avant le tableau
                paraAfter:
                  "In Morocco, particularly at OCP sites, RC Drill Rigs are vital for exploration and geological monitoring. They help define phosphate layer continuity and optimize mining plans, reducing costs and improving recovery rates of mineral resources.", // nouveau paragraphe après le tableau
                extra: [
                  "/assets/images/mining/exploration/extra/RC Drill Rigs.webp",
                  "/assets/images/mining/exploration/extra/RC Drill Rigs2.webp",
                ],
              },
            ],
            "Site Preparation": [
              {
                name: "Bulldozers (dozers)",
                img: "/assets/images/mining/site-preparation/Bulldozers (dozers).jpg",
                details: {
                  "Key component": "Robust front blade",
                  "Main function": "Stripping & earthmoving",
                  Mobility: "Tracks provide maximum grip",
                  Application: "Opening mining fronts",
                  Durability: "Suited for rocky & sandy terrain",
                },
                paraBefore:
                  "Bulldozers are heavy tracked machines equipped with a large front blade, used in phosphate mines to move, level, and strip away overburden. They play a crucial role in preparing mining areas, opening access roads, and maintaining haul roads.", // nouveau paragraphe avant le tableau
                paraAfter:
                  "In Moroccan phosphate mines, especially in Khouribga and Benguerir, bulldozers are used daily to remove the overburden covering phosphate layers. Their efficiency directly affects production rates and enables OCP to maintain high productivity levels.", // nouveau paragraphe après le tableau
                extra: [
                  "/assets/images/mining/site-preparation/extra/extra-1.webp",
                  "/assets/images/mining/site-preparation/extra/extra-2.jpg",
                ],
              },
              {
                name: "Scrapers & compactors/rollers",
                img: "/assets/images/mining/site-preparation/Scrapers & compactorsrollers.jpg",
                details: {
                  Scrapers: "Scraping and short-distance hauling",
                  Compactors: "Soil compaction & stabilization",
                  Application: "Road & surface preparation",
                  Importance: "Dust reduction & safety",
                  Versatility: "Used in both construction & mining",
                },
                paraBefore:
                  "Scrapers are designed to scrape and transport earth or mined materials over short distances, while compactors/rollers stabilize roads and surfaces by compressing soil. In phosphate mining, they are essential for preparing haul roads and maintaining safe and efficient transport routes.", // nouveau paragraphe avant le tableau
                paraAfter:
                  "At OCP operations, scrapers and compactors are critical for building and maintaining haul roads for ultra-class trucks. They reduce dust risks, enhance safety, and improve logistics, ensuring smooth phosphate transport across Moroccan mines.", // nouveau paragraphe après le tableau
                extra: [
                  "/assets/images/mining/site-preparation/extra/extra-3.jpeg",
                  "/assets/images/mining/site-preparation/extra/extra-4.jpg",
                ],
              },
            ],
            "Mine excavation": [
              {
                name: "Draglines",
                img: "/assets/images/mining/Mine-excavation/Draglines.jpg",
                details: {
                  "Typical bucket size": "30–100 m³",
                  Application: "Removing overburden",
                  Range: "Long boom allows large excavation radius",
                  Efficiency: "Moves millions of cubic meters annually",
                },
                paraBefore:
                  "Draglines are among the largest machines used in surface mining. They use a large bucket suspended from a boom with wire ropes to excavate material. In phosphate mining, draglines are particularly useful for removing large volumes of overburden that cover the phosphate layers, ensuring efficient access to ore deposits.", // nouveau paragraphe avant le tableau
                paraAfter:
                  "In Morocco, draglines are used by OCP in large-scale phosphate mining sites to strip away overburden efficiently. Their massive capacity helps maintain a consistent ore supply chain and reduces reliance on multiple smaller machines, optimizing both energy and labor resources.", // nouveau paragraphe après le tableau
                extra: [
                  "/assets/images/mining/Mine-excavation/extra/extra-1.jpeg",
                  "/assets/images/mining/Mine-excavation/extra/extra-2.webp",
                ],
              },
              {
                name: "Large hydraulic excavators",
                img: "/assets/images/mining/Mine-excavation/Large hydraulic excavators.jpg",
                details: {
                  "Power source": "Hydraulic system (diesel/electric engines)",
                  "Bucket capacity": "10–50 m³",
                  Application: "Ore excavation & truck loading",
                  Mobility: "Tracks for stable movement in mines",
                  Versatility: "Can handle overburden and phosphate ore",
                },
                paraBefore:
                  "Large hydraulic excavators are powerful machines equipped with a hydraulic arm and bucket used for digging and loading. In phosphate mining, they are employed to excavate phosphate ore after overburden removal and to load haul trucks with mined material.", // nouveau paragraphe avant le tableau
                paraAfter:
                  "At OCP mines, large hydraulic excavators are essential for loading phosphate into ultra-class haul trucks. Their efficiency directly impacts the daily ore transport capacity, ensuring continuous supply to beneficiation plants and supporting Morocco’s position as the world’s largest phosphate exporter.", // nouveau paragraphe après le tableau
                extra: [
                  "/assets/images/mining/Mine-excavation/extra/extra-3.jpg",
                  "/assets/images/mining/Mine-excavation/extra/extra-4.jpeg",
                ],
              },
            ],
            "Drilling & blasting": [
              {
                name: "Surface blasthole drill rigs (rotary & DTH rigs)",
                img: "/assets/images/mining/Drilling & blasting/Surface blasthole drill rigs (rotary & DTH rigs).jpg",
                details: {
                  "Rotary drilling": "Uses rotation + pressure to drill",
                  "DTH drilling": "Pneumatic hammering in hard rock",
                  "Hole diameter": "150–400 mm",
                  Application: "Blasting overburden & ore layers",
                  Importance: "Facilitates efficient excavation",
                },
                paraBefore:
                  "Surface blasthole drill rigs are used to drill deep holes in the rock where explosives are placed for blasting. Rotary rigs cut using a rotating bit, while Down-the-Hole (DTH) rigs hammer the bit into the rock. In phosphate mining, these rigs fragment hard overburden and ore layers, making excavation and loading more efficient.", // nouveau paragraphe avant le tableau
                paraAfter:
                  "In Moroccan phosphate mines, surface blasthole drill rigs are essential for preparing blasting operations. Controlled blasting ensures safe and efficient fragmentation of ore, reducing energy consumption during excavation and crushing stages. This practice is critical to optimize OCP’s large-scale mining operations.", // nouveau paragraphe après le tableau
                extra: [
                  "/assets/images/mining/Drilling & blasting/extra/extra-1.webp",
                  "/assets/images/mining/Drilling & blasting/extra/extra-2.jpg",
                ],
              },
              {
                name: "Down-the-hole (DTH) hammers & top-hammer drill rigs",
                img: "/assets/images/mining/Drilling & blasting/Down-the-hole.jpg",
                details: {
                  "Diameter Range": "85 mm to 1524 mm",
                  "Air Consumption": "Optimized for energy efficiency",
                  Durability: "High resistance to wear and tear",
                  Application: "Drilling blast holes in hard rock",
                },
                paraBefore:
                  "DTH hammers are percussion drilling tools used to drill deep, vertical holes in hard rock formations. They operate by delivering high-impact energy directly to the drill bit, allowing for efficient penetration of tough materials.", // nouveau paragraphe avant le tableau
                paraAfter:
                  "In Morocco, DTH hammers are essential for drilling blast holes in phosphate mines, such as those in Khouribga. Their efficiency reduces operational costs and enhances the safety and productivity of mining operations.", // nouveau paragraphe après le tableau
                extra: [
                  "/assets/images/mining/Drilling & blasting/extra/extra-3.avif",
                  "/assets/images/mining/Drilling & blasting/Down-the-hole.jpg",
                ],
              },
            ],
            "Loading & hauling": [
              {
                name: "Ultra-class haul trucks",
                img: "/assets/images/mining/Loading & hauling/Ultra-class haul trucks.jpg",
                details: {
                  "Payload Capacity": "Up to 400 tons",
                  "Engine Power": "Exceeds 3,000 HP",
                  "Fuel Efficiency": "Designed for long-haul operations",
                  Application: "Transporting ore from mine to plant",
                },
                paraBefore:
                  "Ultra-class haul trucks are large-capacity vehicles designed for transporting massive loads of material over long distances. They are crucial in large-scale mining operations for moving extracted phosphate ore to processing facilities.", // nouveau paragraphe avant le tableau
                paraAfter:
                  "In Moroccan mines, these trucks are vital for transporting phosphate ore from extraction sites to processing plants, ensuring a continuous and efficient supply chain.", // nouveau paragraphe après le tableau
                extra: [
                  "/assets/images/mining/Loading & hauling/Ultra-class haul trucks.jpg",
                ],
              },
              {
                name: "Hydraulic / electric shovels",
                img: "/assets/images/mining/Loading & hauling/Hydraulic,electric shovels.jpg",
                details: {
                  "Bucket Capacity": "Up to 100 m³",
                  "Power Source": "Hydraulic or Electric",
                  Efficiency: "High, with advanced digging technology",
                  Application: "Loading ore into haul trucks",
                },
                paraBefore:
                  "Hydraulic and electric shovels are large excavators used for digging and loading materials. Hydraulic shovels use hydraulic cylinders for movement, while electric shovels are powered by electricity, offering reduced emissions.", // nouveau paragraphe avant le tableau
                paraAfter:
                  "These shovels are employed in Moroccan phosphate mines to efficiently load extracted ore into haul trucks, optimizing the material handling process.", // nouveau paragraphe après le tableau
                extra: [
                  "/assets/images/mining/Loading & hauling/Hydraulic,electric shovels.jpg",
                ],
              },
            ],
            "Mine processing": [
              {
                name: "Primary screens / trommels",
                img: "/assets/images/mining/Mine processing/Primary screens trommels.png",
                details: {
                  "Screening Capacity": "Varies based on model",
                  "Material Handling": "Efficient separation of materials",
                  Durability: "High, designed for heavy-duty use",
                  Application: "Sorting mined materials",
                },
                paraBefore:
                  "Primary screens and trommels are used for sorting and separating materials based on size. Screens use a mesh to filter particles, while trommels are rotating drums that separate materials through centrifugal force.", // nouveau paragraphe avant le tableau
                paraAfter:
                  "In Morocco, these devices are crucial for separating phosphate ore from waste material, enhancing the efficiency of the beneficiation process.", // nouveau paragraphe après le tableau
                extra: [
                  "/assets/images/mining/Mine processing/Primary screens trommels.png",
                ],
              },
              {
                name: "Wet scrubbers / attrition washers ",
                img: "/assets/images/mining/Mine processing/Wet scrubbers attrition washers.jpg",
                details: {
                  "Cleaning Efficiency": "High, removes fine particles",
                  "Water Usage": "Optimized for minimal consumption",
                  Maintenance: "Low, with durable components",
                  Application: "Cleaning phosphate ore",
                },
                paraBefore:
                  "Wet scrubbers and attrition washers are used to clean and remove impurities from phosphate ore. Wet scrubbers use water to wash materials, while attrition washers use mechanical agitation to scrub particles.", // nouveau paragraphe avant le tableau
                paraAfter:
                  "These systems are implemented in Moroccan phosphate mines to improve the quality of the extracted ore by removing impurities, thereby enhancing the final product's grade.", // nouveau paragraphe après le tableau
                extra: [
                  "/assets/images/mining/Mine processing/Wet scrubbers attrition washers.jpg",
                ],
              },
            ],
            "Dust & road management": [
              {
                name: "Water/truck spray systems & misting cannons",
                img: "/assets/images/mining/Dust & road management/Watertruck spray systems,misting cannons.jpg",
                details: {
                  "Spray Range": "Up to several hundred meters",
                  "Water Droplet Size": "Fine mist for effective dust capture",
                  Mobility: "Mobile units for flexible deployment",
                  Application: "Dust suppression in mining areas",
                },
                paraBefore:
                  "Water and truck spray systems, along with misting cannons, are employed to control dust in mining operations. They work by spraying fine water droplets into the air to capture dust particles.", // nouveau paragraphe avant le tableau
                paraAfter:
                  "These systems are vital in Moroccan phosphate mines to reduce airborne dust, improving air quality and worker health, and complying with environmental regulations.", // nouveau paragraphe après le tableau
                extra: [
                  "/assets/images/mining/Dust & road management/Watertruck spray systems,misting cannons.jpg",
                ],
              },
              {
                name: "Road graders + routine maintenance fleets",
                img: "/assets/images/mining/Dust & road management/Road graders.jpg",
                details: {
                  "Blade Length": "Varies based on model",
                  Maneuverability: "High, suitable for various terrains",
                  Maintenance: "Regular upkeep required",
                  Application: "Road maintenance in mining operations",
                },
                paraBefore:
                  "Road graders are used to create a flat surface during the grading process. Routine maintenance fleets ensure that mining roads are kept in optimal condition for the safe and efficient movement of equipment.", // nouveau paragraphe avant le tableau
                paraAfter:
                  "In Moroccan phosphate mines, these tools are essential for maintaining access roads, ensuring that heavy machinery can operate efficiently and safely.", // nouveau paragraphe après le tableau
                extra: [
                  "/assets/images/mining/Dust & road management/Road graders.jpg",
                ],
              },
            ],
            "Hydrogeology & dewatering": [
              {
                name: "Submersible and centrifugal dewatering pumps ",
                img: "/assets/images/mining/Hydrogeology & dewatering/Submersible and centrifugal dewatering pumps.jpg",
                details: {
                  "Flow Rate": "High, suitable for large volumes",
                  "Power Source": "Electric or diesel",
                  Durability: "Designed for harsh conditions",
                  Application: "Dewatering mining sites",
                },
                paraBefore:
                  "Submersible and centrifugal dewatering pumps are used to remove water from mining operations. Submersible pumps operate underwater, while centrifugal pumps use rotational energy to move water.", // nouveau paragraphe avant le tableau
                paraAfter:
                  "These pumps are crucial in Moroccan phosphate mines to manage groundwater levels, preventing flooding and ensuring continuous mining operations.", // nouveau paragraphe après le tableau
                extra: [
                  "/assets/images/mining/Hydrogeology & dewatering/Submersible and centrifugal dewatering pumps.jpg",
                ],
              },
              {
                name: "Dewatering sumps with skid-mounted pump units",
                img: "/assets/images/mining/Hydrogeology & dewatering/Dewatering sumps with skid-mounted pump units.jpg",
                details: {
                  Capacity: "Varies based on sump size",
                  Mobility: "Skid-mounted units for easy relocation",
                  Efficiency: "High, with automated pumping systems",
                  Application: "Water management in mining operations",
                },
                paraBefore:
                  "Dewatering sumps are excavated areas designed to collect water, which is then pumped out using skid-mounted units. These systems are integral in managing water accumulation in mining sites.", // nouveau paragraphe avant le tableau
                paraAfter:
                  "In Moroccan phosphate mines, these systems are employed to effectively manage water accumulation, ensuring that mining activities proceed without disruption.", // nouveau paragraphe après le tableau
                extra: [
                  "/assets/images/mining/Hydrogeology & dewatering/Dewatering sumps with skid-mounted pump units.jpg",
                ],
              },
            ],

            "Tailings & waste management": [
              {
                name: "Tailings pipeline pumps and slurry transfer pumps",
                img: "/assets/images/mining/Tailings & waste management/Tailings pipeline pumps and slurry transfer pumps.jpg",
                details: {
                  "Handling Capacity": "High, suitable for dense slurries",
                  "Material Compatibility":
                    "Resistant to abrasion and corrosion",
                  "Power Source": "Electric or diesel",
                  Application: "Transporting tailings in mining operations",
                },
                paraBefore:
                  "Tailings pipeline pumps and slurry transfer pumps are used to transport waste materials (tailings) from mining operations to disposal sites. These pumps are designed to handle the abrasive nature of tailings.", // nouveau paragraphe avant le tableau
                paraAfter:
                  "These pumps are essential in Moroccan phosphate mines for the safe and efficient disposal of tailings, minimizing environmental impact and adhering to regulatory standards.", // nouveau paragraphe après le tableau
                extra: [
                  "/assets/images/mining/Tailings & waste management/Tailings pipeline pumps and slurry transfer pumps.jpg",
                ],
              },
              {
                name: "Filter presses / automatic filter presses ",
                img: "/assets/images/mining/Tailings & waste management/Filter presses automatic filter presses.jpg",
                details: {
                  "Filtration Capacity": "High, suitable for large volumes",
                  Automation: "Available in manual and automatic models",
                  Efficiency: "High, with minimal water usage",
                  Application: "Solid-liquid separation in mining processes",
                },
                paraBefore:
                  "Filter presses and automatic filter presses are used to separate solids from liquids in mining operations. They apply pressure to filter the slurry, producing a solid cake and clarified liquid.", // nouveau paragraphe avant le tableau
                paraAfter:
                  "In Moroccan phosphate mines, these presses are utilized to treat wastewater and recover valuable minerals, contributing to sustainable mining practices.", // nouveau paragraphe après le tableau
                extra: [
                  "/assets/images/mining/Tailings & waste management/Filter presses automatic filter presses.jpg",
                ],
              },
            ],
            "Geotechnical monitoring & slope stability": [
              {
                name: "Inclinometers & piezometers",
                img: "/assets/images/mining/Geotechnical monitoring & slope stability/Inclinometers,7 piezometers.jpg",
                details: {
                  Inclinometer: "Detect lateral ground movement",
                  Piezometer: "Measure pore water pressure",
                  "Measurement Type": "Lateral displacement, Pressure head",
                  "Application Area":
                    "Slope stability analysis,Groundwater monitoring",
                },
                paraBefore:
                  "These are essential geotechnical monitoring instruments for safety. Inclinometers measure deformations and ground movements within soils or rocks. A sensor is lowered into a special tube installed in a borehole and measures the inclination of the tube, thus detecting any potential slippage. Piezometers measure groundwater pressure (the piezometric head). Excess water pressure in mine slopes or in a pond dike is a major factor for failure.", // nouveau paragraphe avant le tableau
                paraAfter:
                  "The stability of open-pit mine slopes and, especially, the dikes of the huge tailings settling ponds is an absolute safety and environmental priority for OCP. A rupture would have catastrophic consequences. A dense network of piezometers and inclinometers constantly monitors these structures. The data is analyzed by geotechnical engineers to detect any warning signs of instability and take corrective measures before an incident occurs.", // nouveau paragraphe après le tableau
                extra: [
                  "/assets/images/mining/Geotechnical monitoring & slope stability/Inclinometers,7 piezometers.jpg",
                ],
              },
            ],
            "Health, Safety & Emergency Response": [
              {
                name: "Emergency response vehicles & firewater pumps/monitors",
                img: "/assets/images/mining/Health, Safety & Emergency Response/Emergency response vehicles.jpg",
                details: {
                  Mobility: "All-terrain capabilities for mine access",
                  Equipment:
                    "Firefighting gear, medical supplies, rescue tools",
                  Communication: "Two-way radios, emergency signaling systems",
                  "Personnel Capacity":
                    "Designed to carry a team of responders",
                },
                paraBefore:
                  "Emergency Response Vehicles are specialized units designed to provide rapid assistance during emergencies within mining environments. In the context of phosphate mining, these vehicles are equipped to handle various incidents, including fires, chemical spills, and medical emergencies.", // nouveau paragraphe avant le tableau
                paraAfter:
                  "In Morocco, where phosphate mining is a significant industry, ERVs are essential for ensuring the safety of workers and the environment. Given the scale of operations in regions like Khouribga and Benguerir, having specialized vehicles ready for emergencies is crucial. These vehicles enable quick response times, minimizing potential damage and ensuring compliance with safety regulations.", // nouveau paragraphe après le tableau
                extra: [
                  "/assets/images/mining/Health, Safety & Emergency Response/Emergency response vehicles.jpg",
                ],
              },
              {
                name: "Gas detectors, personal alarms & breathing apparatus caches",
                img: "/assets/images/mining/Health, Safety & Emergency Response/Gas detectors, personal alarms.jpg",
                details: {
                  "Main Role	":
                    "Detection of atmospheric hazards and respiratory protection.",
                  "Multi-gas Detector	":
                    "Continuous monitoring of CO, H2S, O2, and LEL (Lower Explosive Limit).",
                  SCBA: "Self-contained breathing apparatus for evacuation or rescue.",
                  "Standard	":
                    "Equipment must comply with international standards (e.g., NIOSH).",
                },
                paraBefore:
                  "These are the last line of defense protective equipment in risky situations. Personal gas detectors (multi-gas) alert workers in real time to the presence of dangerous gases (carbon monoxide CO, hydrogen sulfide H2S, oxygen deficiency). Personal alarms (man-down) alert if a worker becomes immobile. Breathing apparatus caches (SCBA - Self-Contained Breathing Apparatus) are strategically positioned to allow evacuation or intervention in an unbreathable atmosphere (smoke, gas).", // nouveau paragraphe avant le tableau
                paraAfter:
                  "The main risks in Moroccan phosphate mines are related to mining operations (diesel emissions from trucks producing CO) and the decomposition of organic matter in some areas (H2S risk). OCP has made the wearing of personal multi-gas detectors mandatory for all workers in the pit and plant. The presence of breathing apparatus caches along evacuation routes and in confined spaces is a standard requirement, part of a systematic approach to atmospheric risk management.", // nouveau paragraphe après le tableau
                extra: [
                  "/assets/images/mining/Health, Safety & Emergency Response/Gas detectors, personal alarms.jpg",
                ],
              },
            ],
          },
        },
        beneficiation: {
          steps: [
            "Crushing",
            "Screening",
            "Washing",
            "Flotation",
            "Thickening",
            "Filtration",
          ],
          stepImages: [
            "/assets/images/benification/Crushing/Jaw-Crusher-JC7.jpg",
            "/assets/images/benification/Screening/vibrating Screen.jpeg",
            "/assets/images/benification/Washing/Attrition-Scrubbers.jpg",
            "/assets/images/benification/Flotation/Flotation Cell.jpg",
            "/assets/images/benification/Thickening/Thickener.jpeg",
            "/assets/images/benification/Filtration/Filter Press.jpeg",
          ],
          machines: {
            Crushing: [
              {
                name: "Jaw Crusher",
                img: "/assets/images/benification/Crushing/Jaw-Crusher-JC7.jpg",
                details: {
                  "Feeding Size": "Up to 1200 mm",
                  "Output Size": "50–200 mm",
                  Capacity: "50–800 tons per hour",
                  Operation: "Mechanical compression",
                },
                paraBefore:
                  "The Jaw Crusher is a primary crushing machine used in phosphate mining to break large phosphate rocks into smaller, manageable sizes. It operates by applying compressive force between a fixed jaw and a moving jaw, effectively breaking the ore into smaller fragments suitable for further processing. In Morocco, it’s widely used in the Khouribga and Gantour mines to handle massive phosphate rocks.", // nouveau paragraphe avant le tableau
                paraAfter:
                  "Jaw crushers are essential in Moroccan phosphate mines for initial ore size reduction, allowing downstream processes like screening and washing to operate efficiently. They enhance productivity in large-scale mining operations such as those in Khouribga, where rocks are extremely hard and bulky.", // nouveau paragraphe après le tableau
                extra: [
                  "/assets/images/benification/Crushing/Jaw-Crusher-JC7.jpg",
                ],
              },
              {
                name: "Cone Crusher",
                img: "/assets/images/benification/Crushing/cone-crusher-1.webp",
                details: {
                  "Feeding Size": "100–350 mm",
                  "Output Size": "10–100 mm",
                  Capacity: "40–500 tons per hour",
                  Operation: "Compression and gyration",
                },
                paraBefore:
                  "Cone crushers are secondary crushers used in phosphate processing to further reduce the size of crushed phosphate rocks. They use a gyrating cone inside a fixed outer shell to crush rocks into uniform pieces. In Morocco, cone crushers ensure that ore is evenly sized before entering beneficiation steps such as screening and washing.", // nouveau paragraphe avant le tableau
                paraAfter:
                  "In Moroccan phosphate mines, cone crushers optimize ore particle size for better efficiency in beneficiation plants. They are crucial for mines with high throughput requirements, improving overall extraction and processing productivity.", // nouveau paragraphe après le tableau
                extra: [
                  "/assets/images/benification/Crushing/cone-crusher-1.webp",
                ],
              },
            ],
            Screening: [
              {
                name: "Vibrating Screen",
                img: "/assets/images/benification/Screening/vibrating Screen.jpeg",

                details: {
                  "Screening Size": "0.5–100 mm",
                  Capacity: "20–500 t/h",
                  "Deck Layers": "Single / multi-layer",
                  Material: "Steel / rubber screens",
                },
                paraBefore:
                  "Vibrating screens separate phosphate ore particles by size using vibrations. Coarse and fine fractions are sent to appropriate processing stages.", // nouveau paragraphe avant le tableau
                paraAfter:
                  "Vibrating screens improve particle separation efficiency in Moroccan mines, preparing ore for washing and flotation while reducing waste.", // nouveau paragraphe après le tableau
                extra: [
                  "/assets/images/benification/Screening/vibrating Screen.jpeg",
                ],
              },
              {
                name: "Trommel Screen (Rotary Screen)",
                img: "/assets/images/benification/Screening/rotary-screen-trommel.jpg",
                details: {
                  Type: "Rotary drum",
                  Diameter: "1–5 m",
                  Length: "4–12 m",
                  Capacity: "50–400 t/h",
                  Operationy: "Wet / dry screeningh",
                },
                paraBefore:
                  "Trommel screens are rotating cylindrical screens used for wet separation of phosphate ore, efficiently removing undersized or oversized particles.", // nouveau paragraphe avant le tableau
                paraAfter:
                  "Trommels are essential in Moroccan phosphate mines for wet screening, especially when ore contains clay or moisture, improving downstream beneficiation efficiency.", // nouveau paragraphe après le tableau
                extra: [
                  "/assets/images/benification/Screening/rotary-screen-trommel.jpg",
                ],
              },
            ],
            Washing: [
              {
                name: "Attrition Scrubber",
                img: "/assets/images/benification/Washing/Attrition-Scrubbers.jpg",
                details: {
                  Type: "Mechanical scrubber",
                  Diameter: "2–5 m",
                  Length: "5–15 m",
                  Capacity: "50–500 t/h",
                  Operationy: "Rotational + agitation",
                },
                paraBefore:
                  "Attrition scrubbers clean phosphate ore by mechanical agitation, removing clay, silt, and surface impurities.", // nouveau paragraphe avant le tableau
                paraAfter:
                  "Used in Moroccan phosphate mines to enhance ore purity before flotation, producing higher-grade phosphate concentrate.", // nouveau paragraphe après le tableau
                extra: [
                  "/assets/images/benification/Washing/Attrition-Scrubbers.jpg",
                ],
              },
              {
                name: "Log Washer",
                img: "/assets/images/benification/Washing/log washer.webp",
                details: {
                  Type: "Rotating drum",
                  Capacity: "40–400 t/h",
                  Operation: "Continuous washing",
                  "Water Usage": "Optimized for efficiency",
                  Maintenance: "Low with durable components",
                },
                paraBefore:
                  "A rotating drum machine that washes phosphate ore using water and mechanical action, removing surface impurities efficiently.", // nouveau paragraphe avant le tableau
                paraAfter:
                  "Log washers improve phosphate quality in Moroccan mines, particularly for clay-rich ores, preparing them for flotation", // nouveau paragraphe après le tableau
                extra: ["/assets/images/benification/Washing/log washer.webp"],
              },
            ],
            Flotation: [
              {
                name: "Flotation Cell",
                img: "/assets/images/benification/Flotation/Flotation Cell.jpg",
                details: {
                  Type: "Mechanical / pneumatic",
                  Volume: "1–20 m³",
                  "Air Supply": "Adjustable",
                  "Reagent Dosage": "Controlled",
                  Application: "Mineral separation",
                },
                paraBefore:
                  "Flotation cells separate phosphate minerals from gangue using chemical reagents and air bubbles that attach to phosphate particles, making them float for collection.", // nouveau paragraphe avant le tableau
                paraAfter:
                  "Flotation cells in Morocco maximize phosphate recovery, especially in fine particles, improving concentrate quality for export.", // nouveau paragraphe après le tableau
                extra: [
                  "/assets/images/benification/Flotation/Flotation Cell.jpg",
                ],
              },
              {
                name: "Flotation Column",
                img: "/assets/images/benification/Flotation/column_flotation_cell.webp",
                details: {
                  Type: "Column flotation",
                  Height: "6–12 m",
                  Diameter: "0.5–3 m",
                  "Air Supply": "Controlled for fine bubbles",
                  Application: "Fine particle separation",
                },
                paraBefore:
                  "Tall vertical flotation tanks providing enhanced separation of fine phosphate particles, with better selectivity than traditional cells.", // nouveau paragraphe avant le tableau
                paraAfter:
                  "Used in Moroccan beneficiation plants to recover fine phosphate fractions, increasing overall efficiency and reducing losses.", // nouveau paragraphe après le tableau
                extra: [
                  "/assets/images/benification/Flotation/column_flotation_cell.webp",
                ],
              },
            ],
            Thickening: [
              {
                name: "Thickener (Gravity Thickener)",
                img: "/assets/images/benification/Thickening/Thickener.jpeg",
                details: {
                  Type: "Circular / rectangular",
                  Diameter: "10–50 m",
                  Depth: "3–10  m",
                  Capacity: "50–500 m³/h",
                  Operation: "Gravity sedimentation",
                },
                paraBefore:
                  "Gravity thickeners settle solids from slurry by gravity, producing a concentrated phosphate slurry with minimal water.", // nouveau paragraphe avant le tableau
                paraAfter:
                  "Thickeners reduce water content in Moroccan phosphate concentrate, lowering transport costs and improving filtration efficiency.", // nouveau paragraphe après le tableau
                extra: ["/assets/images/benification/Thickening/Thickener.jpeg"],
              },
              {
                name: "High-Rate Thickener",
                img: "/assets/images/benification/Thickening/high-Rate-Thickener.jpg",
                details: {
                  " Type": "High-rate sedimentation",
                  Throughput: "200–2000 m³/h",
                  "Flocculant Usage": "Optimized",
                  Footprint: "Compact design",
                  Application: "Concentrate thickening",
                },
                paraBefore:
                  "High-rate thickeners are designed for rapid clarification of phosphate slurry with increased throughput and compact design.", // nouveau paragraphe avant le tableau
                paraAfter:
                  "Used in Moroccan phosphate plants to accelerate dewatering, ensuring higher productivity and efficient water recovery.", // nouveau paragraphe après le tableau
                extra: [
                  "/assets/images/benification/Thickening/high-Rate-Thickener.jpg",
                ],
              },
            ],
            Filtration: [
              {
                name: "Filter Press",
                img: "/assets/images/benification/Filtration/Filter Press.jpeg",
                details: {
                  Type: "Plate and frame",
                  "Filtration Pressure": "Up to 16 bar",
                  "Cake Moisture": "15–20%",
                  Capacity: "50–500 t/h",
                  Automation: "Manual / automatic",
                },
                paraBefore:
                  "Filter presses remove water from thickened phosphate slurry, producing a solid cake and clear filtrate using pressure filtration.", // nouveau paragraphe avant le tableau
                paraAfter:
                  "Filter presses in Moroccan mines produce dry phosphate concentrate ready for transport and export, improving operational efficiency.", // nouveau paragraphe après le tableau
                extra: [
                  "/assets/images/benification/Filtration/Filter Press.jpeg",
                ],
              },
              {
                name: "Vacuum Belt Filter",
                img: "/assets/images/benification/Filtration/Vacuum Belt Filter.webp",
                details: {
                  Type: "Continuous belt filter",
                  "Belt Width": "1–4 m",
                  "Cake Moisture": "15–25%",
                  Capacity: "50–600 t/h",
                  Operation: "Vacuum-assisted filtration",
                },
                paraBefore:
                  "Continuous filtration machine using a moving belt and vacuum suction to remove water from phosphate slurry efficiently.", // nouveau paragraphe avant le tableau
                paraAfter:
                  "Used in Morocco to produce high-quality phosphate concentrate while maintaining continuous operation, reducing downtime compared to batch filter presses.", // nouveau paragraphe après le tableau
                extra: [
                  "/assets/images/benification/Filtration/Vacuum Belt Filter.webp",
                ],
              },
            ],
          },
        },
        chemicals: {
          steps: [
            "Acidulation (Phosphoric Acid Production)",
            "Purification and Concentration",
            "Fertilizer Manufacturing(DAP, MAP, TSP)",
            "Packaging and Distribution",
          ],
          stepImages: [
            "/assets/images/chemicals&fertilizers/Acidulation (Phosphoric Acid Production)/sulfiric acid reactor.jpg",
            "/assets/images/chemicals&fertilizers/Purification and Concentration/clarifier-1000x1000.jpg",
            "/assets/images/chemicals&fertilizers/Fertilizer Manufacturing (DAP, MAP, TSP)/Granulators.avif",
            "/assets/images/chemicals&fertilizers/Packaging and Distribution/Automatic Bagging Machines.jpg",
          ],
          machines: {
            "Acidulation (Phosphoric Acid Production)": [
              {
                name: "Sulfuric Acid Reactors (Attack Reactors)",
                img: "/assets/images/chemicals&fertilizers/Acidulation (Phosphoric Acid Production)/sulfiric acid reactor.jpg",
                details: {
                  "Reaction Medium": "Phosphate rock + H₂SO₄",
                  "Temperature Control": "70–80°C typical",
                  Output: "Crude phosphoric acid + gypsum slurry",
                  Design: "Corrosion-resistant (lined with rubber/brick)",
                  Operation: "Continuous stirred tank",
                },
                paraBefore:
                  "This is the core unit where finely ground phosphate rock reacts with concentrated sulfuric acid. The chemical reaction produces phosphoric acid (H₃PO₄) and a by-product called phosphogypsum (CaSO₄·2H₂O). In phosphate plants, reactors are equipped with mixers to ensure complete reaction.", // nouveau paragraphe avant le tableau
                paraAfter:
                  "In Morocco (Jorf Lasfar & Safi), attack reactors are the heart of OCP’s phosphoric acid production, supporting both domestic fertilizer plants and international exports. Their efficiency directly affects Morocco’s role as the world’s largest phosphate exporter.", // nouveau paragraphe après le tableau
                extra: [
                  "/assets/images/chemicals&fertilizers/Acidulation (Phosphoric Acid Production)/sulfiric acid reactor.jpg",
                ],
              },
              {
                name: "Agitated Slurry Tanks",
                img: "/assets/images/chemicals&fertilizers/Acidulation (Phosphoric Acid Production)/Slurry-and-Reagent-Agitation-Tank.jpg",
                details: {
                  Function: "Maintains slurry homogeneity",
                  "Agitation Method": "Mechanical impellers",
                  "Volume Capacity": "Up to thousands of m³",
                  Material: "Acid-resistant steel / lined vessels",
                  Application: "Continuous acidulation process",
                },
                paraBefore:
                  "These tanks keep the phosphate + sulfuric acid slurry well mixed, preventing solids from settling and ensuring maximum acid extraction. Large impellers provide uniform agitation.", // nouveau paragraphe avant le tableau
                paraAfter:
                  "Agitated tanks in Moroccan facilities allow stable, high-capacity phosphoric acid production, feeding fertilizer manufacturing plants in Jorf Lasfar—the largest integrated fertilizer hub in the world.", // nouveau paragraphe après le tableau
                extra: [
                  "/assets/images/chemicals&fertilizers/Acidulation (Phosphoric Acid Production)/Slurry-and-Reagent-Agitation-Tank.jpg",
                ],
              },
            ],
            "Purification and Concentration": [
              {
                name: "Clarifiers / Settlers",
                img: "/assets/images/chemicals&fertilizers/Purification and Concentration/clarifier-1000x1000.jpg",
                details: {
                  Function: "Solid-liquid separation",
                  Capacity: "Large-scale continuous operation",
                  Output: "Clear phosphoric acid (25–30% P₂O₅)",
                  Method: "Gravity settling + flocculants",
                  Maintenance: "Low, with periodic desludging",
                },
                paraBefore:
                  " Clarifiers separate solid gypsum crystals from crude phosphoric acid using gravity settling. They are crucial for producing a cleaner acid before concentration.", // nouveau paragraphe avant le tableau
                paraAfter:
                  "In Morocco, clarifiers ensure high-quality acid free from gypsum, which is then concentrated and used to produce fertilizers for African and global markets.  ", // nouveau paragraphe après le tableau
                extra: [
                  "/assets/images/chemicals&fertilizers/Purification and Concentration/clarifier-1000x1000.jpg",
                ],
              },
              {
                name: "Evaporators (Multi-Effect Evaporation Units)",
                img: "/assets/images/chemicals&fertilizers/Purification and Concentration/multi effect evaporation.webp",
                details: {
                  Type: "Multi-effect vacuum evaporator",
                  "Input Acid": "28–30% P₂O₅",
                  "Output Acid": "40–52% P₂O₅",
                  "Energy Use": "Steam-efficient design",
                  Operation: "Continuous evaporation",
                },
                paraBefore:
                  " Evaporators remove water from phosphoric acid under controlled conditions, increasing its P₂O₅ concentration (typically 40–52%). Multi-effect designs recycle steam, saving energy.", // nouveau paragraphe avant le tableau
                paraAfter:
                  " Evaporators in Moroccan plants provide export-grade phosphoric acid, a major revenue source for OCP, especially for customers in India, Brazil, and Europe. ", // nouveau paragraphe après le tableau
                extra: [
                  "/assets/images/chemicals&fertilizers/Purification and Concentration/multi effect evaporation.webp",
                  "/assets/images/chemicals&fertilizers/Purification and Concentration/Evaporator-768x1024.jpg",
                ],
              },
            ],
            "Fertilizer Manufacturing(DAP, MAP, TSP)": [
              {
                name: "Granulators (Rotary Drum Granulator / Pan Granulator)",
                img: "/assets/images/chemicals&fertilizers/Fertilizer Manufacturing (DAP, MAP, TSP)/Granulators.avif",
                details: {
                  Type: "Rotary drum",
                  Capacity: "30–100 t/h",
                  "Output size": "2–6 mm granules",
                  Binder: "Acid + steam",
                  Application: "Granulated phosphate fertilizers",
                },
                paraBefore:
                  " Granulators form fertilizer granules by tumbling powdered phosphate and acids (phosphoric, sulfuric, ammonia). The rotating drum ensures uniform granule size for DAP, MAP, and TSP production.", // nouveau paragraphe avant le tableau
                paraAfter:
                  " Granulators at Jorf Lasfar and Safi convert Moroccan phosphate into finished fertilizers, securing the country’s role as the top DAP and MAP exporter globally. ", // nouveau paragraphe après le tableau
                extra: [
                  "/assets/images/chemicals&fertilizers/Fertilizer Manufacturing (DAP, MAP, TSP)/Granulators.avif",
                  "/assets/images/chemicals&fertilizers/Fertilizer Manufacturing (DAP, MAP, TSP)/Granulators -2.jpg",
                ],
              },
              {
                name: "Ammonia Neutralizers / Prilling Towers",
                img: "/assets/images/chemicals&fertilizers/Fertilizer Manufacturing (DAP, MAP, TSP)/Ammonia Neutralizers.png",
                details: {
                  Function: "Neutralizes acid with ammonia",
                  "Output Fertilizers": "DAP, MAP",
                  Control: "Automated pH and temperature control",
                  "Granulation Method": "Spray solidification / prilling",
                  Capacity: "High throughput (>1000 t/day)",
                },
                paraBefore:
                  "Ammonia neutralizers mix ammonia with phosphoric acid to produce ammonium phosphate fertilizers. In some plants, prilling towers solidify molten fertilizer into spherical granules. ", // nouveau paragraphe avant le tableau
                paraAfter:
                  "These systems transform Moroccan phosphoric acid into high-value fertilizers, shipped globally, enhancing Morocco’s strategic role in global food security.  ", // nouveau paragraphe après le tableau
                extra: [
                  "/assets/images/chemicals&fertilizers/Fertilizer Manufacturing (DAP, MAP, TSP)/Ammonia Neutralizers.png",
                  "/assets/images/chemicals&fertilizers/Fertilizer Manufacturing (DAP, MAP, TSP)/prilling Towers.jpeg",
                ],
              },
            ],
            "Packaging and Distribution": [
              {
                name: "Automatic Bagging Machines",
                img: "/assets/images/chemicals&fertilizers/Packaging and Distribution/Automatic Bagging Machines.jpg",
                details: {
                  Capacity: "400–1200 bags/hour",
                  "Bag Size": "25–50 kg",
                  Accuracy: "±0.2%",
                  Automation: "Semi or fully automatic",
                  Application: "Retail fertilizer packaging",
                },
                paraBefore:
                  "Automatic bagging systems weigh, fill, and seal fertilizer bags (25–50 kg). They ensure precise dosing and rapid handling. ", // nouveau paragraphe avant le tableau
                paraAfter:
                  " Bagging machines in Morocco allow efficient distribution of fertilizers across Africa and export markets, adapting packaging for different customer needs. ", // nouveau paragraphe après le tableau
                extra: [
                  "/assets/images/chemicals&fertilizers/Packaging and Distribution/Automatic Bagging Machines.jpg",
                ],
              },
              {
                name: "Conveyor & Palletizing Systems",
                img: "/assets/images/chemicals&fertilizers/Packaging and Distribution/Conveyor.png",
                details: {
                  "Conveyor Type": "Belt / roller",
                  "Palletizing Speed": "20–100 bags/minute",
                  Automation: "Robotic / semi-automatic",
                  "Load Stability": "Ensures safe transport",
                  Integration: "Linked with bagging lines",
                },
                paraBefore:
                  "Conveyor belts transport fertilizers to palletizers, which stack bags onto pallets for safe storage and shipping. They streamline logistics. ", // nouveau paragraphe avant le tableau
                paraAfter:
                  " In Morocco’s OCP hubs, conveyors and palletizers support mass export logistics, enabling fertilizers to reach ports (like Jorf Lasfar) efficiently for shipment worldwide. ", // nouveau paragraphe après le tableau
                extra: [
                  "/assets/images/chemicals&fertilizers/Packaging and Distribution/Conveyor.png",
                  "/assets/images/chemicals&fertilizers/Packaging and Distribution/Contribution-to-the-Global-Phosphate-Industry.png",
                ],
              },
            ],
          },
        },
        logistics: {
          steps: [
            "Fertilizer Storage Halls",
            "Phosphoric Acid Storage",
            "Transportation",
            "Port Operations",
          ],
          stepImages: [
            "/assets/images/logistics/Fertilizer Storage Halls/Automatic Stacker.png",
            "/assets/images/logistics/Phosphoric Acid Storage/Acid Storage Tanks.avif",
            "/assets/images/logistics/Transportation/Rail Tank Wagons.webp",
            "/assets/images/logistics/Port Operations/Ship Loaders.jpg",
          ],
          machines: {
            "Fertilizer Storage Halls": [
              {
                name: "Automatic Stacker",
                img: "/assets/images/logistics/Fertilizer Storage Halls/Automatic Stacker.png",
                details: {
                  Function: "Uniform stacking of fertilizers in storage halls",
                  Capacity: "Up to thousands of tons per hour",
                  Operation: "Automated with conveyor feeding",
                  Benefit: "Reduces manual handling, maximizes storage space",
                },
                paraBefore:
                  "Automatic stackers are large machines used in fertilizer storage halls to stack bulk products in uniform piles. They ensure efficient use of space, maintain product quality by reducing compaction, and automate the handling of high fertilizer volumes before shipping.", // nouveau paragraphe avant le tableau
                paraAfter:
                  "In Morocco, particularly at OCP’s Jorf Lasfar and Safi hubs, stackers are critical for handling the massive volume of fertilizers destined for export. They allow Morocco to maintain continuous flow in storage and dispatch without bottlenecks.", // nouveau paragraphe après le tableau
                extra: [
                  "/assets/images/logistics/Fertilizer Storage Halls/Automatic Stacker.png",
                  "/assets/images/logistics/Fertilizer Storage Halls/Automatic Stacker-2.jpg",
                ],
              },
              {
                name: "Reclaimer Machine",
                img: "/assets/images/logistics/Fertilizer Storage Halls/3D.jpg",
                details: {
                  Function: "Recovers fertilizers from stockpiles",
                  Type: "Bucket wheel or scraper reclaimers",
                  Efficiency: "Continuous recovery at high throughput",
                  Benefit: "Reduces downtime in logistics chain",
                },
                paraBefore:
                  "Reclaimers recover bulk fertilizer from stockpiles and feed it back into conveyors for packaging or loading. They are essential for ensuring smooth flow between storage and final transport stages.", // nouveau paragraphe avant le tableau
                paraAfter:
                  "Morocco’s fertilizer reclaimers streamline export operations, especially at port-adjacent warehouses, enabling OCP to meet global shipping schedules on time.", // nouveau paragraphe après le tableau
                extra: [
                  "/assets/images/logistics/Fertilizer Storage Halls/circular-stacker-reclaimer-drawing.jpg",
                  "/assets/images/logistics/Fertilizer Storage Halls/rectangular-stacker-and-reclaimer-400x266.jpg",
                ],
              },
            ],
            "Phosphoric Acid Storage": [
              {
                name: "Acid Storage Tanks (with protective lining)",
                img: "/assets/images/logistics/Phosphoric Acid Storage/Acid Storage Tanks.avif",
                details: {
                  Function: "Secure storage of phosphoric acid",
                  Capacity: "Ranges from hundreds to thousands of m³",
                  Protection: "Acid-resistant lining (rubber, epoxy, FRP)",
                  Safety: "Equipped with monitoring sensors",
                },
                paraBefore:
                  " Specialized tanks made of steel or alloy with protective linings are used to safely store corrosive phosphoric acid. They prevent leaks, resist corrosion, and are designed to handle large capacities.  ", // nouveau paragraphe avant le tableau
                paraAfter:
                  " In Morocco, massive phosphoric acid tanks at Jorf Lasfar Industrial Hub ensure safe storage before shipment to fertilizer units or export, reinforcing Morocco’s role as the world’s leading phosphoric acid exporter. ", // nouveau paragraphe après le tableau
                extra: [
                  "/assets/images/logistics/Phosphoric Acid Storage/Acid Storage Tanks.avif",
                ],
              },
              {
                name: "Acid Transfer Pumps",
                img: "/assets/images/logistics/Phosphoric Acid Storage/transfer-pump-skid.webp",
                details: {
                  Function: "Transfers phosphoric acid",
                  Material: "Made from high-alloy or non-metallic composites",
                  Efficiency: "Continuous flow at high pressure",
                  Benefit: "Minimizes acid loss and environmental risks",
                },
                paraBefore:
                  " Heavy-duty, corrosion-resistant pumps transfer phosphoric acid between production plants, storage tanks, and ships. Their design ensures durability and leak prevention.  ", // nouveau paragraphe avant le tableau
                paraAfter:
                  " OCP’s use of advanced acid pumps ensures safe and efficient transfers within industrial hubs and ports, minimizing losses and environmental hazards while maintaining high export volumes. ", // nouveau paragraphe après le tableau
                extra: [
                  "/assets/images/logistics/Phosphoric Acid Storage/transfer-pump-skid.webp",
                ],
              },
            ],
            Transportation: [
              {
                name: "Rail Tank Wagons",
                img: "/assets/images/logistics/Transportation/Rail Tank Wagons.webp",
                details: {
                  Function: "Long-distance bulk transport",
                  Capacity: "Up to 60–80 tons per wagon",
                  Safety: "Acid-resistant interiors and pressure controls",
                  Benefit: "Economical for large-scale movement",
                },
                paraBefore:
                  " Rail wagons equipped with protective linings transport phosphoric acid or bulk fertilizers across long distances. They provide large capacity and reduce road congestion.  ", // nouveau paragraphe avant le tableau
                paraAfter:
                  "ONCF (Morocco’s national railway) plays a vital role in phosphate transport, with dedicated rail links from Khouribga mines to Jorf Lasfar and Safi, cutting costs and boosting efficiency.  ", // nouveau paragraphe après le tableau
                extra: [
                  "/assets/images/logistics/Transportation/Rail Tank Wagons.webp",
                ],
              },
              {
                name: "Bulk Carrier Trucks",
                img: "/assets/images/logistics/Transportation/cement-bulk-carrier.jpg",
                details: {
                  Function: "Road transport of fertilizers/acid",
                  Flexibility: "Can access remote sites",
                  Capacity: "20–40 tons per truck",
                  Benefit: "Complements rail transport for last-mile delivery",
                },
                paraBefore:
                  "Specialized trucks transport fertilizers in bulk form or phosphoric acid in lined tanks. They are used for shorter distances or direct deliveries to clients.   ", // nouveau paragraphe avant le tableau
                paraAfter:
                  "Trucks remain essential for connecting OCP’s production sites and ports with regional clients, ensuring domestic distribution and supporting smaller-scale exports  ", // nouveau paragraphe après le tableau
                extra: [
                  "/assets/images/logistics/Transportation/cement-bulk-carrier.jpg",
                ],
              },
            ],
            "Port Operations": [
              {
                name: "Ship Loaders",
                img: "/assets/images/logistics/Port Operations/Ship Loaders.jpg",
                details: {
                  Function: "Loads fertilizers/acid into vessels",
                  Capacity: "Thousands of tons per hour",
                  Operation: "Automated with conveyor integration",
                  Benefit: "Faster turnaround of ships",
                },
                paraBefore:
                  " Ship loaders are massive machines at export terminals that transfer bulk fertilizers or phosphoric acid directly into cargo ships. They provide high loading rates and are essential for export efficiency.  ", // nouveau paragraphe avant le tableau
                paraAfter:
                  "At ports like Jorf Lasfar and Casablanca, ship loaders allow Morocco to export millions of tons annually, cementing its dominance in the global fertilizer market.  ", // nouveau paragraphe après le tableau
                extra: [
                  "/assets/images/logistics/Port Operations/Ship Loaders.jpg",
                  "/assets/images/logistics/Port Operations/Ship Loaders-.jpeg",
                ],
              },
              {
                name: "Conveyor Belt Systems",
                img: "/assets/images/logistics/Port Operations/Port conveyor.png",
                details: {
                  Function: "Transfers fertilizers from storage to ships",
                  Length: "Can span several kilometers",
                  Safety: "Dust suppression and spillage control",
                  Benefit: "Continuous, high-capacity transfer",
                },
                paraBefore:
                  " Port conveyor systems connect storage halls with ship loaders. They ensure continuous, dust-controlled transfer of fertilizers from warehouses to vessels.  ", // nouveau paragraphe avant le tableau
                paraAfter:
                  " Morocco’s investment in modern conveyor systems reduces product losses, ensures eco-friendly operations, and supports high-volume export needs. ", // nouveau paragraphe après le tableau
                extra: [
                  "/assets/images/logistics/Port Operations/Port conveyor.png",
                  "/assets/images/logistics/Port Operations/Port conveyor-2.jpeg",
                ],
              },
            ],
          },
        },
      };

      let currentCategory = "mining";
      let currentStep = null;

      function renderSteps(category) {
        const steps = data[category].steps;
        const stepImages = data[category].stepImages; 
        const stepsBar = document.getElementById("stepsBar");
        stepsBar.innerHTML = "";
        steps.forEach((step, idx) => {
          const div = document.createElement("div");
          div.className = "step" + (idx === 0 ? " active" : "");

          
          div.innerHTML = `
      <img src="${stepImages[idx]}" alt="${step}" style="width:120px;height:120px;display:block;margin:0 auto 2rem;">
      <span>${step}</span>
    `;

          div.onclick = () => selectStep(step);
          stepsBar.appendChild(div);
        });
        currentStep = steps[0];
        renderMachines();
      }

      function renderMachines() {
        const machinesGrid = document.getElementById("machinesGrid");
        machinesGrid.innerHTML = "";
        const machines = data[currentCategory].machines[currentStep];
        machines.forEach((machine) => {
          const card = document.createElement("div");
          card.className = "machine-card";
          card.innerHTML = `<img src="${machine.img}" alt="${machine.name}"><h3>${machine.name}</h3>`;
          card.onclick = () => openOverlay(machine);
          machinesGrid.appendChild(card);
        });
      }

      function selectCategory(category) {
        currentCategory = category;
        document
          .querySelectorAll(".category")
          .forEach((c) => c.classList.remove("active"));
        event.target.classList.add("active");
        renderSteps(category);
      }

      function selectStep(step) {
        currentStep = step;
        document
          .querySelectorAll(".step")
          .forEach((s) => s.classList.remove("active"));
        event.target.classList.add("active");
        renderMachines();
      }

      function searchMachines() {
        const query = document
          .getElementById("searchInput")
          .value.toLowerCase();
        const machinesGrid = document.getElementById("machinesGrid");
        machinesGrid.innerHTML = "";
        Object.values(data).forEach((cat) => {
          Object.values(cat.machines).forEach((machines) => {
            machines.forEach((machine) => {
              if (machine.name.toLowerCase().includes(query)) {
                const card = document.createElement("div");
                card.className = "machine-card";
                card.innerHTML = `<img src="${machine.img}" alt="${machine.name}"><h3>${machine.name}</h3>`;
                card.onclick = () => openOverlay(machine);
                machinesGrid.appendChild(card);
              }
            });
          });
        });
      }

      function openOverlay(machine) {
        document.getElementById("overlayTitle").innerText = machine.name;

        
        document.getElementById("overlayParaBefore").innerText =
          machine.paraBefore || "";

        
        const table = document.getElementById("overlayTable");
        table.innerHTML = "";
        for (const key in machine.details) {
          const row = document.createElement("tr");
          row.innerHTML = `<th>${key}</th><td>${machine.details[key]}</td>`;
          table.appendChild(row);
        }

        
        document.getElementById("overlayParaAfter").innerText =
          machine.paraAfter || "";

        
        const overlayImages = document.getElementById("overlayImages");
        overlayImages.innerHTML = "";
        machine.extra.forEach((img) => {
          const image = document.createElement("img");
          image.src = img;
          overlayImages.appendChild(image);
        });

        document.getElementById("overlay").style.display = "flex";
      }

      function closeOverlay() {
        document.getElementById("overlay").style.display = "none";
      }

     

      renderSteps("mining");


