# `currentTabUrlOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/playwright-browser-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:750793-750797](../../../../../../../reference/runtime/host-main.cjs#L750793-L750797) | `FunctionDeclaration` | não | `text3` |
| [evaluation:523644-523648](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523644-L523648) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750793-750797](../../../../../../../reference/runtime/host-main.cjs#L750793-L750797) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:523644-523648](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523644-L523648) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:750793

Chamadas escritas diretamente neste corpo: `CURRENT_TAB_ROW.exec`, `[computed].replace`, `row.endsWith`, `row.indexOf`, `row.lastIndexOf`, `row.slice`.

SHA-256 do trecho: `872d6f44d64cd45a56516ca91e20e7a9a1b6c56f21582fa3254083202a2a1d0a`.

### evaluation:523644

Chamadas escritas diretamente neste corpo: `CURRENT_TAB_ROW.exec`, `[computed].replace`, `row.endsWith`, `row.indexOf`, `row.lastIndexOf`, `row.slice`.

SHA-256 do trecho: `872d6f44d64cd45a56516ca91e20e7a9a1b6c56f21582fa3254083202a2a1d0a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
