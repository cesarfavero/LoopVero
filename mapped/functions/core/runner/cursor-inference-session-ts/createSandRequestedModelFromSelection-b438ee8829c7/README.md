# `createSandRequestedModelFromSelection`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/inference/README.md).

**Módulo:** `core/runner/cursor-inference-session.ts` · [README do módulo](../../../../../modules/core/runner/cursor-inference-session-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:597500-597511](../../../../../../reference/runtime/sand-eval-runner.cjs#L597500-L597511) | `FunctionDeclaration` | não | `selection` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:597500-597511](../../../../../../reference/runtime/sand-eval-runner.cjs#L597500-L597511) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:597500

Chamadas escritas diretamente neste corpo: `new RequestedModel`, `selection.parameters.map`.

SHA-256 do trecho: `8717298bb945f9d21c11ee8fe9620135dac53c7ec82ab662f58cb2b4f1df4655`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
