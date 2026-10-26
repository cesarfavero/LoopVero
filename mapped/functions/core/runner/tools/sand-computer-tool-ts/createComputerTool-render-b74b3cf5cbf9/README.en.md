# `createComputerTool/render`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-computer-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777520-777524](../../../../../../../reference/runtime/host-main.cjs#L777520-L777524) | `ArrowFunctionExpression` | yes | `ctx, output2` |
| [evaluation:577165-577169](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577165-L577169) | `ArrowFunctionExpression` | yes | `ctx, output2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777520-777524](../../../../../../../reference/runtime/host-main.cjs#L777520-L777524) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at host:777520 uses an implicit arrow-function return.
| [evaluation:577165-577169](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577165-L577169) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at evaluation:577165 uses an implicit arrow-function return.

### host:777520

Calls written directly in this body: `deps.secureValueGuard.textRedactor`, `renderComputerResult`.

SHA-256 of the source span: `80cd9d45435711d73466c70335aa52d6bbf1df73873606a43a3e8e27861a0e30`.

### evaluation:577165

Calls written directly in this body: `deps.secureValueGuard.textRedactor`, `renderComputerResult`.

SHA-256 of the source span: `80cd9d45435711d73466c70335aa52d6bbf1df73873606a43a3e8e27861a0e30`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
