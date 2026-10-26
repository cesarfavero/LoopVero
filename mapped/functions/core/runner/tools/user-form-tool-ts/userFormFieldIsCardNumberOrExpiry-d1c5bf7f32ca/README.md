# `userFormFieldIsCardNumberOrExpiry`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/user-form-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:726150-726152](../../../../../../../reference/runtime/host-main.cjs#L726150-L726152) | `FunctionDeclaration` | não | `field` |
| [evaluation:560768-560770](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560768-L560770) | `FunctionDeclaration` | não | `field` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726150-726152](../../../../../../../reference/runtime/host-main.cjs#L726150-L726152) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:560768-560770](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560768-L560770) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:726150

Chamadas escritas diretamente neste corpo: `.some`, `CARD_EXPIRY_ARM.test`, `CARD_NON_CREDENTIAL_FIELD_PATTERN.test`, `compactFieldAliases`, `fieldSniffText`, `userFormFieldLooksLikeCardCredential`.

SHA-256 do trecho: `e7e9211cca47df1eed1f4e66a13b5d0c983bc6447dc75c6f5f945f1f51069d7f`.

### evaluation:560768

Chamadas escritas diretamente neste corpo: `.some`, `CARD_EXPIRY_ARM.test`, `CARD_NON_CREDENTIAL_FIELD_PATTERN.test`, `compactFieldAliases`, `fieldSniffText`, `userFormFieldLooksLikeCardCredential`.

SHA-256 do trecho: `e7e9211cca47df1eed1f4e66a13b5d0c983bc6447dc75c6f5f945f1f51069d7f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
