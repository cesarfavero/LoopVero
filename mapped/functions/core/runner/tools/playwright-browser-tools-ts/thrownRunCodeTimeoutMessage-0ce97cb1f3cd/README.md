# `thrownRunCodeTimeoutMessage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/playwright-browser-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:750856-750865](../../../../../../../reference/runtime/host-main.cjs#L750856-L750865) | `FunctionDeclaration` | não | `error64` |
| [evaluation:523707-523716](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523707-L523716) | `FunctionDeclaration` | não | `error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750856-750865](../../../../../../../reference/runtime/host-main.cjs#L750856-L750865) | 4 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:523707-523716](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523707-L523716) | 4 | 0 | 0 | 5 | 0 | 0 |

### host:750856

Chamadas escritas diretamente neste corpo: `THROWN_RUN_CODE_DEADLINE.test`, `message.includes`, `playwrightToolCallErrorClass`, `playwrightToolErrorReason`, `visibleTimeoutMessage`.

SHA-256 do trecho: `26b9190aacbb105b5acdff5ff3f3f4f502eaa8528aa0ef073cac9c8262953e2d`.

### evaluation:523707

Chamadas escritas diretamente neste corpo: `THROWN_RUN_CODE_DEADLINE.test`, `message.includes`, `playwrightToolCallErrorClass`, `playwrightToolErrorReason`, `visibleTimeoutMessage`.

SHA-256 do trecho: `27d2f60a286674799b698142f452ce699b31eca2a4d90b2e841d113c4ced2ba2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
