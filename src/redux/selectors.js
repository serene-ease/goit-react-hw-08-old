export const selectorContacts = state => state.contacts;
export const selectorIsLoading = state => state.contacts.isLoading;
export const selectorError = state => state.contacts.error;
export const selectorStatusFilter = state => state.filters.status;