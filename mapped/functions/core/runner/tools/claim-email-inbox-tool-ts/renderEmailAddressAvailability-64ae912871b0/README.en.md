# `renderEmailAddressAvailability`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/claim-email-inbox-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/claim-email-inbox-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764847-764857](../../../../../../../reference/runtime/host-main.cjs#L764847-L764857) | `FunctionDeclaration` | no | `names3, results` |
| [evaluation:558215-558225](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558215-L558225) | `FunctionDeclaration` | no | `names3, results` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764847-764857](../../../../../../../reference/runtime/host-main.cjs#L764847-L764857) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:558215-558225](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558215-L558225) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:764847

Calls written directly in this body: `lines2.join`, `lines2.push`, `names3.map`.

SHA-256 of the source span: `66289fc01eeba9301edbdef159ca51a27b17dcdae325c51bb9e0d9622c3a5202`.

### evaluation:558215

Calls written directly in this body: `lines2.join`, `lines2.push`, `names3.map`.

SHA-256 of the source span: `66289fc01eeba9301edbdef159ca51a27b17dcdae325c51bb9e0d9622c3a5202`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
