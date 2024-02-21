import { Test, TestingModule } from '@nestjs/testing';
import { ControllerTestController } from './controller_test.controller';

describe('ControllerTestController', () => {
  let controller: ControllerTestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ControllerTestController],
    }).compile();

    controller = module.get<ControllerTestController>(ControllerTestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
