# `toolCallResultOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/playwright-browser-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:750808-750823](../../../../../../../reference/runtime/host-main.cjs#L750808-L750823) | `FunctionDeclaration` | não | `tool, result` |
| [evaluation:523659-523674](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523659-L523674) | `FunctionDeclaration` | não | `tool, result` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750808-750823](../../../../../../../reference/runtime/host-main.cjs#L750808-L750823) | 4 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:523659-523674](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523659-L523674) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:750808

Chamadas escritas diretamente neste corpo: `playwrightRunCodeToolError`, `playwrightSnapshotSkipped`, `playwrightToolErrorReason`, `runCodeErrorText`, `successOf`, `textOf`.

SHA-256 do trecho: `cd6e7004cd1e666a86d94a0118229c3e687709d8603d5d5a1ebea10005b69c3f`.

### evaluation:523659

Chamadas escritas diretamente neste corpo: `playwrightRunCodeToolError`, `playwrightSnapshotSkipped`, `playwrightToolErrorReason`, `runCodeErrorText`, `successOf`, `textOf2`.

SHA-256 do trecho: `cd6db56b77588b486e978f3a49495a378b5eb65c5aa6c108329265dafa3b337b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
