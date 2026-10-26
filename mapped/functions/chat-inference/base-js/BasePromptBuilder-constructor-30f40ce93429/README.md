# `BasePromptBuilder.constructor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/inference/README.md).

**Módulo:** `chat-inference/base.js` · [README do módulo](../../../../modules/chat-inference/base-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:285986-285995](../../../../../reference/runtime/sand-eval-runner.cjs#L285986-L285995) | `method` | não | `initialMessages` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:285986-285995](../../../../../reference/runtime/sand-eval-runner.cjs#L285986-L285995) | 2 | 0 | 0 | 0 | 0 | 0 |

### evaluation:285986

Chamadas escritas diretamente neste corpo: `Array.isArray`.

Alvos de atribuição ou incremento: `this.messages`.

SHA-256 do trecho: `36cf7ce705dfd090eb60b21d9aa8437975d5d8203adf4e0cb36c87514ade57d8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
