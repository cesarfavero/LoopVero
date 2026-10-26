# `refineDragCoordinates`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-computer-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777007-777016](../../../../../../../reference/runtime/host-main.cjs#L777007-L777016) | `FunctionDeclaration` | no | `args, ctx` |
| [evaluation:576652-576661](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576652-L576661) | `FunctionDeclaration` | no | `args, ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777007-777016](../../../../../../../reference/runtime/host-main.cjs#L777007-L777016) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:576652-576661](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576652-L576661) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:777007

Calls written directly in this body: `ctx.addIssue`.

SHA-256 of the source span: `7dba52d61a4a0174e1e5773b02f67315af154db59f3d888606b80c426d378c1b`.

### evaluation:576652

Calls written directly in this body: `ctx.addIssue`.

SHA-256 of the source span: `d85476b38de6cddb8a340d6019a0a9827be4cdb26b186017b7cc070466fa5447`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
