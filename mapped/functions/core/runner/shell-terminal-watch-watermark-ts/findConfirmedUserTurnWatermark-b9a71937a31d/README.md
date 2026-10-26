# `findConfirmedUserTurnWatermark`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/shell-terminal-watch-watermark.ts` · [README do módulo](../../../../../modules/core/runner/shell-terminal-watch-watermark-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:530095-530175](../../../../../../reference/runtime/sand-eval-runner.cjs#L530095-L530175) | `FunctionDeclaration` | sim | `host, state` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:530095-530175](../../../../../../reference/runtime/sand-eval-runner.cjs#L530095-L530175) | 16 | 1 | 2 | 7 | 0 | 1 |

### evaluation:530095

Chamadas escritas diretamente neste corpo: `ConversationTurnStructure.fromBinary`, `UserMessage.fromBinary`, `blobStore.getBlob`, `cacheResult`, `host.getBlobStore`, `host.getConfirmedUserTurnWatermarkCache`, `isConfirmedUserTurnWatermarkValid`, `isGroupTurnPromptText`, `isOffRecordMessageId`, `new Uint8Array`, `startsWithHiddenPromptMarker`, `state.turns[computed].slice`, `watermarkReads.increment`, `withBlobReadKind`.

Alvos de atribuição ou incremento: `index`, `source`, `userMessage`.

SHA-256 do trecho: `74f1a06be14266faef62d9ba5e59e21e53130d509b790b3b403e8c0a9ea38177`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
