# `runSandComputerAutoReviewPreflight`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-computer-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-computer-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:699642-699656](../../../../../../reference/runtime/host-main.cjs#L699642-L699656) | `FunctionDeclaration` | sim | `args` |
| [evaluation:513398-513412](../../../../../../reference/runtime/sand-eval-runner.cjs#L513398-L513412) | `FunctionDeclaration` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699642-699656](../../../../../../reference/runtime/host-main.cjs#L699642-L699656) | 2 | 0 | 1 | 2 | 0 | 0 |
| [evaluation:513398-513412](../../../../../../reference/runtime/sand-eval-runner.cjs#L513398-L513412) | 2 | 0 | 1 | 2 | 0 | 0 |

### host:699642

Chamadas escritas diretamente neste corpo: `assertDeclaredDescription`, `buildSandComputerAutoReviewClassifierSubject`, `isSandComputerAutoReviewMutatingAction`, `reviewComputerCall`.

SHA-256 do trecho: `4a307a6c5c962832c52e516ef0e7c57a6f2bf3ca70aeeb5cf9f721fe212109e6`.

### evaluation:513398

Chamadas escritas diretamente neste corpo: `assertDeclaredDescription`, `buildSandComputerAutoReviewClassifierSubject`, `isSandComputerAutoReviewMutatingAction`, `reviewComputerCall`.

SHA-256 do trecho: `4a307a6c5c962832c52e516ef0e7c57a6f2bf3ca70aeeb5cf9f721fe212109e6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
