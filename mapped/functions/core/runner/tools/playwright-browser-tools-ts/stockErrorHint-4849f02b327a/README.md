# `stockErrorHint`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/playwright-browser-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:750920-750947](../../../../../../../reference/runtime/host-main.cjs#L750920-L750947) | `FunctionDeclaration` | não | `tool, success2, runCodeOffered` |
| [evaluation:523771-523798](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523771-L523798) | `FunctionDeclaration` | não | `tool, success2, runCodeOffered` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750920-750947](../../../../../../../reference/runtime/host-main.cjs#L750920-L750947) | 15 | 0 | 0 | 8 | 0 | 0 |
| [evaluation:523771-523798](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523771-L523798) | 15 | 0 | 0 | 8 | 0 | 0 |

### host:750920

Chamadas escritas diretamente neste corpo: `NO_FILE_INPUT.test`, `playwrightRunCodeSuccessMeter`, `playwrightRunCodeToolError`, `playwrightToolErrorReason`, `runCodeErrorText`, `textOf`, `waitForTextHint`.

SHA-256 do trecho: `f5f8e50fbce3797d8eeeaef185e28a866cee238179a07ec5ed441d7c617816ce`.

### evaluation:523771

Chamadas escritas diretamente neste corpo: `NO_FILE_INPUT.test`, `playwrightRunCodeSuccessMeter`, `playwrightRunCodeToolError`, `playwrightToolErrorReason`, `runCodeErrorText`, `textOf2`, `waitForTextHint`.

SHA-256 do trecho: `d08a331ea8a07f6d0beac8a26d4033ef1f62e2a701127ee4a8e6a7ec36b5702b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
