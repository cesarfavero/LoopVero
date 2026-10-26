# `ProfileWatch.noteAgentIdentityRenamed`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/profile-watch.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/profile-watch-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:738784-738800](../../../../../../../reference/runtime/host-main.cjs#L738784-L738800) | `method` | não | `{     agentId,     previousName,     name: name18   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738784-738800](../../../../../../../reference/runtime/host-main.cjs#L738784-L738800) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:738784

Chamadas escritas diretamente neste corpo: `previousName.trim`, `this.lastKnownAgentNames.get`, `this.lastKnownAgentNames.set`, `this.tm.emitTimelineEvent`, `this.tm.sessions.isAgentGone`.

SHA-256 do trecho: `02e55dad30bf40f55214a091adeb8f32fa8cfff4c7ee3cc39d5685bba1b48853`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
