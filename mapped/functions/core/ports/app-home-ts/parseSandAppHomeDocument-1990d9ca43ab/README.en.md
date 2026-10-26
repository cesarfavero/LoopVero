# `parseSandAppHomeDocument`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/ports/app-home.ts` · [Module README](../../../../../modules/core/ports/app-home-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:770998-771013](../../../../../../reference/runtime/host-main.cjs#L770998-L771013) | `FunctionDeclaration` | no | `value` |
| [evaluation:570104-570119](../../../../../../reference/runtime/sand-eval-runner.cjs#L570104-L570119) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770998-771013](../../../../../../reference/runtime/host-main.cjs#L770998-L771013) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:570104-570119](../../../../../../reference/runtime/sand-eval-runner.cjs#L570104-L570119) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:770998

Calls written directly in this body: `issue2.path.join`, `sandAppHomeDocumentByteLength`, `sandAppHomeDocumentSchema.safeParse`.

SHA-256 of the source span: `72243ebc630d14ee8dee6d231f2ad8762c23f71a6bf21b3dd9f6b2ade99f13a6`.

### evaluation:570104

Calls written directly in this body: `issue2.path.join`, `sandAppHomeDocumentByteLength`, `sandAppHomeDocumentSchema.safeParse`.

SHA-256 of the source span: `65d4fbdb3a7ae540757fe8c8e9366d39d64da5bb7fd7065eeb55ae5cf9c4bb08`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
