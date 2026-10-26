# `SandAgentSessionStore.setAgentAvatarBytes`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-session.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-session-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:723262-723271](../../../../../../../reference/runtime/host-main.cjs#L723262-L723271) | `method` | sim | `db, dbPath, agentId, pngBytes, activeAgentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723262-723271](../../../../../../../reference/runtime/host-main.cjs#L723262-L723271) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:723262

Chamadas escritas diretamente neste corpo: `setAgentAvatarBytes`, `this.mutationsHost`.

SHA-256 do trecho: `4e3c3f3cd6514df374e893cfad0480f33da3425aa4b8f1a4b0803eebe17afdf5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
