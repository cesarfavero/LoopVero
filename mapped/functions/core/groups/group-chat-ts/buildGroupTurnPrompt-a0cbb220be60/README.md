# `buildGroupTurnPrompt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/group-messaging/README.md).

**Módulo:** `core/groups/group-chat.ts` · [README do módulo](../../../../../modules/core/groups/group-chat-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:491408-491434](../../../../../../reference/runtime/host-main.cjs#L491408-L491434) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491408-491434](../../../../../../reference/runtime/host-main.cjs#L491408-L491434) | 5 | 0 | 0 | 1 | 0 | 0 |

### host:491408

Chamadas escritas diretamente neste corpo: `.join`, `describedPeers.map`, `formatGroupChatTag`, `formatGroupHistory`, `group.description.trim`, `lines2.join`, `lines2.push`, `peers.filter`.

SHA-256 do trecho: `87dc1f63c83cbe20207ca9deb70255b3820887b26ae1354bff318d49e1a30135`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
