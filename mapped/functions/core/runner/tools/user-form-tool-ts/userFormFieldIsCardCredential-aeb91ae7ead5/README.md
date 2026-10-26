# `userFormFieldIsCardCredential`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/user-form-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:726159-726162](../../../../../../../reference/runtime/host-main.cjs#L726159-L726162) | `FunctionDeclaration` | não | `field` |
| [evaluation:560777-560780](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560777-L560780) | `FunctionDeclaration` | não | `field` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726159-726162](../../../../../../../reference/runtime/host-main.cjs#L726159-L726162) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:560777-560780](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560777-L560780) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:726159

Chamadas escritas diretamente neste corpo: `CARD_MASKABLE_TYPES.has`, `userFormFieldLooksLikeCardCredential`.

SHA-256 do trecho: `cfc155ae5dfa1197cbef1923333b031265bfa5b94bdac92a855c9aeac9e56c39`.

### evaluation:560777

Chamadas escritas diretamente neste corpo: `CARD_MASKABLE_TYPES.has`, `userFormFieldLooksLikeCardCredential`.

SHA-256 do trecho: `cfc155ae5dfa1197cbef1923333b031265bfa5b94bdac92a855c9aeac9e56c39`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
