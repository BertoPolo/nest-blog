import { Test, TestingModule } from '@nestjs/testing';
import { ServiceTestService } from './service_test.service';

describe('ServiceTestService', () => {
  let service: ServiceTestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiceTestService],
    }).compile();

    service = module.get<ServiceTestService>(ServiceTestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
