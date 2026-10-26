# `createNeedsAuthHold/boxStillReportsSignIn`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/needs-auth-hold.ts` · [README do módulo](../../../../../modules/core/mcp/needs-auth-hold-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:584804-584834](../../../../../../reference/runtime/sand-eval-runner.cjs#L584804-L584834) | `ArrowFunctionExpression` | sim | `providerIdentifier` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584804-584834](../../../../../../reference/runtime/sand-eval-runner.cjs#L584804-L584834) | 4 | 0 | 1 | 4 | 0 | 0 |

### evaluation:584804

Chamadas escritas diretamente neste corpo: `.then`, `Promise.race`, `delayWith`, `deps.onProbeFailed`, `deps.resolvePendingSignInSlot`, `done.abort`, `new AbortController`, `new Error`, `probe.abort`.

SHA-256 do trecho: `c0ead0e9ecf14e467843fd1e69fd5f233452c350cea73ea8bc80c4ea68d8e1e5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
