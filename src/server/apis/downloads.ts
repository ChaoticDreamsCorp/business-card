// pages/api/download.ts

import fs from 'fs';
import {NextApiRequest, NextApiResponse} from 'next';
import path from 'path';

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Define the path to your PDF file
    const filePath = path.resolve('/src/assets/Manuel_Saleta_Resume.pdf');
    const fileName = 'Manuel_Saleta_Resume.pdf';

    // Check if the file exists
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({error: 'File not found'});
    }

    // Set headers for download
    res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
    res.setHeader('Content-Type', 'application/pdf');

    // Stream the file to the response
    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  } catch (error) {
    console.error('Error downloading PDF:', error);
    res.status(500).json({error: 'Internal server error'});
  }
};
