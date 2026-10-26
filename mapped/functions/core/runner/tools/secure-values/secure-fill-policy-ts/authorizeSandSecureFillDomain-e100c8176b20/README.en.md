# `authorizeSandSecureFillDomain`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/secure-values/secure-fill-policy.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/secure-fill-policy-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:766689-766704](../../../../../../../../reference/runtime/host-main.cjs#L766689-L766704) | `FunctionDeclaration` | no | `metadata2, target, options2 = {}` |
| [evaluation:562202-562217](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562202-L562217) | `FunctionDeclaration` | no | `metadata2, target, options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766689-766704](../../../../../../../../reference/runtime/host-main.cjs#L766689-L766704) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:562202-562217](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562202-L562217) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:766689

Calls written directly in this body: `frameClassification`, `metadata2.domains.some`, `parseFillSite`, `secureValueFillsAnySite`, `targetDomainOf`.

SHA-256 of the source span: `1d6294d4fe7ab3bcb2b9c3116ec6ea7708ad3833943ce96f5ef6c71c8a98404c`.

### evaluation:562202

Calls written directly in this body: `frameClassification`, `metadata2.domains.some`, `parseFillSite`, `secureValueFillsAnySite`, `targetDomainOf`.

SHA-256 of the source span: `1d6294d4fe7ab3bcb2b9c3116ec6ea7708ad3833943ce96f5ef6c71c8a98404c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
