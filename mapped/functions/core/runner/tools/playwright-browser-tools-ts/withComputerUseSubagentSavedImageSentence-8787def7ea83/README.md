# `withComputerUseSubagentSavedImageSentence`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/playwright-browser-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:750968-750971](../../../../../../../reference/runtime/host-main.cjs#L750968-L750971) | `FunctionDeclaration` | não | `text3` |
| [evaluation:523819-523822](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523819-L523822) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750968-750971](../../../../../../../reference/runtime/host-main.cjs#L750968-L750971) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:523819-523822](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523819-L523822) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:750968

Chamadas escritas diretamente neste corpo: `text3.indexOf`, `text3.slice`.

SHA-256 do trecho: `c0789f90e8a21dc4dc990aa098bc7722b5e23f2b64c2eeb1d7fd11a6bd6c0ac0`.

### evaluation:523819

Chamadas escritas diretamente neste corpo: `text3.indexOf`, `text3.slice`.

SHA-256 do trecho: `c0789f90e8a21dc4dc990aa098bc7722b5e23f2b64c2eeb1d7fd11a6bd6c0ac0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
