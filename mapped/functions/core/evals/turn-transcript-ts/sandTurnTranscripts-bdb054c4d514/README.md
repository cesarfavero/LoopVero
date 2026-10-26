# `sandTurnTranscripts`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/transcripts/README.md).

**Módulo:** `core/evals/turn-transcript.ts` · [README do módulo](../../../../../modules/core/evals/turn-transcript-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:628360-628393](../../../../../../reference/runtime/sand-eval-runner.cjs#L628360-L628393) | `FunctionDeclaration` | não | `segments` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628360-628393](../../../../../../reference/runtime/sand-eval-runner.cjs#L628360-L628393) | 4 | 1 | 0 | 1 | 0 | 0 |

### evaluation:628360

Chamadas escritas diretamente neste corpo: `.map`, `byRequestId.get`, `byRequestId.set`, `existing.push`, `groups.map`, `groups.push`, `mergeSegmentMessages`, `new Map`, `new Set`, `segments.filter`, `subagentLaunches`.

SHA-256 do trecho: `10a3cec915fcad8e641f9b076ce4ca2da15e34034f31f92a73281b0cdfde82eb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
