# `createSearchTranscriptsTool/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `core/runner/tools/history-reads/search-transcripts-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/history-reads/search-transcripts-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:766559-766578](../../../../../../../../reference/runtime/host-main.cjs#L766559-L766578) | `ArrowFunctionExpression` | sim | `ctx, args, toolDeps` |
| [evaluation:559923-559942](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L559923-L559942) | `ArrowFunctionExpression` | sim | `ctx, args, toolDeps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766559-766578](../../../../../../../../reference/runtime/host-main.cjs#L766559-L766578) | 5 | 0 | 1 | 2 | 2 | 0 |
| [evaluation:559923-559942](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L559923-L559942) | 5 | 0 | 1 | 2 | 2 | 0 |

### host:766559

Chamadas escritas diretamente neste corpo: `allConversationsArgsSchema.parse`, `createTranscriptsVirtualMount`, `new SandToolInputError`, `renderSearch`, `renderSearchAcross`, `transcriptPath`, `transcriptTargetOf`, `transcriptVirtualMountAccess`, `virtualMount.search`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `b5445736e406c9470c5467ea11a4a9ec8ebb7ee59cd2c92144745d7b0658a4b0`.

### evaluation:559923

Chamadas escritas diretamente neste corpo: `allConversationsArgsSchema.parse`, `createTranscriptsVirtualMount`, `new SandToolInputError`, `renderSearch`, `renderSearchAcross`, `transcriptPath`, `transcriptTargetOf`, `transcriptVirtualMountAccess`, `virtualMount.search`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `b5445736e406c9470c5467ea11a4a9ec8ebb7ee59cd2c92144745d7b0658a4b0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
