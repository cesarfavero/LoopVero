# `createTurnSettle/firstPartyToolCallsForTurn`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-settle.ts` · [README do módulo](../../../../../modules/core/runner/turn-settle-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:590818-590825](../../../../../../reference/runtime/sand-eval-runner.cjs#L590818-L590825) | `ArrowFunctionExpression` | não | `messages, excluded` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590818-590825](../../../../../../reference/runtime/sand-eval-runner.cjs#L590818-L590825) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:590818

Chamadas escritas diretamente neste corpo: `deliveredFirstPartyToolCalls`, `host.externalSendFirstPartyTools`, `new Set`, `skippedToolCallIds`, `tools.map`.

SHA-256 do trecho: `63f0e86490e468ea757ecf4c51365aee371fd5e47d2c416ad5ece98336cfa0df`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
