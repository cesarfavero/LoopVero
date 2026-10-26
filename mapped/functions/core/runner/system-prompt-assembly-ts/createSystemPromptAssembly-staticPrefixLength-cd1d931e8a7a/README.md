# `createSystemPromptAssembly/staticPrefixLength`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/system-prompt-assembly.ts` · [README do módulo](../../../../../modules/core/runner/system-prompt-assembly-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:553760-553763](../../../../../../reference/runtime/sand-eval-runner.cjs#L553760-L553763) | `ArrowFunctionExpression` | não | `systemText` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:553760-553763](../../../../../../reference/runtime/sand-eval-runner.cjs#L553760-L553763) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:553760

Chamadas escritas diretamente neste corpo: `.map`, `Math.max`, `recentStaticPrefixes.filter`.

SHA-256 do trecho: `bb45f2f02c9c8ed30701c7c21666ef3b3f3923493894bf708fd4f77fc313937e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
