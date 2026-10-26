# `confineLineBreaks`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/spotlight/sand-spotlight.ts` · [README do módulo](../../../../../modules/shared/spotlight/sand-spotlight-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:761620-761626](../../../../../../reference/runtime/host-main.cjs#L761620-L761626) | `FunctionDeclaration` | não | `text3` |
| [evaluation:552435-552441](../../../../../../reference/runtime/sand-eval-runner.cjs#L552435-L552441) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761620-761626](../../../../../../reference/runtime/host-main.cjs#L761620-L761626) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:552435-552441](../../../../../../reference/runtime/sand-eval-runner.cjs#L552435-L552441) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:761620

Chamadas escritas diretamente neste corpo: `text3.replace`.

SHA-256 do trecho: `71136d3bef303d681b088bd2f3087aeb44e50c182fcda320c177eb808eb0daa4`.

### evaluation:552435

Chamadas escritas diretamente neste corpo: `text3.replace`.

SHA-256 do trecho: `71136d3bef303d681b088bd2f3087aeb44e50c182fcda320c177eb808eb0daa4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
