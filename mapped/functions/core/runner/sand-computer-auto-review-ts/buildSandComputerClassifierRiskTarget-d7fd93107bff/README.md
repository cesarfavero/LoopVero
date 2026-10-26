# `buildSandComputerClassifierRiskTarget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-computer-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-computer-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:699431-699433](../../../../../../reference/runtime/host-main.cjs#L699431-L699433) | `FunctionDeclaration` | não | `args` |
| [evaluation:513187-513189](../../../../../../reference/runtime/sand-eval-runner.cjs#L513187-L513189) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699431-699433](../../../../../../reference/runtime/host-main.cjs#L699431-L699433) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:513187-513189](../../../../../../reference/runtime/sand-eval-runner.cjs#L513187-L513189) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:699431

Chamadas escritas diretamente neste corpo: `computerActionArguments`, `computerRiskTarget`.

SHA-256 do trecho: `3b9574e0278e7ecef896df625b1200962db70abcb49981ed2ed4c28b2dab9341`.

### evaluation:513187

Chamadas escritas diretamente neste corpo: `computerActionArguments`, `computerRiskTarget`.

SHA-256 do trecho: `3b9574e0278e7ecef896df625b1200962db70abcb49981ed2ed4c28b2dab9341`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
