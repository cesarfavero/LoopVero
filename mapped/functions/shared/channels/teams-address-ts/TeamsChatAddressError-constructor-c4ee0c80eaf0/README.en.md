# `TeamsChatAddressError.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/channels/teams-address.ts` · [Module README](../../../../../modules/shared/channels/teams-address-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:754775-754777](../../../../../../reference/runtime/host-main.cjs#L754775-L754777) | `method` | no | `message = TEAMS_ADDRESS_INVALID_ERROR` |
| [evaluation:538127-538129](../../../../../../reference/runtime/sand-eval-runner.cjs#L538127-L538129) | `method` | no | `message = TEAMS_ADDRESS_INVALID_ERROR` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754775-754777](../../../../../../reference/runtime/host-main.cjs#L754775-L754777) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:538127-538129](../../../../../../reference/runtime/sand-eval-runner.cjs#L538127-L538129) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:754775

Calls written directly in this body: `super`.

SHA-256 of the source span: `316768f615a5e155da7a3f27f4aa6db782ac768e02cd8ade1fceb844218ed949`.

### evaluation:538127

Calls written directly in this body: `super`.

SHA-256 of the source span: `316768f615a5e155da7a3f27f4aa6db782ac768e02cd8ade1fceb844218ed949`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
