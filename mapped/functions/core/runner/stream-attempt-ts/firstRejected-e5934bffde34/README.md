# `firstRejected`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/stream-attempt.ts` · [README do módulo](../../../../../modules/core/runner/stream-attempt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:590188-590190](../../../../../../reference/runtime/sand-eval-runner.cjs#L590188-L590190) | `FunctionDeclaration` | não | `results` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590188-590190](../../../../../../reference/runtime/sand-eval-runner.cjs#L590188-L590190) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:590188

Chamadas escritas diretamente neste corpo: `results.find`.

SHA-256 do trecho: `272652788834544082542bd7f7b8d089e88db368672f9e71152c4740ed30b96c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
