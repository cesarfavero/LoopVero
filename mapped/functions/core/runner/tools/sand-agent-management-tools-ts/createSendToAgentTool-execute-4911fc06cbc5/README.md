# `createSendToAgentTool/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-agent-management-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-agent-management-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:757397-757431](../../../../../../../reference/runtime/host-main.cjs#L757397-L757431) | `ArrowFunctionExpression` | sim | `ctx, args, d` |
| [evaluation:543420-543454](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543420-L543454) | `ArrowFunctionExpression` | sim | `ctx, args, d` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:757397-757431](../../../../../../../reference/runtime/host-main.cjs#L757397-L757431) | 6 | 0 | 3 | 3 | 1 | 1 |
| [evaluation:543420-543454](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543420-L543454) | 6 | 0 | 3 | 3 | 1 | 1 |

### host:757397

Chamadas escritas diretamente neste corpo: `bindMessageDeliveryReport`, `d.getSelfAgentId`, `d.sendToAgent`, `reportDelivery.failed`, `reportDelivery.settled`, `resolveCardTaskThread`, `resolveSendToAgentImages`.

Alvos de atribuição ou incremento: `sent`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `01f16500ba2dfcde6c3dc4d83392e583404aa2f88c2e883752606aed746cbfbe`.

### evaluation:543420

Chamadas escritas diretamente neste corpo: `bindMessageDeliveryReport`, `d.getSelfAgentId`, `d.sendToAgent`, `reportDelivery.failed`, `reportDelivery.settled`, `resolveCardTaskThread`, `resolveSendToAgentImages`.

Alvos de atribuição ou incremento: `sent`.

Alvos de lançamento explícito: `error63`.

SHA-256 do trecho: `069f796d5441ff6c0eda11792328eaf748dc90fff94ee144ee1879b58e325e12`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
