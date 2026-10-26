# `scmWriteBlock`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/scm-write-gate.ts` · [Module README](../../../../../../modules/core/runner/tools/scm-write-gate-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:585868-585877](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585868-L585877) | `FunctionDeclaration` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585868-585877](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585868-L585877) | 4 | 0 | 2 | 4 | 0 | 0 |

### evaluation:585868

Calls written directly in this body: `.find`, `args.blockedReason`, `args.tools`, `cursorScmProviderForMcpServerIdentifier`, `isDeclaredReadOnlyMcpTool`.

SHA-256 of the source span: `d2a73c7428dbb3605403448c64cbad6b8bd53abc7d50f844323e91b89143dfda`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
