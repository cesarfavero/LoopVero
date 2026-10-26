# `ingestAttachmentBytes`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/attachments/attachments-service.ts` · [README do módulo](../../../../../../modules/host/extensions/attachments/attachments-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:498616-498633](../../../../../../../reference/runtime/host-main.cjs#L498616-L498633) | `FunctionDeclaration` | sim | `agentDir, filename, data2, storeSized = false` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:498616-498633](../../../../../../../reference/runtime/host-main.cjs#L498616-L498633) | 4 | 0 | 1 | 1 | 3 | 0 |

### host:498616

Chamadas escritas diretamente neste corpo: `Buffer.from`, `attachmentByteLimitForName`, `contentAddressedPath`, `filename.trim`, `getAgentAttachmentsDir`, `new AttachmentTooLargeError`, `new SandAttachmentError`, `sha256Hex`, `storeAttachmentByteLimitForName`, `writeContentAddressedFile`.

Alvos de lançamento explícito: `AttachmentTooLargeError`, `SandAttachmentError`.

SHA-256 do trecho: `60bf48e9a5cbeb2fe3bc7a5c0d08c424626c35e2c5cb21d3a489dfe42deeac44`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
