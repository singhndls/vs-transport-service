import type { Request, Response } from 'express';

export default function handler(_req: Request, res: Response): void {
  const measurementId = process.env.GA_MEASUREMENT_ID || '';
  // Only expose the ID — never other secrets
  res.json({ measurementId: measurementId || null });
}
