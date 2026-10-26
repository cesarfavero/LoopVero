# `inferenceHookFailureOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/inference/README.md).

**Módulo:** `shared/agents/inference-hook-failure.ts` · [README do módulo](../../../../../modules/shared/agents/inference-hook-failure-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:736065-736069](../../../../../../reference/runtime/host-main.cjs#L736065-L736069) | `FunctionDeclaration` | não | `errorDetails` |
| [evaluation:589581-589585](../../../../../../reference/runtime/sand-eval-runner.cjs#L589581-L589585) | `FunctionDeclaration` | não | `errorDetails` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736065-736069](../../../../../../reference/runtime/host-main.cjs#L736065-L736069) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:589581-589585](../../../../../../reference/runtime/sand-eval-runner.cjs#L589581-L589585) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:736065

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `04ddecdb7d665ee6be1b986446cc1cc4630dc1fabfb496961f8a4358f2901f75`.

### evaluation:589581

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `04ddecdb7d665ee6be1b986446cc1cc4630dc1fabfb496961f8a4358f2901f75`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
