const path = require('path');

const errors = {
  courses: {
    minLengthName: 'El curso debe tener al menos 3 caracteres',
    maxLengthName: 'El curso solo puede tener hasta 100 caracteres',
    negativePrice: 'El precio debe ser mayor a 0',
  },
  users: {
    minLengthName: 'El nombre debe tener al menos 3 caracteres',
    maxLengthName: 'El nombre solo puede tener hasta 100 caracteres',
  },
  password: {
    minLength: 'La contraseña debe tener al menos 6 caracteres',
    maxLength: 'La conrtaseña no puede tener mas de 20 caracteres',
    requiresNumber: 'La contraseña debe poseer al menos un número',
    requiresUppercase: 'La contraseña debe tener al menos una mayúscula',
    requiresLowercase: 'La contraseña debe tener al menos una minúscula',
    requiresSpecialCharacter: 'La contraseña debe tener al menos un carácter especial',
    confirmation: 'Las contraseñas no coinciden',
  },
};

const COURSES_PHOTOS_PATH = path.resolve(__dirname, '../../public/images/courses');

const defaultValues = {
  coursesPerPage: 12,
};

module.exports = {
  COURSES_PHOTOS_PATH,
  errors,
  defaultValues,
};
