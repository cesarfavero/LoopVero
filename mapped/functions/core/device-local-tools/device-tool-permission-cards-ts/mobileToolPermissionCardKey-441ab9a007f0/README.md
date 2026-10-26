# `mobileToolPermissionCardKey`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/device-local-tools/device-tool-permission-cards.ts` · [README do módulo](../../../../../modules/core/device-local-tools/device-tool-permission-cards-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:769952-769959](../../../../../../reference/runtime/host-main.cjs#L769952-L769959) | `FunctionDeclaration` | não | `{   toolId,   machineId }, tools = SAND_DEVICE_LOCAL_TOOLS` |
| [evaluation:566111-566118](../../../../../../reference/runtime/sand-eval-runner.cjs#L566111-L566118) | `FunctionDeclaration` | não | `{   toolId,   machineId }, tools = SAND_DEVICE_LOCAL_TOOLS` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769952-769959](../../../../../../reference/runtime/host-main.cjs#L769952-L769959) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:566111-566118](../../../../../../reference/runtime/sand-eval-runner.cjs#L566111-L566118) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:769952

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `currentDeviceLocalToolId`, `isComputerUseToolId`.

SHA-256 do trecho: `df265321472e077b9c4e77d40f2bbe103d915af4646f9abb062fce95b454540e`.

### evaluation:566111

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `currentDeviceLocalToolId`, `isComputerUseToolId`.

SHA-256 do trecho: `df265321472e077b9c4e77d40f2bbe103d915af4646f9abb062fce95b454540e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
