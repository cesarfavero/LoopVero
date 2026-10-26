# `channel.disconnect`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-state-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-state-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:763040-763042](../../../../../../../reference/runtime/host-main.cjs#L763040-L763042) | `ArrowFunctionExpression` | yes | `args, deps, need` |
| [evaluation:555650-555652](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555650-L555652) | `ArrowFunctionExpression` | yes | `args, deps, need` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763040-763042](../../../../../../../reference/runtime/host-main.cjs#L763040-L763042) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at host:763040 uses an implicit arrow-function return.
| [evaluation:555650-555652](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555650-L555652) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at evaluation:555650 uses an implicit arrow-function return.

### host:763040

Calls written directly in this body: `deps.state.disconnectChannel`, `need`.

SHA-256 of the source span: `0fbf8d83911490e9ec5f189b69d362e3859b620145f9e75204197e59bf212e23`.

### evaluation:555650

Calls written directly in this body: `deps.state.disconnectChannel`, `need`.

SHA-256 of the source span: `0fbf8d83911490e9ec5f189b69d362e3859b620145f9e75204197e59bf212e23`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
