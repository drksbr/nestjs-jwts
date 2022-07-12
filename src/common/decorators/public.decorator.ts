import { SetMetadata } from '@nestjs/common';

const Public = () => SetMetadata('isPublic', true);
const Admin = () => SetMetadata('isAdmin', true);

export { Public, Admin };
