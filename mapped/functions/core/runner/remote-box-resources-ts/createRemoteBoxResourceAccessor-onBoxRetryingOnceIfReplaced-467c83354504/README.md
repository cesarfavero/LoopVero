# `createRemoteBoxResourceAccessor/onBoxRetryingOnceIfReplaced`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/remote-box-resources.ts` · [README do módulo](../../../../../modules/core/runner/remote-box-resources-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:534507-534526](../../../../../../reference/runtime/sand-eval-runner.cjs#L534507-L534526) | `ArrowFunctionExpression` | sim | `ctx, reason, run` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:534507-534526](../../../../../../reference/runtime/sand-eval-runner.cjs#L534507-L534526) | 1 | 1 | 3 | 1 | 1 | 1 |

### evaluation:534507

Chamadas escritas diretamente neste corpo: `connect3`, `failedRetryError`, `markConnectionAnswered`, `retryAfterConnectionLoss`, `run`.

Alvos de atribuição ou incremento: `retried`.

Alvos de lançamento explícito: `failedRetryError`.

SHA-256 do trecho: `4fe6bb132bb04327fa6d1b8e68a8b11f50eea54a7b7a4e2c61e69f076c3e4f92`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
