# `ingestAttachmentChunk`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/attachments/attachments-service.ts` · [README do módulo](../../../../../../modules/host/extensions/attachments/attachments-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:498649-498690](../../../../../../../reference/runtime/host-main.cjs#L498649-L498690) | `FunctionDeclaration` | sim | `agentDir, chunk` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:498649-498690](../../../../../../../reference/runtime/host-main.cjs#L498649-L498690) | 9 | 0 | 3 | 2 | 5 | 0 |

### host:498649

Chamadas escritas diretamente neste corpo: `Number.isInteger`, `UPLOAD_ID.test`, `attachmentByteLimitForName`, `contentAddressedPath`, `ensureSandDataDirSync`, `filename.trim`, `getAgentAttachmentsDir`, `new AttachmentTooLargeError`, `new SandAttachmentError`, `openSandDataFileSync`, `renameSandDataFileSync`, `sha256OfFd`, `storeAttachmentByteLimitForName`, `sweepStaleUploadParts`, `writeAt`.

Alvos de atribuição ou incremento: `hash2`.

Alvos de lançamento explícito: `AttachmentTooLargeError`, `SandAttachmentError`.

SHA-256 do trecho: `4b9366dd1601d8351385a10c6fa7aefc3c6e079b0702c99bee23902f08c82151`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
