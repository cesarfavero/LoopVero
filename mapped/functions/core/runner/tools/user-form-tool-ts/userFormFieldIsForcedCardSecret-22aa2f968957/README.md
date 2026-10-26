# `userFormFieldIsForcedCardSecret`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/user-form-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:726167-726172](../../../../../../../reference/runtime/host-main.cjs#L726167-L726172) | `FunctionDeclaration` | não | `field, siblings` |
| [evaluation:560785-560790](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560785-L560790) | `FunctionDeclaration` | não | `field, siblings` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726167-726172](../../../../../../../reference/runtime/host-main.cjs#L726167-L726172) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:560785-560790](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560785-L560790) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:726167

Chamadas escritas diretamente neste corpo: `CARD_CONTEXT_FIELD_PATTERN.test`, `CARD_MASKABLE_TYPES.has`, `CARD_NON_CREDENTIAL_FIELD_PATTERN.test`, `fieldSniffText`, `siblings.some`, `userFormFieldIsCardCredential`.

SHA-256 do trecho: `1be4a7048bc37a350c41df67dc790b34a5367afab26e4a52d40659a01f3a52c1`.

### evaluation:560785

Chamadas escritas diretamente neste corpo: `CARD_CONTEXT_FIELD_PATTERN.test`, `CARD_MASKABLE_TYPES.has`, `CARD_NON_CREDENTIAL_FIELD_PATTERN.test`, `fieldSniffText`, `siblings.some`, `userFormFieldIsCardCredential`.

SHA-256 do trecho: `1be4a7048bc37a350c41df67dc790b34a5367afab26e4a52d40659a01f3a52c1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
