# `describeDeviceLocalToolPermission`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/device-local-tools/sand-device-local-tools.ts` · [README do módulo](../../../../../modules/core/device-local-tools/sand-device-local-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:759537-759557](../../../../../../reference/runtime/host-main.cjs#L759537-L759557) | `FunctionDeclaration` | não | `args` |
| [evaluation:549697-549717](../../../../../../reference/runtime/sand-eval-runner.cjs#L549697-L549717) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:759537-759557](../../../../../../reference/runtime/host-main.cjs#L759537-L759557) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:549697-549717](../../../../../../reference/runtime/sand-eval-runner.cjs#L549697-L549717) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:759537

Chamadas escritas diretamente neste corpo: `args.deviceName.trim`, `computerUsePermissionText`, `deviceLocalToolOf`, `isComputerUseToolId`, `tool.permissionCardBody`.

SHA-256 do trecho: `728cfedc8b07e8d6e27bd65aa0eb9558bd000eaf60fc37c78202e315304833ec`.

### evaluation:549697

Chamadas escritas diretamente neste corpo: `args.deviceName.trim`, `computerUsePermissionText`, `deviceLocalToolOf`, `isComputerUseToolId`, `tool.permissionCardBody`.

SHA-256 do trecho: `728cfedc8b07e8d6e27bd65aa0eb9558bd000eaf60fc37c78202e315304833ec`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
