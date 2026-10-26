# `isOffRecordMessageId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/sand-prompt-markers.ts` · [README do módulo](../../../../../modules/core/runner/sand-prompt-markers-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:491173-491175](../../../../../../reference/runtime/host-main.cjs#L491173-L491175) | `FunctionDeclaration` | não | `messageId` |
| [evaluation:526092-526094](../../../../../../reference/runtime/sand-eval-runner.cjs#L526092-L526094) | `FunctionDeclaration` | não | `messageId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491173-491175](../../../../../../reference/runtime/host-main.cjs#L491173-L491175) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:526092-526094](../../../../../../reference/runtime/sand-eval-runner.cjs#L526092-L526094) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:491173

Chamadas escritas diretamente neste corpo: `messageId.startsWith`.

SHA-256 do trecho: `1971e87dc52208770dd728546e5a12c7b19ccfc17f67cee68289f5ef64813ee1`.

### evaluation:526092

Chamadas escritas diretamente neste corpo: `messageId.startsWith`.

SHA-256 do trecho: `1971e87dc52208770dd728546e5a12c7b19ccfc17f67cee68289f5ef64813ee1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
