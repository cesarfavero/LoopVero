# `unreachableDeviceToolError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/device-local-tools/turn-device-tools.ts` · [README do módulo](../../../../../modules/core/device-local-tools/turn-device-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:566290-566301](../../../../../../reference/runtime/sand-eval-runner.cjs#L566290-L566301) | `FunctionDeclaration` | não | `host, stepDeviceTools, toolName` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566290-566301](../../../../../../reference/runtime/sand-eval-runner.cjs#L566290-L566301) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:566290

Chamadas escritas diretamente neste corpo: `SAND_DEVICE_LOCAL_TOOLS.find`, `new CustomToolCallError`, `phonePortForTurn`, `sandNoPhoneForLocalToolMessage`, `stepDeviceTools.some`.

SHA-256 do trecho: `1b2a22f1a1dc36dc44a8f7a855e6dcdb2860db9e66d54a24f21db17bd730f9ed`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
