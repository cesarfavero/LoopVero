# `isOutputTokenLimitErrorMessage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/inference/README.md).

**Módulo:** `chat-inference/token-limit-error-classification.js` · [README do módulo](../../../../modules/chat-inference/token-limit-error-classification-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:294612-294614](../../../../../reference/runtime/sand-eval-runner.cjs#L294612-L294614) | `FunctionDeclaration` | não | `errorMessage4` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:294612-294614](../../../../../reference/runtime/sand-eval-runner.cjs#L294612-L294614) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:294612

Chamadas escritas diretamente neste corpo: `.includes`, `errorMessage4.toLowerCase`.

SHA-256 do trecho: `39c02cbc96e9244a4ab848dd09a5f6dae3874628ccf71e0319079d10dac2b90d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
