# `withDeviceToolPermissionCards/run`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/device-local-tools/device-tool-permission-cards.ts` · [README do módulo](../../../../../modules/core/device-local-tools/device-tool-permission-cards-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:769996-770018](../../../../../../reference/runtime/host-main.cjs#L769996-L770018) | `ArrowFunctionExpression` | sim | `ctx, args` |
| [evaluation:566155-566177](../../../../../../reference/runtime/sand-eval-runner.cjs#L566155-L566177) | `ArrowFunctionExpression` | sim | `ctx, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769996-770018](../../../../../../reference/runtime/host-main.cjs#L769996-L770018) | 3 | 0 | 1 | 2 | 0 | 0 |
| [evaluation:566155-566177](../../../../../../reference/runtime/sand-eval-runner.cjs#L566155-L566177) | 3 | 0 | 1 | 2 | 0 | 0 |

### host:769996

Chamadas escritas diretamente neste corpo: `grantCard`, `isErrorReply`, `port.run`, `postCard`, `provesOsPermissionGranted`.

SHA-256 do trecho: `e908daf3fbc0df95f46d2f29b43dfb241e7700b4a88e764876fbf74a8255f811`.

### evaluation:566155

Chamadas escritas diretamente neste corpo: `grantCard`, `isErrorReply`, `port.run`, `postCard`, `provesOsPermissionGranted`.

SHA-256 do trecho: `e908daf3fbc0df95f46d2f29b43dfb241e7700b4a88e764876fbf74a8255f811`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
