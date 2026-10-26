# `userFormFieldHasCompactCardAlias`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/user-form-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:726153-726158](../../../../../../../reference/runtime/host-main.cjs#L726153-L726158) | `FunctionDeclaration` | não | `field, siblings` |
| [evaluation:560771-560776](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560771-L560776) | `FunctionDeclaration` | não | `field, siblings` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726153-726158](../../../../../../../reference/runtime/host-main.cjs#L726153-L726158) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:560771-560776](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560771-L560776) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:726153

Chamadas escritas diretamente neste corpo: `aliases.some`, `compactFieldAliases`, `siblings.some`.

SHA-256 do trecho: `b422f15d8716b4090c167d90f63f44ac7390e3af9722fb48f04b7ce9a394ae10`.

### evaluation:560771

Chamadas escritas diretamente neste corpo: `aliases.some`, `compactFieldAliases`, `siblings.some`.

SHA-256 do trecho: `b422f15d8716b4090c167d90f63f44ac7390e3af9722fb48f04b7ce9a394ae10`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
