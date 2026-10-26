# `ingestAttachment`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/attachments/attachments-service.ts` · [README do módulo](../../../../../../modules/host/extensions/attachments/attachments-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:498586-498615](../../../../../../../reference/runtime/host-main.cjs#L498586-L498615) | `FunctionDeclaration` | sim | `agentDir, sourcePath2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:498586-498615](../../../../../../../reference/runtime/host-main.cjs#L498586-L498615) | 5 | 0 | 4 | 2 | 4 | 0 |

### host:498586

Chamadas escritas diretamente neste corpo: `attachmentByteLimitForName`, `contentAddressedPath`, `getAgentAttachmentsDir`, `import_node_fs43.promises.readFile`, `import_node_fs43.promises.stat`, `isPathWithin`, `new AttachmentTooLargeError`, `new SandAttachmentError`, `sha256Hex`, `sourcePath2.trim`, `stat26.isFile`, `writeContentAddressedFile`.

Alvos de lançamento explícito: `AttachmentTooLargeError`, `SandAttachmentError`.

SHA-256 do trecho: `c85cdd73060edbff129fcf9eca928e0f3d73ac2fc2e234ff082e0811a4c79cf0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
