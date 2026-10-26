# `createTranscriptsVirtualMount/search`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/transcripts/README.md).

**Módulo:** `core/virtual-mounts/transcripts.ts` · [README do módulo](../../../../../modules/core/virtual-mounts/transcripts-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:766254-766297](../../../../../../reference/runtime/host-main.cjs#L766254-L766297) | `ArrowFunctionExpression` | sim | `ctx, _access, request5` |
| [evaluation:559618-559661](../../../../../../reference/runtime/sand-eval-runner.cjs#L559618-L559661) | `ArrowFunctionExpression` | sim | `ctx, _access, request3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766254-766297](../../../../../../reference/runtime/host-main.cjs#L766254-L766297) | 8 | 0 | 5 | 8 | 0 | 0 |
| [evaluation:559618-559661](../../../../../../reference/runtime/sand-eval-runner.cjs#L559618-L559661) | 8 | 0 | 5 | 8 | 0 | 0 |

### host:766254

Chamadas escritas diretamente neste corpo: `new Map`, `openSpoken`, `outcome.hits.map`, `reader.searchTranscript`, `refused2`, `request5.query.trim`, `result.hits.flatMap`, `scanSpoken`, `scanned.entries.map`, `searchReadable`, `transcriptPath`, `transcriptSearch`, `transcriptTargetOfPath`.

SHA-256 do trecho: `d486b509ed454ccf383124f61c756c1c3b239560d10c08974e540751374985b4`.

### evaluation:559618

Chamadas escritas diretamente neste corpo: `new Map`, `openSpoken`, `outcome.hits.map`, `reader.searchTranscript`, `refused`, `request3.query.trim`, `result.hits.flatMap`, `scanSpoken`, `scanned.entries.map`, `searchReadable`, `transcriptPath`, `transcriptSearch`, `transcriptTargetOfPath`.

SHA-256 do trecho: `ed889d83fa0951ed29ecd6caab0a5c4239b3e7f26e804571a1d14d8518edcbf4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
