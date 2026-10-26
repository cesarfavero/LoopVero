# `../packages/context/dist/logger.js/log`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/logger.js` · [Module README](../../../../modules/context/logger-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225760-225760](../../../../../reference/runtime/host-main.cjs#L225760-L225760) | `ArrowFunctionExpression` | no | `ctx, entry` |
| [evaluation:2248-2248](../../../../../reference/runtime/sand-eval-runner.cjs#L2248-L2248) | `ArrowFunctionExpression` | no | `ctx, entry` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225760-225760](../../../../../reference/runtime/host-main.cjs#L225760-L225760) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:225760 uses an implicit arrow-function return.
| [evaluation:2248-2248](../../../../../reference/runtime/sand-eval-runner.cjs#L2248-L2248) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:2248 uses an implicit arrow-function return.

### host:225760

Calls written directly in this body: `defaultLoggerBackendImpl.log`.

SHA-256 of the source span: `fcff63c54f0ec8d6339096d0d6703804ec5e23f9d3e0f9a644d088a05fce8d14`.

### evaluation:2248

Calls written directly in this body: `defaultLoggerBackendImpl.log`.

SHA-256 of the source span: `fcff63c54f0ec8d6339096d0d6703804ec5e23f9d3e0f9a644d088a05fce8d14`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
