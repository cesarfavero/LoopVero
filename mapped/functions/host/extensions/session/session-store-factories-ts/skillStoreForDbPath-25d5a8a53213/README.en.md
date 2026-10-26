# `skillStoreForDbPath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/session-store-factories.ts` · [Module README](../../../../../../modules/host/extensions/session/session-store-factories-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:721363-721367](../../../../../../../reference/runtime/host-main.cjs#L721363-L721367) | `FunctionDeclaration` | no | `dbPath, resolveUserTimeZone = () => void 0` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721363-721367](../../../../../../../reference/runtime/host-main.cjs#L721363-L721367) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:721363

Calls written directly in this body: `getGlobalSkillsDir`, `new FileSkillStore`.

SHA-256 of the source span: `03a3c085fa75305bb3b6203579c571091cad89d11feeb017464ed7bdbdf12730`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
