import { Injectable, OnModuleInit } from '@nestjs/common';
import { PubSubService } from '@savanapoint/nestjs-pubsub';

@Injectable()
export class  AppService implements OnModuleInit {
  constructor(private readonly pubSubService: PubSubService) {}

  onModuleInit() {
    this.pubSubService.subscribe('my-channel-test', ['my-subscribe-test'], (message) => {
      console.log('New message received:', message);
    });
  }
}