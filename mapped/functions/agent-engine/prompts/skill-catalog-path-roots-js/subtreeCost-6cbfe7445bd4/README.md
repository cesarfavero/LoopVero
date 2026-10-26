# `subtreeCost`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/skill-catalog-path-roots.js` · [README do módulo](../../../../../modules/agent-engine/prompts/skill-catalog-path-roots-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:639665-639672](../../../../../../reference/runtime/host-main.cjs#L639665-L639672) | `FunctionDeclaration` | não | `node2, root` |
| [evaluation:430279-430286](../../../../../../reference/runtime/sand-eval-runner.cjs#L430279-L430286) | `FunctionDeclaration` | não | `node2, root` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639665-639672](../../../../../../reference/runtime/host-main.cjs#L639665-L639672) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:430279-430286](../../../../../../reference/runtime/sand-eval-runner.cjs#L430279-L430286) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:639665

Chamadas escritas diretamente neste corpo: `Math.min`, `keepRootCost`, `node2.costByRoot.get`, `node2.costByRoot.set`, `openRootCost`.

Alvos de atribuição ou incremento: `cost`.

SHA-256 do trecho: `ca379ff6a5b318ba3eb4cf703e74a2454486b6f87c730032220c284df57416a0`.

### evaluation:430279

Chamadas escritas diretamente neste corpo: `Math.min`, `keepRootCost`, `node2.costByRoot.get`, `node2.costByRoot.set`, `openRootCost`.

Alvos de atribuição ou incremento: `cost`.

SHA-256 do trecho: `ca379ff6a5b318ba3eb4cf703e74a2454486b6f87c730032220c284df57416a0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
