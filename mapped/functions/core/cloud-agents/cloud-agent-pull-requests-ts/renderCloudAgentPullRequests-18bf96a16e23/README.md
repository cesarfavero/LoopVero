# `renderCloudAgentPullRequests`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agent-pull-requests.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agent-pull-requests-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:566647-566688](../../../../../../reference/runtime/sand-eval-runner.cjs#L566647-L566688) | `FunctionDeclaration` | não | `scan2, limit3, hints` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566647-566688](../../../../../../reference/runtime/sand-eval-runner.cjs#L566647-L566688) | 10 | 1 | 0 | 2 | 0 | 0 |

### evaluation:566647

Chamadas escritas diretamente neste corpo: `Math.max`, `collectPullRequests`, `entries.filter`, `hints.scope`, `lines2.join`, `lines2.push`, `members2.slice`, `new Map`, `scan2.agents.map`, `shown.map`, `unlistedLine2`.

Alvos de atribuição ou incremento: `budget`, `pending`.

SHA-256 do trecho: `e3065d75dffe71e8f0a86198e1a2df1086e54726ae25d6d612e546a93621c0c5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
