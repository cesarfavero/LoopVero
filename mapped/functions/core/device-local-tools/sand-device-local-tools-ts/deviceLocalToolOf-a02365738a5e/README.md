# `deviceLocalToolOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/device-local-tools/sand-device-local-tools.ts` · [README do módulo](../../../../../modules/core/device-local-tools/sand-device-local-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:759533-759536](../../../../../../reference/runtime/host-main.cjs#L759533-L759536) | `FunctionDeclaration` | não | `toolId` |
| [evaluation:549693-549696](../../../../../../reference/runtime/sand-eval-runner.cjs#L549693-L549696) | `FunctionDeclaration` | não | `toolId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:759533-759536](../../../../../../reference/runtime/host-main.cjs#L759533-L759536) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:549693-549696](../../../../../../reference/runtime/sand-eval-runner.cjs#L549693-L549696) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:759533

Chamadas escritas diretamente neste corpo: `SAND_DEVICE_LOCAL_TOOLS.find`, `currentDeviceLocalToolId`.

SHA-256 do trecho: `dce28e43bf696ce978dd258b5d3a49a8faa498af9dfc579bbc912f107ff42bae`.

### evaluation:549693

Chamadas escritas diretamente neste corpo: `SAND_DEVICE_LOCAL_TOOLS.find`, `currentDeviceLocalToolId`.

SHA-256 do trecho: `dce28e43bf696ce978dd258b5d3a49a8faa498af9dfc579bbc912f107ff42bae`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
