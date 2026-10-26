# `createTeachRecordingService/recoverPending`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/teach-recording/teach-recording-service.ts` · [README do módulo](../../../../../../modules/host/extensions/teach-recording/teach-recording-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:729204-729246](../../../../../../../reference/runtime/host-main.cjs#L729204-L729246) | `ArrowFunctionExpression` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:729204-729246](../../../../../../../reference/runtime/host-main.cjs#L729204-L729246) | 4 | 1 | 8 | 3 | 1 | 0 |

### host:729204

Chamadas escritas diretamente neste corpo: `agentIds.map`, `deps.box.ensureReady`, `deps.ensureLearningSkill`, `deps.listAgentIds`, `deps.sendLearningPrompt`, `entries.filter`, `entries.flatMap`, `learningPrompt`, `learningPromptRichText`, `markPromptDelivered`, `new Map`, `new SandTeachRecordingError`, `parseQueueScan`, `quarantineQueueFiles`, `queueKey`, `queueScanCommand`, `runShell`.

Alvos de lançamento explícito: `SandTeachRecordingError`.

SHA-256 do trecho: `a4ef4e6d8c1576b54acb7baae1d5af9b93e12d2fafdabfb1e81b8edffa11f7d5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
