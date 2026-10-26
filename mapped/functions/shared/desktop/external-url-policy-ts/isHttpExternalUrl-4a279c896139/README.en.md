# `isHttpExternalUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/desktop/external-url-policy.ts` · [Module README](../../../../../modules/shared/desktop/external-url-policy-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:486752-486755](../../../../../../reference/runtime/host-main.cjs#L486752-L486755) | `FunctionDeclaration` | no | `value` |
| [evaluation:495063-495066](../../../../../../reference/runtime/sand-eval-runner.cjs#L495063-L495066) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:486752-486755](../../../../../../reference/runtime/host-main.cjs#L486752-L486755) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:495063-495066](../../../../../../reference/runtime/sand-eval-runner.cjs#L495063-L495066) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:486752

Calls written directly in this body: `externalUrl`.

SHA-256 of the source span: `3aca290c6612716adec25572738900164ed433ac5d01facbd6101935b86354cb`.

### evaluation:495063

Calls written directly in this body: `externalUrl`.

SHA-256 of the source span: `3aca290c6612716adec25572738900164ed433ac5d01facbd6101935b86354cb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
