# `readSandGroupConfig`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/group-messaging/README.en.md).

**Module:** `host/groups/group-store.ts` · [Module README](../../../../../modules/host/groups/group-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:491453-491474](../../../../../../reference/runtime/host-main.cjs#L491453-L491474) | `FunctionDeclaration` | no | `agentDir` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491453-491474](../../../../../../reference/runtime/host-main.cjs#L491453-L491474) | 3 | 0 | 0 | 5 | 0 | 2 |

### host:491453

Calls written directly in this body: `JSON.parse`, `getSandGroupPath`, `normalizeMemberIds`, `readSandDataFileSync`, `reportFallbackUnlessAbsent`.

Assignment or increment targets: `parsed2`, `raw`.

SHA-256 of the source span: `9f23967c4d9c33af95bd2cb97d76e61c55056955c30495449440bcaa16e39a13`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
