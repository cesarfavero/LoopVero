# `createPlaywrightRunCodeOffer/settle`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/playwright-run-code-offer.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/playwright-run-code-offer-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:693547-693556](../../../../../../../../reference/runtime/host-main.cjs#L693547-L693556) | `ArrowFunctionExpression` | não | `{ offered, reviewMode, admission, offerAdmission = admission, codeMode }` |
| [evaluation:483225-483234](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L483225-L483234) | `ArrowFunctionExpression` | não | `{ offered, reviewMode, admission, offerAdmission = admission, codeMode }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:693547-693556](../../../../../../../../reference/runtime/host-main.cjs#L693547-L693556) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:483225-483234](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L483225-L483234) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:693547

Chamadas escritas diretamente neste corpo: `codeMode`, `onOffered`.

Alvos de atribuição ou incremento: `listed`, `reported2`, `settled`.

SHA-256 do trecho: `54bd961bc718ba3b62041a5a1f7884a628f299bce7e4cdd03c351afca9e34524`.

### evaluation:483225

Chamadas escritas diretamente neste corpo: `codeMode`, `onOffered`.

Alvos de atribuição ou incremento: `listed`, `reported2`, `settled`.

SHA-256 do trecho: `54bd961bc718ba3b62041a5a1f7884a628f299bce7e4cdd03c351afca9e34524`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
