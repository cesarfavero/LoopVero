# `heldCallOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/external-send/forwarded-attachment-hold.ts` · [Module README](../../../../../../modules/core/runner/external-send/forwarded-attachment-hold-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:583658-583669](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583658-L583669) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583658-583669](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583658-L583669) | 4 | 0 | 0 | 1 | 0 | 0 |

### evaluation:583658

Calls written directly in this body: `args.args.arguments.toJson`, `args.args.attachments.toJson`, `args.name.lastIndexOf`, `args.name.slice`.

SHA-256 of the source span: `894c2ebce9635d274b6f57d9d7d82da2a4647b8dc810289c9524eb96064df23a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
