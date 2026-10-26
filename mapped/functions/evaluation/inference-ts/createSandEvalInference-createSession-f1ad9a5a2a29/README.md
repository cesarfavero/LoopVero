# `createSandEvalInference/createSession`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/inference/README.md).

**Módulo:** `evaluation/inference.ts` · [README do módulo](../../../../modules/evaluation/inference-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:597560-597575](../../../../../reference/runtime/sand-eval-runner.cjs#L597560-L597575) | `ArrowFunctionExpression` | não | `onRequestId, sessionOptions` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:597560-597575](../../../../../reference/runtime/sand-eval-runner.cjs#L597560-L597575) | 3 | 0 | 0 | 1 | 0 | 0 |

### evaluation:597560

Chamadas escritas diretamente neste corpo: `createCursorInferencePromptSession`, `createSandRequestedModelFromSelection`, `createSandSubagentRequestedModel`.

SHA-256 do trecho: `f9ee522741542bb86a2776a23e211cc504e6461a858b9c258d501a3c71c8f5a5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
