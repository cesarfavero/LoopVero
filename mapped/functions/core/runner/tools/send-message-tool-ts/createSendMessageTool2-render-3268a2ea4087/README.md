# `createSendMessageTool2/render`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-message-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:761573-761597](../../../../../../../reference/runtime/host-main.cjs#L761573-L761597) | `ArrowFunctionExpression` | sim | `_ctx, output2` |
| [evaluation:552388-552412](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552388-L552412) | `ArrowFunctionExpression` | sim | `_ctx, output2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761573-761597](../../../../../../../reference/runtime/host-main.cjs#L761573-L761597) | 8 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:552388-552412](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552388-L552412) | 8 | 0 | 0 | 5 | 0 | 0 |

### host:761573

Chamadas escritas diretamente neste corpo: `String`, `createStringResult`, `detail.startsWith`, `meetingSendResults.delete`, `meetingSendResults.get`, `output2.result.value.error.trim`, `output2.result.value.messageId.trim`, `threadSendResults.delete`, `threadSendResults.get`.

SHA-256 do trecho: `31d87cbcc7e65a0aabcc2bc187c30551b3b4652dc0b9312b793aeafa5ebeea76`.

### evaluation:552388

Chamadas escritas diretamente neste corpo: `String`, `createStringResult`, `detail.startsWith`, `meetingSendResults.delete`, `meetingSendResults.get`, `output2.result.value.error.trim`, `output2.result.value.messageId.trim`, `threadSendResults.delete`, `threadSendResults.get`.

SHA-256 do trecho: `31d87cbcc7e65a0aabcc2bc187c30551b3b4652dc0b9312b793aeafa5ebeea76`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
