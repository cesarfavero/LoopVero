# `createSubagentTransport/sendMessageBlockReason`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/subagents/transport.ts` · [README do módulo](../../../../../../modules/core/runner/subagents/transport-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:536909-536918](../../../../../../../reference/runtime/sand-eval-runner.cjs#L536909-L536918) | `ArrowFunctionExpression` | não | `message, deliverTo` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:536909-536918](../../../../../../../reference/runtime/sand-eval-runner.cjs#L536909-L536918) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:536909

Chamadas escritas diretamente neste corpo: `VoiceCallChannel.callIdOf`, `VoiceCallChannelSends.reason`, `parentTransport.sendMessageBlockReason`.

SHA-256 do trecho: `95ce773ce16e8a0d28dbc1593ac3d9e5069a15a727f20653456b5174588a295c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
