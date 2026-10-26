# `memoryTypeFilePath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/memory-types/memory-jsonl.ts` · [Module README](../../../../../../modules/core/runner/memory-types/memory-jsonl-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:754634-754671](../../../../../../../reference/runtime/host-main.cjs#L754634-L754671) | `FunctionDeclaration` | no | `memoryType, meta3` |
| [evaluation:537601-537638](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537601-L537638) | `FunctionDeclaration` | no | `memoryType, meta3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754634-754671](../../../../../../../reference/runtime/host-main.cjs#L754634-L754671) | 5 | 1 | 0 | 4 | 0 | 0 |
| [evaluation:537601-537638](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537601-L537638) | 5 | 1 | 0 | 4 | 0 | 0 |

### host:754634

Calls written directly in this body: `.join`, `Object.keys`, `PATH_FIELD_SEGMENT2.exec`, `String`, `isJsonValue`, `isUnknownRecord2`, `memoryType.meta.safeParse`, `memoryType.path.split`, `parsed2.error.issues.map`, `segments.join`, `segments.push`, `slugifyMemoryPathField`.

SHA-256 of the source span: `017918fdc8f485c48ef5bb1aa69ed2f120619be1cc14f212cc70a9725b094999`.

### evaluation:537601

Calls written directly in this body: `.join`, `Object.keys`, `PATH_FIELD_SEGMENT2.exec`, `String`, `isJsonValue`, `isUnknownRecord2`, `memoryType.meta.safeParse`, `memoryType.path.split`, `parsed.error.issues.map`, `segments.join`, `segments.push`, `slugifyMemoryPathField`.

SHA-256 of the source span: `a9be79da53178734d18c889c869b7276dffbbb0c9d5afe4710111d34e68a9d35`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
