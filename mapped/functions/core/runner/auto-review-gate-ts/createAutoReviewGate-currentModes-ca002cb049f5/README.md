# `createAutoReviewGate/currentModes`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/auto-review-gate.ts` · [README do módulo](../../../../../modules/core/runner/auto-review-gate-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:490120-490151](../../../../../../reference/runtime/sand-eval-runner.cjs#L490120-L490151) | `FunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:490120-490151](../../../../../../reference/runtime/sand-eval-runner.cjs#L490120-L490151) | 8 | 0 | 0 | 1 | 0 | 0 |

### evaluation:490120

Chamadas escritas diretamente neste corpo: `.expireSurfaces`, `deps.controller`, `deps.getModes`, `new Set`, `retiredSurfaces.add`, `sameAutoReviewModes`.

Alvos de atribuição ou incremento: `lastSeenModes`.

SHA-256 do trecho: `e8ed28af6a28540a78f955c59bf381fb57e19926a6d278dc5aea5bfe7def7698`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
