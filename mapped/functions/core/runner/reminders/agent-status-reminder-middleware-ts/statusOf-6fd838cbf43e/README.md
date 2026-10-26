# `statusOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/reminders/agent-status-reminder-middleware.ts` · [README do módulo](../../../../../../modules/core/runner/reminders/agent-status-reminder-middleware-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:740917-740920](../../../../../../../reference/runtime/host-main.cjs#L740917-L740920) | `FunctionExpression` | não | `args` |
| [evaluation:480506-480509](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480506-L480509) | `FunctionExpression` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740917-740920](../../../../../../../reference/runtime/host-main.cjs#L740917-L740920) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:480506-480509](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480506-L480509) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:740917

Chamadas escritas diretamente neste corpo: `setStatusParameters.safeParse`.

SHA-256 do trecho: `f7c9862208b4fd21967933130917e891b3273ac3316755c6ffe371c4a2c79e38`.

### evaluation:480506

Chamadas escritas diretamente neste corpo: `setStatusParameters.safeParse`.

SHA-256 do trecho: `b15dab8111bc2b000748607a5d752b5f529495facceb316ba373b819bcdd2509`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
