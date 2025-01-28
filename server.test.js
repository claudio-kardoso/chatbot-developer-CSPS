const request = require('supertest'); 
const axios = require('axios');
const app = require('./server'); // Ajuste o caminho conforme necessário
const mockData = require('./mockData'); // Importando o payload de exemplo

jest.mock('axios');

describe('Testando a rota /repositories', () => {
    it('Deve retornar os 5 primeiros repositórios no formato correto', async () => {
        // Configurar o mock do axios
        const apiMockData = Object.values(mockData).map(repo => ({
            full_name: repo.full_name,
            description: repo.description,
            owner: { avatar_url: repo.avatar }, // Estrutura esperada pela API
            created_at: repo.created_at,
        }));
        axios.get.mockResolvedValue({ data: apiMockData });

        const response = await request(app).get('/repositories');

        // Verifica o status da resposta
        expect(response.status).toBe(200);

        // Verifica o corpo da resposta
        const responseBody = response.body;
        expect(Object.keys(responseBody)).toHaveLength(5); // 5 repositórios

        // Valida cada repositório no formato esperado
        Object.entries(mockData).forEach(([key, repo]) => {
            expect(responseBody).toHaveProperty(key); // Verifica se a chave numérica existe
            expect(responseBody[key]).toMatchObject({
                full_name: repo.full_name,
                description: repo.description,
                avatar: repo.avatar,
                created_at: repo.created_at,
            });
        });
    });

    it('Deve retornar erro 500 se a chamada à API falhar', async () => {
        axios.get.mockRejectedValue(new Error('Erro na API do GitHub'));

        const response = await request(app).get('/repositories');

        expect(response.status).toBe(500);
        expect(response.body).toHaveProperty('message', 'Erro interno ao buscar os repositórios.');
    });
});
