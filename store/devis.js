export const state = () => ({
  nomProjet: null,
  referenceProjet: null,
  client: null,
  dateDevis: null,
  modules: [],
});

export const mutations = {
  addDevis(state, devis) {
    state.nomProjet = devis.nomProjet;
    state.referenceProjet = devis.referenceProjet;
    state.client = devis.client;
    state.dateDevis = devis.dateSelected;
  },
  addModules(state, moduleToAdd) {
    let toAdd = true;
    state.modules.forEach((m) => {
      if (m._id === moduleToAdd._id) {
        toAdd = false;
      }
    });
    toAdd ? state.modules.push(moduleToAdd) : "";
  },
  removeModule(state, moduleToRemove) {
    if (state.modules.includes(moduleToRemove)) {
      state.modules = state.modules.filter((moduleLoop) => {
        return moduleLoop !== moduleToRemove;
      });
    }
  },
  addQuantity(state, mod) {
    const moduleToChange = state.modules.filter((m) => {
      return m._id === mod._id;
    });
    moduleToChange.quantite = mod.quantite;
  },
  removeDevisToStore() {
    const newState = {};
    newState.nomProjet = null;
    newState.referenceProjet = null;
    newState.client = null;
    newState.dateDevis = null;
    newState.modules = [];
    Object.assign(newState, state);
  },
};
