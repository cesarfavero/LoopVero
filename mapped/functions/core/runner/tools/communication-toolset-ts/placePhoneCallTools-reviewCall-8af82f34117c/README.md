# `placePhoneCallTools/reviewCall`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/communication-toolset.ts` · [README do módulo](../../../../../../modules/core/runner/tools/communication-toolset-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:763769-763784](../../../../../../../reference/runtime/host-main.cjs#L763769-L763784) | `ArrowFunctionExpression` | sim | `{ toolCallId, target, signal }` |
| [evaluation:556817-556832](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556817-L556832) | `ArrowFunctionExpression` | sim | `{ toolCallId, target, signal }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763769-763784](../../../../../../../reference/runtime/host-main.cjs#L763769-L763784) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:556817-556832](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556817-L556832) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:763769

Chamadas escritas diretamente neste corpo: `host.assertNoPendingAutoReviewApproval`, `host.getConversationId`, `reviewSandOutboundCall`.

SHA-256 do trecho: `0c0d79afb48c68b883ede689d7052ff2ef246fe7a59968f62266a8f4f6a1f498`.

### evaluation:556817

Chamadas escritas diretamente neste corpo: `host.assertNoPendingAutoReviewApproval`, `host.getConversationId`, `reviewSandOutboundCall`.

SHA-256 do trecho: `0c0d79afb48c68b883ede689d7052ff2ef246fe7a59968f62266a8f4f6a1f498`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
