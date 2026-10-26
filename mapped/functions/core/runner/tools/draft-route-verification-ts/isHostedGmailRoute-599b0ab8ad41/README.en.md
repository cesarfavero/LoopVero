# `isHostedGmailRoute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-route-verification.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-route-verification-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:735275-735277](../../../../../../../reference/runtime/host-main.cjs#L735275-L735277) | `FunctionDeclaration` | no | `route` |
| [evaluation:540840-540842](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540840-L540842) | `FunctionDeclaration` | no | `route` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:735275-735277](../../../../../../../reference/runtime/host-main.cjs#L735275-L735277) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:540840-540842](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540840-L540842) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:735275

Calls written directly in this body: `isAgentInboxRoute`, `isGrokGmailRoute`.

SHA-256 of the source span: `4f692a9e0b31e836def4d2c4fb217939d8e9ca549e7a2787e17943f4b8e14709`.

### evaluation:540840

Calls written directly in this body: `isAgentInboxRoute`, `isGrokGmailRoute`.

SHA-256 of the source span: `4f692a9e0b31e836def4d2c4fb217939d8e9ca549e7a2787e17943f4b8e14709`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
