# `boundUrlOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/box-takeover.ts` · [Module README](../../../../../modules/core/box/box-takeover-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:775937-775947](../../../../../../reference/runtime/host-main.cjs#L775937-L775947) | `FunctionDeclaration` | no | `request5` |
| [evaluation:575594-575604](../../../../../../reference/runtime/sand-eval-runner.cjs#L575594-L575604) | `FunctionDeclaration` | no | `request3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775937-775947](../../../../../../reference/runtime/host-main.cjs#L775937-L775947) | 4 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:575594-575604](../../../../../../reference/runtime/sand-eval-runner.cjs#L575594-L575604) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:775937

Calls written directly in this body: `siteOf`, `webHostOf`.

SHA-256 of the source span: `bd5a0815ae7a23f930edc55501609f3fb2670716b736a97479effab0b19cfaad`.

### evaluation:575594

Calls written directly in this body: `siteOf`, `webHostOf`.

SHA-256 of the source span: `6022a638494eb4823d8db62488baf2eab0cfe04852a5821b17f419e6a49ec2af`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
