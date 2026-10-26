# `withUsageLimitPrimaryAction`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/trays/error-details-tray.ts` · [Module README](../../../../../modules/shared/trays/error-details-tray-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:736510-736515](../../../../../../reference/runtime/host-main.cjs#L736510-L736515) | `FunctionDeclaration` | no | `actions2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736510-736515](../../../../../../reference/runtime/host-main.cjs#L736510-L736515) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:736510

Calls written directly in this body: `actions2.map`, `usageLimitPrimaryActionIndex`.

SHA-256 of the source span: `e4f080273ace145767f547e34eb8c5acb6463fb8109783299f4370444739fc3f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
