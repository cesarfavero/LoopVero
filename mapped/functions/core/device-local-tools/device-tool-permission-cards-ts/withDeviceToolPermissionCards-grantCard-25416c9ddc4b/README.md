# `withDeviceToolPermissionCards/grantCard`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/device-local-tools/device-tool-permission-cards.ts` · [README do módulo](../../../../../modules/core/device-local-tools/device-tool-permission-cards-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:769985-769993](../../../../../../reference/runtime/host-main.cjs#L769985-L769993) | `ArrowFunctionExpression` | não | `toolId, target` |
| [evaluation:566144-566152](../../../../../../reference/runtime/sand-eval-runner.cjs#L566144-L566152) | `ArrowFunctionExpression` | não | `toolId, target` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769985-769993](../../../../../../reference/runtime/host-main.cjs#L769985-L769993) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:566144-566152](../../../../../../reference/runtime/sand-eval-runner.cjs#L566144-L566152) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:769985

Chamadas escritas diretamente neste corpo: `host.transport.onUpdate`, `keyOf`, `posted.delete`.

SHA-256 do trecho: `f5a25604976f5efce7dc121c03f65f71d157af56dac9bef0b23c15599ac2e1ea`.

### evaluation:566144

Chamadas escritas diretamente neste corpo: `host.transport.onUpdate`, `keyOf`, `posted.delete`.

SHA-256 do trecho: `f5a25604976f5efce7dc121c03f65f71d157af56dac9bef0b23c15599ac2e1ea`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
