# `ProfileWatch.stopWatchingProfile`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/profile-watch.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/profile-watch-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:738870-738877](../../../../../../../reference/runtime/host-main.cjs#L738870-L738877) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738870-738877](../../../../../../../reference/runtime/host-main.cjs#L738870-L738877) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:738870

Chamadas escritas diretamente neste corpo: `this.profileWatchTimer.dispose`, `this.profileWatcher.close`.

Alvos de atribuição ou incremento: `this.pendingAvatarChange`, `this.profileWatchTimer`, `this.profileWatcher`, `this.watchedProfileAgentId`.

SHA-256 do trecho: `78fc955e127a11aef1e4d4bd3b71aa9d6a807b15291acc8ac1532e6e7c46922b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
