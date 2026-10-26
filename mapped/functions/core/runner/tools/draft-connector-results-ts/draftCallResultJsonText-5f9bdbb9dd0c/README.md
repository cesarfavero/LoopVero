# `draftCallResultJsonText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-connector-results.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-connector-results-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:732669-732680](../../../../../../../reference/runtime/host-main.cjs#L732669-L732680) | `FunctionDeclaration` | não | `result` |
| [evaluation:540191-540202](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540191-L540202) | `FunctionDeclaration` | não | `result` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732669-732680](../../../../../../../reference/runtime/host-main.cjs#L732669-L732680) | 4 | 1 | 0 | 4 | 0 | 0 |
| [evaluation:540191-540202](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540191-L540202) | 4 | 1 | 0 | 4 | 0 | 0 |

### host:732669

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `draftCallResultText`, `item.content.value.text.trim`, `parseDraftConnectorJson`, `structured.toJson`.

SHA-256 do trecho: `d146b4cfa193062c4034986f8f171a525ce9b7795b4e7bba3727a103fe2da3a7`.

### evaluation:540191

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `draftCallResultText`, `item.content.value.text.trim`, `parseDraftConnectorJson`, `structured.toJson`.

SHA-256 do trecho: `d146b4cfa193062c4034986f8f171a525ce9b7795b4e7bba3727a103fe2da3a7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
