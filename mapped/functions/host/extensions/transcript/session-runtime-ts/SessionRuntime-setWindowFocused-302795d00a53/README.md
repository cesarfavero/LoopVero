# `SessionRuntime.setWindowFocused`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/session-runtime.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/session-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:737945-737960](../../../../../../../reference/runtime/host-main.cjs#L737945-L737960) | `method` | sim | `isFocused, surface = SAND_CLIENT_SURFACE_DESKTOP` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737945-737960](../../../../../../../reference/runtime/host-main.cjs#L737945-L737960) | 4 | 0 | 1 | 3 | 0 | 0 |

### host:737945

Chamadas escritas diretamente neste corpo: `Date.now`, `active.db.getUnreadState`, `this.tm.roster.emitAgentUpdate`, `this.tm.sessionStore.markSessionViewed`, `this.windowFocusedAtMsBySurface.delete`, `this.windowFocusedAtMsBySurface.set`.

SHA-256 do trecho: `1658da1b30a9d5d8537764c967607f150381aed2924fe8cda9a39e988bd54e75`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
