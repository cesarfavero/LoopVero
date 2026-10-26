# `createSandInferenceInterceptor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/inference/README.md).

**Módulo:** `shared/node/cursor-backend/cursor-inference.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/cursor-inference-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225107-225146](../../../../../../../reference/runtime/host-main.cjs#L225107-L225146) | `FunctionDeclaration` | não | `options2` |
| [evaluation:512170-512209](../../../../../../../reference/runtime/sand-eval-runner.cjs#L512170-L512209) | `FunctionDeclaration` | não | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225107-225146](../../../../../../../reference/runtime/host-main.cjs#L225107-L225146) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:512170-512209](../../../../../../../reference/runtime/sand-eval-runner.cjs#L512170-L512209) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:225107

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `8f145093dffa32fddcf54af114727a65c1cece0ef5ebe4ae9cd0907f068ca0cd`.

### evaluation:512170

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `a68f6ffcfd67064c3f6fea944f196bf9b89e86a3cac94bd93086976d0bb16dd2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
