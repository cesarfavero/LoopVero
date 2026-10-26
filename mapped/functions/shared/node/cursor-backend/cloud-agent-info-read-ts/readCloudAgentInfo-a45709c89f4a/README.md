# `readCloudAgentInfo`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/cursor-backend/cloud-agent-info-read.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/cloud-agent-info-read-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:508618-508669](../../../../../../../reference/runtime/host-main.cjs#L508618-L508669) | `FunctionDeclaration` | sim | `client, bcId, options2 = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:508618-508669](../../../../../../../reference/runtime/host-main.cjs#L508618-L508669) | 5 | 0 | 2 | 3 | 1 | 1 |

### host:508618

Chamadas escritas diretamente neste corpo: `Promise.all`, `Promise.resolve`, `bcId.trim`, `client.getBackgroundComposerInfo`, `fetchLivePrState`, `infoRequest`, `isNotListableInfoError`, `isTerminalCloudAgentRunStatus`, `mapRunStatus`, `positiveMs`, `readCitedCloudAgentArtifacts`, `readCloudAgentFileChanges`, `readProjectMembership`, `resolveBranchName`, `resolvePr`, `resolvePrUrl`.

Alvos de atribuição ou incremento: `response`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `a1273469b8124c7d94e47e1a5538de4ab34423932f1bdd90e70554d0e69cd6e7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
