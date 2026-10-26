# `gmailIdKindOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/gmail-id-not-found.ts` · [README do módulo](../../../../../modules/core/mcp/gmail-id-not-found-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:584487-584492](../../../../../../reference/runtime/sand-eval-runner.cjs#L584487-L584492) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584487-584492](../../../../../../reference/runtime/sand-eval-runner.cjs#L584487-L584492) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:584487

Chamadas escritas diretamente neste corpo: `TOOL_ID_KINDS.get`, `id.value.trim`, `toolNameOf`.

SHA-256 do trecho: `d4e6b659a86f3b96b825db9f0b02315c307c8aa3d0c06a1a8be3ab51dda28cca`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
