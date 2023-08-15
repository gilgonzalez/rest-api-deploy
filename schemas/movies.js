const z = require('zod')

const movieSchema = z.object({
  title: z.string({
    invalid_type_error: 'Title must be a string',
    required_error: 'Title is required'
  }),
  year: z.number().int().min(1900).max(new Date().getFullYear()),
  director: z.string(),
  duration: z.number().int().positive(),
  rate: z.number().max(10).min(0).default(5.5),
  poster: z.string().url({
    message: 'Poster must be a valid URL'
  }),
  genre: z.array(z.enum(['Action', 'Comedy', 'Drama', 'Horror', 'Thriller', 'Fantasy', 'Sci-Fi', 'Adventure', 'Crime']), {
    required_error: 'Genre is required',
    invalid_type_error: 'Genre must be an array of strings'
  })
})

// eslint-disable-next-line space-before-function-paren
function validatePartialMovie(movie) {
  return movieSchema.partial().safeParse(movie)
}

// eslint-disable-next-line space-before-function-paren
function validateMovie(movie) {
  return movieSchema.safeParse(movie)
}

module.exports = {
  validateMovie,
  validatePartialMovie
}
