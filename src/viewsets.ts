import {
  AllowAny,
  BaseViewSet,
  Permission,
  TangoResolver,
} from '@tango-ts/core';

import { Blog } from './entity';

export class BlogViewset extends BaseViewSet<typeof Blog> {
  entity = Blog;
  permissions: Permission[] = [new AllowAny()];
}

export const healthCheck: TangoResolver = async (req) => {
  return {
    status: 200,
    body: {
      message: "ok",
    },
  };
};
