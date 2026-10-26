# `renderStatsBlock`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/compaction-segments.js` · [README do módulo](../../../../modules/agent-summarization/compaction-segments-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:616999-617022](../../../../../reference/runtime/host-main.cjs#L616999-L617022) | `FunctionDeclaration` | não | `stats` |
| [evaluation:285539-285562](../../../../../reference/runtime/sand-eval-runner.cjs#L285539-L285562) | `FunctionDeclaration` | não | `stats` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616999-617022](../../../../../reference/runtime/host-main.cjs#L616999-L617022) | 4 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:285539-285562](../../../../../reference/runtime/sand-eval-runner.cjs#L285539-L285562) | 4 | 0 | 0 | 1 | 0 | 0 |

### host:616999

Chamadas escritas diretamente neste corpo: `.join`, `files.join`, `files.slice`, `stats.lastAssistantExcerpt.replaceAll`, `stats.roleCounts.map`, `stats.toolCounts.map`, `truncateChars`, `withThousands`.

Alvos de atribuição ou incremento: `out`.

SHA-256 do trecho: `ce5c26401ba03e7a073d545b6446becd482f7fef135366d03c15f6c35e5565b9`.

### evaluation:285539

Chamadas escritas diretamente neste corpo: `.join`, `files.join`, `files.slice`, `stats.lastAssistantExcerpt.replaceAll`, `stats.roleCounts.map`, `stats.toolCounts.map`, `truncateChars`, `withThousands`.

Alvos de atribuição ou incremento: `out`.

SHA-256 do trecho: `ce5c26401ba03e7a073d545b6446becd482f7fef135366d03c15f6c35e5565b9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
