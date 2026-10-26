# `createPrettyTerminalLoggerBackend/log`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `context/logger.js` · [README do módulo](../../../../modules/context/logger-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225647-225706](../../../../../reference/runtime/host-main.cjs#L225647-L225706) | `ArrowFunctionExpression` | não | `_ctx, entry` |
| [evaluation:2135-2194](../../../../../reference/runtime/sand-eval-runner.cjs#L2135-L2194) | `ArrowFunctionExpression` | não | `_ctx, entry` |
| [state-worker:21524-21583](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21524-L21583) | `ArrowFunctionExpression` | não | `_ctx, entry` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225647-225706](../../../../../reference/runtime/host-main.cjs#L225647-L225706) | 15 | 1 | 0 | 0 | 1 | 0 |
| [evaluation:2135-2194](../../../../../reference/runtime/sand-eval-runner.cjs#L2135-L2194) | 15 | 1 | 0 | 0 | 1 | 0 |
| [state-worker:21524-21583](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21524-L21583) | 15 | 1 | 0 | 0 | 1 | 0 |

### host:225647

Chamadas escritas diretamente neste corpo: `.padEnd`, `.slice`, `Object.keys`, `colors.bold`, `colors.dim`, `colors.level`, `entry.context.getPath`, `entry.error.stack.split`, `entry.level.toUpperCase`, `formatErrorSummary`, `formatInlineValue`, `formatTimestamp`, `isContext`, `isErrorLike`, `line.trim`, `new Error`, `new WeakSet`, `outputConsole.error`, `outputConsole.log`, `outputConsole.warn`, `outputLines.join`, `outputLines.push`, `parts.join`, `parts.push`, `path33.join`.

Alvos de atribuição ou incremento: `outputLines[computed]`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `cbe7208f4b10d5a8255b4a54c5f2e4f70b014b8ba644e3daf289289b37e80819`.

### evaluation:2135

Chamadas escritas diretamente neste corpo: `.padEnd`, `.slice`, `Object.keys`, `colors.bold`, `colors.dim`, `colors.level`, `entry.context.getPath`, `entry.error.stack.split`, `entry.level.toUpperCase`, `formatErrorSummary`, `formatInlineValue`, `formatTimestamp`, `isContext`, `isErrorLike`, `line.trim`, `new Error`, `new WeakSet`, `outputConsole.error`, `outputConsole.log`, `outputConsole.warn`, `outputLines.join`, `outputLines.push`, `parts.join`, `parts.push`, `path33.join`.

Alvos de atribuição ou incremento: `outputLines[computed]`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `cbe7208f4b10d5a8255b4a54c5f2e4f70b014b8ba644e3daf289289b37e80819`.

### state-worker:21524

Chamadas escritas diretamente neste corpo: `.padEnd`, `.slice`, `Object.keys`, `colors.bold`, `colors.dim`, `colors.level`, `entry.context.getPath`, `entry.error.stack.split`, `entry.level.toUpperCase`, `formatErrorSummary`, `formatInlineValue`, `formatTimestamp`, `isContext`, `isErrorLike`, `line.trim`, `new Error`, `new WeakSet`, `outputConsole.error`, `outputConsole.log`, `outputConsole.warn`, `outputLines.join`, `outputLines.push`, `parts.join`, `parts.push`, `path.join`.

Alvos de atribuição ou incremento: `outputLines[computed]`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `d46b7870adcaef36221ff1770c17df2cb1eaa78cc5aa8af1594306b61ec12650`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
