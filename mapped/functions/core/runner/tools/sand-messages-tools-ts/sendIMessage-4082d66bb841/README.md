# `sendIMessage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-messages-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-messages-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:778141-778154](../../../../../../../reference/runtime/host-main.cjs#L778141-L778154) | `FunctionDeclaration` | sim | `ctx, args, tools` |
| [evaluation:577876-577889](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577876-L577889) | `FunctionDeclaration` | sim | `ctx, args, tools` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:778141-778154](../../../../../../../reference/runtime/host-main.cjs#L778141-L778154) | 0 | 0 | 1 | 1 | 1 | 1 |
| [evaluation:577876-577889](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577876-L577889) | 0 | 0 | 1 | 1 | 1 | 1 |

### host:778141

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `bindMessageDeliveryReport`, `displayOf`, `reportDelivery.failed`, `reportDelivery.settled`, `sendFailureCategory`, `sendOp`, `tools.messages.run`.

Alvos de atribuição ou incremento: `result`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `d4d89cb955bc04135acb692d81c7e870a62c1ab04664abb398b1fbf0060c723a`.

### evaluation:577876

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `bindMessageDeliveryReport`, `displayOf`, `reportDelivery.failed`, `reportDelivery.settled`, `sendFailureCategory`, `sendOp`, `tools.messages.run`.

Alvos de atribuição ou incremento: `result`.

Alvos de lançamento explícito: `error63`.

SHA-256 do trecho: `99f74fcf29e853006c55461a2f22146b18ab1363e39fe428dd1cc6226dfa24d6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
