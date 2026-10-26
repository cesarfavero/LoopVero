# `withDeviceToolPermissionCards/postCard`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/device-local-tools/device-tool-permission-cards.ts` · [README do módulo](../../../../../modules/core/device-local-tools/device-tool-permission-cards-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:769966-769984](../../../../../../reference/runtime/host-main.cjs#L769966-L769984) | `ArrowFunctionExpression` | não | `toolId, target` |
| [evaluation:566125-566143](../../../../../../reference/runtime/sand-eval-runner.cjs#L566125-L566143) | `ArrowFunctionExpression` | não | `toolId, target` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769966-769984](../../../../../../reference/runtime/host-main.cjs#L769966-L769984) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:566125-566143](../../../../../../reference/runtime/sand-eval-runner.cjs#L566125-L566143) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:769966

Chamadas escritas diretamente neste corpo: `Date.now`, `describeDeviceLocalToolPermission`, `host.transport.onUpdate`, `keyOf`, `posted.add`, `posted.has`.

SHA-256 do trecho: `6e11bca9b7017d840ddbdd241d70a484d234c693f9f44b93df4961495544c5cd`.

### evaluation:566125

Chamadas escritas diretamente neste corpo: `Date.now`, `describeDeviceLocalToolPermission`, `host.transport.onUpdate`, `keyOf`, `posted.add`, `posted.has`.

SHA-256 do trecho: `6e11bca9b7017d840ddbdd241d70a484d234c693f9f44b93df4961495544c5cd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
