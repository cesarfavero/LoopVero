# `assistantTextOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/model-visible-path-middleware.ts` · [README do módulo](../../../../../modules/core/runner/model-visible-path-middleware-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:586782-586789](../../../../../../reference/runtime/sand-eval-runner.cjs#L586782-L586789) | `FunctionDeclaration` | não | `content` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586782-586789](../../../../../../reference/runtime/sand-eval-runner.cjs#L586782-L586789) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:586782

Chamadas escritas diretamente neste corpo: `content.flatMap`.

SHA-256 do trecho: `0e2ed309a294f45fa54f75372253ff6a3e9d7f578445f16043b8188cffdbef22`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
