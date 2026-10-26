# `pageUrlOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/playwright-browser-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:750798-750803](../../../../../../../reference/runtime/host-main.cjs#L750798-L750803) | `FunctionDeclaration` | não | `result, tabList` |
| [evaluation:523649-523654](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523649-L523654) | `FunctionDeclaration` | não | `result, tabList` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750798-750803](../../../../../../../reference/runtime/host-main.cjs#L750798-L750803) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:523649-523654](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523649-L523654) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:750798

Chamadas escritas diretamente neste corpo: `PAGE_URL_LINE3.exec`, `currentTabUrlOf`, `successOf`, `textOf`.

SHA-256 do trecho: `7a68d292c0e23508e2dd1eed319c2894a39dbce745a6cb4a0d61a202b6d25369`.

### evaluation:523649

Chamadas escritas diretamente neste corpo: `PAGE_URL_LINE3.exec`, `currentTabUrlOf`, `successOf`, `textOf2`.

SHA-256 do trecho: `691fce8d288cc2bf9e9c3d738ee766d46017ed01eade062dcf1c70ed0ffc5e81`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
