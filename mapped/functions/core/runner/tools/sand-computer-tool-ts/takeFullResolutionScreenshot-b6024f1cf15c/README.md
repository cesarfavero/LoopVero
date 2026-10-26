# `takeFullResolutionScreenshot`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-computer-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:777340-777345](../../../../../../../reference/runtime/host-main.cjs#L777340-L777345) | `FunctionDeclaration` | não | `result` |
| [evaluation:576985-576990](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576985-L576990) | `FunctionDeclaration` | não | `result` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777340-777345](../../../../../../../reference/runtime/host-main.cjs#L777340-L777345) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:576985-576990](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576985-L576990) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:777340

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

Alvos de atribuição ou incremento: `result.result.value.fullResolutionScreenshot`.

SHA-256 do trecho: `5014223e897d0e11dbc808b1df18385e49752de1c42f5f0ffb45ab4b6d263fb4`.

### evaluation:576985

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

Alvos de atribuição ou incremento: `result.result.value.fullResolutionScreenshot`.

SHA-256 do trecho: `5014223e897d0e11dbc808b1df18385e49752de1c42f5f0ffb45ab4b6d263fb4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
