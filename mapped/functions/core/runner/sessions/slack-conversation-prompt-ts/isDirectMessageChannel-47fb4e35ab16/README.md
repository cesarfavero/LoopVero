# `isDirectMessageChannel`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/sessions/slack-conversation-prompt.ts` · [README do módulo](../../../../../../modules/core/runner/sessions/slack-conversation-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:538258-538260](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538258-L538260) | `FunctionDeclaration` | não | `channel` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538258-538260](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538258-L538260) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:538258

Chamadas escritas diretamente neste corpo: `channel.startsWith`.

SHA-256 do trecho: `1cf5da543e3dd5e8c605dcfd3e7519c32fb7e22559502be682abc3c601f41838`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
