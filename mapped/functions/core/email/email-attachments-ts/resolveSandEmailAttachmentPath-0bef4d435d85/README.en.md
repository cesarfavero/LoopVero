# `resolveSandEmailAttachmentPath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/email/email-attachments.ts` · [Module README](../../../../../modules/core/email/email-attachments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:734851-734879](../../../../../../reference/runtime/host-main.cjs#L734851-L734879) | `FunctionDeclaration` | no | `{   raw,   agentDir }` |
| [evaluation:539276-539304](../../../../../../reference/runtime/sand-eval-runner.cjs#L539276-L539304) | `FunctionDeclaration` | no | `{   raw,   agentDir }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734851-734879](../../../../../../reference/runtime/host-main.cjs#L734851-L734879) | 6 | 0 | 0 | 6 | 0 | 0 |
| [evaluation:539276-539304](../../../../../../reference/runtime/sand-eval-runner.cjs#L539276-L539304) | 6 | 0 | 0 | 6 | 0 | 0 |

### host:734851

Calls written directly in this body: `EMAIL_ATTACHMENT_BUCKETS.has`, `import_node_path161.posix.isAbsolute`, `import_node_path161.posix.join`, `import_node_path161.posix.normalize`, `import_node_path161.posix.relative`, `raw.endsWith`, `raw.includes`, `raw.trim`, `relative21.split`, `relative21.startsWith`, `toBoxDataRootPath`, `unsafeSegments`.

SHA-256 of the source span: `0d52c35c12d060eec8968e9803976472744db0a0ab01a11cfbf28f0fc87023b3`.

### evaluation:539276

Calls written directly in this body: `EMAIL_ATTACHMENT_BUCKETS.has`, `import_node_path31.posix.isAbsolute`, `import_node_path31.posix.join`, `import_node_path31.posix.normalize`, `import_node_path31.posix.relative`, `raw.endsWith`, `raw.includes`, `raw.trim`, `relative13.split`, `relative13.startsWith`, `toBoxDataRootPath`, `unsafeSegments`.

SHA-256 of the source span: `2240e6a7be3ff2052b94619aa6e87b6f0fc1d0939b85fea02fb2e97af5b90774`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
