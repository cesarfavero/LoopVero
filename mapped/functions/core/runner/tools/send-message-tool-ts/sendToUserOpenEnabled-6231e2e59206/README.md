# `sendToUserOpenEnabled`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-message-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:761162-761167](../../../../../../../reference/runtime/host-main.cjs#L761162-L761167) | `FunctionDeclaration` | não | `deps` |
| [evaluation:551977-551982](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551977-L551982) | `FunctionDeclaration` | não | `deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761162-761167](../../../../../../../reference/runtime/host-main.cjs#L761162-L761167) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:551977-551982](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551977-L551982) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:761162

Chamadas escritas diretamente neste corpo: `deps.sandUiMap`, `deps.sandUiOpen`, `sandUiOpenUnlocked`.

SHA-256 do trecho: `ba87ebf4b5e422b9f4e0635a77796380d255eb4896374c10f0d5c71bbb434ad9`.

### evaluation:551977

Chamadas escritas diretamente neste corpo: `deps.sandUiMap`, `deps.sandUiOpen`, `sandUiOpenUnlocked`.

SHA-256 do trecho: `ba87ebf4b5e422b9f4e0635a77796380d255eb4896374c10f0d5c71bbb434ad9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
