# `armScmConnectWaits`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/scm-connect-cards.ts` · [Module README](../../../../../../modules/core/runner/tools/scm-connect-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:509254-509276](../../../../../../../reference/runtime/host-main.cjs#L509254-L509276) | `FunctionDeclaration` | yes | `card, registerScmConnectWait` |
| [evaluation:556979-557001](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556979-L557001) | `FunctionDeclaration` | yes | `card, registerScmConnectWait` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509254-509276](../../../../../../../reference/runtime/host-main.cjs#L509254-L509276) | 3 | 1 | 1 | 2 | 0 | 1 |
| [evaluation:556979-557001](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556979-L557001) | 3 | 1 | 1 | 2 | 0 | 1 |

### host:509254

Calls written directly in this body: `DASHBOARD_CONNECTABLE_PROVIDERS.find`, `errorClassOf`, `registerScmConnectWait`, `reportHostDiagnostic`.

SHA-256 of the source span: `b5b58d9acf5441891b6861e375eb0a4d781d7913acca39a4e7970d12bd847ef5`.

### evaluation:556979

Calls written directly in this body: `DASHBOARD_CONNECTABLE_PROVIDERS.find`, `errorClassOf`, `registerScmConnectWait`, `reportHostDiagnostic`.

SHA-256 of the source span: `0ffa1069d5ff491523721b3990f99dd9b99c33157fcc5e32b7553d9111acfc4b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
