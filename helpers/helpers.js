export const reformatString = (a) => {
  if (typeof a === "string") {
    let str = a;
    const tab_accent_brut =
      "ÀÁÂÃÄÅàáâãäåÒÓÔÕÖØòóôõöøÈÉÊËèéêëÇçÌÍÎÏìíîïÙÚÛÜùúûüÿÑñ";
    const tab_sansAccent_brut =
      "aaaaaaaaaaaaooooooooooooeeeeeeeecciiiiiiiiuuuuuuuuynn";
    const tab_accent = tab_accent_brut.split("");
    const tab_sansAccent = tab_sansAccent_brut.split("");
    const tabCorrAcc = new Array();
    let i = -1;
    while (tab_accent[++i]) {
      tabCorrAcc[tab_accent[i]] = tab_sansAccent[i];
    }
    tabCorrAcc["Œ"] = "OE";
    tabCorrAcc["œ"] = "oe";
    str = str.replace(/./g, function ($0) {
      return tabCorrAcc[$0] ? tabCorrAcc[$0] : $0;
    });
    str = str.replace(/&amp;/g, "_");
    str = str.replace(/_amp;/g, "");
    str = str.replace(/&lt;/g, "_");
    str = str.replace(/_lt;/g, "_");
    str = str.replace(/&gt;/g, "_");
    str = str.replace(/_gt;/g, "_");
    str = str.replace(
      /(-| |#|"|@|:|\.|,|;|'|%|!|²|=|÷|\+|\?|\/|\[|\]|\{|\}|\*|\^|\$|\\|`|"|'|¨|€|£|¤|µ|§|~|ƒ|„|©|°)/g,
      "_"
    );
    return str;
  }
};
