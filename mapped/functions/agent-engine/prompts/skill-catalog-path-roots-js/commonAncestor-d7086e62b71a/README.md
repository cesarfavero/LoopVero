# `commonAncestor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/skill-catalog-path-roots.js` · [README do módulo](../../../../../modules/agent-engine/prompts/skill-catalog-path-roots-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:639698-639709](../../../../../../reference/runtime/host-main.cjs#L639698-L639709) | `FunctionDeclaration` | não | `first, second` |
| [evaluation:430312-430323](../../../../../../reference/runtime/sand-eval-runner.cjs#L430312-L430323) | `FunctionDeclaration` | não | `first, second` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639698-639709](../../../../../../reference/runtime/host-main.cjs#L639698-L639709) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:430312-430323](../../../../../../reference/runtime/sand-eval-runner.cjs#L430312-L430323) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:639698

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

Alvos de atribuição ou incremento: `a`, `b2`.

SHA-256 do trecho: `113a97af4c6998bd9791cbf95832189e4f4bf2f63a56dc39545ed7d4a344c6e3`.

### evaluation:430312

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

Alvos de atribuição ou incremento: `a`, `b2`.

SHA-256 do trecho: `113a97af4c6998bd9791cbf95832189e4f4bf2f63a56dc39545ed7d4a344c6e3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
