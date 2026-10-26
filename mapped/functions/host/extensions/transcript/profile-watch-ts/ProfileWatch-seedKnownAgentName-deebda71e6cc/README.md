# `ProfileWatch.seedKnownAgentName`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/profile-watch.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/profile-watch-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:738817-738822](../../../../../../../reference/runtime/host-main.cjs#L738817-L738822) | `method` | não | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738817-738822](../../../../../../../reference/runtime/host-main.cjs#L738817-L738822) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:738817

Chamadas escritas diretamente neste corpo: `profile.name.trim`, `this.lastKnownAgentNames.has`, `this.lastKnownAgentNames.set`, `this.tm.sessionStore.getAgentProfileText`.

SHA-256 do trecho: `dd4e3ff0edacb2b03170a4ad7d006b86aedcb5454fe6b6386b475e210b0d0a70`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
