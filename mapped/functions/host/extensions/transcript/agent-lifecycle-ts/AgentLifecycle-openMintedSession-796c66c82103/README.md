# `AgentLifecycle.openMintedSession`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/agent-lifecycle.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/agent-lifecycle-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:733586-733600](../../../../../../../reference/runtime/host-main.cjs#L733586-L733600) | `method` | sim | `newId2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733586-733600](../../../../../../../reference/runtime/host-main.cjs#L733586-L733600) | 1 | 0 | 4 | 1 | 2 | 1 |

### host:733586

Chamadas escritas diretamente neste corpo: `new SandAgentLifecycleError`, `this.discardMintedSession`, `this.tm.sessionStore.getTranscriptEntries`, `this.tm.sessionStore.openSession`, `this.tm.sessionStore.summarizeOpenSession`.

Alvos de atribuição ou incremento: `session`.

Alvos de lançamento explícito: `SandAgentLifecycleError`, `error64`.

SHA-256 do trecho: `949987972eacb3d0e481051ae1eaa337b41b746b78c99d9480ee7495fecfb69b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
