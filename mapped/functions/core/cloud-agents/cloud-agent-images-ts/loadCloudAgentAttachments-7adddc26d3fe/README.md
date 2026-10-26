# `loadCloudAgentAttachments`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agent-images.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agent-images-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:567346-567426](../../../../../../reference/runtime/sand-eval-runner.cjs#L567346-L567426) | `FunctionDeclaration` | sim | `{   ctx,   imageUrls,   fileUrls,   agentDir,   readBoxFile }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:567346-567426](../../../../../../reference/runtime/sand-eval-runner.cjs#L567346-L567426) | 13 | 2 | 1 | 9 | 0 | 0 |

### evaluation:567346

Chamadas escritas diretamente neste corpo: `Math.min`, `byteLimitFor`, `classifyAttachment2`, `envFileRefusedMessage`, `filePathFromFileUrl`, `files.push`, `formatCloudAgentAttachmentTooLargeNotice`, `formatCloudAgentAttachmentsOverTotalNotice`, `getAgentMediaStoreRoots`, `images.push`, `import_node_path37.posix.basename`, `isEnvFileName`, `looksLikeBinary`, `normalizedBoxPathFromFileUrl`, `notFileUrlMessage`, `readCloudAgentAttachment`, `refusedMessage`, `unreadableMessage`, `unsupportedTypeMessage`.

Alvos de atribuição ou incremento: `totalBytes`.

SHA-256 do trecho: `31e8e35c22dea217c16597ea2c3fedb1cdef8a534375aee67e020746f320511f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
