# `describeWriteReminders`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/device-local-tools/ios-write-reminders.ts` · [Module README](../../../../../modules/core/device-local-tools/ios-write-reminders-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:758960-758989](../../../../../../reference/runtime/host-main.cjs#L758960-L758989) | `FunctionDeclaration` | no | `{   id,   title,   notes,   due,   completed,   list,   currentTitle,   delete: remove }` |
| [evaluation:549120-549149](../../../../../../reference/runtime/sand-eval-runner.cjs#L549120-L549149) | `FunctionDeclaration` | no | `{   id,   title,   notes,   due,   completed,   list,   currentTitle,   delete: remove }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:758960-758989](../../../../../../reference/runtime/host-main.cjs#L758960-L758989) | 11 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:549120-549149](../../../../../../reference/runtime/sand-eval-runner.cjs#L549120-L549149) | 11 | 0 | 0 | 3 | 0 | 0 |

### host:758960

Calls written directly in this body: `.join`, `changes.join`, `completedChange`, `dueChange`, `dueText`, `notesChange`.

SHA-256 of the source span: `5e55ef4c382198ac3f37da91959fe53f5322224a88be2dbf5f0c2e6c68fe6157`.

### evaluation:549120

Calls written directly in this body: `.join`, `changes.join`, `completedChange`, `dueChange`, `dueText`, `notesChange`.

SHA-256 of the source span: `5e55ef4c382198ac3f37da91959fe53f5322224a88be2dbf5f0c2e6c68fe6157`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
