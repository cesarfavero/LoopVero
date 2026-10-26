# `claimEmailInbox`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/claim-email-inbox-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/claim-email-inbox-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764776-764793](../../../../../../../reference/runtime/host-main.cjs#L764776-L764793) | `FunctionDeclaration` | yes | `deps, args` |
| [evaluation:558144-558161](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558144-L558161) | `FunctionDeclaration` | yes | `deps, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764776-764793](../../../../../../../reference/runtime/host-main.cjs#L764776-L764793) | 4 | 0 | 2 | 2 | 0 | 0 |
| [evaluation:558144-558161](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558144-L558161) | 4 | 0 | 2 | 2 | 0 | 0 |

### host:764776

Calls written directly in this body: `deps.email.createInbox`, `deps.reviewClaim`, `describeClaimedInbox`, `normalizeClaimEmailInboxArgs`.

SHA-256 of the source span: `b5477073fd758309414ba7c0500a671568014447a1ef2d546b0518d9cf83b6c0`.

### evaluation:558144

Calls written directly in this body: `deps.email.createInbox`, `deps.reviewClaim`, `describeClaimedInbox`, `normalizeClaimEmailInboxArgs`.

SHA-256 of the source span: `b5477073fd758309414ba7c0500a671568014447a1ef2d546b0518d9cf83b6c0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
