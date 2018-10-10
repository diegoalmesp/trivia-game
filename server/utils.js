import { createLogger, format, transports } from 'winston'
const { combine, timestamp, label, printf } = format;

const myFormat = printf(info => {
  return `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`;
});

export const logger = createLogger({
  level: 'info',
  format: combine(
    label({ label: 'trivia API' }),
    timestamp(),
    format.colorize(),
    format.json(),
    myFormat
  ),
  transports: [
    new transports.Console(),
  ]
})