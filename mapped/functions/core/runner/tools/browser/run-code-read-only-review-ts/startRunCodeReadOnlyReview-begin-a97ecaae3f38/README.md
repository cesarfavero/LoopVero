# `startRunCodeReadOnlyReview/begin`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/run-code-read-only-review.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:750307-750309](../../../../../../../../reference/runtime/host-main.cjs#L750307-L750309) | `FunctionExpression` | não | `(nenhum)` |
| [evaluation:523158-523160](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L523158-L523160) | `FunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750307-750309](../../../../../../../../reference/runtime/host-main.cjs#L750307-L750309) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:523158-523160](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L523158-L523160) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:750307

Chamadas escritas diretamente neste corpo: `now`.

Alvos de atribuição ou incremento: `startedAt`.

SHA-256 do trecho: `ff9b32c2a7a0670c320d1becee194913147e31504490ef51a70beccda396eafe`.

### evaluation:523158

Chamadas escritas diretamente neste corpo: `now`.

Alvos de atribuição ou incremento: `startedAt`.

SHA-256 do trecho: `ff9b32c2a7a0670c320d1becee194913147e31504490ef51a70beccda396eafe`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
