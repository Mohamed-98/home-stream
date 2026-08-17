import * as Joi from 'joi';

export const envValidationSchema = Joi.object({
  DATABASE_URL: Joi.string().uri().required(),

  SPOTIFY_CLIENT_ID: Joi.string().allow('').default(''),
  SPOTIFY_CLIENT_SECRET: Joi.string().allow('').default(''),
  SPOTIFY_REDIRECT_URI: Joi.string()
    .uri()
    .default('http://localhost:3000/auth/spotify/callback'),

  LIBRARY_PATH: Joi.string().default('/home/you/Music'),

  PORT: Joi.number().integer().min(1).max(65535).default(3000),
});
