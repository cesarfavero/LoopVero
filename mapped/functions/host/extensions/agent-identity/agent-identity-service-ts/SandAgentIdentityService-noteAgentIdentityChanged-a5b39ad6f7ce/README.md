# `SandAgentIdentityService.noteAgentIdentityChanged`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/agent-identity/agent-identity-service.ts` · [README do módulo](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:495610-495622](../../../../../../../reference/runtime/host-main.cjs#L495610-L495622) | `method` | não | `agentId, options2 = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495610-495622](../../../../../../../reference/runtime/host-main.cjs#L495610-L495622) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:495610

Chamadas escritas diretamente neste corpo: `this.enqueue`, `this.locallyChangedAvatarIds.add`, `this.pendingEditIds.add`, `this.pendingEditIds.has`, `this.unacknowledgedEditIds.add`.

SHA-256 do trecho: `7c4ca7dc99fc179b95bae7bd104dfea11121197d7c44faa7217a6e40213b864b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
