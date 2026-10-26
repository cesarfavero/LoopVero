# `nodeLine`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agent-project-view.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agent-project-view-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:566365-566373](../../../../../../reference/runtime/sand-eval-runner.cjs#L566365-L566373) | `FunctionDeclaration` | não | `node2, nowMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566365-566373](../../../../../../reference/runtime/sand-eval-runner.cjs#L566365-L566373) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:566365

Chamadas escritas diretamente neste corpo: `  .repeat`, `Math.max`, `activityWords`, `bits.join`, `bits.push`, `statusWord`, `threadName`, `withSubagentsStatus`.

SHA-256 do trecho: `7aed18501e68914e58bdbdb10ac12607fa65ef2ed528ca9f4fa52bc32cf6ed25`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
