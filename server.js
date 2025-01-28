const express = require('express');
const axios = require('axios');

const app = express();

const API_URL = 'https://api.github.com/orgs/takenet/repos';

app.get('/repositories', async (req, res) => {
    try {
        const response = await axios.get(API_URL, {
            params: {
                q: 'language:csharp',
                per_page: 5,
                sort: 'created_at',
                direction: 'asc'
            }
        });

        if (response.data) {
            const repositories = response.data;

            // Transformar os 5 primeiros repositórios no formato desejado
            const formattedData = {};
            repositories.slice(0, 5).forEach((repo, index) => {
                formattedData[index] = {
                    full_name: repo.full_name,
                    description: repo.description,
                    avatar: repo.owner.avatar_url,
                    created_at: repo.created_at
                };
            });

            res.status(200).json(formattedData);
        } else {
            res.status(200).json({ message: 'Nenhum repositório encontrado.' });
        }
    } catch (error) {
        console.error('Erro ao fazer a requisição:', error.response?.data || error.message);
        res.status(500).json({ message: 'Erro interno ao buscar os repositórios.' });
    }
});

// Exportar o app sem iniciar o servidor
module.exports = app;
