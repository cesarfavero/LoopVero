# `refineHoldClick`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-computer-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:776982-777006](../../../../../../../reference/runtime/host-main.cjs#L776982-L777006) | `FunctionDeclaration` | no | `args, ctx` |
| [evaluation:576627-576651](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576627-L576651) | `FunctionDeclaration` | no | `args, ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776982-777006](../../../../../../../reference/runtime/host-main.cjs#L776982-L777006) | 4 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:576627-576651](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576627-L576651) | 4 | 0 | 0 | 2 | 0 | 0 |

### host:776982

Calls written directly in this body: `ctx.addIssue`.

SHA-256 of the source span: `6432418166005ab2e041bc46511455d4a69b2b1db6faf6a563c7f12890c238a3`.

### evaluation:576627

Calls written directly in this body: `ctx.addIssue`.

SHA-256 of the source span: `f613d348b4b24a2631afbc63f829e515ec81a73984d87b55ddd9d31b69e80c98`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
