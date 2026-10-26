# `GroupChatGlue.resolveGroupMemberIds`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/group-chat-glue.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/group-chat-glue-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:738441-738454](../../../../../../../reference/runtime/host-main.cjs#L738441-L738454) | `method` | sim | `requestedMemberIds` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738441-738454](../../../../../../../reference/runtime/host-main.cjs#L738441-L738454) | 1 | 0 | 1 | 1 | 1 | 0 |

### host:738441

Chamadas escritas diretamente neste corpo: `.map`, `.slice`, `allAgents.filter`, `allAgents.map`, `assertMembersAreNotGroups`, `new SandGroupCreateError`, `new Set`, `requested.filter`, `this.tm.sessionStore.listAgents`.

Alvos de lançamento explícito: `SandGroupCreateError`.

SHA-256 do trecho: `8b94fe8ce95d8896ef18a70381ff66723072d6c9c4213300c55d4432c435b545`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
