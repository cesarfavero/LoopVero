# `jsonSchema`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/inference/README.en.md).

**Module:** `chat-inference/json-schema.js` · [Module README](../../../../modules/chat-inference/json-schema-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:617973-617981](../../../../../reference/runtime/host-main.cjs#L617973-L617981) | `FunctionDeclaration` | no | `schema3, { validate: validate2 } = {}` |
| [evaluation:287344-287352](../../../../../reference/runtime/sand-eval-runner.cjs#L287344-L287352) | `FunctionDeclaration` | no | `schema3, { validate: validate2 } = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617973-617981](../../../../../reference/runtime/host-main.cjs#L617973-L617981) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:287344-287352](../../../../../reference/runtime/sand-eval-runner.cjs#L287344-L287352) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:617973

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `31b56601f7ebd39c04160b8d5a79f8f9aab299cae2b7568b4d87f6e786718bd7`.

### evaluation:287344

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `31b56601f7ebd39c04160b8d5a79f8f9aab299cae2b7568b4d87f6e786718bd7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
