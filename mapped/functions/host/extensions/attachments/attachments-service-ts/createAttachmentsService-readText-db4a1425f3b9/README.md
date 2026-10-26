# `createAttachmentsService/readText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/attachments/attachments-service.ts` · [README do módulo](../../../../../../modules/host/extensions/attachments/attachments-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:499130-499142](../../../../../../../reference/runtime/host-main.cjs#L499130-L499142) | `FunctionExpression` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:499130-499142](../../../../../../../reference/runtime/host-main.cjs#L499130-L499142) | 1 | 0 | 2 | 2 | 0 | 0 |

### host:499130

Chamadas escritas diretamente neste corpo: `deps.report`, `readAttachmentText`, `refuseUnlessAgentOnHost`, `resolveReadAgentDir`.

SHA-256 do trecho: `b0aa560db270947b8cac865195257af4b7fcb68f20510c5d872d316a11a0827d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
