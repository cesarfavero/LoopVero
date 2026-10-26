# `deliveredFirstPartyToolCalls`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/external-send/first-party-sends.ts` · [Module README](../../../../../../modules/core/runner/external-send/first-party-sends-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:538980-539021](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538980-L539021) | `FunctionDeclaration` | no | `messages, {   toolNames,   skipToolCallIds }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538980-539021](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538980-L539021) | 8 | 4 | 0 | 3 | 0 | 0 |

### evaluation:538980

Calls written directly in this body: `FIRST_PARTY_SEND_SPECS.get`, `candidates.filter`, `candidates.map`, `candidates.push`, `new Map`, `new Set`, `skipToolCallIds.has`, `spec.wentOut`, `toolMessageErrorSchema.safeParse`, `toolNameById.get`, `toolNames.has`, `toolResultPartSchema2.safeParse`, `toolResultText2`, `wentOut.add`.

SHA-256 of the source span: `7f1c94facb839df4ce8de4057f5feca55b380a0757491f5b97ae0b72865ae642`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
