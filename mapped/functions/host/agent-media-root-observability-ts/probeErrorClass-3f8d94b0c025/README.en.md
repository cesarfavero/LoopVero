# `probeErrorClass`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/agent-media-root-observability.ts` · [Module README](../../../../modules/host/agent-media-root-observability-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:723782-723784](../../../../../reference/runtime/host-main.cjs#L723782-L723784) | `FunctionDeclaration` | no | `error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723782-723784](../../../../../reference/runtime/host-main.cjs#L723782-L723784) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:723782

Calls written directly in this body: `brandedErrorClass`, `connectErrorClassOf`.

SHA-256 of the source span: `5518686c9147c9227bfca780fd800c7078a79c89239dbe4dfa76102cf32b2c65`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
