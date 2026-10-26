# `listCloudAgentProjectThreads`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agent-projects.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agent-projects-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:508990-509012](../../../../../../reference/runtime/host-main.cjs#L508990-L509012) | `FunctionDeclaration` | sim | `backend, bcId, readPortalBaseUrl` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:508990-509012](../../../../../../reference/runtime/host-main.cjs#L508990-L509012) | 2 | 0 | 2 | 3 | 0 | 0 |

### host:508990

Chamadas escritas diretamente neste corpo: `.slice`, `.sort`, `backend.listWorkersForManager`, `bcId.trim`, `memberships.memberships.map`, `new ListWorkersForManagerRequest`, `readWorkerRows`.

SHA-256 do trecho: `1493195d166db2154b8be140fa361320726a9db4c645b51d3f50e71b3783b57b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
