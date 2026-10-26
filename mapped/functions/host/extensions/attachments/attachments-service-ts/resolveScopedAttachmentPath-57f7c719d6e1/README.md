# `resolveScopedAttachmentPath`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/attachments/attachments-service.ts` · [README do módulo](../../../../../../modules/host/extensions/attachments/attachments-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:499015-499020](../../../../../../../reference/runtime/host-main.cjs#L499015-L499020) | `FunctionDeclaration` | não | `agentDir, filePath` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:499015-499020](../../../../../../../reference/runtime/host-main.cjs#L499015-L499020) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:499015

Chamadas escritas diretamente neste corpo: `getAgentAssetsDir`, `getAgentAttachmentsDir`, `isPathWithin`, `reanchorHostPath`.

SHA-256 do trecho: `c5aa765d6a861b9d6c263878506af6ea7d93819b775c1537f28f46d64127f1f6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
