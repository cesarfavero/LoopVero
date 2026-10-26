# `prewarmPlaywrightServer/listServer`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/sand-browser-tool-sets.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/sand-browser-tool-sets-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:751543-751543](../../../../../../../../reference/runtime/host-main.cjs#L751543-L751543) | `ArrowFunctionExpression` | yes | `(none)` |
| [evaluation:524394-524394](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L524394-L524394) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751543-751543](../../../../../../../../reference/runtime/host-main.cjs#L751543-L751543) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at host:751543 uses an implicit arrow-function return.
| [evaluation:524394-524394](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L524394-L524394) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at evaluation:524394 uses an implicit arrow-function return.

### host:751543

Calls written directly in this body: `mcpExec.listTools`.

SHA-256 of the source span: `f2f46caf08e2a54cafa844b137462927aacfab5f784600085fbae5f019f4e344`.

### evaluation:524394

Calls written directly in this body: `mcpExec.listTools`.

SHA-256 of the source span: `f2f46caf08e2a54cafa844b137462927aacfab5f784600085fbae5f019f4e344`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
