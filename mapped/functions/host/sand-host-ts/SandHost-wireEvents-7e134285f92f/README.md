# `SandHost.wireEvents`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/sand-host.ts` · [README do módulo](../../../../modules/host/sand-host-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:786736-786787](../../../../../reference/runtime/host-main.cjs#L786736-L786787) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786736-786787](../../../../../reference/runtime/host-main.cjs#L786736-L786787) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:786736

Chamadas escritas diretamente neste corpo: `.api`, `.bindGatewayEvents`, `.subscribe`, `.subscribeTemporalMirrorsDropped`, `.updates.subscribe`, `this.hostEvents.emit`, `this.requireHostExtensions`, `this.transcript.listAgentsSync`, `this.transcript.subscribe`, `this.transcript.subscribeAgentUpserted`, `this.transcript.subscribeAgents`, `this.transcript.subscribeAutomations`, `this.transcript.subscribeOutline`, `this.transcript.subscribeSkills`, `this.transcript.subscribeTodos`, `this.transcript.subscribeVoiceCallNudges`.

SHA-256 do trecho: `9eba9c80f0d2682165355a578fdd251d1902f9a2e83afe2266ab275e79072b50`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
