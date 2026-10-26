# `withDeviceToolPermissionCards/run/onPermissionGranted`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/device-local-tools/device-tool-permission-cards.ts` · [README do módulo](../../../../../modules/core/device-local-tools/device-tool-permission-cards-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:770004-770008](../../../../../../reference/runtime/host-main.cjs#L770004-L770008) | `ArrowFunctionExpression` | não | `target` |
| [evaluation:566163-566167](../../../../../../reference/runtime/sand-eval-runner.cjs#L566163-L566167) | `ArrowFunctionExpression` | não | `target` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770004-770008](../../../../../../reference/runtime/host-main.cjs#L770004-L770008) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:566163-566167](../../../../../../reference/runtime/sand-eval-runner.cjs#L566163-L566167) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:770004

Chamadas escritas diretamente neste corpo: `args.onPermissionGranted`, `grantCard`.

Alvos de atribuição ou incremento: `grantedNow`.

SHA-256 do trecho: `c2cbce119436324594516a4d695daf205571648cdecc199f6bbdf5fbe0b446f3`.

### evaluation:566163

Chamadas escritas diretamente neste corpo: `args.onPermissionGranted`, `grantCard`.

Alvos de atribuição ou incremento: `grantedNow`.

SHA-256 do trecho: `c2cbce119436324594516a4d695daf205571648cdecc199f6bbdf5fbe0b446f3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
