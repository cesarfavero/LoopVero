# `SandAgentSessionStore.setSessionVoice`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-session.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-session-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:723494-723500](../../../../../../../reference/runtime/host-main.cjs#L723494-L723500) | `method` | não | `{ agentId, voiceId, voiceSpeed, voiceLanguage }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723494-723500](../../../../../../../reference/runtime/host-main.cjs#L723494-L723500) | 3 | 0 | 0 | 0 | 0 | 0 |

### host:723494

Chamadas escritas diretamente neste corpo: `getSandSettingsPath`, `this.getAgentDir`, `writeSandSettingsFile`.

SHA-256 do trecho: `e0d5bd21b6c6eb88763f3f81579689fc8718cbe546640c3b56ecbc5759482d9d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
