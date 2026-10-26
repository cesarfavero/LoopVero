# `keepRootCost`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/skill-catalog-path-roots.js` · [README do módulo](../../../../../modules/agent-engine/prompts/skill-catalog-path-roots-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:639679-639686](../../../../../../reference/runtime/host-main.cjs#L639679-L639686) | `FunctionDeclaration` | não | `node2, root` |
| [evaluation:430293-430300](../../../../../../reference/runtime/sand-eval-runner.cjs#L430293-L430300) | `FunctionDeclaration` | não | `node2, root` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639679-639686](../../../../../../reference/runtime/host-main.cjs#L639679-L639686) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:430293-430300](../../../../../../reference/runtime/sand-eval-runner.cjs#L430293-L430300) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:639679

Chamadas escritas diretamente neste corpo: `node2.children.values`, `subtreeCost`.

Alvos de atribuição ou incremento: `cost`.

SHA-256 do trecho: `93a51a999e0038b1bcbcbbccc656a2efb872deff107ac6bbaaa00490c0862128`.

### evaluation:430293

Chamadas escritas diretamente neste corpo: `node2.children.values`, `subtreeCost`.

Alvos de atribuição ou incremento: `cost`.

SHA-256 do trecho: `93a51a999e0038b1bcbcbbccc656a2efb872deff107ac6bbaaa00490c0862128`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
