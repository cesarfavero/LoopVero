# `BrokeredGrants.add`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/onepassword-broker-service.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:550421-550441](../../../../../../../reference/runtime/host-main.cjs#L550421-L550441) | `method` | yes | `connectionId, candidates` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:550421-550441](../../../../../../../reference/runtime/host-main.cjs#L550421-L550441) | 3 | 2 | 1 | 1 | 0 | 0 |

### host:550421

Calls written directly in this body: `.sort`, `Math.max`, `candidates.filter`, `granted.map`, `new Map`, `oldestFirst.slice`, `this.held.delete`, `this.held.set`, `this.held.values`, `this.log`, `this.pending.clear`, `this.persist`.

Assignment or increment targets: `this.connectionId`, `this.held`.

SHA-256 of the source span: `7ee78c831fced5363f27ae3f1275e56b9f81da2ba4fa537ce0b6eeadcec9947e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
