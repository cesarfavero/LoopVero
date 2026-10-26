# `createTranscriptsVirtualMount/read`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/transcripts/README.md).

**Módulo:** `core/virtual-mounts/transcripts.ts` · [README do módulo](../../../../../modules/core/virtual-mounts/transcripts-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:766220-766253](../../../../../../reference/runtime/host-main.cjs#L766220-L766253) | `ArrowFunctionExpression` | sim | `ctx, access5, path33, window2 = {}` |
| [evaluation:559584-559617](../../../../../../reference/runtime/sand-eval-runner.cjs#L559584-L559617) | `ArrowFunctionExpression` | sim | `ctx, access4, path33, window2 = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766220-766253](../../../../../../reference/runtime/host-main.cjs#L766220-L766253) | 11 | 0 | 5 | 6 | 0 | 0 |
| [evaluation:559584-559617](../../../../../../reference/runtime/sand-eval-runner.cjs#L559584-L559617) | 11 | 0 | 5 | 6 | 0 | 0 |

### host:766220

Chamadas escritas diretamente neste corpo: `openSpoken`, `readSandTranscriptWindow`, `readSpoken`, `reader.openTranscript`, `refused2`, `transcriptAroundBefore`, `transcriptTargetOfPath`.

SHA-256 do trecho: `9ce35ff8974810e91cabe78bd70308677b2a2b64a2d6992ccdac3ae25988cf16`.

### evaluation:559584

Chamadas escritas diretamente neste corpo: `openSpoken`, `readSandTranscriptWindow`, `readSpoken`, `reader.openTranscript`, `refused`, `transcriptAroundBefore`, `transcriptTargetOfPath`.

SHA-256 do trecho: `7a0b61a91ccaa8e2c0a536082612f11a07369703c92f6b34e993a5cf8a06a444`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
