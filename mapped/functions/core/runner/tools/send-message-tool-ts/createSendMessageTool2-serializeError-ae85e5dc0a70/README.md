# `createSendMessageTool2/serializeError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-message-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:761598-761611](../../../../../../../reference/runtime/host-main.cjs#L761598-L761611) | `ArrowFunctionExpression` | não | `error64` |
| [evaluation:552413-552426](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552413-L552426) | `ArrowFunctionExpression` | não | `error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761598-761611](../../../../../../../reference/runtime/host-main.cjs#L761598-L761611) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:552413-552426](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552413-L552426) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:761598

Chamadas escritas diretamente neste corpo: `createSendMessageToolCall`, `new SendMessageError`, `new SendMessageResult`, `new SendMessageToolCall`.

SHA-256 do trecho: `3dc0ed1d8c7d129284ab2412829185af3f035689971b795d9ca4fd860390c21a`.

### evaluation:552413

Chamadas escritas diretamente neste corpo: `createSendMessageToolCall`, `new SendMessageError`, `new SendMessageResult`, `new SendMessageToolCall`.

SHA-256 do trecho: `8f2513b643729c7e36c9d879da0d520e92ca8f714d2ae94697bbd6c26a021a32`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
