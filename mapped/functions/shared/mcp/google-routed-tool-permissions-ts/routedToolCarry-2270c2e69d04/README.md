# `routedToolCarry`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/google-routed-tool-permissions.ts` · [README do módulo](../../../../../modules/shared/mcp/google-routed-tool-permissions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:687138-687142](../../../../../../reference/runtime/host-main.cjs#L687138-L687142) | `FunctionDeclaration` | não | `args` |
| [evaluation:579273-579277](../../../../../../reference/runtime/sand-eval-runner.cjs#L579273-L579277) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:687138-687142](../../../../../../reference/runtime/host-main.cjs#L687138-L687142) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:579273-579277](../../../../../../reference/runtime/sand-eval-runner.cjs#L579273-L579277) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:687138

Chamadas escritas diretamente neste corpo: `carry.rows.includes`, `found.connector.tools.get`, `rowConnector`.

SHA-256 do trecho: `5c3c4bae037d5d302ac6208aa080f6444ca54029b2e4e58ba6f8cb81a5bbc65c`.

### evaluation:579273

Chamadas escritas diretamente neste corpo: `carry.rows.includes`, `found.connector.tools.get`, `rowConnector`.

SHA-256 do trecho: `5c3c4bae037d5d302ac6208aa080f6444ca54029b2e4e58ba6f8cb81a5bbc65c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
