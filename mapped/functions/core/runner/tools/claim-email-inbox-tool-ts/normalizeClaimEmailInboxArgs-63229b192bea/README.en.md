# `normalizeClaimEmailInboxArgs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/claim-email-inbox-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/claim-email-inbox-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764764-764775](../../../../../../../reference/runtime/host-main.cjs#L764764-L764775) | `FunctionDeclaration` | no | `args` |
| [evaluation:558132-558143](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558132-L558143) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764764-764775](../../../../../../../reference/runtime/host-main.cjs#L764764-L764775) | 2 | 0 | 0 | 1 | 1 | 0 |
| [evaluation:558132-558143](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558132-L558143) | 2 | 0 | 0 | 1 | 1 | 0 |

### host:764764

Calls written directly in this body: `args.display_name.trim`, `new SandToolInputError`, `parseClaimEmailUsername`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `8c97bcd9a60881dc22e7ee5266f99280956dad2a09052eb23086d80e8a544ccb`.

### evaluation:558132

Calls written directly in this body: `args.display_name.trim`, `new SandToolInputError`, `parseClaimEmailUsername`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `8c97bcd9a60881dc22e7ee5266f99280956dad2a09052eb23086d80e8a544ccb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
