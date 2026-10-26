# `isTeamsMeetingConversationId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/channels/teams-address.ts` · [README do módulo](../../../../../modules/shared/channels/teams-address-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:754788-754790](../../../../../../reference/runtime/host-main.cjs#L754788-L754790) | `FunctionDeclaration` | não | `conversationId` |
| [evaluation:538140-538142](../../../../../../reference/runtime/sand-eval-runner.cjs#L538140-L538142) | `FunctionDeclaration` | não | `conversationId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754788-754790](../../../../../../reference/runtime/host-main.cjs#L754788-L754790) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:538140-538142](../../../../../../reference/runtime/sand-eval-runner.cjs#L538140-L538142) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:754788

Chamadas escritas diretamente neste corpo: `conversationId.startsWith`.

SHA-256 do trecho: `0d8144c6b730207a6fab6900230793cfef54b53b0014a2bf623f832a362c13ee`.

### evaluation:538140

Chamadas escritas diretamente neste corpo: `conversationId.startsWith`.

SHA-256 do trecho: `0d8144c6b730207a6fab6900230793cfef54b53b0014a2bf623f832a362c13ee`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
