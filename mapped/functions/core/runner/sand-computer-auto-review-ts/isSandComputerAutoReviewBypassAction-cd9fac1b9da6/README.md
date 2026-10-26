# `isSandComputerAutoReviewBypassAction`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-computer-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-computer-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:699303-699305](../../../../../../reference/runtime/host-main.cjs#L699303-L699305) | `FunctionDeclaration` | não | `action` |
| [evaluation:513059-513061](../../../../../../reference/runtime/sand-eval-runner.cjs#L513059-L513061) | `FunctionDeclaration` | não | `action` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699303-699305](../../../../../../reference/runtime/host-main.cjs#L699303-L699305) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:513059-513061](../../../../../../reference/runtime/sand-eval-runner.cjs#L513059-L513061) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:699303

Chamadas escritas diretamente neste corpo: `BYPASS_COMPUTER_ACTIONS.has`.

SHA-256 do trecho: `c1d524c124821b167cea71dc083a04efb25b214c67d728541945a8877d4765af`.

### evaluation:513059

Chamadas escritas diretamente neste corpo: `BYPASS_COMPUTER_ACTIONS.has`.

SHA-256 do trecho: `c1d524c124821b167cea71dc083a04efb25b214c67d728541945a8877d4765af`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
