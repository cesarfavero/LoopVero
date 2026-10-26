# `narrowToAcceptedParameters`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/frozen-prompts/fit-frozen-tool.ts` · [README do módulo](../../../../../modules/core/frozen-prompts/fit-frozen-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:553834-553874](../../../../../../reference/runtime/sand-eval-runner.cjs#L553834-L553874) | `FunctionDeclaration` | não | `{   schema: schema3,   accepting,   adjustments,   acceptorLabel = "the live tool" }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:553834-553874](../../../../../../reference/runtime/sand-eval-runner.cjs#L553834-L553874) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:553834

Chamadas escritas diretamente neste corpo: `.flatMap`, `Object.entries`, `Object.fromEntries`, `objectSchema.safeParse`, `required2.filter`.

SHA-256 do trecho: `f495722de0f8686c21c769aed0d27aef5b86315d777bb497193054987cdb93c8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
