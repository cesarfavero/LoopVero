# `createTranscriptSearchTools/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `core/runner/tools/transcript-search/transcript-search-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/transcript-search/transcript-search-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:771449-771449](../../../../../../../../reference/runtime/host-main.cjs#L771449-L771449) | `ArrowFunctionExpression` | sim | `ctx, args, d` |
| [host:771457-771457](../../../../../../../../reference/runtime/host-main.cjs#L771457-L771457) | `ArrowFunctionExpression` | sim | `ctx, args, d` |
| [evaluation:570683-570683](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570683-L570683) | `ArrowFunctionExpression` | sim | `ctx, args, d` |
| [evaluation:570691-570691](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570691-L570691) | `ArrowFunctionExpression` | sim | `ctx, args, d` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771449-771449](../../../../../../../../reference/runtime/host-main.cjs#L771449-L771449) | 0 | 0 | 1 | 0 | 0 | 0 |

A ocorrência em host:771449 usa retorno implícito de arrow function.
| [host:771457-771457](../../../../../../../../reference/runtime/host-main.cjs#L771457-L771457) | 0 | 0 | 1 | 0 | 0 | 0 |

A ocorrência em host:771457 usa retorno implícito de arrow function.
| [evaluation:570683-570683](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570683-L570683) | 0 | 0 | 1 | 0 | 0 | 0 |

A ocorrência em evaluation:570683 usa retorno implícito de arrow function.
| [evaluation:570691-570691](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570691-L570691) | 0 | 0 | 1 | 0 | 0 | 0 |

A ocorrência em evaluation:570691 usa retorno implícito de arrow function.

### host:771449

Chamadas escritas diretamente neste corpo: `searchTranscripts`.

SHA-256 do trecho: `c5df79c9d44c5b8c09101b940b3e2e4757af928687d37f547dff63c5ee54495f`.

### host:771457

Chamadas escritas diretamente neste corpo: `readTranscriptFile`.

SHA-256 do trecho: `111b071073154cfb849e8bf1925131e5a28b4a10686e98e3fa70406e79e3c34e`.

### evaluation:570683

Chamadas escritas diretamente neste corpo: `searchTranscripts`.

SHA-256 do trecho: `c5df79c9d44c5b8c09101b940b3e2e4757af928687d37f547dff63c5ee54495f`.

### evaluation:570691

Chamadas escritas diretamente neste corpo: `readTranscriptFile`.

SHA-256 do trecho: `111b071073154cfb849e8bf1925131e5a28b4a10686e98e3fa70406e79e3c34e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
