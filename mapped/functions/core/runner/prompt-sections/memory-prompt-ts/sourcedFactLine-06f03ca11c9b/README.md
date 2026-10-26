# `sourcedFactLine`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/prompt-sections/memory-prompt.ts` · [README do módulo](../../../../../../modules/core/runner/prompt-sections/memory-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:537696-537700](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537696-L537700) | `FunctionDeclaration` | não | `memory` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:537696-537700](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537696-L537700) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:537696

Chamadas escritas diretamente neste corpo: `agentMemorySourceTag`, `factLine`, `formatMemoryDate`.

SHA-256 do trecho: `4a385c27e37ba2ea7fb74228d69438081fe95f78d0781cf161274869669f605e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
