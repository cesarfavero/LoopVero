# `ProfileWatch.recordNameChangeEvent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/profile-watch.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/profile-watch-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:738804-738816](../../../../../../../reference/runtime/host-main.cjs#L738804-L738816) | `method` | não | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738804-738816](../../../../../../../reference/runtime/host-main.cjs#L738804-L738816) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:738804

Chamadas escritas diretamente neste corpo: `profile.name.trim`, `this.lastKnownAgentNames.get`, `this.lastKnownAgentNames.set`, `this.tm.emitTimelineEvent`, `this.tm.sessionStore.getAgentProfileText`.

SHA-256 do trecho: `021997dcdc3ed095a513a0b7f62cdf4b64df13c6baa24e287d3b439ef501070d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
