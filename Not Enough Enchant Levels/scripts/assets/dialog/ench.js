import { ModalFormData } from "@minecraft/server-ui";
import { functionMap } from "./list/func.js";

export function showEnchantDialog(player) {
  const categories = Object.keys(functionMap);

  const form = new ModalFormData()
    .title("Select Enchant")
    .dropdown("Enchant Types", categories)
    .slider("Level", 1, 10, 1, 1);

  form.show(player).then((response) => {
    if (response.canceled) return;

    const categoryIndex = response.formValues[0];
    const level = response.formValues[1];
    const category = categories[categoryIndex];
    const levels = functionMap[category];

    if (level - 1 >= levels.length) return;

    const levelRoman = levels[level - 1];
    const functionPath = category === "__root__" ? `${levelRoman}` : `${category}/${levelRoman}`;
    player.runCommandAsync(`function ${functionPath}`);
  });
}
