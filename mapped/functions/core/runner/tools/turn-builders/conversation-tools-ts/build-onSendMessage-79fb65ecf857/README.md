# `build/onSendMessage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/turn-builders/conversation-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/turn-builders/conversation-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:769057-769071](../../../../../../../../reference/runtime/host-main.cjs#L769057-L769071) | `ArrowFunctionExpression` | não | `message, timestampMs, deliverTo, toolCallId` |
| [evaluation:564704-564718](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564704-L564718) | `ArrowFunctionExpression` | não | `message, timestampMs, deliverTo, toolCallId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769057-769071](../../../../../../../../reference/runtime/host-main.cjs#L769057-L769071) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:564704-564718](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564704-L564718) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:769057

Chamadas escritas diretamente neste corpo: `armPluginLinkWaits`, `host.emitUpdate`, `turn.reportWidgetShown`.

SHA-256 do trecho: `dabd5d59642b9029c1945b27af874b438041f14a42899c496e4cd25aee4f595d`.

### evaluation:564704

Chamadas escritas diretamente neste corpo: `armPluginLinkWaits`, `host.emitUpdate`, `turn.reportWidgetShown`.

SHA-256 do trecho: `dabd5d59642b9029c1945b27af874b438041f14a42899c496e4cd25aee4f595d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
