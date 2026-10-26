# `classifyTokenLimitErrorFromMessage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/inference/README.md).

**Módulo:** `chat-inference/token-limit-error-classification.js` · [README do módulo](../../../../modules/chat-inference/token-limit-error-classification-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:294616-294624](../../../../../reference/runtime/sand-eval-runner.cjs#L294616-L294624) | `FunctionDeclaration` | não | `errorMessage4` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:294616-294624](../../../../../reference/runtime/sand-eval-runner.cjs#L294616-L294624) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:294616

Chamadas escritas diretamente neste corpo: `.includes`, `errorMessage4.toLowerCase`, `isInputTokenLimitErrorMessage`, `isOutputTokenLimitErrorMessage`, `new InputTokenLimitError`, `new OutputTokensLimitExceededError`.

SHA-256 do trecho: `f34d8596e304a421ceca95110b54dc581e70b00ae9e0e0591f8d79dc9290c6cb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
