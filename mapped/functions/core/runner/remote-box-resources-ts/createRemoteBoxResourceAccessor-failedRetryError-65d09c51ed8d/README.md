# `createRemoteBoxResourceAccessor/failedRetryError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/remote-box-resources.ts` · [README do módulo](../../../../../modules/core/runner/remote-box-resources-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:534460-534465](../../../../../../reference/runtime/sand-eval-runner.cjs#L534460-L534465) | `ArrowFunctionExpression` | não | `error63, unrepeatableSent` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:534460-534465](../../../../../../reference/runtime/sand-eval-runner.cjs#L534460-L534465) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:534460

Chamadas escritas diretamente neste corpo: `callMayHaveRun`, `freshConnectionError`, `new SandBoxCallOutcomeUnknownError`.

SHA-256 do trecho: `ab0c9d6386a1b40c8211c66afa224aa140837e7494ba09b1bc3cc027ce8ebe76`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
