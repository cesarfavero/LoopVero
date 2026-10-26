# `isSendMessage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/gmail-draft-send-guard.ts` · [README do módulo](../../../../../modules/core/mcp/gmail-draft-send-guard-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:584393-584396](../../../../../../reference/runtime/sand-eval-runner.cjs#L584393-L584396) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584393-584396](../../../../../../reference/runtime/sand-eval-runner.cjs#L584393-L584396) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:584393

Chamadas escritas diretamente neste corpo: `args.name.endsWith`.

SHA-256 do trecho: `78168fcd0abb0dbbd906f2a56fd3158ebd481080e9797bdeb60a59fc076d6ed4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
