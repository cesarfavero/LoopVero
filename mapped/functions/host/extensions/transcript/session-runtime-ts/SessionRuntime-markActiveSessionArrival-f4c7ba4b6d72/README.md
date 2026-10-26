# `SessionRuntime.markActiveSessionArrival`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/session-runtime.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/session-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:737928-737941](../../../../../../../reference/runtime/host-main.cjs#L737928-L737941) | `method` | não | `session, options2 = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737928-737941](../../../../../../../reference/runtime/host-main.cjs#L737928-L737941) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:737928

Chamadas escritas diretamente neste corpo: `Date.now`, `this.tm.roster.emitAgentUpdate`, `this.tm.sessionStore.markSessionActivity`, `this.tm.sessionStore.markSessionViewedNow`.

SHA-256 do trecho: `8a84d8b85b74368353c56a500fa3c95f9baee560cb318be6169fe3a8eac3796e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
