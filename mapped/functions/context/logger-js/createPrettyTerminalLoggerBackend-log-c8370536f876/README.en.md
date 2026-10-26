# `createPrettyTerminalLoggerBackend/log`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/logger.js` · [Module README](../../../../modules/context/logger-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225647-225706](../../../../../reference/runtime/host-main.cjs#L225647-L225706) | `ArrowFunctionExpression` | no | `_ctx, entry` |
| [evaluation:2135-2194](../../../../../reference/runtime/sand-eval-runner.cjs#L2135-L2194) | `ArrowFunctionExpression` | no | `_ctx, entry` |
| [state-worker:21524-21583](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21524-L21583) | `ArrowFunctionExpression` | no | `_ctx, entry` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225647-225706](../../../../../reference/runtime/host-main.cjs#L225647-L225706) | 15 | 1 | 0 | 0 | 1 | 0 |
| [evaluation:2135-2194](../../../../../reference/runtime/sand-eval-runner.cjs#L2135-L2194) | 15 | 1 | 0 | 0 | 1 | 0 |
| [state-worker:21524-21583](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21524-L21583) | 15 | 1 | 0 | 0 | 1 | 0 |

### host:225647

Calls written directly in this body: `.padEnd`, `.slice`, `Object.keys`, `colors.bold`, `colors.dim`, `colors.level`, `entry.context.getPath`, `entry.error.stack.split`, `entry.level.toUpperCase`, `formatErrorSummary`, `formatInlineValue`, `formatTimestamp`, `isContext`, `isErrorLike`, `line.trim`, `new Error`, `new WeakSet`, `outputConsole.error`, `outputConsole.log`, `outputConsole.warn`, `outputLines.join`, `outputLines.push`, `parts.join`, `parts.push`, `path33.join`.

Assignment or increment targets: `outputLines[computed]`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `cbe7208f4b10d5a8255b4a54c5f2e4f70b014b8ba644e3daf289289b37e80819`.

### evaluation:2135

Calls written directly in this body: `.padEnd`, `.slice`, `Object.keys`, `colors.bold`, `colors.dim`, `colors.level`, `entry.context.getPath`, `entry.error.stack.split`, `entry.level.toUpperCase`, `formatErrorSummary`, `formatInlineValue`, `formatTimestamp`, `isContext`, `isErrorLike`, `line.trim`, `new Error`, `new WeakSet`, `outputConsole.error`, `outputConsole.log`, `outputConsole.warn`, `outputLines.join`, `outputLines.push`, `parts.join`, `parts.push`, `path33.join`.

Assignment or increment targets: `outputLines[computed]`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `cbe7208f4b10d5a8255b4a54c5f2e4f70b014b8ba644e3daf289289b37e80819`.

### state-worker:21524

Calls written directly in this body: `.padEnd`, `.slice`, `Object.keys`, `colors.bold`, `colors.dim`, `colors.level`, `entry.context.getPath`, `entry.error.stack.split`, `entry.level.toUpperCase`, `formatErrorSummary`, `formatInlineValue`, `formatTimestamp`, `isContext`, `isErrorLike`, `line.trim`, `new Error`, `new WeakSet`, `outputConsole.error`, `outputConsole.log`, `outputConsole.warn`, `outputLines.join`, `outputLines.push`, `parts.join`, `parts.push`, `path.join`.

Assignment or increment targets: `outputLines[computed]`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `d46b7870adcaef36221ff1770c17df2cb1eaa78cc5aa8af1594306b61ec12650`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
