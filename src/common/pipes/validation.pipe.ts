import { ValidationPipe } from '@nestjs/common';

/**
 * Shared application-wide validation pipe configuration.
 * `whitelist` strips unknown properties, `transform` coerces DTO types.
 */
export const appValidationPipe = new ValidationPipe({
  whitelist: true,
  transform: true,
  transformOptions: {
    enableImplicitConversion: true,
  },
});
