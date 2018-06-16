import { OwnerDashboardModule } from './owner-dashboard.module';

describe('OwnerDashboardModule', () => {
  let ownerDashboardModule: OwnerDashboardModule;

  beforeEach(() => {
    ownerDashboardModule = new OwnerDashboardModule();
  });

  it('should create an instance', () => {
    expect(ownerDashboardModule).toBeTruthy();
  });
});
