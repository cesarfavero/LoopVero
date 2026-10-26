# `executeStateUpdate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/state-tools/split-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/state-tools/split-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:771686-771690](../../../../../../../../reference/runtime/host-main.cjs#L771686-L771690) | `FunctionDeclaration` | yes | `ctx, args, deps` |
| [evaluation:570919-570923](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570919-L570923) | `FunctionDeclaration` | yes | `ctx, args, deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771686-771690](../../../../../../../../reference/runtime/host-main.cjs#L771686-L771690) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:570919-570923](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570919-L570923) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:771686

Calls written directly in this body: `applySandStateUpdate`, `ctx.get`, `deps.assertNoPendingAutoReviewApproval`.

SHA-256 of the source span: `b386128ba643e49df947a7131b39c916a7e69ce1503da41abd6b7ffed8fe5877`.

### evaluation:570919

Calls written directly in this body: `applySandStateUpdate`, `ctx.get`, `deps.assertNoPendingAutoReviewApproval`.

SHA-256 of the source span: `b386128ba643e49df947a7131b39c916a7e69ce1503da41abd6b7ffed8fe5877`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
