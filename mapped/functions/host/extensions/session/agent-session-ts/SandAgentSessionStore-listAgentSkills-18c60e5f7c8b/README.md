# `SandAgentSessionStore.listAgentSkills`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-session.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-session-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:723601-723603](../../../../../../../reference/runtime/host-main.cjs#L723601-L723603) | `method` | sim | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723601-723603](../../../../../../../reference/runtime/host-main.cjs#L723601-L723603) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:723601

Chamadas escritas diretamente neste corpo: `.listAll`, `limitSurfacedSkills`, `this.skillStoreFor`.

SHA-256 do trecho: `cc06e53cea49aaafde14b48db83b05fc31002839e79ef3c3e64d5885325677cc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
