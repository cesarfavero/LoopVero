# `isInputAndMaxTokensExceedContextLimitMessage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/inference/README.md).

**Módulo:** `chat-inference/token-limit-error-classification.js` · [README do módulo](../../../../modules/chat-inference/token-limit-error-classification-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:294583-294585](../../../../../reference/runtime/sand-eval-runner.cjs#L294583-L294585) | `FunctionDeclaration` | não | `lowerMessage` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:294583-294585](../../../../../reference/runtime/sand-eval-runner.cjs#L294583-L294585) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:294583

Chamadas escritas diretamente neste corpo: `includesAll`.

SHA-256 do trecho: `d4df547f011af3da8b161192a62bf91d8fd49b3068cd588f4c1a1ac1e6763648`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
