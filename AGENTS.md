# TheGrok

- `Grok Bot.app/` e `GrokBotResearch/` são referências originais: não modifique os artefatos locais. O usuário autorizou manter no Git privado um snapshot textual do harness extraído de `GrokBotResearch`; ignore dependências vendorizadas, `node_modules`, binários nativos/opacos, credenciais e sessões. Não publique nem redistribua esse snapshot fora do repositório privado.
- A implementação independente fica em `apps/desktop/`; pesquisas verificáveis ficam em `docs/research/`.
- Registre separadamente código identificado, contrato recuperado, comportamento observado, inferência e lógica remota indisponível.
- Nunca atribua proatividade espontânea ao cliente local sem localizar a decisão inicial ou a fronteira remota.
- O CodexRouter local usa somente o loopback do Mac. Não exponha o serviço na rede nem reutilize autenticação do aplicativo original.
- Para teste de runtime Electron, use `apps/desktop/scripts/launch-electron.cjs` com `--user-data-dir=/caminho/absoluto/temporario` e, quando necessário, porta CDP em loopback; não abra o executável Electron sem o entrypoint do TheGrok. O perfil temporário serve para não misturar validação aos dados locais usuais.
- Valide o fluxo real antes de declarar paridade visual, funcional ou comportamental.
- Preserve trabalho preexistente e faça commits coesos com push quando houver entrega verificável.
