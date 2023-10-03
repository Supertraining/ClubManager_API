import { body, validationResult } from 'express-validator';

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export const validate = {

  userReservation: [

    body('court').exists().notEmpty(),
    body('weekday').exists().notEmpty(),
    body('date').exists().notEmpty(),
    body('initialTime').exists().notEmpty(),
    body('finalTime').exists().notEmpty(),
    body('id').exists().notEmpty(),
    body('permanent').exists().notEmpty(),

    handleValidationErrors
  ],

  courtReservation: [

    body('name').exists().notEmpty(),
    body('selectedDates.weekday').exists().notEmpty(),
    body('selectedDates.date').exists().notEmpty(),
    body('selectedDates.initialTime').exists().notEmpty(),
    body('selectedDates.finalTime').exists().notEmpty(),
    body('selectedDates.id').exists().notEmpty(),
    body('selectedDates.permanent').exists().notEmpty(),

    handleValidationErrors
  ],
  user: [
    body('username').exists().trim().notEmpty().isEmail().normalizeEmail()
      .custom(value => {
        if (value.includes('.com.com')) {
          throw new Error()
        }
        return true;
      }),
    body('password').exists().trim().notEmpty(),
    body('nombre').exists().trim().notEmpty(),
    body('apellido').exists().trim().notEmpty(),
    body('edad').exists().trim().notEmpty(),
    body('telefono').exists().trim().notEmpty(),

    handleValidationErrors
  ]
}