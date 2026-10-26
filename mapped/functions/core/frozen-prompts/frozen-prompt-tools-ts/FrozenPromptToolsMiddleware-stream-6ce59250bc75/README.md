# `FrozenPromptToolsMiddleware.stream`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/frozen-prompts/frozen-prompt-tools.ts` · [README do módulo](../../../../../modules/core/frozen-prompts/frozen-prompt-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:586280-586302](../../../../../../reference/runtime/sand-eval-runner.cjs#L586280-L586302) | `method` | não | `ctx, invocationId, tools, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586280-586302](../../../../../../reference/runtime/sand-eval-runner.cjs#L586280-L586302) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:586280

Chamadas escritas diretamente neste corpo: `.map`, `bound.map`, `new Map`, `this.binding`, `this.innerExecutor.stream`, `tools.filter`.

SHA-256 do trecho: `b9e14e959defd577565d7093fc774338f690427be72a4067b68aa5a5ca7e8d9e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
