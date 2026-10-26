# `shouldRetry`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/agents/runtime-capability-retry.ts` · [README do módulo](../../../../../modules/host/agents/runtime-capability-retry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:494883-494883](../../../../../../reference/runtime/host-main.cjs#L494883-L494883) | `ArrowFunctionExpression` | não | `error64` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494883-494883](../../../../../../reference/runtime/host-main.cjs#L494883-L494883) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:494883 usa retorno implícito de arrow function.

### host:494883

Chamadas escritas diretamente neste corpo: `isRateLimitConnectError`, `isTransientConnectError`.

SHA-256 do trecho: `cb3ad1462e9c1238475368257d9d1d315be65c730ab0eeade22cd36eba2bec0d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
