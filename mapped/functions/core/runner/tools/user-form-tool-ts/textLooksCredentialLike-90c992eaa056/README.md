# `textLooksCredentialLike`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/user-form-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:726225-726228](../../../../../../../reference/runtime/host-main.cjs#L726225-L726228) | `FunctionDeclaration` | não | `text3` |
| [evaluation:560843-560846](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560843-L560846) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726225-726228](../../../../../../../reference/runtime/host-main.cjs#L726225-L726228) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:560843-560846](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560843-L560846) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:726225

Chamadas escritas diretamente neste corpo: `BARE_CODE_FIELD_PATTERN.test`, `CREDENTIAL_LIKE_FIELD_PATTERN.test`, `NON_SECRET_CODE_QUALIFIER_PATTERN.test`.

SHA-256 do trecho: `ab7c7805d98e4fe2f9f6833830b790db1a648a2d11372c0d2da3c3c63ffe6363`.

### evaluation:560843

Chamadas escritas diretamente neste corpo: `BARE_CODE_FIELD_PATTERN.test`, `CREDENTIAL_LIKE_FIELD_PATTERN.test`, `NON_SECRET_CODE_QUALIFIER_PATTERN.test`.

SHA-256 do trecho: `ab7c7805d98e4fe2f9f6833830b790db1a648a2d11372c0d2da3c3c63ffe6363`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
