# `extraFieldVaultKindProblem`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/user-form-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:726193-726218](../../../../../../../reference/runtime/host-main.cjs#L726193-L726218) | `FunctionDeclaration` | não | `field` |
| [evaluation:560811-560836](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560811-L560836) | `FunctionDeclaration` | não | `field` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726193-726218](../../../../../../../reference/runtime/host-main.cjs#L726193-L726218) | 8 | 0 | 0 | 9 | 0 | 0 |
| [evaluation:560811-560836](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560811-L560836) | 8 | 0 | 0 | 9 | 0 | 0 |

### host:726193

Chamadas escritas diretamente neste corpo: `CARD_CONTEXT_FIELD_PATTERN.test`, `EXTRA_ADDRESS_PATTERN.test`, `EXTRA_BARE_ADDRESS_LABEL_PATTERN.test`, `EXTRA_CARD_DETAIL_PATTERN.test`, `EXTRA_CARD_WORD_PATTERN.test`, `EXTRA_CODE_PATTERN.test`, `EXTRA_EMAIL_PATTERN.test`, `EXTRA_NAME_PATTERN.test`, `EXTRA_NON_SIGN_IN_SECRET_PATTERN.test`, `EXTRA_PHONE_PATTERN.test`, `EXTRA_SIGN_IN_PATTERN.test`, `EXTRA_USERNAME_PATTERN.test`, `JSON.stringify`, `fieldSniffText`, `userFormFieldLooksLikeCardCredential`.

SHA-256 do trecho: `ebfc8e9b463ef21dec223e1282f5376b0c181236bd48f43e07e65c77abe7da9d`.

### evaluation:560811

Chamadas escritas diretamente neste corpo: `CARD_CONTEXT_FIELD_PATTERN.test`, `EXTRA_ADDRESS_PATTERN.test`, `EXTRA_BARE_ADDRESS_LABEL_PATTERN.test`, `EXTRA_CARD_DETAIL_PATTERN.test`, `EXTRA_CARD_WORD_PATTERN.test`, `EXTRA_CODE_PATTERN.test`, `EXTRA_EMAIL_PATTERN.test`, `EXTRA_NAME_PATTERN.test`, `EXTRA_NON_SIGN_IN_SECRET_PATTERN.test`, `EXTRA_PHONE_PATTERN.test`, `EXTRA_SIGN_IN_PATTERN.test`, `EXTRA_USERNAME_PATTERN.test`, `JSON.stringify`, `fieldSniffText`, `userFormFieldLooksLikeCardCredential`.

SHA-256 do trecho: `ebfc8e9b463ef21dec223e1282f5376b0c181236bd48f43e07e65c77abe7da9d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
