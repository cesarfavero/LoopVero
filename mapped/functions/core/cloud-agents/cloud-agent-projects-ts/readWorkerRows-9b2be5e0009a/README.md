# `readWorkerRows`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agent-projects.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agent-projects-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:508971-508989](../../../../../../reference/runtime/host-main.cjs#L508971-L508989) | `FunctionDeclaration` | sim | `backend, workerBcIds` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:508971-508989](../../../../../../reference/runtime/host-main.cjs#L508971-L508989) | 1 | 2 | 1 | 1 | 0 | 0 |

### host:508971

Chamadas escritas diretamente neste corpo: `backend.listDetailedBackgroundComposers`, `new ListDetailedBackgroundComposersRequest`, `new Map`, `rows.set`, `workerBcIds.slice`.

Alvos de atribuição ou incremento: `offset2`.

SHA-256 do trecho: `c9f7fd6760a19dd539b29b557a6dfe1c41a5bd84ee87b4b7d4e7f84fd8557852`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
