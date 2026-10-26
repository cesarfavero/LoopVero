# `realAttachmentTextPath`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/attachments/attachments-service.ts` · [README do módulo](../../../../../../modules/host/extensions/attachments/attachments-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:499041-499056](../../../../../../../reference/runtime/host-main.cjs#L499041-L499056) | `FunctionDeclaration` | sim | `agentDir, filePath` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:499041-499056](../../../../../../../reference/runtime/host-main.cjs#L499041-L499056) | 5 | 0 | 3 | 3 | 1 | 0 |

### host:499041

Chamadas escritas diretamente neste corpo: `lexicalBoxFilePath`, `new AttachmentOutsideRootError`, `previewClaimsCloudAgentArtifact`, `realHostAttachmentPath`, `reanchorHostPath`, `resolvePreviewBoxFile`, `resolveScopedAttachmentPath`.

Alvos de lançamento explícito: `AttachmentOutsideRootError`.

SHA-256 do trecho: `7753b21e8376947aadd14162fcb1d92d7bc80e4833f3c2855f4c9955da681d46`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
