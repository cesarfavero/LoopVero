# `buildComputerActionCoreSchema`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-computer-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:776914-776981](../../../../../../../reference/runtime/host-main.cjs#L776914-L776981) | `FunctionDeclaration` | não | `actions2 = COMPUTER_ACTIONS, options2` |
| [evaluation:576559-576626](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576559-L576626) | `FunctionDeclaration` | não | `actions2 = COMPUTER_ACTIONS, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776914-776981](../../../../../../../reference/runtime/host-main.cjs#L776914-L776981) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:576559-576626](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576559-L576626) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:776914

Chamadas escritas diretamente neste corpo: `.int`, `.max`, `.min`, `.optional`, `boxPixelSchema`, `external_exports2.array`, `external_exports2.enum`, `external_exports2.number`, `external_exports2.object`, `external_exports2.string`, `heldModifiersSchema`, `scrollAmountSchema`, `withFieldDescription`.

SHA-256 do trecho: `9fc785b752c423f9657cccd9ae9f08201c8b4e9e8631d58a3ca16518da850cdf`.

### evaluation:576559

Chamadas escritas diretamente neste corpo: `.int`, `.max`, `.min`, `.optional`, `boxPixelSchema`, `external_exports3.array`, `external_exports3.enum`, `external_exports3.number`, `external_exports3.object`, `external_exports3.string`, `heldModifiersSchema`, `scrollAmountSchema`, `withFieldDescription`.

SHA-256 do trecho: `31aa12a6160fd24c3c284f0a61df56ede074be18742c1af3c3b1ed39de403bb4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
