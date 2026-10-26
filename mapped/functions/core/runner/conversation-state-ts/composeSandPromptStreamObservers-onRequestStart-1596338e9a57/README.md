# `composeSandPromptStreamObservers/onRequestStart`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/conversation-state.ts` · [README do módulo](../../../../../modules/core/runner/conversation-state-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:529408-529444](../../../../../../reference/runtime/sand-eval-runner.cjs#L529408-L529444) | `FunctionExpression` | não | `ctx, request3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:529408-529444](../../../../../../reference/runtime/sand-eval-runner.cjs#L529408-L529444) | 2 | 1 | 0 | 2 | 0 | 0 |

### evaluation:529408

Chamadas escritas diretamente neste corpo: `new Set`, `requestObservers.filter`, `safelyObservePromptStream`.

SHA-256 do trecho: `e49358bd2927e2aa9d5dd34f6afa556b4d0cf888333b4055d7435801f51253f6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
