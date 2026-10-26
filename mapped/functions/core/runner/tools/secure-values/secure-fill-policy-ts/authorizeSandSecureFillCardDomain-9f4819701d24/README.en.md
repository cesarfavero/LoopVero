# `authorizeSandSecureFillCardDomain`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/secure-values/secure-fill-policy.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/secure-fill-policy-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:766712-766724](../../../../../../../../reference/runtime/host-main.cjs#L766712-L766724) | `FunctionDeclaration` | no | `target` |
| [evaluation:562225-562237](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562225-L562237) | `FunctionDeclaration` | no | `target` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766712-766724](../../../../../../../../reference/runtime/host-main.cjs#L766712-L766724) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:562225-562237](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562225-L562237) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:766712

Calls written directly in this body: `authorizeSecureValueCardSites`, `frameClassification`, `parseFillSite`.

SHA-256 of the source span: `d050b287308e8030e1f7ab4bda7b47ab67313a89c7709328aad446bba59d4efb`.

### evaluation:562225

Calls written directly in this body: `authorizeSecureValueCardSites`, `frameClassification`, `parseFillSite`.

SHA-256 of the source span: `d050b287308e8030e1f7ab4bda7b47ab67313a89c7709328aad446bba59d4efb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
