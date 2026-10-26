# `refuseUnlessAgentOnHost`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/attachments/attachments-service.ts` · [README do módulo](../../../../../../modules/host/extensions/attachments/attachments-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:498561-498564](../../../../../../../reference/runtime/host-main.cjs#L498561-L498564) | `FunctionDeclaration` | sim | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:498561-498564](../../../../../../../reference/runtime/host-main.cjs#L498561-L498564) | 1 | 0 | 1 | 1 | 1 | 0 |

### host:498561

Chamadas escritas diretamente neste corpo: `isAgentOnHost`, `new SandAttachmentAgentNotOpenError`.

Alvos de lançamento explícito: `SandAttachmentAgentNotOpenError`.

SHA-256 do trecho: `4023e73569126e89b1aaec0bcfaf19ab257b6268570ddfe140376de3875be13b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
