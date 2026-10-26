# `stampCallerTurnRootRequestId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/background-work/run-attribute-stamps.ts` · [README do módulo](../../../../../../modules/core/runner/background-work/run-attribute-stamps-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:490770-490779](../../../../../../../reference/runtime/sand-eval-runner.cjs#L490770-L490779) | `FunctionDeclaration` | não | `span, inferenceRequestId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:490770-490779](../../../../../../../reference/runtime/sand-eval-runner.cjs#L490770-L490779) | 0 | 0 | 0 | 0 | 0 | 1 |

### evaluation:490770

Chamadas escritas diretamente neste corpo: `errorLogTag`, `process.stderr.write`, `span.setAttribute`.

SHA-256 do trecho: `737f49c8785a0b131696ab449d1b48b2ebe46076de36a0cc747c69e77cfcb8f5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
