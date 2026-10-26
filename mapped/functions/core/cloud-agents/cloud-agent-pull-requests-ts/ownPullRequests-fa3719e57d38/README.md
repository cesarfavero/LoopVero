# `ownPullRequests`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agent-pull-requests.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agent-pull-requests-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:566571-566593](../../../../../../reference/runtime/sand-eval-runner.cjs#L566571-L566593) | `FunctionDeclaration` | não | `agent` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566571-566593](../../../../../../reference/runtime/sand-eval-runner.cjs#L566571-L566593) | 4 | 2 | 0 | 1 | 0 | 0 |

### evaluation:566571

Chamadas escritas diretamente neste corpo: `agent.storedPrs.flatMap`, `new Map`, `prs.push`, `prs.some`, `prs.unshift`, `unlinked.get`, `unlinked.set`, `unlinked.values`.

Alvos de atribuição ou incremento: `same.rows`.

SHA-256 do trecho: `06fda3b3798df8fc969832d2e1ea44ba115c1208d2ea0dad1fe15fad0ed09c6b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
