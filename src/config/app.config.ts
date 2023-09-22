interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Manager'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant manager',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View restaurant information', 'View menu items', 'Make a reservation', 'Leave a review'],
  ownerAbilities: ['Manage user information', 'Manage restaurant information', 'Manage menu items', 'Manage orders'],
  getQuoteUrl: 'https://app.roq.ai/proposal/a20926ee-bf47-4005-bb06-25eca03b8f73',
};
