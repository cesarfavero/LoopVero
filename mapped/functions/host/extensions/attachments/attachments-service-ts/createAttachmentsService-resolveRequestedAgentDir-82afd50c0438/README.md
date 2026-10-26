# `createAttachmentsService/resolveRequestedAgentDir`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/attachments/attachments-service.ts` · [README do módulo](../../../../../../modules/host/extensions/attachments/attachments-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:499087-499093](../../../../../../../reference/runtime/host-main.cjs#L499087-L499093) | `ArrowFunctionExpression` | não | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:499087-499093](../../../../../../../reference/runtime/host-main.cjs#L499087-L499093) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:499087

Chamadas escritas diretamente neste corpo: `new SandAttachmentError`, `resolveSandAgentDir`.

Alvos de lançamento explícito: `SandAttachmentError`.

SHA-256 do trecho: `4ce405ad2b951f0660deecccdc9a1b5fb6c51ade996a1ee38e166ba04064c400`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
