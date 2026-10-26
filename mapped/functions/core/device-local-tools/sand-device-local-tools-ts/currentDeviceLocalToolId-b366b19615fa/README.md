# `currentDeviceLocalToolId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/device-local-tools/sand-device-local-tools.ts` · [README do módulo](../../../../../modules/core/device-local-tools/sand-device-local-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:759517-759519](../../../../../../reference/runtime/host-main.cjs#L759517-L759519) | `FunctionDeclaration` | não | `toolId, tools = SAND_DEVICE_LOCAL_TOOLS` |
| [evaluation:549677-549679](../../../../../../reference/runtime/sand-eval-runner.cjs#L549677-L549679) | `FunctionDeclaration` | não | `toolId, tools = SAND_DEVICE_LOCAL_TOOLS` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:759517-759519](../../../../../../reference/runtime/host-main.cjs#L759517-L759519) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:549677-549679](../../../../../../reference/runtime/sand-eval-runner.cjs#L549677-L549679) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:759517

Chamadas escritas diretamente neste corpo: `tools.find`.

SHA-256 do trecho: `5b915ffae18781b38a549dc7543257106df59b8e50bee94a5cddf4abcf9f59e2`.

### evaluation:549677

Chamadas escritas diretamente neste corpo: `tools.find`.

SHA-256 do trecho: `5b915ffae18781b38a549dc7543257106df59b8e50bee94a5cddf4abcf9f59e2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
