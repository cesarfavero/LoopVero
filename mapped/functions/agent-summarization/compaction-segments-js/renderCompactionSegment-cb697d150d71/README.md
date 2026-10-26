# `renderCompactionSegment`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/compaction-segments.js` · [README do módulo](../../../../modules/agent-summarization/compaction-segments-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:617088-617134](../../../../../reference/runtime/host-main.cjs#L617088-L617134) | `FunctionDeclaration` | não | `args` |
| [evaluation:285628-285674](../../../../../reference/runtime/sand-eval-runner.cjs#L285628-L285674) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617088-617134](../../../../../reference/runtime/host-main.cjs#L617088-L617134) | 4 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:285628-285674](../../../../../reference/runtime/sand-eval-runner.cjs#L285628-L285674) | 4 | 1 | 0 | 2 | 0 | 0 |

### host:617088

Chamadas escritas diretamente neste corpo: `.replace`, `Math.max`, `String`, `TRUNCATION_NOTICE.replace`, `args.summary.trim`, `args.turns.entries`, `blocks.join`, `blocks.push`, `computeTurnStats`, `renderStatsBlock`, `section.render`, `segmentLabel`, `utf8ByteLength`.

Alvos de atribuição ou incremento: `body`, `truncatedAt`, `used`.

SHA-256 do trecho: `91cae64e97a0a1130767ed9258d2bdc22b4fd63aae86af67abf66cc77ea6d24e`.

### evaluation:285628

Chamadas escritas diretamente neste corpo: `.replace`, `Math.max`, `String`, `TRUNCATION_NOTICE.replace`, `args.summary.trim`, `args.turns.entries`, `blocks.join`, `blocks.push`, `computeTurnStats`, `renderStatsBlock`, `section.render`, `segmentLabel`, `utf8ByteLength`.

Alvos de atribuição ou incremento: `body`, `truncatedAt`, `used`.

SHA-256 do trecho: `91cae64e97a0a1130767ed9258d2bdc22b4fd63aae86af67abf66cc77ea6d24e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
