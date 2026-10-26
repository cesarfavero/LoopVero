# `SessionRuntime.switchAgent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/session-runtime.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/session-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:738001-738014](../../../../../../../reference/runtime/host-main.cjs#L738001-L738014) | `method` | sim | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738001-738014](../../../../../../../reference/runtime/host-main.cjs#L738001-L738014) | 1 | 0 | 3 | 2 | 0 | 0 |

### host:738001

Chamadas escritas diretamente neste corpo: `Date.now`, `getTranscript`, `this.activateSession`, `this.announceActivation`, `this.announcedAgentId`, `this.invalidateDeferredActivation`, `this.reannounceAfterRedirect`, `this.tm.roster.emit`.

SHA-256 do trecho: `c902feee7750757dda1b36ee66e56f84f3618576e32e0ded2ee8a05b803054d1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
