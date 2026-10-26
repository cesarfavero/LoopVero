# `summarizeBlockedAction`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-computer-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-computer-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:699460-699478](../../../../../../reference/runtime/host-main.cjs#L699460-L699478) | `FunctionDeclaration` | não | `subject` |
| [evaluation:513216-513234](../../../../../../reference/runtime/sand-eval-runner.cjs#L513216-L513234) | `FunctionDeclaration` | não | `subject` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699460-699478](../../../../../../reference/runtime/host-main.cjs#L699460-L699478) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:513216-513234](../../../../../../reference/runtime/sand-eval-runner.cjs#L513216-L513234) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:699460

Chamadas escritas diretamente neste corpo: `describeClick`, `describeDrag`, `exactAction.key.slice`, `summarizeSandComputerTypedText`, `withDescription`.

SHA-256 do trecho: `6a26d1ffdfe61b3dde66ba649bf6cdaabe2a3b6cb3981244efdf665f82a2f6ed`.

### evaluation:513216

Chamadas escritas diretamente neste corpo: `describeClick`, `describeDrag`, `exactAction.key.slice`, `summarizeSandComputerTypedText`, `withDescription`.

SHA-256 do trecho: `6a26d1ffdfe61b3dde66ba649bf6cdaabe2a3b6cb3981244efdf665f82a2f6ed`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
