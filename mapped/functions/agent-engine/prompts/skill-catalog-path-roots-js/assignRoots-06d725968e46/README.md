# `assignRoots`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/skill-catalog-path-roots.js` · [README do módulo](../../../../../modules/agent-engine/prompts/skill-catalog-path-roots-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:639687-639697](../../../../../../reference/runtime/host-main.cjs#L639687-L639697) | `FunctionDeclaration` | não | `node2, root, rootByIndex` |
| [evaluation:430301-430311](../../../../../../reference/runtime/sand-eval-runner.cjs#L430301-L430311) | `FunctionDeclaration` | não | `node2, root, rootByIndex` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639687-639697](../../../../../../reference/runtime/host-main.cjs#L639687-L639697) | 2 | 2 | 0 | 0 | 0 | 0 |
| [evaluation:430301-430311](../../../../../../reference/runtime/sand-eval-runner.cjs#L430301-L430311) | 2 | 2 | 0 | 0 | 0 | 0 |

### host:639687

Chamadas escritas diretamente neste corpo: `assignRoots`, `keepRootCost`, `node2.children.values`, `openRootCost`, `rootByIndex.set`.

SHA-256 do trecho: `f825670c9633f2c2066bb3c38cca798ea41b9375619f2d4730553a9f505458dc`.

### evaluation:430301

Chamadas escritas diretamente neste corpo: `assignRoots`, `keepRootCost`, `node2.children.values`, `openRootCost`, `rootByIndex.set`.

SHA-256 do trecho: `f825670c9633f2c2066bb3c38cca798ea41b9375619f2d4730553a9f505458dc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
