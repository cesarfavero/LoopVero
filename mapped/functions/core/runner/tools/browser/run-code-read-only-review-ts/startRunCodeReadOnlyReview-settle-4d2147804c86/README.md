# `startRunCodeReadOnlyReview/settle`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/run-code-read-only-review.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:750320-750333](../../../../../../../../reference/runtime/host-main.cjs#L750320-L750333) | `FunctionExpression` | não | `error64` |
| [evaluation:523171-523184](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L523171-L523184) | `FunctionExpression` | não | `error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750320-750333](../../../../../../../../reference/runtime/host-main.cjs#L750320-L750333) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:523171-523184](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L523171-L523184) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:750320

Chamadas escritas diretamente neste corpo: `Math.max`, `now`, `outcomeOf`, `settled`.

SHA-256 do trecho: `887b0010c523a6a72bf30963a53a24be1e32be6310955c72519a4fc1133130a2`.

### evaluation:523171

Chamadas escritas diretamente neste corpo: `Math.max`, `now`, `outcomeOf`, `settled`.

SHA-256 do trecho: `63d8f7e2022d6d2f9fabab4e5b173c4ac099ebb895cddc2518261ff430fc0046`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
