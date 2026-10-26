# `../packages/context/dist/logger.js`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/logger.js` · [Module README](../../../../modules/context/logger-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225750-225763](../../../../../reference/runtime/host-main.cjs#L225750-L225763) | `FunctionExpression` | no | `(none)` |
| [evaluation:2238-2251](../../../../../reference/runtime/sand-eval-runner.cjs#L2238-L2251) | `FunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225750-225763](../../../../../reference/runtime/host-main.cjs#L225750-L225763) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:2238-2251](../../../../../reference/runtime/sand-eval-runner.cjs#L2238-L2251) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:225750

Calls written directly in this body: `Symbol`, `createKey`, `createPrettyTerminalLoggerBackend`, `init_dist5`.

Assignment or increment targets: `DEFAULT_INDENT`, `DEFAULT_MAX_ARRAY_LENGTH`, `DEFAULT_MAX_DEPTH`, `DEFAULT_MAX_ENTRIES`, `DEFAULT_MAX_STRING_LENGTH`, `defaultLoggerBackend`, `defaultLoggerBackendImpl`, `loggerKey`.

SHA-256 of the source span: `5573a74411b6ca4182da16de73a739e783bb068542328f36bfc820e01469e92a`.

### evaluation:2238

Calls written directly in this body: `Symbol`, `createKey`, `createPrettyTerminalLoggerBackend`, `init_dist`.

Assignment or increment targets: `DEFAULT_INDENT`, `DEFAULT_MAX_ARRAY_LENGTH`, `DEFAULT_MAX_DEPTH`, `DEFAULT_MAX_ENTRIES`, `DEFAULT_MAX_STRING_LENGTH`, `defaultLoggerBackend`, `defaultLoggerBackendImpl`, `loggerKey`.

SHA-256 of the source span: `cf927e6d777b99cc9abe696308d2404ef0fbc7a7f26c5c9924f6e67490ce7c34`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
