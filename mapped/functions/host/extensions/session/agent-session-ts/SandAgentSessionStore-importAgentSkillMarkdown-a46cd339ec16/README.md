# `SandAgentSessionStore.importAgentSkillMarkdown`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-session.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-session-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:723622-723630](../../../../../../../reference/runtime/host-main.cjs#L723622-L723630) | `method` | sim | `agentId, markdown, fallbackName` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723622-723630](../../../../../../../reference/runtime/host-main.cjs#L723622-L723630) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:723622

Chamadas escritas diretamente neste corpo: `limitSurfacedSkills`, `store.importMarkdown`, `store.listAll`, `this.skillStoreFor`.

SHA-256 do trecho: `3183349129ab73a98c06025e5b01b6127838141ea485791bc2b3e3d073c55374`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
