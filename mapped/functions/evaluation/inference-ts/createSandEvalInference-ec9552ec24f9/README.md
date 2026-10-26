# `createSandEvalInference`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/inference/README.md).

**Módulo:** `evaluation/inference.ts` · [README do módulo](../../../../modules/evaluation/inference-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:597549-597577](../../../../../reference/runtime/sand-eval-runner.cjs#L597549-L597577) | `FunctionDeclaration` | não | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:597549-597577](../../../../../reference/runtime/sand-eval-runner.cjs#L597549-L597577) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:597549

Chamadas escritas diretamente neste corpo: `createSandAttachedMediaUrlProvider`.

SHA-256 do trecho: `3f3b6b644ce2826b7adc028cdb55028c99c58aaea652b1f4c3c76c03953b10e3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
