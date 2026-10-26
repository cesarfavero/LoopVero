# `SandAgentSessionStore.readWorkingStateExportSnapshot`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-session.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-session-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:723155-723188](../../../../../../../reference/runtime/host-main.cjs#L723155-L723188) | `method` | sim | `agentId, limits = {}, onProgress` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723155-723188](../../../../../../../reference/runtime/host-main.cjs#L723155-L723188) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:723155

Chamadas escritas diretamente neste corpo: `getAgentDbPath`, `this.agentExists`, `this.withAgentDb`.

SHA-256 do trecho: `a4bd8635431247e1782250987cb56f83a6c2d0b24e1cccfa37491169488f1713`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
