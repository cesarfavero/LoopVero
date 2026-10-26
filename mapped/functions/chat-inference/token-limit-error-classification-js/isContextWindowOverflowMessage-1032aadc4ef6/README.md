# `isContextWindowOverflowMessage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/inference/README.md).

**Módulo:** `chat-inference/token-limit-error-classification.js` · [README do módulo](../../../../modules/chat-inference/token-limit-error-classification-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:294567-294569](../../../../../reference/runtime/sand-eval-runner.cjs#L294567-L294569) | `FunctionDeclaration` | não | `lowerMessage` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:294567-294569](../../../../../reference/runtime/sand-eval-runner.cjs#L294567-L294569) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:294567

Chamadas escritas diretamente neste corpo: `includesAll`.

SHA-256 do trecho: `382109423cc7de662b953ea9c412b59ac2f61ff45dd416a52d50eb8bf593bfab`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
