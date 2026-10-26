# `createSendEmailTool/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-email-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-email-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:764493-764502](../../../../../../../reference/runtime/host-main.cjs#L764493-L764502) | `ArrowFunctionExpression` | sim | `ctx, args, { recordDelivery, ...d }` |
| [evaluation:557861-557870](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557861-L557870) | `ArrowFunctionExpression` | sim | `ctx, args, { recordDelivery, ...d }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764493-764502](../../../../../../../reference/runtime/host-main.cjs#L764493-L764502) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:764493 usa retorno implícito de arrow function.
| [evaluation:557861-557870](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557861-L557870) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:557861 usa retorno implícito de arrow function.

### host:764493

Chamadas escritas diretamente neste corpo: `bindMessageDeliveryReport`, `sendEmail`.

SHA-256 do trecho: `b20b51df5d04b0dd4f9e68ac1aac5a0cd4214320ea1e53f0672daaf8e4c392cb`.

### evaluation:557861

Chamadas escritas diretamente neste corpo: `bindMessageDeliveryReport`, `sendEmail`.

SHA-256 do trecho: `b20b51df5d04b0dd4f9e68ac1aac5a0cd4214320ea1e53f0672daaf8e4c392cb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
