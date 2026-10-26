# `canSendAs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-route-verification.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-route-verification-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:735212-735218](../../../../../../../reference/runtime/host-main.cjs#L735212-L735218) | `FunctionDeclaration` | no | `verification, address` |
| [evaluation:540777-540783](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540777-L540783) | `FunctionDeclaration` | no | `verification, address` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:735212-735218](../../../../../../../reference/runtime/host-main.cjs#L735212-L735218) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:540777-540783](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540777-L540783) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:735212

Calls written directly in this body: `.some`, `address.toLowerCase`.

SHA-256 of the source span: `442fcd69773746c848b47ccbbd6ef37b204e3eeaab58820be48c4a0da7e2be55`.

### evaluation:540777

Calls written directly in this body: `.some`, `address.toLowerCase`.

SHA-256 of the source span: `442fcd69773746c848b47ccbbd6ef37b204e3eeaab58820be48c4a0da7e2be55`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
