# `readHostAttachmentChunk`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/attachments/attachments-service.ts` · [README do módulo](../../../../../../modules/host/extensions/attachments/attachments-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:498817-498850](../../../../../../../reference/runtime/host-main.cjs#L498817-L498850) | `FunctionDeclaration` | sim | `agentDir, filePath, offset2, length, videoPlayback = false, reportRenditionFailure = () => { }, hold = holdAttachmentFile` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:498817-498850](../../../../../../../reference/runtime/host-main.cjs#L498817-L498850) | 6 | 0 | 4 | 5 | 1 | 1 |

### host:498817

Chamadas escritas diretamente neste corpo: `getAgentAssetsDir`, `getAgentAttachmentsDir`, `hold`, `isCloudAgentArtifactPath`, `isPathWithin`, `new AttachmentOutsideRootError`, `realHostAttachmentPath`, `reanchorHostPath`, `resolvePreviewBoxFile`, `rethrowRefusal`, `videoMimeFromPath`.

Alvos de lançamento explícito: `AttachmentOutsideRootError`.

SHA-256 do trecho: `a9aa53297fec55863813a8c97c2254a8c3494b40aedbf0703878c7248439097e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
