# `createSandSubagentRequestedModel`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/inference/README.md).

**Módulo:** `core/runner/cursor-inference-session.ts` · [README do módulo](../../../../../modules/core/runner/cursor-inference-session-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:597512-597514](../../../../../../reference/runtime/sand-eval-runner.cjs#L597512-L597514) | `FunctionDeclaration` | não | `modelId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:597512-597514](../../../../../../reference/runtime/sand-eval-runner.cjs#L597512-L597514) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:597512

Chamadas escritas diretamente neste corpo: `new RequestedModel`.

SHA-256 do trecho: `d497cce8eeb456d1f6958aadc58bddc517c9778b00f9ef055c6eb3062fa2849d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
