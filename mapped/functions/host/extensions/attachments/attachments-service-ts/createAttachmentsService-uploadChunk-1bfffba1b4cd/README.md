# `createAttachmentsService/uploadChunk`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/attachments/attachments-service.ts` · [README do módulo](../../../../../../modules/host/extensions/attachments/attachments-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:499118-499128](../../../../../../../reference/runtime/host-main.cjs#L499118-L499128) | `FunctionExpression` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:499118-499128](../../../../../../../reference/runtime/host-main.cjs#L499118-L499128) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:499118

Chamadas escritas diretamente neste corpo: `Buffer.from`, `ingestAttachmentChunk`, `resolveRequestedAgentDir`.

SHA-256 do trecho: `2d30d36ecd91908c3cf3601b215be35d85e1287ceb87a78146b741b16c19d007`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
