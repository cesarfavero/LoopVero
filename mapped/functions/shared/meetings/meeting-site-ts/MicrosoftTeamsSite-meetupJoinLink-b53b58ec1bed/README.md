# `_MicrosoftTeamsSite.meetupJoinLink`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/meetings/meeting-site.ts` · [README do módulo](../../../../../modules/shared/meetings/meeting-site-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:772408-772424](../../../../../../reference/runtime/host-main.cjs#L772408-L772424) | `method` | não | `{     host,     encodedThreadId,     messageId = "0",     context: context2   }` |
| [evaluation:571637-571653](../../../../../../reference/runtime/sand-eval-runner.cjs#L571637-L571653) | `method` | não | `{     host,     encodedThreadId,     messageId = "0",     context: context2   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772408-772424](../../../../../../reference/runtime/host-main.cjs#L772408-L772424) | 5 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:571637-571653](../../../../../../reference/runtime/sand-eval-runner.cjs#L571637-L571653) | 5 | 0 | 0 | 4 | 0 | 0 |

### host:772408

Chamadas escritas diretamente neste corpo: `_MicrosoftTeamsSite.decoded`, `_MicrosoftTeamsSite.isJSONObject`, `_MicrosoftTeamsSite.messageIdPattern.test`, `_MicrosoftTeamsSite.threadIdPattern.test`, `encodeURIComponent`.

SHA-256 do trecho: `24755e2e625b0211201ab09ae82b6997c5f262abbd2742d109c2aa63170f54ea`.

### evaluation:571637

Chamadas escritas diretamente neste corpo: `_MicrosoftTeamsSite.decoded`, `_MicrosoftTeamsSite.isJSONObject`, `_MicrosoftTeamsSite.messageIdPattern.test`, `_MicrosoftTeamsSite.threadIdPattern.test`, `encodeURIComponent`.

SHA-256 do trecho: `24755e2e625b0211201ab09ae82b6997c5f262abbd2742d109c2aa63170f54ea`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
