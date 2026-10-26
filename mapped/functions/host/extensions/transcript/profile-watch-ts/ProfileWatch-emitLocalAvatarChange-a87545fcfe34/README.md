# `ProfileWatch.emitLocalAvatarChange`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/profile-watch.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/profile-watch-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:738865-738869](../../../../../../../reference/runtime/host-main.cjs#L738865-L738869) | `method` | sim | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738865-738869](../../../../../../../reference/runtime/host-main.cjs#L738865-L738869) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:738865

Chamadas escritas diretamente neste corpo: `this.emitProfileChanged`, `this.hostWrittenAvatarVersions.get`, `this.tm.sessionStore.getAgentAvatar`.

SHA-256 do trecho: `bfa89a4b87716433ee90d644780fb8bdb69fb444bcd2e2f520e4313efc81570e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
