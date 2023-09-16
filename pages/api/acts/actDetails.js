// pages/api/csvData.js

import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';

export default async (req, res) => {
    const filePath = path.resolve('../../../data/constitution_of_india.csv'); // Adjust the file path as needed
    const { search } = req.query;

    try {
        const data = [];

        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (row) => {
                // Check if the search query matches any field in the CSV row
                const matchesSearchQuery = Object.values(row).some((value) =>
                    value.toLowerCase().includes(search.toLowerCase())
                );

                if (matchesSearchQuery) {
                    data.push(row);
                }
            })
            .on('end', () => {
                res.status(200).json(data);
            });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
